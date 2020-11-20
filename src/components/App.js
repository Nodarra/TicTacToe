import React from 'react';
import './App.css';

import Board from './Board';
import Stats from './Stats';

class App extends React.Component{
    render(){
        return(
            <div className="game">
                <Board />
                <Stats />
            </div>
        )
    }
}

export default App;