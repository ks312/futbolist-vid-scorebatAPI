import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/layout/Header';
import Highlight from './components/Highlight';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Search from './components/Search';
import HighlightDetail from './components/HighlightDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      highlight: [],
      highlightDetail: {}
    };
  }
  async componentDidMount(){
    const res = await axios.get(`https://www.scorebat.com/video-api/v1/`);
    this.setState({ highlight:res.data });
  }

  searchHighlights = async (highlightText) => {
    const res = await axios.get(`https://www.scorebat.com/serach/highlight?q=${highlightText}/video-api/v1/`)
    this.setState({ highlight: res.data.items});
  }

  getHighlight = async(highlight) => {
    const res = await axios.get(`https://www.scorebat.com/${highlight}/video-api/v1/`)
    this.setState({ highlightDetail: res.data});
  }

  render(){
    return (
      <Router>
        <div>
          <Header />
          <Container> 
            <Switch>
                <Route exact path="/" render={()=> (
                <>
                <Search searchHighlights={this.searchHighlights}/>
                  <Highlight highlight={this.state.highlight} />
                </>
                )} />
                <Route exact path="/about" component={About} />
                <Route exact path="/highlightDetail/:title" render={props => (
                  <HighlightDetail {... props} getHighlight={this.getHighlight} highlightDetail={this.state.highlightDetail} />
               )} /> 
              </Switch>
            </Container>
          </div>
        </Router>
        );
    }
  }
  
          
  export default App;


           



        








