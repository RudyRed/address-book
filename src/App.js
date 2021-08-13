/**
 * @file App component.
 */

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';

import baseTheme from './themes';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={baseTheme}>
        <HelmetProvider>
          <Helmet titleTemplate="%s - React Boilerplate" />
          <Navigation />

          <Grid container>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
