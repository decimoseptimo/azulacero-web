import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from "gatsby";

export default (props) => (
    <div>
        <Layout headerTitle="Creamos experiencias para web y moviles">
            <Helmet>
                <title>Marketing Digital y Páginas Web en Mexicali, Baja California | Azulacero.mx</title>
                <meta name="description"
                      content="Hacemos Marketing Digital y Páginas Web en Mexicali, Baja California. Ayudamos a las organizaciones a tener una mejor imagen, mayor exposición, y brindar una mejor atención al cliente en internet."/>
            </Helmet>

            <h4 className="body-subtitle">#Nosotros</h4>
            <h1 className="body-title small-space">Somos una agencia de marketing digital.</h1>

            <p className="body-p small-space">
                Ayudamos a las organizaciones a tener una mejor imagen, mayor exposición, y brindar una mejor atención
                al cliente en internet. Todo con el objetivo de que captes mas ventas y hagas mas negocio. ¿Y como
                hacemos esto?
            </p>

            <p className="body-p">
                Nuestro servicio se distingue por los siguientes ejes:
            </p>

            <div className="body-p">

                <div className="grid">
                    <p>
                        <b>Marketing digital.</b>
                        <br/>- Posicionamiento en buscadores (SEO)
                        <br/>- Google mi negocio
                        <br/>- Content marketing (Blogs/Vlogs)
                        <br/>- Facebook para empresas (pagina oficial, lugares, messenger)
                    </p>
                    <p>
                        <b>Paginas web (y apps).</b>
                        <br/>Diseño de vanguardia, Comunicación efectiva, Dispositivos moviles, Experiencia de
                        usuario, Últimas tecnologías, Alta velocidad.
                    </p>
                    <p>
                        <b>Outbound Marketing.</b>
                        <br/>- Google Ads (search, display, shopping, youtube, apps)
                        <br/>- Facebook ads (facebook.com, facebook messenger, grupos de venta)
                        <br/>- Email marketing
                    </p>
                </div>

            </div>

            <div className="media responsive-image">
                <Img className="image image-sm" fluid={props.data.fotografiaSm.childImageSharp.fluid}/>
                <Img className="image image-lg" fluid={props.data.fotografia.childImageSharp.fluid}/>
                <h3 className="image-caption right">Fotografía</h3>
            </div>
            <div className="media responsive-image">
                <Img className="image image-sm" fluid={props.data.disenoSm.childImageSharp.fluid}/>
                <Img className="image image-lg" fluid={props.data.diseno.childImageSharp.fluid}/>
                <h3 className="image-caption">Diseño &amp; Comunicación</h3>
            </div>
            <div className="media responsive-image">
                <Img className="image image-sm" fluid={props.data.programacionSm.childImageSharp.fluid}/>
                <Img className="image image-lg" fluid={props.data.programacion.childImageSharp.fluid}/>
                <h3 className="image-caption right">Programación &amp; bases de datos</h3>
            </div>

            <p className="body-p">
                Nos diferenciamos por tener un fuerte enfoque en la comunicación, estar a la vanguardia en tendencias de
                diseño,
                e implementar un stack de tecnología moderno.
                Nuestro trabajo se basa en la integración de diversas areas individuales del conocimiento.</p>

            <p className="body-p last"><b>Creamos experiencias digitales de calidad que agregan valor a tu
                empresa,</b> y entregamos resultados que satisfacen los objetivos comerciales de tu organización.
            </p>
        </Layout>
    </div>
);

export const query = graphql`
  {
    fotografia: file(relativePath: { eq: "fotografia.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    fotografiaSm: file(relativePath: { eq: "fotografia-sm.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    
    diseno: file(relativePath: { eq: "diseno.png" }) {
      childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    disenoSm: file(relativePath: { eq: "diseno-sm.png" }) {
      childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    
    programacion: file(relativePath: { eq: "programacion.png" }) {
      childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    programacionSm: file(relativePath: { eq: "programacion-sm.png" }) {
      childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    
  }
`
