import './style';
import App from './components/app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const AppWithTheme = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

export default AppWithTheme;