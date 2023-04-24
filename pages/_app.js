import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import store from '@/store/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
