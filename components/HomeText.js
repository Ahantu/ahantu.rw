import styles from "../styles/Home.module.css"

const HomeText = ({inactiveLogo, t}) => {
    return  (
        <section className={`${styles['main-text']} ${!inactiveLogo && styles.padded}`} >
            <div>
                <p>{t.heading}</p>
            </div>
            <p>{t.tagline}</p>
        </section>
    )
}



export default HomeText