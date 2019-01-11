import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com/search/photos',
   headers: {
      Authorization: 'Client-ID bacceef5563ff0b2b3031c41e30bd4eac54205d3d3562e8be21a0f9052d3f174'
   }
});