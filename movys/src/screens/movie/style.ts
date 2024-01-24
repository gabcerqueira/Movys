import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const MovieImage = styled.ImageBackground`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  opacity: 1;
`;

export const BackButton = styled.TouchableHighlight`
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 10px;
  z-index: 10;
  background-color: ${colors.text};
  border-radius: 50px;
`;

export const MovieDetailsContainer = styled.View`
  padding: 16px;
`;

export const MovieTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ReleaseDate = styled.Text`
  font-size: 16px;
  color: ${colors.textDefault};
  margin-bottom: 8px;
`;

export const Overview = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Rating = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
