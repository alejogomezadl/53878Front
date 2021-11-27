import { Component } from "react";



class Informativa extends Component {

    constructor(props) {
        super(props)
        this.state = { documento: '' }
    }


    cambioValor = (evt) => {
        this.setState({
            documento : evt.target.value
        })
    }

    render() {
        return (

            <div>

                <input value={this.state.documento} onChange={this.cambioValor} />


                <p>{this.state.documento}</p>
            </div>
        )
    }



}

export default Informativa;