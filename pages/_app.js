import usePlacesAutocomplete from "use-places-autocomplete";

import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'


function MyApp({ Component, pageProps }) {
  <ToastContainer
  className="impct-toast"
  position="top-center"
  autoClose={3000}
  hideProgressBar
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnVisibilityChange
  draggable={false}
  pauseOnHover
  transition={Slide}
/>
  return <Component {...pageProps} />
}

export default MyApp
