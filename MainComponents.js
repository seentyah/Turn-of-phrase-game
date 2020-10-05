import React,{ Component } from 'react';
import Home from './HomeComponents';
import About from './AboutComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import ContactPage from './ContactComponents';
import Team from './TeamComponents';
import GamePlay from './DemoComponents';


import { Switch, BrowserRouter  , Route, Redirect } from 'react-router-dom';







class Main extends Component {
    render(){
    return (
        <React.Fragment>
             <BrowserRouter>
               
                     <Header/>
                     <Switch>
                         <Route exact path='/home' component={Home} />
                        <Route   path='/about' render={() => <About />} />
                        <Route  exact path='/team' render={() => <Team />} />
                        <Route exact  path='/demo' component={GamePlay} />
                         <Route  exact path='/feedback' component={ContactPage} />
                         <Redirect to='/home' />
                     </Switch>
                     <Footer />
                
             </BrowserRouter> 
        </React.Fragment>
         );
     
 };
}

 export default Main;