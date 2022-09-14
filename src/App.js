import { Suspense } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';

// i18n
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('common');
  return (
    <Suspense fallback='loading'>
      <div>{t('foo')}</div>
      <Router>
        <ScrollToTop />
        <Navigation />
        <div id='main'>
          <Switch>
            {/* Home */}
            <Route exact path='/' element={<Home />} />

            {/* 404 */}
            <Route path='*' element={<NoMatch />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
