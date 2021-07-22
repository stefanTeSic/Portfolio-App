import styles from './Dashboard.module.css'
import SideMenu from '../SideMenu'
import Navbar from '../Navbar'

const Dashboard = () => {

    return(
        <div className = {styles.main}>
            <SideMenu />
                <Navbar />   
                <div className={styles.firstNumberDiv}>
                    single
                </div>
                <div className={styles.secondNumberDiv}>
                    multiple
                </div>   
        </div>
    )
}

export default Dashboard;