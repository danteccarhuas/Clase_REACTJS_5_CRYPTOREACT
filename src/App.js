import React, {Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';
import axios from 'axios';

class App extends Component {

  state = {
    monedas: [],
    cotizacion: {},
    monedaCotizada: '',
    cryptoCotizada: '',
    cargando: false
  };

  async componentDidMount() {
    this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/list`;
    await axios.get(url)
    .then(respuesta => {
      this.setState({
        monedas: respuesta.data
       });
      
    })
    .catch(error => {
      console.log(error);
    });
  }

  //Cotizar una crypto en base a una moneda
  obtenerValoresCrypto = async (monedas) => {
    const {moneda, crypto} = monedas;

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${moneda}`;

    await axios.get(url)
    .then(respuesta => {
      this.setState({
        cargando: true
      })
      setTimeout(() => {
        this.setState({
          cotizacion: respuesta.data["01coin"],
          monedaCotizada: moneda,
          cryptoCotizada: crypto,
          cargando: false
        });
      },1000)
    })
  }

  render(){
    const cargando = this.state.cargando;
    
    let resultado;

    if(cargando){
      resultado = <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                  </div>;
    }else{
      resultado = <Resultado 
                    cotizacion={this.state.cotizacion}
                    monedaCotizada={this.state.monedaCotizada}
                    cryptoCotizada={this.state.cryptoCotizada}
                  />
    }

    return (
      <div className="container">
        <Header 
          titulo="Cotiza Criptomonedas al Instante"
        />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">  
            <Formulario 
              monedas={this.state.monedas}
              obtenerValoresCrypto={this.obtenerValoresCrypto}
            />
            {resultado}
          </div>
        </div>
      </div>
    );
  }
}

export default App;