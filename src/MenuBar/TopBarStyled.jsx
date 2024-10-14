import { Button } from "@mui/material";
import styled from "styled-components";

export const BostonTopBar = styled.div`
  // padding: 8rem 5rem 0 5rem;  // for top bar only
  padding: 0; // when sub top bar is in app.jsx
  // padding: 2rem 0rem 2rem 0rem; // for sub and top bar
`;

export const SummaryContainer = styled.div`
  /* padding: 10rem 5rem 0 5rem; */
  /* background-color: aqua; */
`;

// export const SubTopBarContainer = styled.div`
//   background-color: #002a4a; /* You can adjust the background color here */
//   color: #ffffff;
// `;

// Define the background and text colors
export const SubTopBarContainer = styled.div`
  background-color: #ffff; /* Dark blue-green background */
  color: #ffffff; /* Light text color for readability */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Add shadow to the sub-top bar */
`;

export const StyledButton = styled(Button)`
  color: #ffffff; /* White text */
  text-transform: none; /* Preserve the case of the button labels */
  font-weight: bold; /* Make the text bold */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.2); /* Subtle shadow on hover */
  }
`;
