import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#ec6101',
    },
  },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
