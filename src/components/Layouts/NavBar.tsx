import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import styles from './NavBar.module.css';
import Container from './Container';
import logo from '../../assets/logo/logo.png';


function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <Container>
                <Link to="" className={styles.logo}>
                    <img src={logo} alt="Costs" />
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cursos">Cursos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contactos">Contacto</Link>
                    </li>
                </ul>
                  <a
                    href="https://wa.me/244912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                     className={styles.whatsapp}
                    >
                    <FaWhatsapp size={22} />
                       Fale conosco
                    </a>
            </Container>
        </nav>
    );
}

export default NavBar;