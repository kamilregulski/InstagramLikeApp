import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

type Props = {
  photo: {
    id: number;
    url: string;
  };
};

const Photo: FunctionComponent<Props> = ({photo}) => {
  const navigation = useNavigation();
  const onPress = () =>
    navigation.navigate('PhotoDetails', {photoId: photo.id});
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <FastImage
        source={{
          priority: FastImage.priority.high,
          uri: photo.url,
        }}
        style={styles.photo}
      />
    </TouchableOpacity>
  );
};

export default Photo;
