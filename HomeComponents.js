
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <div className="container">
                            <h2>Turn Of Phrase</h2>
                            <p>
                            Turn of Phrase is a mobile based brain teaser... </p>
                       <div>
                        
                        <img id="image" src="../assets/turnofphraselogo.png" alt="logo" height="40%" width="40%"/>
                        </div>
                        <div>
                            <p>


                            </p>
                            <Button>Try Game, go to our Demo page</Button>
                            </div>
                            <p>What is Turn of Phrase? See the about page of the game</p>
                           
                            </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home; 