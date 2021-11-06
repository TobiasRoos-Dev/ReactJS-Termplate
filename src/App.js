import { Suspense } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Suspense fallback='loading'>
      <Router>
        <Navigation />
        <div id='main'>
          <Routes>
            {/* Home */}
            <Route exact path='/' element={<Home />} />

            {/* 404 */}
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
