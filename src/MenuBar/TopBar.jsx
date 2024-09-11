import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ClientSummary from "../dashboard/Summary/ClientSummary";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { navigatorPath } from "./constant/TopBarConst";
// import { BostonTopBar } from "./TopBarStyled";

const BostonTopBar = styled.div`
  padding: 8rem 5rem 0 5rem;
`;

const pages = [
  { name: "Dashboard", path: navigatorPath?.dashboard },
  { name: "Financial Form", path: navigatorPath?.financialForm },
  { name: "Investor Assessment", path: navigatorPath?.InvestmentPersonality },
  { name: "Advisor Analysis", path: navigatorPath?.advisorAnalysis },
];
const settings = ["Profile", "Logout"];

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const locationPath = window?.location?.pathname;

  const navigate = useNavigate();

  const handlePageMenu = (path) => {
    navigate(path);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <BostonTopBar>
      <AppBar
        // style={{ background: "#002a4a" }}
        style={{
          background: "#ffff",
          boxShadow: "0px 2px 4px -1px,  #002a4a, 0px 4px 5px 0px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* --------------------For large and medium screen------------- */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                height={30}
                alt="bostonLogo"
                src={"http://bostonharborwealth.com/img/logo-main-blue.png"}
              />
              {/* BOSTON HARBOR */}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "end" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageMenu(page.path)}
                  sx={{
                    height: "4rem",
                    // my: 2,
                    // color: "#002a4a",
                    display: "block",
                    boxShadow:
                      locationPath === page.path
                        ? "0 7px 0 -1px #1d7ad7db"
                        : "",
                    color:
                      locationPath === page.path
                        ? "0 7px 0 0 #1f5b95"
                        : "#002a4a",
                    fontSize: locationPath === page.path ? "14px" : "12.5px",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            {/* ---------------------------End Large screen-------------- */}

            {/* ---------------------------Small screen-------------- */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    style={{ color: "#002a4a" }}
                    key={page}
                    onClick={() => handlePageMenu(page.path)}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BOSTON HARBOR
            </Typography>
            {/* ---------------------------End Small screen-------------- */}

            <Box sx={{ flexGrow: 0, marginLeft: "1rem" }}>
              {/* <Tooltip title="Open settings"> */}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile" />
              </IconButton>
              {/* </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{ textAlign: "center", padding: "0 2px 0 2px" }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </BostonTopBar>
  );
};

export default TopBar;
