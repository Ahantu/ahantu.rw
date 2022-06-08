import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudArrowDown,faCopy, faClone} from "@fortawesome/free-solid-svg-icons"
import {CopyToClipboard} from 'react-copy-to-clipboard';


const Card = ({data, t}) => {
    return (
        <>
        <div className={styles['card-heading']}>
            <span>{t.resultsText}</span>
           {/* <button>
           <i>
                <FontAwesomeIcon icon={faCloudArrowDown}/>
            </i>
            {t.saveIconText}
           </button> */}
           <CopyToClipboard text={`${data.province}, ${data.district}, ${data.sector}, ${data.cell}, ${data.village}`}>
           <button>
           <i>
                <FontAwesomeIcon icon={faCopy}/>
            </i>
            {t.copyIconText}
           </button>
           </CopyToClipboard>
        </div>
        <div className={styles['result-card']}>
            <div className={styles['card-column']}>
                <div className={styles['card-row']}>
                    <p className={styles['result-title']}>{t.city}</p>
                    <div className={styles['result-data']}>
                    <CopyToClipboard text={data.province}>
                        <button>
                            <p>{data.province}</p>
                            <i className={styles['result-data-icon']}>
                                <FontAwesomeIcon icon={faClone}/>
                            </i>
                            <p className={styles['copy-text']}>{t.copyIconText}</p>
                        </button>
                    </CopyToClipboard>
                    </div>
                </div>
                    <div>
                        <p className={styles['result-title']}>{t.province}</p>
                        <div className={styles['result-data']}>
                            <CopyToClipboard text={data.province}>
                                <button>
                                    <p>{data.province}</p>
                                    <i className={styles['result-data-icon']}>
                                        <FontAwesomeIcon icon={faClone}/>
                                    </i>
                                    <p className={styles['copy-text']}>{t.copyIconText}</p>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div>
                        <p className={styles['result-title']}>{t.district}</p>
                        <div className={styles['result-data']}>
                            <CopyToClipboard text={data.district}>
                                <button>
                                    <p>{data.district}</p>
                                    <i  className={styles['result-data-icon']}>
                                        <FontAwesomeIcon icon={faClone}/>
                                    </i>
                                    <p className={styles['copy-text']}>{t.copyIconText}</p>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
            </div>
            <div className={styles['card-column']}>
            <div>
                    <p className={styles['result-title']}>{t.sector}</p>
                    <div className={styles['result-data']}>
                            <CopyToClipboard text={data.sector}>
                                <button>
                                    <p>{data.sector}</p>
                                    <i  className={styles['result-data-icon']}>
                                        <FontAwesomeIcon icon={faClone}/>
                                    </i>
                                    <p className={styles['copy-text']}>{t.copyIconText}</p>
                                </button>
                                
                            </CopyToClipboard>
                        </div>
                </div>
                <div>
                    <p className={styles['result-title']}>{t.cell}</p>
                    <div className={styles['result-data']}>
                            <CopyToClipboard text={data.cell}>
                                <button>
                                    <p>{data.cell}</p>
                                    <i  className={styles['result-data-icon']}>
                                        <FontAwesomeIcon icon={faClone}/>
                                    </i>
                                    <p className={styles['copy-text']}>{t.copyIconText}</p>
                                </button>
                            </CopyToClipboard>
                        </div>
                </div>
                <div>
                    <p className={styles['result-title']}>{t.village}</p>
                    <div className={styles['result-data']}>
                            <CopyToClipboard text={data.village}>
                                <button>
                                    <p>{data.village}</p>
                                    <i  className={styles['result-data-icon']}>
                                        <FontAwesomeIcon icon={faClone}/>
                                    </i>
                                    <p className={styles['copy-text']}>{t.copyIconText}</p>
                                </button>
                            </CopyToClipboard>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

const ResultCard = ({showResults, data, t}) => {
    return (
    <>
    {showResults && <Card data={data} t={t}/>}   
    </>
    )
}

export default ResultCard