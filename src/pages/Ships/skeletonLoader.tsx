import { Grid, SkeletonLoader } from "@toptal/picasso"
import React, { Fragment } from "react"

export const ShipsSkeletonLoader: React.FC<{}> = () => {
    return ( 
    <Fragment>
        {[...Array(20)].map((shipCard, index) => {
            return ( 
            <Grid.Item small={3}>
                <Grid>
                    <Grid.Item small={6}>
                        <SkeletonLoader.Media variant='image' width='7rem' height='7rem' />
                    </Grid.Item>
                    <Grid.Item small={6}>
                        <SkeletonLoader.Typography rows={4}/>
        
                    </Grid.Item>
                </Grid>
            </Grid.Item>)
        })}
   
    
    </Fragment>)
}