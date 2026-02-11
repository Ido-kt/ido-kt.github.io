function RuleCard({ rule }) {
  return (
    <>
      <Grid item xs={12}>
        <Stack direction="row" spacing={1}>
          <Grid item xs={2} sm={4} md={4}>
            <Button
              size="large"
              component={Link}
              to={{
                pathname: "/Keyboard/NoninteractiveTabindex",
                pageName: `{rule.name}`
              }}
              variant="outlined"
            >
              {rule.id} {rule.name}
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
}

class KeyboardLinks extends Component {
  constructor(props) {
    super(props);
    const filteredRules = data.reduce(function (filtered, rule) {
      if (data.criteria == "keyboard") {
        var selectedRule = { name: rule.name, newProperty: "Foo" };
        filtered.push(selectedRule);
        console.log(selectedRule);
        console.log(filteredRules);
      }
      return filtered;
    }, []);
    this.state = {
      data: data
    };
  }

  render() {
    const keyboard_list = this.state.data.map((e) => {
      return (
        <Container key={e.id} maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <RuleCard rule={e} />
        </Container>
      );
    });
    return (
      <>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Typography m="auto" variant="overline">
                  Rules associated with Keyboards
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {keyboard_list}
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Typography m="auto" variant="overline">
                  Keyboard Issues
                </Typography>
                <Divider sx={{ mb: 2 }}></Divider>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default KeyboardLinks;
