import { useState } from 'react'
import { Fragment } from 'react'
import { useIntl } from 'react-intl';


import InactiveLogo from './components/InactiveLogo'
import Navbar from './components/Navbar'
import HomeText from './components/HomeText'
import Input from './components/Input'
import ResultCard from './components/ResultCard'


import './styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'


import en from  './lang/en'
import fr from './lang/fr'
import rw from './lang/rw'





export default function App() {

  // const locale = useIntl().locale

  const translation = en
  const [inactiveLogo, setInactiveLogo] = useState(true)
  const [showResults, setShowResults] = useState(false)
  const [adminBoundaryData, setAdminBoundaryData] = useState({})

  const changeLanguageHandler = (e) => {
  }

  const adminBoundaryhandler = (adminBoundaryData) => {
    setShowResults(false)
    setAdminBoundaryData(adminBoundaryData)
    setShowResults(true)
  }

  const inputFocusHandler = () => {
    setInactiveLogo(false)
    setShowResults(false)
  } 

  const inputBlurHandler = () => {
    // setInactiveLogo(true)
  }
  

  return (
   <Fragment>
      <Navbar onChangeLanguage={changeLanguageHandler} t={translation}/>
      <InactiveLogo inactiveLogo={inactiveLogo}  t={translation}/>
      <HomeText t={translation}/>
      <Input onInputBlur={inputBlurHandler} onInputFocus={inputFocusHandler} onAdminDataRecieved={adminBoundaryhandler} t={translation}/>
      <ResultCard showResults={showResults} data={adminBoundaryData} t={translation}/>
    </Fragment>

  )
}






