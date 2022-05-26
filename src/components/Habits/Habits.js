import Top from '.././Geral/Top'
import Botton from '../Geral/Botton'
import styled from 'styled-components'
import AddHabit from './AddHabit'
import { useState } from 'react'
import Input from './Input'
import axios from 'axios'
import UserContext from '../../context/datesUser'
import { useContext } from "react";
import ShowHabits from './ShowHabits'


export default function Habits(){

    const  {dates, setDates} = useContext(UserContext)

    const arrayWeek = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']

    const daysCheck = []

    const nameHabito =[]

    const[addHabit, setAddHabit] = useState(false)
    

    function clickedPlus(){
        console.log("clickedplus")
        setAddHabit(true)

    }

    
    function clickedCancel(){
        console.log("clickedplus")
        setAddHabit(false)

    }



   function clickedSave(){


    const datesHabit= {name: nameHabito[nameHabito.length-1], days:daysCheck}

    const config = {
        headers: {
            "Authorization": `Bearer ${dates}`
        }
    }
  
    console.log(config)
    console.log(datesHabit)

    const request= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", datesHabit, config);

    request.then(tratarSucesso); 
    request.catch(tratarFalha);
   }

   function tratarSucesso(resposta) {
	const statusCode = resposta.data;
	console.log(statusCode);
}

function tratarFalha(erro) {
	const statusCode = erro.response.status;
	console.log(statusCode);
}

   

    return(
        <>

        <Top/>
                <Habitsstyled>
                    <Conteiner>
                        <h1>Meus hábitos</h1>
                        <Plus onClick={clickedPlus}>
                            <h1>+</h1>
                        </Plus>
                    </Conteiner>



                </Habitsstyled>

                {  !addHabit ? 
                <></>
                :

                    <ConteinerCriaHabito>

                <Input nameHabito={nameHabito}/>

                <WeekStyle>

                {
                    arrayWeek.map((day, index)=><AddHabit day={day} key={index} click={false} daysCheck={daysCheck} 
                    index={index}/>)
                }
                </WeekStyle>
                {/* <h1>{dates}</h1> */}
            <Buttons>
                <div>
                    <h1 id="cancelar" onClick={clickedCancel}>Cancelar</h1>

                </div>

                <div id='salvar'  onClick={clickedSave}>

                    <h1>Salvar</h1>
                    
                </div>

            </Buttons>

                </ConteinerCriaHabito>
                }

                { <ShowHabits datesHabit={"datesHabit"}/> } 
                <h2> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
        <Botton/>
        
        </>
        
    )
}


const Habitsstyled = styled.div`

margin-top:100px;
margin-left: 18px;

h1{
    margin-bottom:18px;
    color: #126BA5;
    font-size: 22px;
    font-weight: 400;
    margin-top: 10px;
}

h2{
    font-size: 18px;
    font-weight: 400;
}
`

const Plus = styled.div`

width: 40px;
height: 35px;
background-color: #52B6FF;
display: flex;
align-items: center;
justify-content: center;
margin-right: 30px;
border-radius: 5px;

h1{
    color: #FFFFFF;
    font-size: 35px;
    margin-top: 15px;

}

`

const Conteiner = styled.div`
display: flex;

justify-content: space-between;
`

const WeekStyle = styled.div`

display: flex;
justify-content: center;
`
const ConteinerCriaHabito = styled.div`
background-color: #FFFFFF;
margin-bottom: 30px;
width: 90%;
height: 180px;

`

const Buttons = styled.div`
display: flex;
margin-left: 40%;


#cancelar{
    margin-right: 23px;
    width: 84px;
    height: 35px;
    background-color: #FFFFFF;
    color:#52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

#salvar{
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color:#FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

`