import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import Counter from './components/Counter';
import Converter from './components/Converter';
import Lists from './components/Lists';
import ContextAPI from './components/ContextAPI';
import './App.css';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class App extends React.Component {
  state = {
    currentCount: 0
  }

  dispatch = (action) => {
    if (action.type === 'COUNT_UP') {
      return this.setState({
        currentCount: this.state.currentCount + 1
      })
    }
    if (action.type === 'COUNT_DOWN') {
      return this.setState({
        currentCount: this.state.currentCount - 1
      })
    }
  }
  
  render() {
    return(
      // routing untuk berpindah component/page
      <Router>
        <Provider value={
          {
            state: this.state,
            dispatch: this.dispatch
          }
        }>
          <>
            <div className='menu'>
              <Link to="/" >Converter</Link>
              <Link to="/counter" >Counter</Link>
              <Link to="/form" >Form</Link>
              <Link to="/lists" >Lists</Link>
              <Link to="/contextapi" >ContextAPI</Link>
            </div>
            <Route path="/" exact component={Converter} />
            <Route path="/counter" component={Counter} />
            <Route path="/form" component={Form} />
            <Route path="/lists" component={Lists} />
            <Route path="/contextapi" component={ContextAPI} />
          </>
        </Provider>
      </Router>
    );
  }
}

export default App;
