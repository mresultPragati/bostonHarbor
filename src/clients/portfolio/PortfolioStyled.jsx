import styled from "styled-components";
import { Box, TableCell, Typography } from "@mui/material";

export const StickyBox = styled(Box)`
  position: sticky, 
  top: 0, 
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
  text-wrap: wrap;
  @media (max-width: 600px) {
    text-wrap: wrap;
  }
`;

export const AmountText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ isNegative }) =>
    isNegative === "zero" ? "black" : isNegative ? "red" : "#059a7f"};

  // &::before {
  //   content: "${({ isNegative }) => (isNegative ? "+" : "-")}";
  //   margin-right: 5px; // Add space between the sign and the amount
  // }
`;

export const ValueText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ isNegative }) =>
    isNegative === "zero" ? "black" : isNegative ? "red" : "#059a7f"};
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  display: flex,
  justifyContent: center,
  width: 100%;

  // @media (min-width: 1024px) {
  //  width: 80%;
  //  transform: translateX(12%)
  // }

  //  @media (min-width: 960px) {
  //   width: 80%;
  //   }
    
  //   @media (min-width: 600px) {
  //     width: 80%;
  // transform: translateX(12%)
  // }
    

`;

export const Note = styled.p`
  padding: 10px 0;
  color: #9e9d9d;
  font-family: segoe ui;
  font-size: 15px;
  font-style: italic;
  margin-bottom: 2rem;
  display: flex;
  justify-content: end;
`;

// export const ValueText = styled(Typography)`
//   //   color: theme.palette.error.main,
//   //   fontWeight: "bold",
//   font-size: medium;
// `;
