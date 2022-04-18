// Components
import Tabs from './components/Tabs';
// Functions
import { ThemeProvider } from '@mui/material';
// Configs
import { theme } from './config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tabs />
    </ThemeProvider>
  );
}

export default App;
