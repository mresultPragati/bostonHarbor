import React from "react";
import { Box, Button, Toolbar } from "@mui/material";
import styled from "styled-components";
import { StyledButton, SubTopBarContainer } from "./TopBarStyled";
import {
  navigatorPath,
  returnSubTopbarCss,
  subTopItem,
} from "./constant/TopBarConst";
import { useLocation, useNavigate } from "react-router-dom";

const SubTopBar = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();
  const clients = JSON.parse(localStorage.getItem("clients"));
  console.log("id, name", clients);

  return (
    <SubTopBarContainer>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
          {subTopItem.map((item, index) => {
            // const isActive = location.pathname.startsWith(item.path);
            // const isActive = location.pathname === item.path;
            return (
              <React.Fragment key={index}>
                {/* {isActive ? (
                  <ActiveButton>{item.label}</ActiveButton>
                ) : (
                  <StyledButton>{item.label}</StyledButton>
                )} */}
                <Button
                  size="small"
                  //   style={{
                  //     // padding: "0 0.8rem 0 0.8rem",
                  //     // // width: "min-content",
                  //     // textAlign: "left",
                  //     // fontSize: "12px",
                  //   }}
                  sx={returnSubTopbarCss(item, location)}
                  onClick={(e) => {
                    if (e?.ctrlKey || e?.metaKey)
                      window.open(
                        `${item.path}/${clients?.uniqueId}`,
                        "_blank"
                      );
                    else navigate(`${item.path}/${clients?.uniqueId}`);
                  }}
                >
                  {item.label}
                </Button>
              </React.Fragment>
            );
          })}
        </Box>
      </Toolbar>
    </SubTopBarContainer>
  );
};

export default SubTopBar;
