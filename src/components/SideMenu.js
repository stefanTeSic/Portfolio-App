import styles from './SideMenu.module.css'


const SideMenu = () => {
    return (
        <div className ={styles.main}>
            <div className ={styles.subdiv}>
                <div className ={styles.title}>First App</div>
                <ul>
                    <li><span class="fas fa-columns"></span><a href=""> Dashboard</a></li>
                    <li><span className="fas fa-cog"></span><a href=""> My Account</a> </li>
                    <li><span class="fas fa-key"></span><a href=""> API Keys</a></li>
                    <li><span class="fas fa-history"></span><a href=""> History</a></li>
                    <li><span class="fas fa-question-circle"></span><a href=""> Help</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu;