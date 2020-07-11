import React from 'react';
import {RootContext} from '../App';
import './style/ContextAPI.css'

class ContextAPI extends React.Component {
    render() {
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <>
                                <div className='Count-container'>
                                <h1>Count using ContextAPI</h1>
                                    <h2>Current Count:</h2>
                                    <p>{value.state.currentCount}</p>
                                    <button className='btn' onClick={() => value.dispatch({type: 'COUNT_UP'})}>PLUS</button>
                                    <button className='btn' onClick={() => value.dispatch({type: 'COUNT_DOWN'})}>MINUS</button>
                                </div>
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default ContextAPI;