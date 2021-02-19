import React, { Component } from 'react';

class Resultado extends Component {

    mostrarResultado = () => {
        if(!this.props.cotizacion) return null;
        const monto = this.props.cotizacion[this.props.monedaCotizada.toLowerCase()]
        // const {name, quotes} = this.props.cotizacion;
        if(!monto) return null;

        return (
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">Resumen</h2>
                    <p><span className="font-weight-bold">El Precio de {this.props.cryptoCotizada} en {this.props.monedaCotizada} es de: </span> $ {monto}</p>
                    <p><span className="font-weight-bold">Porcentaje última Hora: </span>{monto}</p>
                    <p><span className="font-weight-bold">Porcentaje última 24h: </span>{monto}</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarResultado()}
            </React.Fragment>
        );
    }
}

export default Resultado;