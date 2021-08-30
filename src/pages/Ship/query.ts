import { gql } from '@apollo/client'
import { ShipFragment } from '../Ship/shipFragment'

export default gql`
  query shipQuery($id: ID!) {
    ship(id: $id) {
      home_port
      successful_landings
      type
      ...shipFragment
    }
  }
  ${ShipFragment}
`
