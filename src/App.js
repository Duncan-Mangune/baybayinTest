import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./app/HomePage";
import BaybayinHistory from "./app/baybayinhistory/page";
import LearnBaybayin from "./app/learnbaybayin/page";
import Tutorials from "./pages/Tutorials";
import Practice from "./pages/Practice";
import WriteName from "./pages/WriteName";
import PromotionalContents from "./app/promotionalcontents/page";
import AboutPage from "./app/about/page";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/history">History</Link> |{" "}
        <Link to="/learn">Learn</Link> |{" "}
        <Link to="/practice">Practice</Link> |{" "}
        <Link to="/write-name">Write Name</Link> |{" "}
        <Link to="/promotions">Promotions</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<BaybayinHistory />} />
        <Route path="/learn" element={<LearnBaybayin />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/write-name" element={<WriteName />} />
        <Route path="/promotions" element={<PromotionalContents />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
