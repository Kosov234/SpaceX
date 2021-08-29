import { gql } from "@apollo/client";
import { ShipFragment } from "../Ship/shipFragment";

export const query = gql`
  {
    ships {
      ...shipFragment
    }
  }
  ${ShipFragment}
`;
