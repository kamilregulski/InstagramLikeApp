import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Photo = (props: any) => {
  const {photo} = props;
  const navigation = useNavigation();
  const onPress = () =>
    navigation.navigate('PhotoDetails', {photoId: photo.id});
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <Image
        source={{
          uri: photo.url,
        }}
        style={styles.photo}
      />
    </TouchableOpacity>
  );
};

export default Photo;
