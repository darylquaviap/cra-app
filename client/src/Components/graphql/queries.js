import gql from 'graphql-tag';

export const GET_COUNTRIES =
    gql` 
{
    countries {
        capital
        code
        continent {
          code
          name
        }
        currency
        name
        native
        phone
        languages {
          code
          name
          native
          rtl
        }
        states {
          code
          name
        }
      }
}`;