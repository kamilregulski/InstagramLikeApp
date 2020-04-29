import React, {FunctionComponent} from 'react';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Photo from '../../components/Photo/Photo';
import NetworkStatus from '../../components/NetworkStatus/NetworkStatus';
import {getPhotos, GetPhotosType} from '../../redux/actions';
import {fetchPhotos} from '../../redux/sagas';
import {AppState} from '../../redux/createStore';
import styles from './styles';

type Props = {
  data: any;
  getPhotosAction: GetPhotosType;
};

const Home: FunctionComponent<Props> = ({data}: Props) => {
  const renderItem = ({item}: any) => <Photo photo={item} />;
  const onRefresh = () => fetchPhotos();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NetworkStatus />
        <FlatList
          style={styles.flatList}
          data={data.photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={onRefresh}
          refreshing={data.isFetching}
        />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  data: state.photos,
});

const mapDispatchToProps = {
  getPhotosAction: getPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
