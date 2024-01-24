import {Skeleton} from '@rneui/base';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  padding: 20px;
  background-color: ${colors.background};
`;

export const SkeletonItem = styled(Skeleton)`
  width: 45%;
  height: 240px;
  border-radius: 15px;
  margin-bottom: 20px;
`;
