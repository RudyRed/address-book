import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import baseTheme from './themes';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={baseTheme}>
        <HelmetProvider>
          <Helmet titleTemplate="%s - Address Book" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:personId" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </HelmetProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
