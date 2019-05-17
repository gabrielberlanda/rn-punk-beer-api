import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { 
  Container, 
  Title, 
  TitleContainer, 
  Logo 
} from './styles';

import BeerDetail from '~/components/BeerDetail';

export default function Beer() {

  const [ refreshing, setRefreshing ] = useState(false);
  const [ beer, setBeer ] = useState(null);

  async function handleLoadBeer() {
    setRefreshing(true);

    const response = await api.get('/beers/random');

    const beer = response.data ? response.data[0] : null;

    beer.tags = beer.tagline ? beer.tagline.split('.').map(tag => tag.trim()).filter(tag => tag != "") : [];

    console.tron.log('BEER -> ', beer);

    setBeer(beer);
    setRefreshing(false);
  }
  
  useEffect(() => {
    handleLoadBeer();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Logo source={require('~/images/brewdog-logo.png')} onPress={handleLoadBeer}></Logo>
        <Title >Brew Dog Beer's</Title>
      </TitleContainer>

      { beer != null && 
        <BeerDetail 
          beer={beer} 
          handleLoadBeer={handleLoadBeer} 
          refreshing={refreshing}>
        </BeerDetail>
      }

    </Container>
  );
}
