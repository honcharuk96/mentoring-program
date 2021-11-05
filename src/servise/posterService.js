const axios = require('axios');
const deflocal = 'http://localhost:4000/movies';

axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
};

export async function getPosters() {
  let result = [];
  try {
    result = await axios.get(deflocal);
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
      params: { search: category, searchBy: 'genres' },
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
  return {
    count: result.data.totalAmount,
    posters: result.data.data,
  };
}

export async function getPosterById(posterId) {
  let result = null;
  try {
    result = await axios.get(`${deflocal}/${posterId}`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
  return {
    poster: result.data,
  };
}

export async function addPoster(poster) {
  let result = null;
  try {
    result = await axios.post(deflocal, poster);
    console.log(result);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
  return result.data;
}

export async function updatePoster(poster) {
  let result = null;
  try {
    result = await axios.put(deflocal, poster);
    console.log(result);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
  return result.data;
}

export async function deletePoster(posterId) {
  let result = [];
  try {
    result = await axios.delete(`${deflocal}/${posterId}`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
  return {
    count: result.data.totalAmount,
    posters: result.data.data,
  };
}
