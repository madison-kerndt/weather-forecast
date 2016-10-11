import WeatherApp from './WeatherApp';

describe('WeatherApp', () => {

  it('should return the initial state', () => {
    expect(WeatherApp(undefined, {})).toEqual(
       {"pinnedCities":[
         {'zip':80202,'city':'Denver'} , {'zip':80305,'city':'Boulder'}
       ],
       "currentCity": '',
       "extendedForecast": '',
       "pinnedWeather": []
     }
    );
  });
});
