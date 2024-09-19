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
import {
  navigatorPath,
  returnCssTopbar,
  topbarMenu,
} from "./constant/TopBarConst";
// import { BostonTopBar } from "./TopBarStyled";

const BostonTopBar = styled.div`
  padding: 8rem 5rem 0 5rem;
`;

const settings = ["Profile", "Logout"];

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [subMenuAnchor, setSubMenuAnchor] = useState(null);
  const locationPath = window?.location?.pathname;

  const navigate = useNavigate();

  const handlePageMenu = (path, e) => {
    if (e?.ctrlKey || e?.metaKey) window.open(path, "_blank");
    else navigate(path);
    setSubMenuAnchor(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const subMenuHandleOpne = (event) => {
    setSubMenuAnchor(event.currentTarget);
  };

  const subMenuHandleClose = () => {
    setSubMenuAnchor(null);
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
              {topbarMenu.map((page, index) => (
                <>
                  <Button
                    // key={page}
                    onClick={(e) => {
                      if (page.subMenu?.length > 0) subMenuHandleOpne(e);
                      else handlePageMenu(page.path, e);
                    }}
                    sx={returnCssTopbar(page, locationPath)}
                    // {
                    //   height: "4rem",
                    //   // my: 2,
                    //   // color: "#002a4a",
                    //   display: "block",
                    //   boxShadow:
                    //     page?.subMenu && page?.subMenu?.length > 0
                    //       ? page?.subMenu[index]?.menuPath === locationPath
                    //         ? "0 7px 0 -1px #1d7ad7db"
                    //         : ""
                    //       : locationPath === page.path
                    //       ? "0 7px 0 -1px #1d7ad7db"
                    //       : "",

                    //   // page?.subMenu[index]?.menuPath === locationPath
                    //   //   ? "0 7px 0 -1px #1d7ad7db"
                    //   //   : ""
                    //   // : locationPath === page.path
                    //   // ? "0 7px 0 -1px #1d7ad7db"
                    //   // : "",
                    //   color:
                    //     locationPath === page.path
                    //       ? "0 7px 0 0 #1f5b95"
                    //       : "#002a4a",
                    //   fontSize: locationPath === page.path ? "14px" : "12.5px",
                    // }
                  >
                    {page.name}
                  </Button>
                  {page?.subMenu && page?.subMenu?.length > 0 ? (
                    <>
                      <Menu
                        sx={{ mt: "50px", left: "2rem" }}
                        id="menu-appbar"
                        anchorEl={subMenuAnchor}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(subMenuAnchor)}
                        onClose={subMenuHandleClose}
                      >
                        {page?.subMenu?.map((item) => (
                          <MenuItem
                            key={item}
                            onClick={(e) => handlePageMenu(item.menuPath, e)}
                          >
                            <Typography
                              sx={{
                                textAlign: "center",
                                padding: "2px 3px 2px 3px",
                              }}
                            >
                              {item?.menuItem}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </Box>
            {/* ---------------------------End Large screen-------------- */}

            {/* ---------------------------Small screen-------------- */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                style={{ backgroundColor: "#002f56" }}
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
                {topbarMenu.map((page) => (
                  <MenuItem
                    style={{ color: "#002a4a" }}
                    key={page}
                    onClick={(e) => handlePageMenu(page.path,e)}
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
              {/* BOSTON HARBOR */}
              <img
                height={30}
                alt="bostonLogo"
                src={"http://bostonharborwealth.com/img/logo-main-blue.png"}
              />
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
