import styles from "./Sobre.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

import sobre from '../../assets/img/sobre.png';
import icon1 from '../../assets/img/sobre/icon-1.png';
import icon2 from '../../assets/img/sobre/icon2.png';
import icon3 from '../../assets/img/sobre/icon3.png';
import icon4 from '../../assets/img/sobre/icon4.png';
import icon5 from '../../assets/img/sobre/icon5.png';
import icon6 from '../../assets/img/sobre/icon6.jpg';
import icon7 from '../../assets/img/sobre/icon7.webp';
import icon8 from '../../assets/img/sobre/icon8.webp';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

function Sobre() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const openModal = (service: any) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const servicos = [
    {
      img: icon1,
      title: "Criação de Sites",
      text: "Websites modernos e responsivos para empresas.",
      desc: "Desenvolvemos sites profissionais, rápidos e totalmente responsivos, pensados para gerar resultados reais para o seu negócio. Criamos interfaces modernas, otimizadas para SEO, garantindo maior visibilidade no Google. Nossos sites são focados na experiência do usuário, aumentando conversões, credibilidade da marca e presença digital. Ideal para empresas que querem crescer, atrair mais clientes e se destacar no mercado."
    },
    {
      img: icon2,
      title: "Trabalhos Académicos",
      text: "Apoio completo em projetos tecnológicos.",
      desc: "Prestamos apoio especializado na elaboração de TCCs, projetos e trabalhos académicos, com foco na excelência, originalidade e rigor científico. Acompanhamos todo o processo — desde a definição do tema até a entrega final — garantindo estrutura adequada, revisão técnica e alinhamento com as normas académicas. Ideal para estudantes que buscam qualidade, segurança e melhores resultados."
    },
    {
      img: icon3,
      title: "Cursos de Programação",
      text: "Do básico ao avançado.",
      desc: "Oferecemos cursos completos de programação, do básico ao avançado, com foco na prática real e desenvolvimento de projetos. Utilizamos uma metodologia moderna, com acompanhamento personalizado e suporte contínuo, preparando os alunos para o mercado de trabalho e ajudando-os a construir um portfólio sólido e competitivo."
    },
    {
      img: icon4,
      title: "Manutenção de Sites",
      text: "Segurança e performance garantidas.",
      desc: "Oferecemos serviços completos de manutenção de sites, garantindo segurança, estabilidade e alto desempenho. Realizamos atualizações constantes, correção de falhas, otimização de velocidade e proteção contra ameaças, assegurando que o seu site funcione perfeitamente e proporcione a melhor experiência aos seus usuários."
    },
    {
      img: icon5,
      title: "Edição de Vídeo",
      text: "Vídeos profissionais.",
      desc: "Oferecemos edição de vídeo profissional para redes sociais, empresas e conteúdos educativos, com alto padrão de qualidade visual e narrativa envolvente. Criamos conteúdos dinâmicos, estratégicos e impactantes, pensados para atrair atenção, aumentar o engajamento e fortalecer a identidade da sua marca no digital."
    },
    {
      img: icon6,
      title: "Mentoria",
      text: "Vídeos profissionais.",
      desc: "Oferecemos mentoria personalizada em programação e tecnologia, com acompanhamento individual e direcionamento estratégico. Criamos um plano de aprendizagem adaptado aos seus objetivos, ajudando você a desenvolver habilidades práticas, construir projetos reais e acelerar sua entrada no mercado de trabalho com mais confiança e preparação."
    },

    {
      img: icon8,
      title: "Desenvolvimento Mobile",
      text: "Aplicações Android & iOS.",
      desc: "Criamos aplicativos mobile completos e escaláveis para Android e iOS, com interfaces modernas, alta performance e integração com APIs. Transformamos ideias em soluções digitais reais, ideais para negócios, startups e projetos pessoais que precisam de presença forte no mobile."
    }, 

    {
      img: icon7,
      title: "Projetos de Construção Civil",
      text: "Plantas profissionais.",
      desc: "Desenvolvemos projetos completos de construção civil e plantas de residências, incluindo layout arquitetônico, dimensionamento de espaços e orientação técnica. Ajudamos na criação de projetos modernos, funcionais e bem estruturados, garantindo melhor aproveitamento do terreno e alinhamento com as necessidades do cliente."
    },

    {
      img: icon7,
      title: "Projetos de Construção Civil",
      text: "Plantas profissionais.",
      desc: "Desenvolvemos projetos completos de construção civil e plantas de residências, incluindo layout arquitetônico, dimensionamento de espaços e orientação técnica. Ajudamos na criação de projetos modernos, funcionais e bem estruturados, garantindo melhor aproveitamento do terreno e alinhamento com as necessidades do cliente."
    }
  ];

  return (
    <>
      <section className={styles.quemSomos}>
        <div className={styles.container}>  
          <div className={styles.texto}>
            <h1>Quem Somos</h1>
            <p>
              A <strong className={styles.textpin}>SC Academy</strong> é uma academia de formação em programação criada com o objetivo de capacitar alunos do ensino médio e universitários que desejam aprender a programar do zero, mas não têm acesso a formação prática nas suas instituições e acessível na área de tecnologia.
            </p>

            <p>
              O projeto nasce da necessidade crescente de muitos alunos não dominarem programação ou o mundo digital nem base de programação <strong className={styles.textpin}>SC Academy é a solução</strong>.
            </p>
          </div>

          <div className={styles.imagem}>
            <img src={sobre} alt="Equipe trabalhando" />
          </div>
        </div>
      </section>
      
      <section className={styles.servicos}>
        <h1>Nossos Serviços</h1>

        <p className={styles.descricao}>
          Na SC Academy, oferecemos uma variedade de serviços tecnológicos pensados para estudantes, empresas e empreendedores.
        </p>

        <div className={styles.cards}>
          {servicos.map((item, i) => (
            <motion.div
              className={styles.card}
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              onClick={() => openModal(item)}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedService.img} alt={selectedService.title} />
            <h2>{selectedService.title}</h2>
            <p>{selectedService.desc}</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}

     <section className={styles.scStatsSection}>
        <div className={styles.scStatsContainer}>
          <div className={styles.scStatsLeft}>
            <h1>Metas e Progresso</h1>
            <p>
              A SC Académica tem como missão impulsionar o acesso a conhecimento, <br />
              oferecendo soluções educacionais modernas e acessíveis. Trabalhamos continuamente para melhorar a experiência de aprendizagem dos nossos alunos.
            </p>

            <div className={styles.progressItem}>
              <span>Alunos ativos na plataforma</span>
              <span>80%</span>
              <div className={styles.progressBar}>
                <div style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Cursos concluídos</span>
              <span>65%</span>
              <div className={styles.progressBar}>
                <div style={{ width: "65%" }}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Satisfação dos estudantes</span>
              <span>90%</span>
              <div className={styles.progressBar}>
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

          <div className={styles.scStatsRight}>
              <div>
                <h3>+5.000</h3>
                <p>Estudantes</p>
              </div>

              <div>
                <h3>+120</h3>
                <p>Cursos disponíveis</p>
              </div>

              <div>
                <h3>+50</h3>
                <p>Formadores qualificados</p>
              </div>

              <div>
                <h3>+10</h3>
                <p>Parcerias educacionais</p>
              </div>
            </div>
        </div>
      </section>

      <section className={styles.scvaloressection}>
        <div className={styles.cvalorescontainer}>
          <h2 className={styles.scvalorestitle}>Nossos Valores</h2>

          <div className={styles.scvaloresgrid}>
            <div className={styles.scvalorescard}>
              <h3>📘 Excelência</h3>
              <p>Ensino de alta qualidade.</p>
            </div>

            <div className={styles.scvalorescard}>
              <h3>🤝 Compromisso</h3>
              <p>Foco no sucesso dos alunos.</p>
            </div>

            <div className={styles.scvalorescard}>
              <h3>💡 Inovação</h3>
              <p>Métodos modernos de ensino.</p>
            </div>

            <div className={styles.scvalorescard}>
              <h3>🌍 Responsabilidade</h3>
              <p>Impacto positivo na sociedade.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;