import axios from 'axios';

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


  


export const getPlacesData=async(_southWest,_northEast)=>{
    try{
        const {data:{data}}=await axios.get(URL, {
   
          params: {
            bl_latitude: _southWest.lat,
            tr_latitude: _northEast.lat,
            bl_longitude: _southWest.lng,
            tr_longitude: _northEast.lng,
           
          },
          headers: {
            'x-rapidapi-key': 'a4c3594ffdmshd5658bdeb018a1ep193cfejsn2ea83bf4f97d',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        });

        console.log(data);

        return data;

    }catch(error){
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};