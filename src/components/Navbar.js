import styles from './Navbar.module.css'

const Navbar = () => {
    return(
    <div className={styles.navDiv}>
        <nav>
            <ul>
                 <li><a href="">Logout</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar;