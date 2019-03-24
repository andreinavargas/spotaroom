import React, { Component } from 'react';
import {CardsContainer} from './styles';
import Card from '../Card';

class CardList extends Component {
   
  render() {
      const {rooms} = this.props;
    return (
      <CardsContainer>
          {rooms && rooms.map(room =>
            <Card 
            image={room.photoUrls.homecardHidpi}
            title={room.title}
            price={room.pricePerMonth + room.currencySymbol} 
            />
          ) 
          }
     </CardsContainer>
    );
  }
}

export default CardList;