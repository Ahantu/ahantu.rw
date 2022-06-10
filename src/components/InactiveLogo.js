
import styles from "../styles/Home.module.css"


const InactiveLogo = ({inactiveLogo}) => {
    return (
        <>
            <div className={`${styles['inactive-logo']} ${!inactiveLogo && styles.hide}`}>
            <img src="/Inactive.svg" alt="inactive logo" ></img>
        </div>
       
        </>

    )
}

export default InactiveLogo