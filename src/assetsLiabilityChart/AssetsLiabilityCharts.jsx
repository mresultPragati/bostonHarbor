import { AssetsChart } from "./AssetsChart";
import { LiabilityChart } from "./LiabilityChart";

export const AssetsLiabilityChart = () => {
  return (
    <div className="mb-5">
      <h2>Assets And Liability Breakdown</h2>
      <AssetsChart />
      <LiabilityChart />
    </div>
  );
};
