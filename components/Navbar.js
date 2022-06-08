import styles from '../styles/Home.module.css'
import Image from 'next/image'



const Navbar = ({onChangeLanguage, t, locale}) => {
    return (
        <header className={styles.navbar}>
            <nav role="header">
                <ul>
                    <li>
                        <a>
                        <img src="/logo.svg" className={styles.logo} alt="logo"></img>
                        <img src="/logo-text.svg" ></img>
                        </a>
                    </li>
                    <li>
                        <div className={styles['select-container']}>
                            <select className={styles.select} onChange={onChangeLanguage} defaultValue={locale}>
                                <option value="en">
                                    {/* <img src="/english-flag.svg"></img> */}
                                    {t.english}
                                </option>
                                <option value="rw">
                                        {/* <img src="/kinyarwanda-flag.svg"></img> */}
                                            {t.kinyarwanda}
                                </option>
                                <option value="fr">
                                    {/* <img src="/french-flag.svg"></img> */}
                                    {t.french}
                                </option>
                        </select>
                        <span className={styles.focus}></span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Navbar