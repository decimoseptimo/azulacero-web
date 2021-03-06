import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';

import 'normalize.css';
import '../css/index.css'
import azulaceroLogo from '../img/azulacero-logo.png';
import phone from '../img/phone.png';
import mail from '../img/mail.png';

export default ({headerTitle, children}) => (
  <div>
    <Helmet defaultTitle="Azulacero.mx">
        <html lang="es" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
    </Helmet>
    <header>
      <div className="header-main">
        <div className="header-wrapper">
          <div className="header-wrapper-2">
            <Link to="/" className="header-logo"><img src={azulaceroLogo} alt="azulacero logo"/></Link>
            <ul className="header-menu">
              <li><Link to="/blog/" activeClassName="active" partiallyActive={true}>Blog</Link></li>
              <li><Link to="/" activeClassName="active">Nosotros</Link></li>
              <div className="br"></div>
              <li><Link to="/clientes/" activeClassName="active">Clientes</Link></li>
              <li className="last"><Link to="/contacto/" activeClassName="active">Contacto</Link></li>
            </ul>
          </div>
          <h2 className="header-title">{headerTitle}</h2>
        </div>
      </div>
      <div className="header-legend">
        <div className="header-wrapper">
          <h2>Marketing Digital y Páginas Web en Mexicali, B.C.</h2>
        </div>
      </div>
    </header>
    <main>
      <div className="body-wrapper">

        {children}

        <footer>
          <div className="footer-item last"><b>Azulacero, agencia interactiva.</b>
            <span>©2015-{new Date().getFullYear()} Algunos derechos reservados.</span></div>
          <div className="footer-contact-info">
            <div className="footer-item"><img src={phone} alt=""/>Telefono 686.235.77.30</div>
            <div className="footer-item last"><img src={mail} alt=""/>contacto@azulacero.mx</div>
          </div>
        </footer>
      </div>
    </main>
  </div>
);
