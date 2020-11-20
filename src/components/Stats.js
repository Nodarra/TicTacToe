import React from 'react';

const Stats = () => {
    return(
        <div className="stats">
            <div className="main-screen">
                <div className="display">
                    Main Screen 
                </div>
            </div>

            <div className="players">
                <div className="player">
                    <div className="result">
                        Result X
                    </div>
                    <div className="name-tag">
                        Player X
                    </div>
                </div>
                <div className="player">
                    <div className="result">
                        Result O
                    </div>
                    <div className="name-tag">
                        Player O
                    </div>
                </div>
            </div>
            <div className="reset">
                <button className="reset-btn">Reset</button>
            </div>
        </div>
    )
}

export default Stats;