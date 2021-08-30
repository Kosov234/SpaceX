import { gql } from '@apollo/client'

export const ShipFragment = gql`
  fragment shipFragment on Ship {
    id
    name
    image
    model
    status
    year_built
  }
`
