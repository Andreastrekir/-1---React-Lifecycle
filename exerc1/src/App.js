import { bottom } from '@popperjs/core';
import React from 'react';
import './App.css';
import FavoriteColor from './components/FavoriteColor';

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

//cuando esta variable esta en true especifica si react puede seguir con la renderizacion o no (en ese caso seria false)
shouldComponentUpdate() {
  return true;
}

changeColor= () => {
  this.setState({ favoriteColor:"Blue"});
}

render(){
  return(
    <div>
    <h1>My Favorite color si {this.state.favoriteColor}</h1>

    <button type ='button' onClick = {this.changeColor}>Click Me !</button>
    </div>
  );
 
}
}

export default favoriteColor;
