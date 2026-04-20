import { useState } from "react";
import styles from "./Contactos.module.css";

const Contactos = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    telefone: "",
    curso: "",
    nivel: "",
    escola: ""
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    mensagem: "",
    telefone: "",
    curso: "",
    nivel: "",
    escola: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    let valid = true;

    let newErrors = {
      nome: "",
      email: "",
      mensagem: "",
      telefone: "",
      curso: "",
      nivel: "",
      escola: ""
    };

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

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
      valid = false;
    }

    if (!formData.curso.trim()) {
      newErrors.curso = "Selecione um curso";
      valid = false;
    }

    if (!formData.nivel.trim()) {
      newErrors.nivel = "Selecione o nível";
      valid = false;
    }

    if (!formData.escola.trim()) {
      newErrors.escola = "Escola é obrigatória";
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
        mensagem: "",
        telefone: "",
        curso: "",
        nivel: "",
        escola: ""
      });

      setErrors({
        nome: "",
        email: "",
        mensagem: "",
        telefone: "",
        curso: "",
        nivel: "",
        escola: ""
      });
    }
  };

  return (
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

            {/* Email */}
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

            <div className={styles.inputgroup}>
              <label>Telefone / WhatsApp</label>
              <input
                type="text"
                name="telefone"
                placeholder="Insira seu número"
                value={formData.telefone}
                onChange={handleChange}
              />
              {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
            </div>

            <div className={styles.inputgroup}>
              <label>Curso</label>
              <select
                name="curso"
                value={formData.curso}
                onChange={handleChange}
              >
                <option value="">Selecione o curso</option>
                <option value="html">HTML & CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option>
              </select>
              {errors.curso && <span className={styles.error}>{errors.curso}</span>}
            </div>

            <div className={styles.inputgroup}>
              <label>Nível</label>
              <select
                name="nivel"
                value={formData.nivel}
                onChange={handleChange}
              >
                <option value="">Selecione o nível</option>
                <option value="iniciante">Iniciante</option>
                <option value="basico">Básico</option>
                <option value="avancado">Avançado</option>
              </select>
              {errors.nivel && <span className={styles.error}>{errors.nivel}</span>}
            </div>

            <div className={styles.inputgroup}>
              <label>Escola</label>
              <input
                type="text"
                name="escola"
                placeholder="Nome da sua escola"
                value={formData.escola}
                onChange={handleChange}
              />
              {errors.escola && <span className={styles.error}>{errors.escola}</span>}
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
  );
};

export default Contactos; 