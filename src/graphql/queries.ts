import {gql} from '@apollo/client';

export const GET_PHOTOS = gql`
  {
    photos {
      id
      url
      description
    }
  }
`;
