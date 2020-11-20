import React from 'react';
import Key from './Key';

class Board extends React.Component{
    render(){
        return(
            <div className="board">
                <div className="grid">
                    <Key />
                    <Key />
                    <Key />

                    <Key />
                    <Key />
                    <Key />

                    <Key />
                    <Key />
                    <Key />
                </div>
            </div>
        )
    }
}

export default Board;