import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"; // Import Link
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CodeSection } from "react-code-section-lib";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AccessibleTwoToneIcon from "@mui/icons-material/AccessibleTwoTone";
import Fab from "@mui/material/Fab";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import Stack from "@mui/material/Stack";
import { useLocation, useNavigate } from "react-router-dom";
import { useModalContext } from "../util/ModalContext"; // Import the useModalContext hook
import MyLink from "./ModalLinks";
import CustomButton from "./customButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

export default function CustomizedDialogs({ item }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    // Set the URL hash when the modal opens
    window.location.hash = `${item.route}`;
    setOpen(true);
  };

  const closeModal = () => {
    // Remove the hash from the URL when the modal is closed
    window.location.hash = "";
    setOpen(false);
  };

  useEffect(() => {
    // Check if the current hash URL matches the item's route
    if (window.location.hash === `#${item.route}`) {
      openModal();
    }
  }, [item.route]);
  return (
    <>
      <Stack sx={{ p: 1 }} direction="row" spacing={2}>
        <CustomButton
          to={`/${item.criteria}/${item.route}_success`}
          onClick={openModal}
        >
          <Button component="button" variant="outlined">
            {item.name}
          </Button>
        </CustomButton>
      </Stack>

      {open && (
        <BootstrapDialog
          maxWidth="lg"
          onClose={closeModal}
          aria-labelledby="customized-dialog-title"
          open={openModal}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            <Typography m="auto" variant="overline">
              {item.id} {item.name}
            </Typography>
          </DialogTitle>
          <IconButton
            component="button"
            aria-label="close"
            onClick={() => closeModal(-1)} // Updated from onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent dividers>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="overline">
                {item.shortDescription}
              </Typography>
            </Grid>
            <CardContent>
              <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="">
                {item.issueDescription}
              </Typography>
              <Box mt={2}>
                <Chip
                  variant="outlined"
                  color="warning"
                  icon={<TagFacesIcon />}
                  label={item.criteria}
                />
              </Box>
              <Box mt={2} mb={2}>
                <Chip
                  variant="outlined"
                  color="primary"
                  icon={<AccessibleTwoToneIcon />}
                  label={item.WCAGLevel}
                />
              </Box>
              <Typography variant="overline">Issue Resolution:</Typography>
              <Box sx={{ width: "100%" }} mb={2}>
                <CodeSection>{item.issueResolution}</CodeSection>
              </Box>
            </CardContent>
            {/* Add more card data here */}
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing="2"
              sx={{ p: 1 }}
            >
              <Box sx={{ width: "75%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <Link
                      component="button"
                      to={`/${item.criteria}/${item.route}_success`}
                    >
                      <Fab color="success" variant="extended">
                        <ThumbUpAltTwoToneIcon sx={{ mr: 1 }} />
                        Success
                      </Fab>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to={`/${item.criteria}/${item.route}_failure`}>
                      <Fab component="button" color="error" variant="extended">
                        <ThumbDownTwoToneIcon sx={{ mr: 1 }} />
                        Failures
                      </Fab>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </DialogActions>
        </BootstrapDialog>
      )}
    </>
  );
}
