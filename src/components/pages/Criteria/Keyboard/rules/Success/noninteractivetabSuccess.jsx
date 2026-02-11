import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "./keyboard.css";
import { CodeSection } from "react-code-section-lib";
import data from "../../auditrules.json";
import Rules from "../../Rules";

function SpecificRule() {
  return <>{<Rules />})</>;
}

export default function NonInteractiveTabIndex() {
  return (
    <>
      <Rules />

      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Example Issues
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ width: 600, textAlign: "center" }}>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    {" "}
                    <Grid item xs={12}>
                      <Grid item xs={2} sm={4} md={4}>
                        <Button
                          size="large"
                          color="info"
                          component={Link}
                          to="/Keyboard/NoninteractiveTabindex/Success"
                        >
                          Success
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item xs={2} sm={4} md={4}>
                        <Button
                          size="large"
                          color="info"
                          component={Link}
                          to="/Keyboard/NoninteractiveTabindex/Failures"
                        >
                          Failures
                        </Button>
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
