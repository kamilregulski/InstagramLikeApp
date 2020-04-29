import React, {FunctionComponent} from 'react';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Photo from '../../components/Photo/Photo';
import NetworkStatus from '../../components/NetworkStatus/NetworkStatus';
import {fetchPhotos} from '../../redux/sagas';
import {AppState} from '../../redux/createStore';
import {useNavigation} from '@react-navigation/native';
import {PhotoType, PhotosType, NetworkType} from '../../types';
import styles from './styles';

type Props = {
  network: NetworkType;
  photos: PhotosType;
};

const Home: FunctionComponent<Props> = ({network, photos}: Props) => {
  const navigation = useNavigation();
  const onPress = (photoId: number) => {
    navigation.navigate('PhotoDetails', {photoId});
  };
  const data = photos.items;
  const renderItem = ({item}: {item: PhotoType}) => (
    <Photo onPress={() => onPress(item.id)} photo={item} />
  );
  const keyExtractor = (item: PhotoType) => item.id.toString();
  const onRefresh = () => (network.isConnected ? fetchPhotos() : undefined);
  const refreshing = photos.isFetching;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NetworkStatus />
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  network: state.network,
  photos: state.photos,
});

export default connect(mapStateToProps)(Home);
