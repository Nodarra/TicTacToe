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
                <div>
                    This is Changed
                </div>
            </div>
        )
    }
}

export default App;