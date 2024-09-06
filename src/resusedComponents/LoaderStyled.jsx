import styled from "styled-components";

export const CircleLoader = styled.div`
  /* border: 4px solid transparent;
  border-radius: 50%;
  border-top: 9px solid #042f50;
  width: 130px;
  height: 130px;
  margin-top: 20rem;
  -webkit-animation: spin 2s linear infinite;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  } */

  /* border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; */

  border: 6px solid transparent;
  border-radius: 50%;
  border-top: 6px solid #042f50;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  -webkit-animation: spin 2s linear infinite;
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
  /* position: fixed;
  z-index: 999;
  display: block;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: show;
  margin: auto;

  bottom: 0;
  right: 0; */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(255, 255, 255, 0.679);  */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
