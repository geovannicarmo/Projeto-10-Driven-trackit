import styled from "styled-components"
import { useState } from 'react'



export default function Input({nameHabito}){

    const [nameHabit, setNameHabit]=useState("")

    nameHabito.push(nameHabit)
    

    return(

    <form >
    <Form>
    <input placeholder="nome do hábito"  onChange={e => setNameHabit(e.target.value)} />
    
    </Form>
    </form>
    )
}




const Form = styled.div`

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