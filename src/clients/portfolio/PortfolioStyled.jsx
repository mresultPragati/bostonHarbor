import styled from "styled-components";
import { Box, TableCell, Typography } from "@mui/material";

export const StickyBox = styled(Box)`
  position: "sticky", // Sticky positioning
  top: 0, // Stick to the top of the viewport
  zIndex: 1000, 
  backgroundColor: "#002D57",
  color: "#fff",
  display: flex,
  justifyContent: center,

   @media (max-width: 960px) {
    width: 80%;
    }
    
    @media (max-width: 1024px) {
    width: 100%;
    display: block;
    transform: translateX(3rem),
  }
  
`;

export const VerticalDivider = styled.div`
  width: 2px;
  height: auto;
  background-color: #ddd;
  @media (max-width: 960px) {
    display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const OverviewTitle = styled(Typography)`
  font-size: 15px !important;
  color: #1967d2;
  font-weight: bold !important;
  white-space: nowrap;
`;

export const AmountText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ isPositive }) =>
    isPositive
      ? "#007560"
      : "red"}; // Conditional color based on the isPositive prop
  text-decoration: ${({ isHighlighted }) =>
    isHighlighted ? "underline" : "none"};
  // &::before {
  //   content: "${({ isPositive }) => (isPositive ? "+" : "-")}";
  //   margin-right: 5px; // Add space between the sign and the amount
  // }
`;

export const ValueText = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

// Custom styles for the main boxes
export const ValueBox = styled(Box)(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   backgroundColor: theme.palette.background.paper,
  //   borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  // border: `1px solid ${theme.palette.divider}`,
}));

// Custom styles

export const BoldCell = styled(TableCell)`
  font-weight: bold !important;
`;

export const CurrencyCell = styled(TableCell)`
  color: ${({ isNegative }) =>
    isNegative === "zero" ? "black" : isNegative ? "red" : "green"} !important;
`;

export const StickBox = styled(Box)`
  position: sticky;
  top: 8.2rem; /* The distance from the top of the viewport */
  z-index: 100; /* To ensure it's on top of other elements */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: add a subtle shadow */
`;

// export const AmountText = styled(Typography)`
//   //   color: theme.palette.success.main,
//   //   fontWeight: "bold",
//   font-size: medium;
// `;

// export const ValueText = styled(Typography)`
//   //   color: theme.palette.error.main,
//   //   fontWeight: "bold",
//   font-size: medium;
// `;
