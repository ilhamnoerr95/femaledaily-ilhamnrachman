import '/src/styles/globals.css'
import Layout from './layouts/Layout';
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
  )
}
