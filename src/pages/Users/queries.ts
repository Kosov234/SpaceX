import { gql } from '@apollo/client'

export const GetUsersQuery = gql`
  query UsersQuery($limit: Int) {
    users(limit: $limit) {
      name
      rocket
      twitter
    }
  }
`

export const InsertUserQuery = gql`
  mutation InsertUser($name: String!, $rocket: String!, $twitter: String!) {
    insert_users(objects: { name: $name, rocket: $rocket, twitter: $twitter }) {
      returning {
        id
      }
    }
  }
`
