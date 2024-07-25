export const getWeatherCurrent = async (setWeatherData) => {
  // Get location of users device
  const locationCurrent = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationCurrent.coords.latitude}&lon=${locationCurrent.coords.longitude}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`; // hook1 - swap this < with this (my own API key)\/, when my API key will be accepted (should be on 23 of June)

  return (
    // Get weather in that location (passed through the url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);

        return data;
      })
  );
};
