import axios from 'axios';

const API_KEY = 'AIzaSyCQ4mACoTHcMp3kGgxniRq7eEA9CL5JSJM';

// Función para buscar videos en YouTube
export const searchVideos = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        key: API_KEY,
        maxResults: 10, //resultados que obtiene
      },
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
};