import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '@/components/Footer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{fontFamily:'Barlow'}}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  )
}
