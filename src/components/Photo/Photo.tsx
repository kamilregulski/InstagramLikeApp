import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

function Photo() {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('PhotoDetails');
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri:
            'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
        }}
      />
    </TouchableOpacity>
  );
}

export default Photo;
