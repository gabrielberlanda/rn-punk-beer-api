import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    margin-top: 24px;
`;

export const Image = styled.Image`
  height: 200;
  width: 50;
`;

export const Name = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
  color: #00afdb;
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-size: 13px;
  font-style: italic;
  color: #FFF;
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
`;

export const Tag = styled.Text`
  padding: 4px;
  font-size: 14px;
  background-color: #c1497f;
  color: #FFF;
  margin-right: 5px;
  border-radius: 4px;
`;

