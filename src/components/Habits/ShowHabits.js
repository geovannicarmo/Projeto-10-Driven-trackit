import axios from "axios";
import UserContext from '../../context/datesUser'
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function ShowHabits({datesHabit}){

    const [arrayHabits, setArrayHabits]=useState(false)

   function NameHabits({day}){

    console.log(day)
       return (
           <>
           <h1>{day.name}</h1>
           <h1>{day.days}</h1>
           </>
       )
    }


	
	 
    

    const  {dates, setDates} = useContext(UserContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dates}`
        }
    }

    console.log(config)

     useEffect(()=> {
    const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    
    request.then(tratarSucesso)
    

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
                     !arrayHabits
                     ?
                     <>cd</>
                     :
                    arrayHabits.map((name, index)=><NameHabits day={name} key={index} 
                    index={index}/>)
                }
            
            </>
    )
}