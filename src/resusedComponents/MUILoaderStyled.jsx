import { styled, keyframes } from "@mui/system";
import { Typography, Box } from "@mui/material";

// -------------------------------new loader style-----------------------------------

const dotBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-50%);
    opacity: 0.5;
  }
`;

// BostonLoader Container
export const LoaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Full viewport height */
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Slightly transparent background */
`;

// Dots wrapper
export const DotWrapper = styled(Box)`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px; /* Length of the loader */
`;

// Individual dots
export const Dot = styled(Box)`
  width: 15px;
  height: 15px;
  background-color: #123652 !important; /* Dot color */
  border-radius: 50%;
  animation: ${dotBounce} 1.2s ease-in-out infinite;

  &:nth-of-type(1) {
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`;
