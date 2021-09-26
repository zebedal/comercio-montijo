import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
