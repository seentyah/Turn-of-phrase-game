import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponents'



function App() {
   return (
            <React.Fragment>
            <BrowserRouter>
                
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter> 
            </React.Fragment>
        );
    
}

export default App
