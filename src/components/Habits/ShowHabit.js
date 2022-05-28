import styled from "styled-components"
import ShowDayHabit from "./ShowDayHabit"
import { useEffect } from "react"
import UserContext from '../../context/datesUser'
import { useContext } from "react";
import axios from "axios";



export default function ShowHabit({day, setAtualizaLista}){


    const  {dates, setDates} = useContext(UserContext)

  
    console.log(day)
    const daysSelected = day.days
    const id = day.id

    const config = {
        headers: {
            "Authorization": `Bearer ${dates}`
        }
    }
   
    console.log(id)
    console.log(config)


   function Delet (){

    if (window.confirm("Deseja excluir o Habito?")) {
       

    setAtualizaLista(false)
  
		const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);

    request.then(()=>setAtualizaLista(true))

    }

        
    }

 
   
    const arrayWeek = ['D','S','T','Q','Q','S','S']

    return(
               <Habitstyled>
       
                <Top>
               
                    <h2>{day.name}</h2>
                    <h2 onClick={Delet}>Apagar</h2>
                </Top>
               
               <WeekStyle>

                {}

               {
                    arrayWeek.map((day, index)=><ShowDayHabit day={day} key={index} click={false} 
                    index={index} daysSelected={daysSelected}/>)
                }
                </WeekStyle>

               </Habitstyled>

        
        )
    }

const Habitstyled = styled.div`
width: 340px;
height: 91px;
margin-bottom: 10px;
background-color: #FFFFFF;

h2{
    margin: 10px;
    font-size: 20px;
    color: #666666;
}
`

const WeekStyle = styled.div`

display: flex;
margin: 5px;
`

const Top = styled.div`

display: flex;
justify-content: space-between;
`
