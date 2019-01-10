import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' }

   handleInputChange = event => {
      this.setState({ term: event.target.value });
      // console.log(this.state.term);
   }

   handleSubmit = event => {
      event.preventDefault();
      console.log(this.state.term);
      this.props.fromAppSubmit(this.state.term);
   }

   render() {
      return (
         <div className='ui segment'>
            <form onSubmit={this.handleSubmit} className='ui form'>
               <div className='field'>
                  <label>Image Search</label>
                  <input
                     type='text'
                     value={this.state.term}
                     onChange={this.handleInputChange}
                  />
               </div>
            </form>
         </div>
      )
   }
}

export default SearchBar;