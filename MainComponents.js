import React from 'react';
import About from './AboutComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import ContactPage from './ContactComponent';
import Team from './TeamComponents';


import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';






function Main() {
    return (
        <React.Fragment>
             <BrowserRouter>
                 <div className="App">
                     <Header/>
                     <Switch>
                       
                        
                         <Route  path='/' component={Team} />
                         <Redirect to='/home' />
                     </Switch>
                     <Footer />
                 </div>
             </BrowserRouter> 
        </React.Fragment>
         );
     
 }
 export default Main;