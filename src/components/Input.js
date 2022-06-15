import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation, faLocationDot, faSearch, faClose} from "@fortawesome/free-solid-svg-icons";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Spinner from './Spinner';

import styles from "../styles/Home.module.css";
import { getadminBoundaryFromCoordinates } from "../api";




 
const Input = ({onInputFocus, onInputBlur, onAdminDataRecieved, t}) => {
    const [validBrowser, setValidBroser] = useState(true)
    const [locationError, setLocationError] = useState(false)
    const [locationErrorMessage, setLocationErrorMessage] = useState("")
    const [loadingResults, setloadingResults] = useState(false)

    const {
        ready,
        value,  
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        requestOptions: {
          componentRestrictions: { country: "rw" }
        },
        debounce: 300,
        
      });
      const ref = useOnclickOutside(() => {
        clearSuggestions();
      });

      const handleInput = (e) => {
        setValue(e.target.value);
      };

      const handleSelect =
      ({ description }) =>
        () => {
          clearSuggestions();
          setloadingResults(true)
          getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(async ({ lat, lng }) => {
              setloadingResults(true)
              const apiResults = await getadminBoundaryFromCoordinates({ lat, lng })
              setloadingResults(false)
              onAdminDataRecieved(apiResults)
            })
            .catch((error) => {
              console.log("😱 Error: ", error);
            });
        };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
        return (
          <li key={place_id} onClick={handleSelect(suggestion)}>
            <i><FontAwesomeIcon icon={faLocationDot}/></i>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
            {/* <p><span>{main_text}</span><span>{secondary_text}</span></p> */}
          </li>
        );
      });
  
  
    const onAllowLocation = (location) => {
      setloadingResults(true)
      getadminBoundaryFromCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }).then(apiResults => {
        setloadingResults(false)
        onAdminDataRecieved(apiResults)
      }).catch(e => {
        console.log(e)
      })
    }
  
    const onBlockLocation = (error) => {
      toast.error(t.locationError)
    }
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
      navigator.geolocation.getCurrentPosition(onAllowLocation, onBlockLocation)
    }

    return (
        <section className={styles['input-container']} ref={ref}>
          <ToastContainer 
          position='top-center'
          hideProgressBar={true}

          />
          <button onClick={handleSubmit}>
                <i>
                <FontAwesomeIcon icon={faLocation}/>
                </i>
                {t.buttonText}
            </button>
            <p>{t.or}</p>
              <input type={"text"} name="search" placeholder={t.inputPlaceHolder} autoComplete={'off'} value={value} onChange={handleInput} disabled={!ready} onFocus={onInputFocus}
              onBlur={onInputBlur}/>
              <span className={styles['tooltip-text']}>Currrent location works best on mobile</span>
            {status === "OK" && <ul className={styles['place_suggestion']}>{renderSuggestions()}</ul>}
            {loadingResults && <Spinner/>}
        </section>
    )       
}

export default Input