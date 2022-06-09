import { AxiosInstance } from "../util/AxiosInstance";

export const weather = async (cityname) => {

  const apiKey = '20b954145f8652054ce6bcb04dfaba65';
  const url=`/weather?q=${cityname}&units=metric&appid=${apiKey}`;

  try {

    const data = await AxiosInstance.get(url);
    // console.log(response.data);
    return data;

  } catch (error) {

    throw error;

  }

  // http://api.openweathermap.org/data/2.5/weather?q=haridwar&units=metric&appid=20b954145f8652054ce6bcb04dfaba65


}



