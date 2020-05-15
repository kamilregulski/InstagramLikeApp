import React, {FunctionComponent, useEffect} from 'react';
import {SafeAreaView, FlatList, StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Photo from 'src/components/Photo/Photo';
import NetworkStatus from 'src/components/NetworkStatus/NetworkStatus';
import * as actions from 'src/redux/actions';
import {AppState} from 'src/redux/createStore';
import {PhotoType, PhotosType, NetworkType} from 'src/types';
import styles from './styles';

type Props = {
  network: NetworkType;
  photos: PhotosType;
  getPhotosRequest: () => void;
};

const Home: FunctionComponent<Props> = ({
  network,
  photos,
  getPhotosRequest,
}: Props) => {
  useEffect(() => {
    getPhotosRequest();
  }, [getPhotosRequest]);
  const navigation = useNavigation();
  const onPress = (photoId: number) => {
    navigation.navigate('PhotoDetails', {photoId});
  };
  const data = photos.items;
  const renderItem = ({item}: {item: PhotoType}) => (
    <Photo onPress={() => onPress(item.id)} photo={item} />
  );
  const keyExtractor = (item: PhotoType) => item.id.toString();
  const onRefresh = () =>
    network.isConnected ? getPhotosRequest() : undefined;
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
  getPhotosRequest: actions.getPhotosRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
