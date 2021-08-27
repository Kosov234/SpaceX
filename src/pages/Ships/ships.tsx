import React from "react";
import { Container, Page, Typography, UserBadge } from "@toptal/picasso";
import { gql, useQuery } from "@apollo/client";
import { Grid } from "@toptal/picasso/Grid/Grid";
import { Link as RouterLink } from "react-router-dom";
import IShip from "../../types/IShips";

const ShipsPage: React.FunctionComponent<{}> = () => {
  const { loading, error, data } = useQuery(gql`
    {
      ships {
        id
        name
        image
        model
        status
        year_built
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Page>
      <Page.TopBar title="SpaceX" />
      <Page.Content>
        <Container padded={"xsmall"}>
          <Grid>
            {data.ships.map((ship: IShip) => {
              const { id, name, image, model, status, year_built } = ship;
              return (
                <Grid.Item small={3}>
                  <RouterLink to={`/${id}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        backgroundColor: "#204ecf",
                        padding: "1rem",
                        width: "100%",
                        height: "120px",
                      }}
                    >
                      <UserBadge name={name} avatar={image} size="small" invert>
                        <Typography invert size="small">
                          {model} <br />
                          {status} <br />
                          {year_built}
                        </Typography>
                      </UserBadge>
                    </div>
                  </RouterLink>
                </Grid.Item>
              );
            })}
          </Grid>
        </Container>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default ShipsPage;
