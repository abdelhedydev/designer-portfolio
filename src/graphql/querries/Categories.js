import { gql } from 'apollo-boost';

const CATEGORIES = gql`
  {
    categorieses{
      id
      name
    }
  }
`;
export default CATEGORIES;
