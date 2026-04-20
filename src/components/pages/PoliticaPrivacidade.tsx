import styles from "./PoliticaPrivacidade.module.css";

const PoliticaPrivacidade = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1>Política de Privacidade</h1>

        <p>
          A SC Academy valoriza a sua privacidade e compromete-se a proteger os seus dados pessoais.
        </p>

        <h2>1. Coleta de informações</h2>
        <p>
          Recolhemos informações como nome, email, telefone e dados escolares quando o utilizador preenche formulários no nosso site.
        </p>

        <h2>2. Uso das informações</h2>
        <p>
          Os dados recolhidos são utilizados para:
          <ul>
            <li>Entrar em contacto com o aluno</li>
            <li>Gerir inscrições em cursos</li>
            <li>Melhorar os nossos serviços</li>
          </ul>
        </p>

        <h2>3. Compartilhamento</h2>
        <p>
          Não partilhamos os seus dados com terceiros sem o seu consentimento, exceto quando exigido por lei.
        </p>

        <h2>4. Pagamentos</h2>
        <p>
          Ao efetuar o pagamento de qualquer curso, o utilizador concorda que:
        </p>
        <ul>
          <li>Os pagamentos são finais</li>
          <li>Não há devolução de valores após confirmação</li>
          <li>O acesso ao curso é liberado após pagamento</li>
        </ul>

        <h2>5. Segurança</h2>
        <p>
          Implementamos medidas para proteger os seus dados, mas não podemos garantir segurança absoluta na internet.
        </p>

        <h2>6. Direitos do utilizador</h2>
        <p>
          O utilizador pode solicitar a alteração ou eliminação dos seus dados a qualquer momento.
        </p>

        <h2>7. Alterações</h2>
        <p>
          Esta política pode ser atualizada sem aviso prévio.
        </p>

        <p className={styles.footer}>
          Última atualização: 2026
        </p>
      </div>
    </section>
  );
};

export default PoliticaPrivacidade;