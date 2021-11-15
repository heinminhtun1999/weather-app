import * as constants from "./constants";

const { CHANGE_SEARCH_FIELD,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
  REVERSE_GEOCODE_PENDING,
  REVERSE_GEOCODE_SUCCESS,
  REVERSE_GEOCODE_FAILED } = constants;

// SEARCH CITIES FROM SEARCH INPUT

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

// REVERSE GEOCODING

export const reverseGeocode = (lat, lon, api) => (dispatch) => {
  dispatch({ type: REVERSE_GEOCODE_PENDING })
  fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${api}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: REVERSE_GEOCODE_SUCCESS, payload: data[0].name })
    })
    .catch(err => dispatch({ type: REVERSE_GEOCODE_FAILED, payload: err }))
}

// FETCH WEATHER 

const convertTimeZone = (timestamp, timeZone) => {
  const formattedTime = new Date(timestamp * 1000).toLocaleString("en-US", { timeZone: timeZone, weekday: "short", hourCycle: "h12", hour: "numeric", minute: "numeric" }).split(" ");
  const date = formattedTime[0];
  const time = formattedTime[1] + " " + formattedTime[2];
  const timeNoMinute = formattedTime[1].split(":")[0] + " " + formattedTime[2];
  return { date, time, timeNoMinute }
}

export const fetchWeather = (args) => (dispatch) => {
  const { lat, lon, units, api } = args;  

  dispatch({ type: FETCH_WEATHER_PENDING });
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`)
    .then(res => res.json())
    .then(weathers => {
      console.log(weathers);
      const current = weathers.current;
      const daily = weathers.daily;
      const hourly = weathers.hourly;
      const timeZone = weathers.timezone;
      const currentWeather = {
        clouds: current.clouds,
        date: convertTimeZone(current.dt, timeZone).date,
        time: new Date(current.dt * 1000).toLocaleString("en-US", { timeZone: timeZone, hourCycle: "h23", hour: "numeric" }),
        feels_like: current.feels_like,
        humidity: current.humidity + "%",
        dew_point: current.dew_point,
        pressure: current.pressure,
        sunrise: convertTimeZone(current.sunrise, timeZone).time,
        sunset: convertTimeZone(current.sunset, timeZone).time,
        temp: current.temp,
        uv: current.uvi,
        visibility: current.visibility,
        weather: {
          id: current.weather[0].id,
          main: current.weather[0].main,
          desc: current.weather[0].description.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase()),
          icon: current.weather[0].icon
        },
        wind: {
          wind_deg: current.wind_deg,
          wind_gust: current.wind_gust,
          wind_speed: current.wind_speed
        },
        timeZone
      }

      const dailyWeather = daily.map(data => {
        return {
          clouds: data.clouds,
          date: convertTimeZone(data.dt, timeZone).date,
          feels_like: {
            day: data.feels_like.day,
            night: data.feels_like.night,
            eve: data.feels_like.eve,
            morn: data.feels_like.morn,
          },
          humidity: data.humidity + "%",
          pressure: data.pressure,
          sunrise: convertTimeZone(data.sunrise, timeZone).time,
          sunset: convertTimeZone(data.sunset, timeZone).time,
          temp: {
            min: data.temp.min,
            max: data.temp.max
          },
          uv: data.uv,
          weather: {
            id: data.weather[0].id,
            main: data.weather[0].main,
            desc: data.weather[0].description,
            icon: data.weather[0].icon
          },
          wind: {
            wind_deg: data.wind_deg,
            wind_gust: data.wind_gust,
            wind_speed: data.wind_speed
          },
        }
      })
      const hourlyWeather = hourly.map(data => {
        return {
          clouds: data.clouds,
          time: convertTimeZone(data.dt, timeZone).timeNoMinute,
          feels_like: data.feels_like,
          humidity: data.humidity + "%",
          pressure: data.pressure,
          temp: data.temp,
          visibility: data.visibility,
          weather: {
            id: data.weather[0].id,
            main: data.weather[0].main,
            desc: data.weather[0].description,
            icon: data.weather[0].icon
          },
          wind: {
            wind_deg: data.wind_deg,
            wind_gust: data.wind_gust,
            wind_speed: data.wind_speed
          },
        }
      })

      // const alerts = {
      //   event: weathers.alerts[0].event,
      //   start: convertTimeZone(weathers.alerts[0].start, timeZone),
      //   end: convertTimeZone(weathers.alerts[0].end, timeZone),
      //   desc: weathers.alerts[0].description
      // }

      const payload = {
        currentWeather,
        dailyWeather,
        hourlyWeather,
        // alerts
      }
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: payload })
    })
    .catch(err => dispatch({ type: FETCH_WEATHER_FAILED, payload: err }))
}