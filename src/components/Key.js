import React from 'react';

class Key extends React.Component {
    state = {
        sign: "",
        turn: "x"
    }

    setSign = () => {
        
        if(this.state.turn === "x"){
            this.setState({sign: "x", turn: "o"}, key = this.returnX )
            console.log(this.state.sign)
        }else{
            this.setState({sign: "o", turn: "x"})
            console.log(this.state.sign)
        }
    }

    returnX = () => {
        return "x"
    }

    returnO = () => {
        return "o"
    }
 
    render(){
        return(
            <button onClick={this.setSign} className={`key ${key}`}>

            </button>
        )
    }
}

export default Key;