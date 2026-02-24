import img1 from '../../assets/img/img-1.png';
import styles from "./Home.module.css";
import { FaStar } from "react-icons/fa";

function Home() {
  return (
     <>
    <section className={styles.heroSection}>
      <div className={styles.heroTop}>
        <h1>Aprende programação e tecnologia <br /> com orientação real</h1>
        <div className={styles.imageWrapper}>
            <img src={img1} alt="Costs" />
        </div>
      </div>

      <div className={styles.heroBottom}>
        <div className={styles.heroText}>
          <p>"Cada jornada começa com orientação e <br /> a tua pode começar agora"</p>
        </div>
        
        <div className={styles.satisfaction}>
          <p>Nível de satisfação</p>
          <div className={styles.stars}>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
          </div>
        </div>
      </div>
    </section>

    <section>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, qui exercitationem. Officia voluptates, sint amet dolorem magni nam veniam fugit nobis. Porro accusamus suscipit nesciunt vero fugit placeat corrupti maxime.</p>

         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, qui exercitationem. Officia voluptates, sint amet dolorem magni nam veniam fugit nobis. Porro accusamus suscipit nesciunt vero fugit placeat corrupti maxime.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, qui exercitationem. Officia voluptates, sint amet dolorem magni nam veniam fugit nobis. Porro accusamus suscipit nesciunt vero fugit placeat corrupti maxime.</p>
    </section>

    

  </>);
}

export default Home;