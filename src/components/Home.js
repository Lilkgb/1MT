import React from 'react';
import Header from './Header';
import {store} from '../index';
import {testFunction} from '../actions/index';
import {connect} from 'react-redux';


function Home(props){

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div>
      <Header user={props.user}/>
      <h1>Welcome to the home component</h1>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.userInformationState
})

export default connect(mapStateToProps)(Home);
