import { getWeather } from '../js/requests';

test('should return Paris', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div id="city">' + 'paris' + '</div>';
  });
  afterEach(() => {
    const city = getWeather();
    expect(city).toEqual('Paris');
  });
})