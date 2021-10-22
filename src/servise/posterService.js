const axios = require('axios');
const deflocal = 'http://localhost:4000/movies';

export async function getPosters() {
  let result = [];
  try {
    result = await axios.get(deflocal, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return {
    count: result.data.totalAmount,
    posters: result.data.data,
  };
}
export async function getPostersByCategory(category) {
  let result = [];
  try {
    result = await axios.get(deflocal, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      params: { search: category, searchBy: 'genres' },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return {
    count: result.data.totalAmount,
    posters: result.data.data,
  };
}
