import { useState } from "react";
import styles from './Cursos.module.css';

import img5 from '../../assets/img/img5.png';
import img6 from '../../assets/img/img6.png';
import img7 from '../../assets/img/img7.png';
import img8 from '../../assets/img/img8.png';
import img9 from '../../assets/img/uiux.jfif';
import img10 from '../../assets/img/fotoshop.jfif';
import img11 from '../../assets/img/images (5).jfif';
import img12 from '../../assets/img/rosa.jfif';
import img13 from '../../assets/img/miria.webp'; 
import img14 from '../../assets/img/git.png'; 
import img15 from '../../assets/img/next.jpg'; 
import img16 from '../../assets/img/js.webp'; 
import img17 from '../../assets/img/img 17.jpg';
import img18 from '../../assets/img/img 18.jfif';  

// ✅ TIPAGEM DO CURSO
type Curso = {
  titulo: string;
  descricao: string;
  img: string;
  preco?: {
    presencial: string;
    online: string;
    domicilio: string;
    duracao: string;
  };
};

function Cursos() {

  const [modalOpen, setModalOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState<Curso | null>(null);

  const cursos: Curso[] = [
    {
      titulo: "Programação Web",
      descricao: "Aprenda a criar sites modernos e responsivos com HTML & CSS.",
      img: img7
    },
    {
      titulo: "JavaScript",
      descricao: "Domine a lógica da programação e interatividade web.",
      img: img13
    },
    {
      titulo: "React",
      descricao: "Construa aplicações modernas com React JS.",
      img: img12
    },
    {
      titulo: "Linguagem C",
      descricao: "Fundamentos sólidos de programação e algoritmos.",
      img: img11
    },
    {
      titulo: "Node.js",
      descricao: "Crie servidores e APIs com JavaScript no backend.",
      img: img5
    },
    {
      titulo: "Python",
      descricao: "Aprenda programação versátil para web, dados e automação.",
      img: img6
    },
    {
      titulo: "UI/UX Design",
      descricao: "Crie interfaces modernas e experiências incríveis.",
      img: img9
    },
    {
      titulo: "Photoshop",
      descricao: "Domine edição de imagens e design gráfico.",
      img: img10
    },
    {
      titulo: "Git & GitHub",
      descricao: "Controle de versão e trabalho em equipe.",
      img: img14
    },
    {
      titulo: "Bases de Dados",
      descricao: "Aprenda SQL e modelagem de dados.",
      img: img8
    },
    {
      titulo: "TypeScript",
      descricao: "JavaScript com tipagem para projetos profissionais.",
      img: img16
    },
    {
      titulo: "Next.js",
      descricao: "Framework moderno para aplicações React.",
      img: img15
    },

    {
      titulo: "Excel Avançado",
      descricao: "Aprenda funções avançadas, dashboards e automação no Excel",
      img: img18,
      preco: {
        presencial: "40.000 Kz",
        online: "30.000 Kz",
        domicilio: "50.000 Kz",
        duracao: "1 meses"
      }
    },
    {
      titulo: "Power BI",
      descricao: "Criação de dashboards e análise de dados com Power BI.",
      img: img17,
      preco: {
        presencial: "50.000 Kz",
        online: "40.000 Kz",
        domicilio: "60.000 Kz",
        duracao: "1 meses"
      }
    }
  ];

  const abrirModal = (curso: Curso) => {
    setCursoSelecionado(curso);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.Curso}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Nossos Cursos</h1>
        <p className={styles.subtitulo}>
          Temos para si os melhores cursos que vão te ajudar na sua trajectória académica
        </p>

        <div className={styles.grid}>
          {cursos.map((curso, index) => (
            <div key={index} className={styles.card}>
              <img src={curso.img} alt={curso.titulo} />
              <h2 className={styles.descricaoh2}>{curso.titulo}</h2>
              <p className={styles.descricao}>{curso.descricao}</p>

              <button
                className={styles.btn}
                onClick={() => abrirModal(curso)}
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.modelph1}>
              {cursoSelecionado?.titulo}
            </h2>

            <p className={styles.modelp}>
              <strong>📍 Presencial:</strong>{" "}
              <strong className={styles.modelpp}>
                {cursoSelecionado?.preco?.presencial || "20.000 Kz"}
              </strong>
            </p>

            <p className={styles.modelp}>
              <strong>💻 Online:</strong>{" "}
              <strong className={styles.modelpp}>
                {cursoSelecionado?.preco?.online || "15.000 Kz"}
              </strong>
            </p>

            <p className={styles.modelp}>
              <strong>🏠 Ao domicílio:</strong>{" "}
              <strong className={styles.modelpp}>
                {cursoSelecionado?.preco?.domicilio || "30.000 Kz"}
              </strong>
            </p>

            <p className={styles.modelp}>
              <strong>⏳ Duração:</strong>{" "}
              <strong className={styles.modelpp}>
                {cursoSelecionado?.preco?.duracao || "2 meses"}
              </strong>
            </p>

            <button onClick={fecharModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cursos;