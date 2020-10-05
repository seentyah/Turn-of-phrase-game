import React from 'react';
export const PROMPTS = [
    
    {
        image: "../assets/foodforthought.gif",
        guess: ['FOOD FOR THOUGHT'],
        userAnswer: [] ,
        total:16,
        tiles: 
        <div className='inputContainer'>
            <textarea id="input" rows="1" name="charcount" cols="50" wrap="virtual" ></textarea> </div>,
        
    
         
    },

    {
        image: "../assets/curiosity.gif",
        guess:'CURIOSITY KILLED THE CAT',
        userAnswer: [],
        total: 24,
        tiles: 
        <div className='tileRapper'>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div>  </div>,
      
        breaks:[9,16,20,24]
    },

    {
        image: "../assets/talldrink.gif",
        guess:'T,A,L,L, ,D,R,I,N,K, ,O,F, ,W,A,T,E,R',
        userAnswer: [],
        total: 19,
        tiles: <div className='tileRapper'>
        <div></div> <div></div> <div></div> <div></div> <div></div>
            <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
            <div></div><div></div> <div></div>
            <div></div><div></div><div></div><div></div><div></div></div>,
            
        breaks:[4,10,13,19]
    }

];