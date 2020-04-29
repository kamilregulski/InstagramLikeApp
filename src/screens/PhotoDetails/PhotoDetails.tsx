import React, {FunctionComponent} from 'react';
import {Image, SafeAreaView, StatusBar, Text} from 'react-native';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import NetworkStatus from '../../components/NetworkStatus/NetworkStatus';
import {AppState} from '../../redux/createStore';
import styles from './styles';

type Props = {
  data: any;
};

const PhotoDetails: FunctionComponent<Props> = ({data}: Props) => {
  const route = useRoute();
  const {photoId} = route.params as any;
  const photo = data.photos.find(({id}: {id: number}) => id === photoId);

  if (!photo) {
    <Text>No photo...</Text>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NetworkStatus />
        <Image
          source={{
            uri: photo.url,
          }}
          style={styles.photo}
        />
        <Text style={styles.description}>{photo.description}</Text>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  data: state.photos,
});

export default connect(mapStateToProps)(PhotoDetails);
