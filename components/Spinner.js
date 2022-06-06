import styles from '../styles/Spinner.module.css'

const Spinner = () => {
    const circles = [...Array(8)].map((_, index) => {
        return (
          <div key={index}>
            <div className={styles['div-after']}></div>
          </div>
        )
      })
    
      return (
        <div className={styles['lds-roller']}>
          {circles}
        </div>
      )
}

export default Spinner