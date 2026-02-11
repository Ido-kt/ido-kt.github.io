import React, { Component } from "react";
import { createFilter } from "../util/Filter";
import { createSorter } from "../util/Sort";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import SimpleBreadcrumbs from "../util/BreadCrumb";
import CustomizedDialogs from "../layout/ruleModal";
import LinearDeterminate from "../util/LoadingState";

class List extends Component {
  state = {
    filters: this.props.filters,
    sorters: this.props.sorters,
    loading: true,
    data: null,
    progress: 0, // Add progress state to track loading progress
  };

  static defaultProps = {
    filters: [
      {
        property: "criteria",
        value: ""
      },
      {
        property: "enabled",
        value: true
      }
    ],

    sorters: [
      {
        property: "name"
      },
      {
        property: "criteria"
      }
    ]
  };

  static transformInput(input) {
    if (typeof input !== "string") {
      // If input is not a string, convert it to a string
      input = input.toString();
    }

    // Remove trailing '/I'
    if (input.endsWith("/I")) {
      input = input.slice(0, -2);
    }

    // Remove leading slash
    if (input.startsWith("/")) {
      input = input.slice(1);
    }

    // Capitalize the first letter and return the result
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  componentDidMount() {
    this.setState({ loading: true, progress: 0 }); // Initialize progress to 0

    fetch("/data.json")
      .then((res) => res.json())
      .then(this.onLoad);
  }

  onLoad = (data) => {
    this.setState({
      data: this.parseData(data),
      loading: false,
      progress: 100, // Update progress to 100 when loading is complete
    });
  };

  parseData(data) {
    const { sorters } = this.state;

    if (data && data.length && Array.isArray(sorters) && sorters.length) {
      data.sort(createSorter(...sorters));
    }

    return data;
  }

  render() {
    const { data, loading, progress } = this.state;

    return data ? this.renderData(data) : this.renderLoading(progress);
  }

  renderData(data) {
    if (data && data.length > 0) {
      const { filters } = this.state;
      const filteredData = data.filter(createFilter(...filters)); // Apply filters

      return (
        <>
          <Grid container xs={12}>
            <Paper>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <SimpleBreadcrumbs />
                  <Divider />
                  <Typography
                    sx={{ p: 2 }}
                    m="auto"
                    variant="overline"
                    gutterBottom
                  >
                    Rules Associated with the criteria:
                    <Typography
                      align="center"
                      variant="subtitle1"
                    >{`${formattedFilterValue}`}</Typography>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing="2"
                      sx={{ p: 1 }}
                    >
                      {filteredData.map((item) => (
                        <CustomizedDialogs key={item.id} item={item} />
                      )}
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        </>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading(progress) {
    return <LinearDeterminate progress={progress} />; // Pass progress as a prop
  }
}

export default List;
