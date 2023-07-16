import { gql } from "@apollo/client";
import { ICharacterFilter } from "../types";

export const GET_CHAR = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
// characters(page: ${page}, filter: { name: ${keyword} }) {
//     info {
//         count
//       	next
//     }
//     results {
//       id
//       name
//       species
//       image
//     }
// }


export const GET_CHARACTERS = gql`
  query Characters($name: String!, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
      info {
          count
          next
      }
      results {
        id
          name
        species
        image
      }
  }
}
`;

export const GET_CHARACTER = gql`
  query Character($id: ID!){
    character(id: $id) {
      name
      
    status
    species
    type
    gender
    image
    
    }
  }
`;