import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import limpiaduriaHuizarScreenshot from '../img/limpiaduria-huizar-screenshot.jpg';
import ppytIngenieriaScreenshot from '../img/ppyt-ingenieria-screenshot.jpg';
import harashiScreenshot from '../img/harashi-screenshot.jpg';
import huizarPosScreenshot from '../img/huizar-pos-screenshot.png';

export default () => (
    <div>
        <Layout headerTitle="Entregamos resultados satisfactorios">
        <Helmet>
            <title>Nuestros Clientes | Paginas Web Mexicali y Marketing Digital</title>
            <meta name="description" content="Algunas de las organizaciones con las que hemos colaborado. Paginas web en Mexicali, Desarrollo de Aplicaciones, y Marketing Digital."/>
        </Helmet>

        <h4 className="body-subtitle">#Clientes</h4>
        <h1 className="body-title">Algunas de las organizaciones con las que hemos colaborado.</h1>

        <div id="huizar" className="media customers">
            <img className="image" src={limpiaduriaHuizarScreenshot} alt="" />
                <div className="customer-data clearfix">
                    <div className="main">
                        <h3 className="item title">Limpiaduria Huizar de <span className="no-wrap">Mexicali S.A.</span></h3>
                    </div>
                    <div className="sidebar">
                        <div className="item domain">huizar.mx</div>
                        <div className="item separator"><div className="button"><a href="https://www.huizar.mx">Visitar</a></div></div>
                    </div>
                </div>
        </div>
        <p className="body-p last2">
            <b>Limpiaduria Huizar</b> una empresa dedicada al <b>lavado de ropa</b> con mas de 50 años de experiencia.
            Se realizo un <b>sitio de internet</b> adaptado para <b>dispositivos moviles</b> y con <b>traduccion
            al idioma ingles</b>. Uno de los <b>ejes de comunicacion</b> fue el acceso rapido a los telefonos y
            direcciones de la empresa. Asi como la <b>consulta en linea de ordenes</b> por parte de los
            clientes. Tambien se tomaron y post-procesaron fotografias de las instalaciones con el personal de la empresa.
        </p>

        <div id="harashi" className="media customers">
            <img className="image" src={harashiScreenshot} alt="" />
                <div className="customer-data clearfix">
                    <div className="main">
                        <h3 className="item title">Harashi de Mexico</h3>
                    </div>
                    <div className="sidebar">
                        <div className="item domain">Harashi.mx</div>
                        <div className="item separator"><div className="button"><a href="https://www.harashi.mx">Visitar</a></div></div>
                    </div>
                </div>
        </div>
        <p className="body-p">
            <b>Harashi</b> es una startup mexicana que se especializa en la importacion y venta de smartphones.
            La plataforma esta integrada a un procesador de pagos, y a un sistema de soporte 'de tickets' basado en correo electronico.
            Se encuentra planeada su integracion a un sistema de facturacion, y a un procesador de envios.
            En el sitio web se pueden visualizar productos, colocar ordenes, realizar pagos, etc.
            En el panel de control se pueden gestionar clientes, procesar ordenes, entre otras acciones.
        </p>
        <p className="body-p last2">
            Fue todo un reto llevar a cabo este proyecto debido al sistema en el que esta basado, y a los diferentes servicios que le fueron integrados.
            Afortunadamente se conto en todo momento con el soporte de los proveedores involucrados.
        </p>

        <div id="ppyt" className="media customers">
            <img className="image" src={ppytIngenieriaScreenshot} alt="" />
                <div className="customer-data clearfix">
                    <div className="main">
                        <h3 className="item title">PPyT Ingenieria S.A. de C.V.</h3>
                    </div>
                    <div className="sidebar">
                        <div className="item domain">ppyt.mx</div>
                        <div className="item separator"><div className="button"><a href="https://www.ppyt.mx">Visitar</a></div></div>
                    </div>
                </div>
        </div>
        <p className="body-p">
            <b>Plataforma de Profesionales y Tecnicos</b> una empresa de construccion
            especializada en <b>obras de ingenieria</b> gubernamentales. Se realizo un <b>sitio de internet</b>
            &nbsp;adaptado para <b>dispositivos moviles.</b> El proyecto involucro la toma de <b>fotografias panoramicas</b>
            &nbsp;de las obras ya concluidas y su <b>post-procesamiento</b> por computadora.
        </p>
        <p className="body-p last2">
            Ademas se llevo a cabo la seleccion
            de fotografias contenidas en un 'archivo fotografico' tomado a lo largo de años, su post-procesamiento,
            y su despliegue en la forma de <b>galerias de imagenes</b>. Asi como el <b>procesamiento de informacion</b>
            &nbsp;tecnica contenida en diversos 'catalogos de conceptos' como el eje principal de informacion del sitio.
        </p>

        <div id="huizar-pos" className="media customers">
            <img className="image" src={huizarPosScreenshot} alt="" />
                <div className="customer-data clearfix">
                    <div className="main">
                        <h3 className="item title">Limpiaduria Huizar de <span className="no-wrap">Mexicali S.A.</span></h3>
                    </div>
                    <div className="sidebar">
                        <div className="item domain">Huizar POS</div>
                        <div className="item separator"><div className="button"><a href="https://www.azulacero.mx/huizar-pos/">Ver Demo</a></div></div>
                    </div>
                </div>
        </div>
        <p className="body-p">
            Huizar POS es una <b>aplicacion web</b> desarrollada para Limpiaduria Huizar.
            Cuenta con una <b>interface grafica</b> y se encuentra conectada al punto de venta fisico en sucursal
            mediante una <b>interface REST</b>.
            Su funcion principal es la del <b>envio de correos electronicos transaccionales</b> a los
            clientes sobre el estado de sus ordenes. Asi como de la <b>consulta en linea</b> de sus ordenes.
        </p>
        <p className="body-p last2">
            Se facilita una version demostrativa en la cual algunas funciones clave como el envio de correos o el acceso
            restringido se encuentran deshabilitadas.
        </p>
        </Layout>
    </div>
);