import React, { Component } from 'react';
import {CardContainer, CardInfo, Image, Description, ButtonContainer, DetailButtonContainer, PriceContainer} from './styles'
import Button from '../Button';

class Card extends Component {
   
  render() {
    const {image, title, price} = this.props;
    return (
      <CardContainer>
        <CardInfo>
            <Image src={image}/>
            <Description>
              <p>{title}</p>
            </Description>
            <PriceContainer>
              <Button type='black'>
                {price}
              </Button>
          </PriceContainer>
        </CardInfo>
        <ButtonContainer>
          <Button type='primary'> Book Now </Button>
          <DetailButtonContainer>
            <Button type='secundary'> More Details </Button>
          </DetailButtonContainer>
        </ButtonContainer>
     </CardContainer>
    );
  }
}
export default Card;