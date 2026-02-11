import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Carousels() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Rules associated with Carousels
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Carousel Types
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Carousels/Slick",
                        pageName: "Slick Carousels"
                      }}
                      variant="outlined"
                    >
                      Slick
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Bootstrap
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Owl
                    </Button>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Swiper
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Glide.js
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Flickity
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
