import React from 'react'
import './index.css'

const date = new Date().getHours();
let greeting = '';
let cssStyle = {};

if(date >=1 && date <12){greeting = " Morning" 

 cssStyle.color ="Green"}
else if(date>=12 && date < 19){greeting = " Afternoon" 
 cssStyle.color="Orange"}
else{greeting =" Night"
 cssStyle.color="Black"}

function App(){
    return(
            <h1 className="box">Welcome Sami It is <span style={cssStyle}>{greeting}</span></h1>
    )
}

export default App;