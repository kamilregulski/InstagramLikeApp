import {client} from '../../App';
import {GET_PHOTOS_QUERY} from 'src/graphql/queries';

export const getPhotosApi = async () => {
  const {data} = await client.query({
    query: GET_PHOTOS_QUERY,
  });
  return data;
};
