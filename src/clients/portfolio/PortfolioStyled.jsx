import styled from "styled-components";
import { Box, Typography } from "@mui/material";

// Custom styled Box component
export const ValueBox = styled(Box)(({ theme }) => ({
  //   padding: theme.spacing(1), // Adds padding
  textAlign: "center", // Centers text
  //   border: `1px solid ${theme.palette.divider}`, // Adds border
}));

// Custom styled Typography component for amount text (positive values)
export const AmountText = styled(Typography)(({ theme }) => ({
  //   color: theme.palette.success.main, // Makes text green
  fontWeight: "bold", // Bold text
  fontSize: "large", // Larger font size
}));

// Custom styled Typography component for value text (negative values)
export const ValueText = styled(Typography)(({ theme }) => ({
  //   color: theme.palette.error.main, // Makes text red
  fontWeight: "bold", // Bold text
  fontSize: "large", // Larger font size
}));

export const StickyBox = styled(Box)(({ theme }) => ({
  position: "sticky", // Sticky positioning
  top: 0, // Stick to the top of the viewport
  zIndex: 1000, // High z-index to keep it on top of other content
  //   padding: theme.spacing(1),
  backgroundColor: "#002D57",
  color: "#fff",
  //   borderRadius: theme.shape.borderRadius,
  //   marginBottom: theme.spacing(8),
}));
