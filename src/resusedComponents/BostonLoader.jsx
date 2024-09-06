import { CircleLoader, LoaderDiv } from "./LoaderStyled";

const BostonLoader = () => {
  return (
    <>
      <LoaderDiv className="d-flex justify-content-center">
        <CircleLoader></CircleLoader>
      </LoaderDiv>
    </>
  );
};

export default BostonLoader;
