import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Typography, Image } from '@toptal/picasso'
import IShips from '../../types/IShips'

export const ShipInfo: React.FC<IShips> = ({ ship }) => {
  const ImageStyled = styled(Image)`
    width: 350px;
    height: 500px;
  `

  const {
    name,
    image,
    model,
    status,
    year_built,
    home_port,
    successful_landings,
    type
  } = ship

  return (
    <Grid justifyContent="center" alignItems="center" spacing={0}>
      <Grid.Item small={4}>
        <Container
          padded="small"
          flex={true}
          justifyContent="center"
          alignItems="center"
        >
          <ImageStyled
            alt="Movie Image"
            src={
              image === null
                ? 'https://raw.githubusercontent.com/Kosov234/Movie-app/main/images/no_image.png'
                : image
            }
            style={{}}
          />
        </Container>
      </Grid.Item>
      <Grid.Item small={4}>
        <Container padded="small">
          <Typography size="xlarge" variant="heading" align="left">
            {name}
          </Typography>
          <Typography size="large">{model}</Typography>
          <Typography size="medium">Status: {status}</Typography>
          <Typography size="medium">Year Built: {year_built}</Typography>
          <Typography size="medium">Home Port:{home_port}</Typography>
          <Typography size="medium">
            Successful Landings: {successful_landings}
          </Typography>
          <Typography size="medium">Type: {type}</Typography>
        </Container>
      </Grid.Item>
    </Grid>
  )
}
