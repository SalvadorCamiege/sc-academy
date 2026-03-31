import styles from './Rodape.module.css';
import { FaLinkedinIn, FaFacebook ,  FaWhatsapp  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoPlaceholder}>
            <img src={logo} alt="Costs" />  
        </div>
            <p className={styles.tagline}>
               Assessoria em tecnologia de informação, o teu futuro começa agora sc academy
            </p>
                <nav className={styles.nav}>
                   <ul className={styles.list}>
                      <li className={styles.item}>
                          <Link to="/">Home</Link>
                      </li>
                      <li className={styles.item}>
                          <Link to="/projectos">Sobre</Link>
                      </li>
                      <li className={styles.item}>
                          <Link to="/cursos">Cursos</Link>
                      </li>
                      <li className={styles.item}>
                          <Link to="/contactos">Contacto</Link>
                      </li>
                    </ul>
                </nav>
         <div className={styles.socialContainer}>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a href="#"target="_blank" className={styles.linkedin}>
                   <FaLinkedinIn />
                </a>

                <a href="#" target="_blank"className={styles.facebook}
                >
                  <FaFacebook />
                </a>

               <a href="https://wa.me/244937039488" target="_blank" className= {styles.whatsapp}
               >
                 <FaWhatsapp />
               </a>
              </li>
            </ul>
          </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <span>
            Copyright © 2026 SCAcademy - Aprendizagem de prática de tecnologias de informação
          </span>
          
          <a href="#politica" className={styles.policyLink}>
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;