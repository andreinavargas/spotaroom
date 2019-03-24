import React, { Component } from 'react';
import CardList from '../../Components/CardsList'
import Header from '../../Components/Header';
import {HomeContainer} from './styles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          room: []
        }
    this.callApi = this.callApi.bind(this);
    }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    fetch('/api/homecards')
    .then((response) => response.json())
      .then((data) => {
          console.log(data)
        this.setState({
         rooms: data.homecards
      })
    });
  }
    
  render() {
    return (
      <HomeContainer>
          <Header/>
          <CardList rooms={this.state.rooms} />
     </HomeContainer>
    );
  }
}

export default Home;
