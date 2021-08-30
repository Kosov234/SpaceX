import { gql } from '@apollo/client'
import { ShipFragment } from '../Ship/shipFragment'

export default gql`
  query ShipsQuery($limit: Int) {
    ships(limit: $limit) {
      ...shipFragment
    }
  }
  ${ShipFragment}
`
