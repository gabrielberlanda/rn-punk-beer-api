import React from 'react';
import { RefreshControl } from 'react-native';

import { Container, Image, Name, Description, TagsContainer, Tag } from './styles';

export default function BeerDetail({ beer, refreshing, handleLoadBeer }) {
  return (
    <Container
      contentContainerStyle={{ alignItems: 'center' }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleLoadBeer}/>}
    >
      { beer.image_url && <Image source={{ uri: beer.image_url }} resizeMode={'cover'}></Image> }
      <Name>{beer.name}</Name>
      <Description>{beer.description}</Description>
      <TagsContainer>
        {beer.tags.map( (tag, index) => <Tag key={index}>{tag}</Tag>)}
      </TagsContainer>
    </Container>
  );
}
