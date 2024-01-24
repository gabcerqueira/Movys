import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/base';
import {Container, SkeletonItem} from './style';

type Props = {};

const SkeletonList = (props: Props) => {
  const skeletons = Array.from({length: 6}, (_, index) => ({
    id: index,
  }));

  return (
    <Container>
      {skeletons.map(skeleton => (
        <SkeletonItem key={skeleton.id} animation="pulse" />
      ))}
    </Container>
  );
};

export default SkeletonList;

const styles = StyleSheet.create({});
