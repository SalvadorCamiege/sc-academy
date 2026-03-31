import { useState, useRef, useEffect } from "react";
import img1 from '../../assets/img/img-1.png';
import styles from "./Home.module.css";

import { FaStar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { CgFormatCenter } from "react-icons/cg";
import { MdSentimentSatisfiedAlt } from "react-icons/md";

import salvador from '../../assets/img/dasilva.png';
import cardoso from '../../assets/img/cardoso.png';
import delfim from '../../assets/img/delfin.png';
import araujo from '../../assets/img/araujo.png';

const Home = () => {
      const [formData, setFormData] = useState({
      nome: "",
      email: "",
      mensagem: ""
    });

    const [errors, setErrors] = useState({
      nome: "",
      email: "",
      mensagem: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    const validate = () => {
      let valid = true;
      let newErrors = { nome: "", email: "", mensagem: "" };

      if (!formData.nome.trim()) {
        newErrors.nome = "Nome é obrigatório";
        valid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email é obrigatório";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email inválido";
        valid = false;
      }

      if (!formData.mensagem.trim()) {
        newErrors.mensagem = "Mensagem é obrigatória";
        valid = false;
      }

      setErrors(newErrors);
      return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (validate()) {
        alert("Formulário enviado com sucesso!");

        setFormData({
          nome: "",
          email: "",
          mensagem: ""
        });

        setErrors({
          nome: "",
          email: "",
          mensagem: ""
        });
      }
    };

  const [tempRating, setTempRating] = useState<number>(0); 
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleStarClick = (starNumber: number) => {
    setTempRating(starNumber);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setRating(starNumber);
      setSubmitted(true);

      setTimeout(() => {
        setTempRating(0);
        setRating(0);
        setSubmitted(false);
      }, 2000);

    }, 1000);
  };

  const [ativo, setAtivo] = useState<number>(0);

const testemunhos = [
  {
    nome: "João Silva",
    aluno: "Aluno de html e css",
    resumo: "Curso muito bom, aprendi bastante!",
    detalhe: "O curso de programação mudou completamente minha forma de pensar e hoje já consigo criar meus próprios projetos."
  },
  {
    nome: "Maria Santos",
    aluno: "Aluna de Javascript",
    resumo: "Explicações claras e práticas.",
    detalhe: "Os formadores explicam muito bem e os exemplos são fáceis de entender, recomendo muito!"
  },
  {
    nome: "Carlos Mendes",
    aluno: "Aluno de Linguagem C",
    resumo: "Valeu muito a pena!",
    detalhe: "Aprendi do zero até conceitos avançados, hoje trabalho como freelancer graças ao curso."
  },
  {
    nome: "Ana Paula",
    aluno: "Aluna de html e css",
    resumo: "Muito organizado.",
    detalhe: "A estrutura do curso é excelente e fácil de acompanhar mesmo sendo iniciante."
  },

];

useEffect(() => {
  const interval = setInterval(() => {
    setAtivo((prev) =>
      prev === testemunhos.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);
  

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
              {[1,2,3,4,5].map((star) => (
                <FaStar
                  key={star}
                  size={25}
                  style={{
                    marginRight: "5px",
                    cursor: "pointer",
                    color: star <= (tempRating || rating) ? "gold" : "#ccc",
                  }}
                  onClick={() => handleStarClick(star)}
                />
              ))}
            </div>

            {submitted && <p>✅ Avaliação enviada!</p>}
          </div>
        </div>
      </section>

      <section className={styles.start1}>
        <div className={styles.statsparagrafo}>
          <h1>O nosso trabalho nos deixa orgulhoso</h1>
          <p>
            Sentir orgulho do nosso trabalho vai além de concluir tarefas — é saber que estamos a contribuir, a evoluir e a fazer a diferença.
          </p>
        </div>

        <div className={styles["statsparagrafo-grid"]}>
          <div className={styles.card}>
            <IoIosPeople className={styles.icon} />
            <div>
              <h2>+200</h2>
              <p>Alunos</p>
            </div>
          </div>

          <div className={styles.card}>
            <IoBookSharp className={styles.icon} />
            <div>
              <h2>+10</h2>
              <p>Cursos</p>
            </div>
          </div>

          <div className={styles.card}>
            <CgFormatCenter className={styles.icon} />
            <div>
              <h2>+10</h2>
              <p>Formadores</p>
            </div>
          </div>

          <div className={styles.card}>
            <MdSentimentSatisfiedAlt className={styles.icon}/>
            <div>
              <h2>+100%</h2>
              <p>Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.coursessection}>
        <div className={styles.coursesheader}>
          <h1>Nossos Cursos</h1>
        </div>

        <div className={styles.coursesgrid}>
          {[
            { title: "Programação Web", text: "Aprenda HTML, CSS. Domine os fundamentos da criação de sites com HTML e CSS.", img: salvador },
            { title: "JavaScript Básico", text: "Aprenda JavaScript (JS), linguagem de programação usada principalmente para tornar páginas web interativas.", img: cardoso },
            { title: "Linguagem C", text: "Aprenda os fundamentos da programação com C: variáveis, loops, funções e estrutura de dados.", img: delfim },
            { title: "Photoshop", text: "Domine técnicas de edição de imagens, design gráfico e criação visual usando o Adobe Photoshop.", img: araujo }
          ].map((item, index) => (
            <div key={index} className={styles.coursecard}>
              {item.img && (
                <img src={item.img} alt={item.title} className={styles.courseImg} />
              )}
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.moreinfo}>
          <button className={styles.btnvermais}>Ver Mais</button>
        </div>
      </section>

       <section className={styles.testemunhossection}>
          <h3>Valorizamos as opinião dos outros</h3>
          <h1>O que dizem os nossos Alunos</h1>

          <div className={styles.sliderContainer}>
            {testemunhos.map((item, index) => {
              let position = "";

                  if (index === ativo) {
                    position = styles.activeSlide;
                  } else if (
                    index === ativo - 1 ||
                    (ativo === 0 && index === testemunhos.length - 1)
                  ) {
                    position = styles.prevSlide;
                  } else if (
                    index === ativo + 1 ||
                    (ativo === testemunhos.length - 1 && index === 0)
                  ) {
                    position = styles.nextSlide;
                  }
              return (
                <div
                  key={index}
                  className={`${styles.slide} ${position}`}
                  onMouseEnter={() => setAtivo(index)}
                >
                  <div className={styles.cardTestemunho}>
                    <h3>{item.nome}</h3>
                    <h4 className={styles.aluno}>"{item.aluno}"</h4>
                    <p className={styles.resumo}>{item.resumo}</p>
                    <p>{item.detalhe}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.buttons}>
            <button
              onClick={() =>
                setAtivo(ativo === 0 ? testemunhos.length - 1 : ativo - 1)
              }
            >
              ‹
            </button>

            <button
              onClick={() =>
                setAtivo(ativo === testemunhos.length - 1 ? 0 : ativo + 1)
              }
            >
              ›
            </button>
          </div>
        </section>

       <section className={styles.contactcontainer}>
          <div className={styles.contactcard}>

            <div className={styles.contactinfo}>
              <h1 className={styles.title}>Entre em contato</h1>

              <p className={styles.description}>
                Gostaria de saber mais informações sobre as formações de programação e tecnologia da SC Academy...
              </p>

              <p className={styles.subtitle}>
                Entre em contato com nossa equipe através dos canais de atendimento:
              </p>

              <div className={styles.contactchannels}>
                <div className={styles.channelitem}>
                  <div className={styles.iconbox}></div>
                  <div className={styles.texts}>
                    <span>Telefone</span>
                    <strong>952729364</strong>
                  </div>
                </div>

                <div className={styles.channelitem}>
                  <div className={styles.iconbox}></div>
                  <div className={styles.texts}>
                    <span>Whatsapp</span>
                    <strong>(+244) 937039488</strong>
                  </div>
                </div>

                <div className={styles.channelitem}>
                  <div className={styles.iconbox}></div>
                  <div className={styles.texts}>
                    <span>E-mail</span>
                    <strong>contato@scacademy.com</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactformwrapper}>
              <form className={styles.glassform} onSubmit={handleSubmit}>

                <div className={styles.inputgroup}>
                  <label>Nome</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Insira seu nome"
                      value={formData.nome}
                      onChange={handleChange}
                    />
                    {errors.nome && <span className={styles.error}>{errors.nome}</span>}
                </div>

                <div className={styles.row}>
                  <div className={styles.inputgroup}>
                    <label>E-mail</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Insira seu email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.inputgroup}>
                  <label>Mensagem</label>
                  <textarea
          name="mensagem"
          placeholder="Escreva aqui"
          rows={4}
          value={formData.mensagem}
          onChange={handleChange}
        />
        {errors.mensagem && <span className={styles.error}>{errors.mensagem}</span>}
                </div>

                <button type="submit" className={styles.btnsend}>
                  Enviar
                </button>

              </form>
            </div>

          </div>
        </section>
     
    </>
  );
};

export default Home;