import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Axios from 'axios';

import Spinner from '-!svg-react-loader?name=Spinner!../img/spinner.svg';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: '',
        email: '',
        message: '',
      },
      submitMessage: '',
      hasError: false,
      isSubmitting: false,
    };
  }

  handleChangeName = (e) => {
    var newState = this.state;
    newState.input.name = e.target.value;
    this.setState(newState);

    //alternative way... not working :(
    // this.setState((prevState)=>{
    //     return {input: {...prevState.input, name: e.target.value}}
    // })
  }

  handleChangeEmail = (e) => {
    var newState = this.state;
    newState.input.email = e.target.value;
    this.setState(newState);
  }

  handleChangeMessage = (e) => {
    var newState = this.state;
    newState.input.message = e.target.value;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {name, email, message} = this.state.input;

    this.setState({isSubmitting: true});
    this.setState({submitMessage: ''});

    Axios.post('/.netlify/functions/contact', {
      name,
      email,
      message
    })
      .then((result) => {
        this.setState({isSubmitting: false});
        this.setState({hasError: false});
        this.setState({submitMessage: 'Hemos recibido tu mensaje, nos pondremos en contacto a la brevedad.'})
        this.resetForm();
        // console.log('success');
        // console.log(result);
      })
      .catch((e) => {
        this.setState({isSubmitting: false});
        this.setState({submitMessage: 'Hubo un error al procesar tu solicitud. Por favor intenta mas tarde.'})
        this.setState({hasError: true});
        // console.log('fail')
        // console.log(e)
      });
  }

  resetForm = () => {
    this.setState({input: {name: '', email: '', message: ''}})
  }

  render() {
    const {name, email, message} = this.state.input;

    const submitMessage = () => {
      if (this.state.submitMessage) {
        return <p className={`body-p ${this.state.hasError ? 'error' : 'success'}`}>{this.state.submitMessage}</p>
      }
      return <p className="body-p">Por telefono al <a href="tel:+526862357730" className="a-phone">(686) 235 77 30</a>, o mediante el siguiente formulario. ¡Que tengas buen día!</p>
    }

    const submitButton = () => {
      if (this.state.isSubmitting) {
        return <div className="column">
          <div className="input button isSubmitting"><Spinner fill="white" width="20"
                                                              className="body-spinner"/><span>Enviando</span></div>
        </div>
      }
      return <div className="column"><input className="input button" type="submit" value="Enviar"/></div>
    }

    return (
      <div>
        <Layout headerTitle="Estamos listos para iniciar, ¿estas tú?">
          <Helmet>
            <title>Contacto | Marketing Digital y Páginas Web en Mexicali, Baja California</title>
            <meta name="description"
                  content="Estamos listos para iniciar, ¿estas tú? Llama o Deja tus datos y nos pondremos en contacto a la brevedad."/>
          </Helmet>

          <h4 className="body-subtitle">#Contacto</h4>
          <h1 className="body-title">Llama o Deja tus datos y nos pondremos en contacto a la brevedad.</h1>
          {submitMessage()}

          <form className="form column-group clearfix" onSubmit={this.handleSubmit}>
            <div className="column text-field">
              <input className="input" type="text" placeholder="Nombre" value={name} onChange={this.handleChangeName}
                     required/>
            </div>
            <div className="column text-field">
              <input className="input" type="email" placeholder="Email" value={email} onChange={this.handleChangeEmail}
                     required/>
            </div>
            <div className="column">
              <textarea className="input" placeholder="Mensaje" rows="8" value={message}
                        onChange={this.handleChangeMessage} required/>
            </div>
            {submitButton()}
          </form>
        </Layout>
      </div>
    );
  }
}

export default ContactForm;
