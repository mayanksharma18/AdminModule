import React from 'react';
import './App.css';
import Dashboard from './Admin/components/Dashboard'
import {fetchData} from './Admin/actions/actions'
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import {connect} from 'react-redux'
import {  bindActionCreators } from 'redux';
import Questions from './Admin/components/Quiz';

class App extends React.Component {
  componentDidMount(){
    console.log("Hi")
  
    this.props.fetchData()
  }
  render(){
  return (
   <Router>
     
     <Dashboard/>
     </Router>
  );
}
}
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData
},dispatch)


export default connect(null, mapDispatchToProps)(App);
