import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default (props) => (
  <div>
    <Layout headerTitle="Creamos experiencias para web y moviles">
      <Helmet>
        <title>Paginas Web Mexicali y Marketing Digital | Azulacero.mx</title>
        <meta name="description"
              content="Somos una agencia de comunicación digital especializada en Internet. Paginas web Mexicali, Desarrollo de Aplicaciones, y Marketing Digital."/>
      </Helmet>

      <h4 className="body-subtitle">#Nosotros</h4>
      <h1 className="body-title small-space">Somos una agencia de comunicación digital especializada en Internet.</h1>
      <p className="body-p small-space">Nuestra principal meta es lograr la <b>comunicación efectiva</b> de nuestros
        clientes a través de <b>análisis personalizados, el desarrollo de estrategias, y la entrega de resultados
          satisfactorios</b> en la forma de <b>sitios de internet responsivos, aplicaciones web, marketing
          digital,</b> entre otros.</p>
      <p className="body-p last">
        Nos diferenciamos por tener un fuerte enfoque en la comunicación, estar a la vanguardia en tendencias de diseño,
        e implementar un stack de tecnología moderno.
        Nuestro trabajo se basa en la integración de diversas areas individuales del conocimiento.</p>
      <div className="media responsive-image">
        <Img className="image image-sm" sizes={props.data.fotografiaSm.sizes}/>
        <Img className="image image-lg" sizes={props.data.fotografia.sizes}/>
        <h3 className="image-caption right">Fotografía</h3>
      </div>
      <div className="media responsive-image">
        <Img className="image image-sm" sizes={props.data.disenoSm.sizes}/>
        <Img className="image image-lg" sizes={props.data.diseno.sizes}/>
        <h3 className="image-caption">Diseño &amp; Comunicación</h3>
      </div>
      <div className="media responsive-image">
        <Img className="image image-sm" sizes={props.data.programacionSm.sizes}/>
        <Img className="image image-lg" sizes={props.data.programacion.sizes}/>
        <h3 className="image-caption right">Programación &amp; bases de datos</h3>
      </div>
      <p className="body-p small-space">
        Radicados en la ciudad de Mexicali, ofrecemos los servicios de diseño de paginas web, desarrollo de
        aplicaciones, administracion de servidores, y realizacion de campañas de marketing digital (Pago por click
        Adwords, Facebook ads, Email). Pero sobretodo...
      </p>
      <p className="body-p"><b>Creamos experiencias digitales de calidad para usuarios de la web y móviles.</b> Y
        entregamos resultados que satisfacen los objetivos (comerciales o no) de su organización.
      </p>
    </Layout>
  </div>
);

export const query = graphql`
  query BlurUpQuery {
    fotografia: imageSharp(id: { regex: "/fotografia.jpg/" }) {
      sizes(maxWidth: 1200, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    fotografiaSm: imageSharp(id: { regex: "/fotografia-sm.jpg/" }) {
      sizes(maxWidth: 500, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    diseno: imageSharp(id: { regex: "/diseno.png/" }) {
      sizes(maxWidth: 1200, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    disenoSm: imageSharp(id: { regex: "/diseno-sm.png/" }) {
      sizes(maxWidth: 500, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    programacion: imageSharp(id: { regex: "/programacion.png/" }) {
      sizes(maxWidth: 1200, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    programacionSm: imageSharp(id: { regex: "/programacion-sm.png/" }) {
      sizes(maxWidth: 500, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
