import styled from "styled-components"
import { useState } from "react"

export default function AddHabit({day, daysCheck, index}){

    const[clicked, setClicked]= useState(false)

    if(clicked===true){
        daysCheck.push(index)
        
    }
    else{
        daysCheck.splice(daysCheck.indexOf(index), 1);
      
    }

    return(
       
            <DayStyle selectd={clicked} 

            onClick={()=>setClicked(!clicked)}>
                <h1>{day}</h1>

            </DayStyle>
        
    )
}

const DayStyle = styled.div`


background-color: ${props => !props.selectd ? "" : "#CFCFCF"};

display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-style: ridge;
border-width: 2px;
border-color: #D4D4D4;
margin: 9px;
border-radius: 4px;

h1{
    color: ${props => !props.selectd ? "D4D4D4" : "#FFFFFF"};
}
`
