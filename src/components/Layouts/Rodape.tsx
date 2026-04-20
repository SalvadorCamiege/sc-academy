import styles from './Rodape.module.css';
import { FaLinkedinIn, FaFacebook ,  FaWhatsapp  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.logoPlaceholder}>
              <h1>SC ACADEMY</h1>  
          </div>

          <p className={styles.tagline}>
            A SC Academy é uma academia de formação em programação criada com o objetivo de capacitar alunos  do ensino médio e universitários que desejam aprender a programar do zero.
          </p>
        </div>

        <div className={styles.col}>
          <h3>Navegação</h3>
          <ul className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Fale Conosco</h3>
          <ul className={styles.list}>
            <li><Link to="/contactos">Escreve-se</Link></li>
            <li><Link to="/contactos">Ajuda</Link></li>
            <li><a href="tel:+244952729364">Liga</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colh3}>Contactos</h3>
          <p className={styles.colhp}>Email: exemplo@email.com</p>
          <p className={styles.colhp}>Telefone: +244 937 039 488</p>

           <div className={styles.socialContainer}>
              <a href="#" className={styles.linkedin}><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/profile.php?id=61582957817271" className={styles.facebook} target="_blank"><FaFacebook /></a>
              <a href="https://wa.me/244937039488" className={styles.whatsapp}><FaWhatsapp /></a>
            </div>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <span>
            Copyright © 2026 SCAcademy
          </span>
            <Link to="/politica" className={styles.policyLink}>
              Política de privacidade
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;