import './App.css';
import './OverrideStyled.css';
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from './dashboard';
import TopBar from './MenuBar/TopBar';
import { FinancialForm } from './financialForm/FinancialForm';
import InvestmentPersonality from './investorAssessment/InvestmentPersonality';
import { navigatorPath } from './MenuBar/constant/TopBarConst';
import { AssetsChart } from './assetsLiabilityChart/AssetsChart';
import { AssetsLiabilityChart } from './assetsLiabilityChart/AssetsLiabilityCharts';
import { AdvisorAnalysis } from './analysis/advisorAnalysis/AdvisorAnalysis';
import { StockAnalysis } from './analysis/stockAnalysis/StockAnalysis';
import { TaxAnalysis } from './analysis/taxAnalysis/TaxAnalysis';
import PieChart3D from './Test';

function App() {
  return (
    <div className="App">
      <TopBar />
      <PieChart3D />
      <div style={{ padding: "0 3rem" }}>
        <Routes>
          <Route path={navigatorPath.dashboard} element={<Dashboard />} />
          <Route path={navigatorPath.financialForm} element={<FinancialForm />} />
          <Route path="/financialForm/:id" element={<FinancialForm />} />
          <Route path="/assetsLiabilityDetails/:id" element={<AssetsLiabilityChart />} />
          <Route path={navigatorPath.InvestmentPersonality} element={<InvestmentPersonality />} />
          <Route path={navigatorPath.advisorAnalysis} element={<AdvisorAnalysis />} />
          <Route path={navigatorPath.stockAnalysis} element={<StockAnalysis />} />
          <Route path={navigatorPath.taxAnalysis} element={<TaxAnalysis />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
