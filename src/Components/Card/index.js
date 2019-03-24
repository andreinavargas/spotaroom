import React, { Component } from 'react';
import {CardContainer, Image, Description, Price, ButtonContainer} from './styles'
import Button from '../Button';

class Card extends Component {
   
  render() {
    const {image, title, price} = this.props;
    return (
      <CardContainer>
        <Image src={image}/>
        <Description>
          <p>{title}</p>
        </Description>
        <Price>
          <p>{price}</p>
        </Price>
        <ButtonContainer>
          <Button type='primary'> Book Now </Button>
        </ButtonContainer>
     </CardContainer>
    );
  }
}
export default Card;