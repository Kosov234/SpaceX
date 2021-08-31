import React from "react";
import { Container, Grid, SkeletonLoader } from "@toptal/picasso";

export const ShipSkeletonLoader: React.FC<{}> = () => { 
  return (
    <Grid justifyContent="center" alignItems="center" spacing={0}>
      <Grid.Item small={4}>
        <Container
          padded="small"
          flex
          justifyContent="center"
          alignItems="center"
        >
          <SkeletonLoader.Media variant="image" width={350} height={500} />
        </Container>
      </Grid.Item>
      <Grid.Item small={4}>
        <Container padded="small">
          <SkeletonLoader.Header />
          <SkeletonLoader.Typography rows={4} />
        </Container>
        <Container padded="small" top="xlarge">
          <SkeletonLoader.Typography rows={6} />
        </Container>
        <Container padded="small" top="xlarge">
          <SkeletonLoader.Typography rows={2} />
        </Container>
      </Grid.Item>
    </Grid>
  );
}

export default ShipSkeletonLoader;