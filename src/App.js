import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <ThemeProvider>
      <GLobalStyle/>
      <AppRoutes />
    </ThemeProvider>
  );
}

const GLobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: black;
  }

  ul {
    list-style: none;
  }
`

export default App;