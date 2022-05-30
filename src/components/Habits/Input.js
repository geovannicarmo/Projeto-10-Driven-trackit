import styled from "styled-components"
import { useState } from 'react'



export default function Input({nameHabito, atualizaLista1, textCancel, setNameHabit, nameHabit}){

  
    let textCancelvar = textCancel;

 

    nameHabito.push(nameHabit)
    

    return(

    
    <Form>
    <input   placeholder="Nome do hábito" 
    
    value={nameHabit} 
    onChange={e => setNameHabit(`${e.target.value}`)} 
    disabled={atualizaLista1} />
    
    </Form>
    
    )
}




const Form = styled.form`

display: flex;
flex-direction: column;
justify-content: center;

input{

width: 80%;
height: 45px;
margin-bottom: 0px;
margin-top: 16px;
margin-left:  30px;
}
`