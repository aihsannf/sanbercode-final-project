import React from 'react';
import { RootContext } from '../App';
import './style/Lists.css';

class Lists extends React.Component {
    render() {
    //   mapping list yang ingin ditampilkan  
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const numbersBaru = numbers.map((elemen, index) => <div key={index}>{elemen} </div>)
  
      return (
        <RootContext.Consumer>
          {
            value => {
              return(
                <>
                  <div className='lists-cont'>
                    <h1>Lists</h1>
                    {/* menampilkan listnya */}
                    <p>{numbersBaru}</p>
                    <h1>Count in ContextAPI : {value.state.currentCount}</h1>
                  </div>
                </>
              )
            }
          }
        </RootContext.Consumer>
      );
    }
  }

  export default Lists;