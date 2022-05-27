import axios from "axios";
import UserContext from '../../context/datesUser'
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ShowHabit from "./ShowHabit";
import styled from "styled-components";


export default function ShowHabits({datesHabit, setAtualizaLista}){

    const [arrayHabits, setArrayHabits]=useState(false)

 


	
	 
    

    const  {dates, setDates} = useContext(UserContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dates}`
        }
    }

    console.log(config)

     useEffect(()=> {
    const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    
  
    

    request.then(tratarSucesso); 
    request.catch(tratarFalha);

},[])
   

   function tratarSucesso(resposta) {
	setArrayHabits(resposta.data);
    console.log(arrayHabits);
	
}

function tratarFalha(erro) {
	const statusCode = erro.response.status;
	console.log(statusCode);
}

    return(
        <>

                 {
                    
                     arrayHabits.length===0 || !arrayHabits ?
                     <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                     :

                     <HabitsStyle>
                         {
                         
                    arrayHabits.map((name, index)=><ShowHabit day={name} key={index} 
                    index={index} setAtualizaLista={setAtualizaLista}/>)
                         }

                    </HabitsStyle>
                }
            
            </>
    )
}

const HabitsStyle = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
`
