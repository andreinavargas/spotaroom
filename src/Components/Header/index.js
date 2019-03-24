import React, { Component } from 'react';
import {HeaderContainer, Title, Section, SectionContainer} from './styles';

class Header extends Component {
   
  render() {
    return (
      <HeaderContainer>
        <Title> SpotaRoom </Title>
        <SectionContainer>
          <Section href="https://www.w3schools.com"> the company </Section>
          <Section href="https://www.w3schools.com"> How we Work </Section>
          <Section href="https://www.w3schools.com"> Contact Us </Section>
        </SectionContainer>
     </HeaderContainer>
    );
  }
}

export default Header;