import React, {useEffect, useState} from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {

  const [loader, setLoader] = useState('maxWidth')

  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if(w >= h){
      setLoader("maxHeight")
    } else {
      setLoader("maxWidth")
    }
    console.log(loader)
  })

  return (
    <div className="App">
      <div className="loadingGif">
        <img className={loader} src={require('../assets/loading.gif')}/>
      </div>
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
