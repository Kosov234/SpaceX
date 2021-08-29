import { gql } from "@apollo/client";
import { ShipFragment } from "../Ship/shipFragment";

export const query = (id: string) => gql`
{
  ships(find: {id: "${id}"}) {
    ...shipFragment
      home_port
      successful_landings
      type
    }
}${ShipFragment}
`;
