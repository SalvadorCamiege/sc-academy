import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import styles from './NavBar.module.css';
import Container from './Container';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.NavBar}>
            <Container>
                <div className={styles.logoPlaceholder}>
                    <span>
                          Sc Academy
                    </span>
                </div>
               
                <div
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <span style={{ fontSize: "28px", color: "#fff" }}>✖</span>
                    ) : (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    )}
                </div>

                <ul className={`${styles.list} ${menuOpen ? styles.open : ""}`}>
                    <li className={styles.item} onClick={() => setMenuOpen(false)}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className={styles.item} onClick={() => setMenuOpen(false)}>
                        <Link to="/sobre">Sobre</Link>
                    </li>

                    <li className={styles.item} onClick={() => setMenuOpen(false)}>
                        <Link to="/cursos">Cursos</Link>
                    </li>

                    <li className={styles.item} onClick={() => setMenuOpen(false)}>
                        <Link to="/contactos">Contacto</Link>
                    </li>

                    <li onClick={() => setMenuOpen(false)}>
                        <a
                            href="https://wa.me/244912345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsapp}
                        >
                            <FaWhatsapp size={22} />
                            Fale conosco
                        </a>
                    </li>
                </ul>

                

            </Container>
        </nav>
    );
}

export default NavBar;