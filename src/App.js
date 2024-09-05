import './App.css';
import './OverrideStyled.css';
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from './dashboard';
import TopBar from './MenuBar/TopBar';
import { FinancialForm } from './financialForm/FinancialForm';
import { AdvisorAnalysis } from './advisorAnalysis/AdvisorAnalysis';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div style={{ padding: "0 5rem 0 5rem" }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/financialForm' element={<FinancialForm />} />
          <Route path='/advisorAnalysis' element={<AdvisorAnalysis />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
