import { localWeather, extendedForecast, pinNewCity, CURRENT_WEATHER, EXTENDED_FORECAST, ADD_PINNEDCITY  } from './index';


describe('actions', () => {
   it('should create an action that identifies local weather', () => {
     const weather = 'Rain';
     const expectedAction = {
       type: 'CURRENT_WEATHER',
       weather
     };
     expect(localWeather(weather)).toEqual(expectedAction);
   });


   it('should create an action that identifies an exteneded forecast', () => {
     const weather = 'Rain';
     const expectedAction = {
       type: 'EXTENDED_FORECAST',
       weather
     };
     expect(extendedForecast(weather)).toEqual(expectedAction);
   });

   it('should create an action that pins a new city', () => {
     const input = '80202';
     const expectedAction = {
       type: 'ADD_PINNEDCITY',
       input
     };
     expect(pinNewCity(input)).toEqual(expectedAction);
   });
 });
