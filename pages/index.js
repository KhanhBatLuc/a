import { Box, Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { DashboardLayout } from "../components/dasboard-layout";
import { Cards } from "../components/cards";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchCard from "../components/cards/search";
import Tooltip from "@mui/material/Tooltip";

const DashBoard = () => (
  <>
    <Head>
      <title>Dashboard | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 6,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <SearchCard />
          </Grid>
          <Grid item xs={2}>
            <Tooltip title="Add Card" placement="top">
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <AddCircleOutlineIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          {/* item */}
          <Grid item lg={3} sm={4} md={3} xs={6}>
            <Cards />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={6}>
            <Cards image="/static/images/cards/team.jpg" name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={6}>
            <Cards image="/static/images/cards/khanh.jpg" name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={6}>
            <Cards image="/static/images/cards/khanh.jpg" name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={6}>
            <Cards image="/static/images/cards/khanh.jpg" name="Khanh" />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={6}>
            <Cards image="/static/images/cards/khanh.jpg" name="Khanh" />
          </Grid>

          {/* item */}
        </Grid>
      </Container>
    </Box>
  </>
);

DashBoard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DashBoard;
