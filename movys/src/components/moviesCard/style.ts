import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: 48%;
  height: 240px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.View`
  position: absolute;
  bottom: 0;
  padding: 16px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  overflow: hidden;
`;
