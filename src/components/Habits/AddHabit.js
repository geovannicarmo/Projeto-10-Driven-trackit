import styled from "styled-components"
import { useState } from "react"
import UserContext from "../../context/datesUser"
import { useContext } from "react" 

export default function AddHabit({day, daysCheck, index, atualizaLista1}){

    const[clicked, setClicked]= useState(false)

    const[arrayCancel, setArrayCancel] = useState([])
    console.log(arrayCancel)


    // const found = arrayCancel.find(element => element===day)
    
    // found = clicked


    if(clicked===true){
        daysCheck.push(index)
        
    }
    else{
        daysCheck.splice(daysCheck.indexOf(index), 1);
      
    }

    return(
       
            <DayStyle selectd={clicked} 

            onClick={()=>setClicked(!clicked)}  disabled={atualizaLista1}>
                <h1>{day}</h1>

            </DayStyle>
        
    )
}

const DayStyle = styled.button`


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
