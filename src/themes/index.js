import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  typography: {
    fontSize: 12,
  },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
