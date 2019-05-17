import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#000000', '#191919'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;


export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Logo = styled.Image`
  height: 24;
  width: 24;
`;
