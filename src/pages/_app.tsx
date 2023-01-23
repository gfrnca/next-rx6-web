/* General */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

/* Global Style */
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

/* Components */

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      { /* Global Styles Import */ }
      <GlobalStyles />
    </ThemeProvider>
  ) 
}

export default App;
