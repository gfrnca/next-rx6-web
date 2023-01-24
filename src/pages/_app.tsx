/* General */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Footer from '../components/organisms/Footer/Footer';
import Navbar from '../components/organisms/Navbar/Navbar';

/* Global Style */
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

/* Components */

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      { /* Global Styles Import */ }
      <GlobalStyles />
    </ThemeProvider>
  ) 
}

export default App;
