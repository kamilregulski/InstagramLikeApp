import {gql} from '@apollo/client';

export const GET_PHOTOS_QUERY = gql`
  {
    photos {
      id
      url
      description
    }
  }
`;
