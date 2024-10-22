import React from "react";
import { CircleLoader, LoaderDiv } from "./LoaderStyled";
import { Typography } from "@mui/material";
import { Dot, DotWrapper } from "./MUILoaderStyled";

const BostonLoader = ({ message = "Loading..." }) => {
  return (
    <>
      <LoaderDiv className="d-flex justify-content-center">
        {/* <CircleLoader></CircleLoader> */}
        <DotWrapper>
          <Dot />
          <Dot />
          <Dot />
        </DotWrapper>
        <Typography variant="h6" sx={{ marginTop: 2, color: "#123652" }}>
          {message}
        </Typography>
      </LoaderDiv>
    </>
  );
};

export default BostonLoader;
