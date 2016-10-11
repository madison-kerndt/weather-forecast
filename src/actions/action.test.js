import { localWeather } from './index';

describe('actions', () => {
   it('should create an action that identifies local weather', () => {
     const weather = 'RAIN';
     const expectedAction = {
       type: CURRENT_WEATHER,
       weather
     };
     expect(currentLocalCity(weather)).toEqual(expectedAction);
   });
   });
