import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Photo from '../../components/Photo/Photo';
import styles from './styles';

const GET_PHOTOS = gql`
  {
    photos {
      id
      url
      description
    }
  }
`;

const Home = () => {
  const {loading, error, data} = useQuery(GET_PHOTOS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {data.photos.map((photo: any, key: number) => (
            <Photo key={key} photo={photo} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
