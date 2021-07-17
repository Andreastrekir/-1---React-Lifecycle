import React from 'react';

class favoriteColor extends React.Component {
    constructor (props) {
      super(props);
      this.state = {favoriteColor: "Red"};
    }
  
  componentDidMount() {
    setTimeout(() =>{
      this.setState({favoriteColor: "Yellow"})
    }, 5000)
  }
  render(){
    return(
      <h1>My Favorite color si {this.state.favoriteColor}</h1>
    );
  }
  }
  
export default favoriteColor;