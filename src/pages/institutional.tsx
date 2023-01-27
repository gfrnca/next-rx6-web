/* General */
import Head from 'next/head'

/* Components */
import InstitutionalPage from '../components/templates/Institutional/InstitutionalPage';

const Institutional: React.FC = () => {
  return (
    <div>
      <Head>
        <title>RX6 - Institucional</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <InstitutionalPage />
    </div>
  )
}

export default Institutional;