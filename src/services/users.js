import axios from 'axios';

const fetchData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default fetchData;
