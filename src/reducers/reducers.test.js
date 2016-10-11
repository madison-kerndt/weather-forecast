import WeatherApp from './WeatherApp';

describe('WeatherApp', () => {

  it('should return the initial state', () => {
    expect(WeatherApp(undefined, {})).toEqual(
       {"pinnedCities":[],
       "currentCity": '',
       "extendedForecast": '',
       "pinnedWeather": []
     }
    );
  });
});
