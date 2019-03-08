import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

export default () => (
  <div>
    <Layout headerTitle="Creamos experiencias para web y moviles">
      <Helmet>
        <title>404 | Marketing Digital y Páginas Web en Mexicali, Baja California</title>

        <meta name="description"
              content="Hacemos Marketing Digital y Páginas Web en Mexicali, Baja California."/>
      </Helmet>

      <h4 className="body-subtitle">#Oopss</h4>
      <h1 className="body-title small-space">¡Esta pagina no esta!</h1>
      <p className="body-p">La pagina que buscas no existe, puede que haya sido removida o que te hallas equivocado, un
        saludo.</p>
    </Layout>
  </div>
);
