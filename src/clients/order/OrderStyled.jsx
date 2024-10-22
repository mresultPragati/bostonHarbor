import { ListItem, TableCell } from "@mui/material";
import styled from "styled-components";

export const BostonTableHead = styled(TableCell)`
  font-weight: "bold";
`;

export const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #f0f0f0; // Change this to your desired color
  }
`;
