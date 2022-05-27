import dayjs from "dayjs"
import PortuguesBrasileiro from 'dayjs/locale/pt-br';
import Top from "../Geral/Top";
import Botton from "../Geral/Botton";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import UserContext from "../../context/datesUser";
import { useContext } from "react";
import { useEffect } from "react";
import TodayHabits from "./TodayHabits";
import Habits from "../Habits/Habits";
import TodayTop from "./TodayTop";

export default function Today(){



    const now = dayjs().locale("pt-br").format('dddd')
    const day = dayjs().locale("pt-br").format('DD/MM')
    const {concluido, setConcluido} = (0)

    const [feitos, setFeitos] = useState(0)

    const  {dates, setDates} = useContext(UserContext)

    const [arrayHabits, setArrayHabits]= useState(null)

    const [mostraHabit, setMostraHabit] = useState(true)

    const config = {
        headers: {
            "Authorization": `Bearer ${dates}`
        }
    }

    useEffect(()=>{
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(answer=> {setArrayHabits(answer.data)});


    }, [mostraHabit]);


    return(
        <>
            <Top/>

           

            <Header>    

                {!arrayHabits? <></>
        :
            <TodayTop arrayHabits={arrayHabits}/>
        }

               {/* <h1>{now}  {day}</h1>
               {
               !arrayHabits ? <></>
               :
               (feitos.length/arrayHabits.length)*100 ===0 ? <h2> Nenhum hábito concluído ainda </h2>
               :
               <h2 id="comecou">{((feitos/arrayHabits.length)*100).toFixed()}% dos hábitos concluídos</h2> */}


               {/* } */}
                </Header>
                <DatasHabits>

                    {
                
                
                    !arrayHabits ? <></>
                    :
                    arrayHabits.map((habits, index)=>  <TodayHabits name={habits.name} id={habits.id} index={index} key={index} done={habits.done} currentSequence={habits.currentSequence} highestSequence={habits.highestSequence} feitos={feitos} config={config} setArrayHabits={setArrayHabits}  setMostraHabit={setMostraHabit}  setFeitos={setFeitos} />)
                }

              
            
                </DatasHabits>

            <Botton/>
        </>
    )
}


const Header = styled.div`
margin-top: 96px;
margin-left: 25px;
margin-bottom: 28px;

h1{
    color: #126BA5;
    font-size: 23px;
    font-weight: 400;

}

h2{
    margin-top: 5px;
    

}

#comecou{
   color: #8FC549;
}
`

const DatasHabits = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 80px;
`