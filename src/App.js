import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import baseTheme from './themes';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PersonContext from './components/PersonContext';

function App() {
  const [person, setPerson] = useState();

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={baseTheme}>
        <HelmetProvider>
          <Helmet titleTemplate="%s - Address Book" />
          <PersonContext.Provider value={[person, setPerson]}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={Details} />
              <Route component={NotFound} />
            </Switch>
          </PersonContext.Provider>
        </HelmetProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
