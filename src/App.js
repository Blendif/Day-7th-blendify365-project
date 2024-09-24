import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import AffiliatePage from './pages/AffiliatePage';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/blogs" component={BlogPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/affiliate" component={AffiliatePage} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
  
