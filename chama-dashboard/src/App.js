import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Management from "./pages/Management";
import Members from "./pages/Members";
import Savings from "./pages/Savings";
import Loans from "./pages/Loans";
import Balance from "./pages/Balance";
import ApprovedTransactions from "./pages/ApprovedTransactions";
import PendingTransactions from "./pages/PendingTransactions";
import Notifications from "./pages/Notifications";
import Member from "./pages/Member";
import SideBar from "./components/SideBar";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <Router>
      <div className="cont">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
        <main className="main">
          <TopHeader />
          <div className="main-cont">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/management" element={<Management />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<Member />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/balance" element={<Balance />} />
              <Route
                path="/transactions/approved"
                element={<ApprovedTransactions />}
              />
              <Route
                path="/transactions/pending"
                element={<PendingTransactions />}
              />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
