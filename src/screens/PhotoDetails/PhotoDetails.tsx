import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Photo from '../../components/Photo/Photo';
import styles from './styles';

const PhotoDetails = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Photo />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PhotoDetails;
