import axios from 'axios';

const fetchProjects = () => {
  return axios
    .get('https://admin.naxa.com.np/api/projects')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default fetchProjects;
