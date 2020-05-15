import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PhotoType} from 'src/types';
import styles from './styles';

type Props = {
  onPress?: () => void;
  photo: PhotoType;
};

const Photo: FunctionComponent<Props> = ({onPress, photo}: Props) => {
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
