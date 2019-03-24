import React, { Component } from 'react';
import {HeaderContainer, Title, Slogan} from './styles';

class Header extends Component {
   
  render() {
    return (
      <HeaderContainer>
        <Title> SpotaRoom </Title>
        <Slogan> Find your best rooms </Slogan>
     </HeaderContainer>
    );
  }
}

export default Header;