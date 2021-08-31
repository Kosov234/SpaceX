import { Page } from '@toptal/picasso'
import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery } from '@apollo/client'
import ShipQuery from '../Ship/query'
import ShipSkeletonLoader from './skeletonLoader'
import { ShipInfo } from './shipInfo'


interface IShipDetailsParams {
  id: string
}

const ShipDetailsPage: React.FC<{}> = () => {

  const { id }: IShipDetailsParams = useParams()

  const { loading, error, data } = useQuery(ShipQuery, {
    variables: { id }
  })

  if (error) return <p>Error : {error.message}</p>
  
  return (
    <Page>
      <Page.TopBar title="SpaceX" />
      <Page.Content>
        {loading ? <ShipSkeletonLoader/> : data && <ShipInfo ship={data.ship}/>}
        
      </Page.Content>
      <Page.Footer />
    </Page>
  )
}




export default ShipDetailsPage
