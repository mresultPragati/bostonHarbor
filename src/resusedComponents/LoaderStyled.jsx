import styled from "styled-components";

export const CircleLoader = styled.div`
  border: 6px solid transparent;
  border-radius: 50%;
  border-top: 6px solid #042f50;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column; /* Stack dots and message vertically */
  align-items: center;
  justify-content: center;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  position: fixed; /* Stays in place while scrolling */
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(
    255,
    255,
    255,
    1
  ); /* Optional: Add a white background */
`;
