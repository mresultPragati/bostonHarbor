import './App.css';
import './OverrideStyled.css';
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from './dashboard';
import TopBar from './MenuBar/TopBar';
import { FinancialForm } from './financialForm/FinancialForm';
import { AdvisorAnalysis } from './advisorAnalysis/AdvisorAnalysis';
import InvestmentPersonality from './investorAssessment/InvestmentPersonality';
import { navigatorPath } from './MenuBar/constant/TopBarConst';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div style={{ padding: "0 3rem" }}>
        <Routes>
          <Route path={navigatorPath.dashboard} element={<Dashboard />} />
          <Route path={navigatorPath.financialForm} element={<FinancialForm />} />
          <Route path="/financialForm/:id" element={<FinancialForm />} />
          <Route path={navigatorPath.InvestmentPersonality} element={<InvestmentPersonality />} />
          <Route path={navigatorPath.advisorAnalysis} element={<AdvisorAnalysis />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
