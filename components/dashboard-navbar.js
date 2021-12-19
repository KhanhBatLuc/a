import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const useStyles = makeStyles((theme) => ({
  name: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  buttonShowUse: {
    padding: "3px 9px",
  },
  breakcrum: {
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));

export const DashboardNavbar = (props) => {
  const classes = useStyles();
  const { onSidebarOpen, ...other } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              fontWeight: "subtitle1.fontWeight",
              fontSize: "h6.fontSize",
              ml: 2,
            }}
            className={classes.breakcrum}
          >
            <Link underline="hover" color="#212121" href="/">
              Card
            </Link>
            <Link underline="hover" color="#212121" href="/">
              Core
            </Link>
          </Breadcrumbs>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="info"
            id="basic-button"
            variant="outlined"
            size="small"
            onClick={handleClick}
            className={classes.buttonShowUse}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar sx={{ mr: 1 }}>K</Avatar>
              <Typography className={classes.name}>Khanh</Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
