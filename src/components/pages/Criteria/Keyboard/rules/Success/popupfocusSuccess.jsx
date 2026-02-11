import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function PopupFocus() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                PopupFocus
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
                Example Issues
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}></Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
