import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {

  console.log(props.authUser)

  let preDisplay;

  if(props.authUser){
    preDisplay = null; 
  } else if (props.authUser === false){
    preDisplay = null;
  } else {
    preDisplay = 
    <div className="loadingGif">
      <img src={require('../assets/loading.gif')}/>
    </div>
  }

  return (
    <div className="App">
      {preDisplay}
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
   authUser: state.authState
})

export default connect(mapStateToProps)(App);
