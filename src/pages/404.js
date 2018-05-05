import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

export default () => (
  <div>
    <Layout headerTitle="Creamos experiencias para web y moviles">
      <Helmet>
        <title>Paginas Web Mexicali y Marketing Digital | Azulacero.mx</title>
        <meta name="description"
              content="Somos una agencia de comunicación digital especializada en Internet. Paginas web en Mexicali, Desarrollo de Aplicaciones, y Marketing Digital."/>
      </Helmet>

      <h4 className="body-subtitle">#Oopss</h4>
      <h1 className="body-title small-space">¡Esta pagina no esta!</h1>
      <p className="body-p">La pagina que buscas no existe, puede que haya sido removida o que te hallas equivocado, un
        saludo.</p>
    </Layout>
  </div>
);
