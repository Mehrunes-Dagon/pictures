import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends React.Component {
   state = {
      images: []
   }
   onSearchSubmit = async term => {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
         params: { query: term },
         headers: {
            Authorization: 'Client-ID bacceef5563ff0b2b3031c41e30bd4eac54205d3d3562e8be21a0f9052d3f174'
         }
      });
      // console.log(response.data.results);
      this.setState({ images: response.data.results });
   }

   render() {
      return (
         <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar fromAppSubmit={this.onSearchSubmit} />
            Found {this.state.images.length} images
         </div>
      );
   }
}

export default App;