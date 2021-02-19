import React, { Component } from 'react';
import OptionSelect from './OptionSelect';

class Formulario extends Component {

    monedaRef = React.createRef();
    criptoRef = React.createRef();

    cotizarMonedas = (e)=> {
        e.preventDefault();

        //crear el objeto
        const cotizacion = {
            moneda: this.monedaRef.current.value,
            crypto: this.criptoRef.current.value
        }
        // console.log(cotizacion);

        //enviar por props
        // console.log(cotizacion);
        this.props.obtenerValoresCrypto(cotizacion);
    }

    render() {
        return (
            <form onSubmit={this.cotizarMonedas}>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select className="form-control" ref={this.monedaRef}>
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Criptomoneda</label>
                    <select className="form-control" ref={this.criptoRef}>
                        {Object.keys(this.props.monedas).map(key => (
                            <OptionSelect 
                                key={key}
                                moneda={this.props.monedas[key]}
                            />
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="cotizar"/>
                </div>
            </form>
        );
    }
}

export default Formulario;