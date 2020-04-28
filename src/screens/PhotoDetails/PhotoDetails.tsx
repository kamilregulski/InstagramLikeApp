import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import styles from './styles';

const PhotoDetails = () => {
  const [state] = useState({
    url:
      'https://www.thesun.co.uk/wp-content/uploads/2019/09/NINTCHDBPICT000503029378.jpg?strip=all&w=960&crop',
    description: 'Description',
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            source={{
              uri: state.url,
            }}
            style={styles.photo}
          />
          <Text>{state.description}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PhotoDetails;
