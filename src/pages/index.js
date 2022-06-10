import Head from 'next/head'
import { useState } from 'react'
import { Fragment } from 'react'
import { useRouter } from "next/router"
import usePlacesAutocomplete from "use-places-autocomplete";


import InactiveLogo from '../components/InactiveLogo'
import Navbar from '../components/Navbar'
import HomeText from '../components/HomeText'
import Input from '../components/Input'
import ResultCard from '../components/ResultCard'

import en from  '../lang/en'
import fr from '../lang/fr'
import rw from '../lang/rw'




export default function Home() {
  const router = useRouter()
  const {locale} = router
  const translation = locale === 'en' ? en : locale === 'fr' ? fr : locale == 'rw' ? rw : en
  const [inactiveLogo, setInactiveLogo] = useState(true)
  const [showResults, setShowResults] = useState(false)
  const [adminBoundaryData, setAdminBoundaryData] = useState({})

  const changeLanguageHandler = (e) => {
    const locale = e.target.value
    const path = locale + router.pathname
    router.replace(path, path, { locale })
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
      <Head>
        <title></title>
        <meta name="description" content={translation.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar onChangeLanguage={changeLanguageHandler} t={translation}/>
      <InactiveLogo inactiveLogo={inactiveLogo}  t={translation}/>
      <HomeText t={translation}/>
      <Input onInputBlur={inputBlurHandler} onInputFocus={inputFocusHandler} onAdminDataRecieved={adminBoundaryhandler} t={translation}/>
      <ResultCard showResults={showResults} data={adminBoundaryData} t={translation}/>
    </Fragment>

  )
}
