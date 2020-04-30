import React, {FunctionComponent} from 'react';
import {SafeAreaView, FlatList, StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Photo from '../../components/Photo/Photo';
import NetworkStatus from '../../components/NetworkStatus/NetworkStatus';
import {requestPhotos} from '../../redux/actions';
import {AppState} from '../../redux/createStore';
import {useNavigation} from '@react-navigation/native';
import {PhotoType, PhotosType, NetworkType} from '../../types';
import styles from './styles';

type Props = {
  network: NetworkType;
  photos: PhotosType;
  requestPhotos: () => void;
};

const Home: FunctionComponent<Props> = ({
  network,
  photos,
  requestPhotos: refetchPhotos,
}: Props) => {
  const navigation = useNavigation();
  const onPress = (photoId: number) => {
    navigation.navigate('PhotoDetails', {photoId});
  };
  const data = photos.items;
  const renderItem = ({item}: {item: PhotoType}) => (
    <Photo onPress={() => onPress(item.id)} photo={item} />
  );
  const keyExtractor = (item: PhotoType) => item.id.toString();
  const startRefetching = () => {
    // TODO:
    // It's my first time with redux-saga and I don't know
    // how to run saga fetchPhotos() from component...
    refetchPhotos();
  };
  const onRefresh = () => (network.isConnected ? startRefetching() : undefined);
  const refreshing = photos.isFetching;
  const ListEmptyComponent = () =>
    !refreshing ? (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No photos? Run "server" first... </Text>
        <Text style={styles.emptyText}>
          Swipe down to try fetch photos again...
        </Text>
      </View>
    ) : (
      <View />
    );
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
          ListEmptyComponent={ListEmptyComponent}
        />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  network: state.network,
  photos: state.photos,
});

const mapDispatchToProps = () => ({
  requestPhotos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
