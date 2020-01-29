import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SignIn from './SignIn';

function App(props) {

  let preDisplay;
  let checkedAuthState;

  if(props.authUser === true){
    preDisplay = null;
    checkedAuthState = Home;
  } else if (props.authUser === false){
    preDisplay = null;
    checkedAuthState = SignIn;
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
        <Route exact path ='/' user={props.userInformation} component={checkedAuthState}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
   authUser: state.authState
})

export default connect(mapStateToProps)(App);
