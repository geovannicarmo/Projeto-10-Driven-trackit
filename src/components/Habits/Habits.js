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
import LoaderComponent from '../Geral/Loader'


export default function Habits(){

    const  {dates, setDates} = useContext(UserContext)

  

    const  {arrayCancel, setArrayCancel} = useContext(UserContext)

   

    

    const arrayWeek = ['D','S','T','Q','Q','S','S']

    const daysCheck = []

    const nameHabito =[]

    const[atualizaLista, setAtualizaLista] = useState(true)
    const[atualizaLista1, setAtualizaLista1] = useState(false)

    const[textCancel, setTextCancel] = useState("")

    const[addHabit, setAddHabit] = useState(false)

    const [nameHabit, setNameHabit]=useState("")
    
   

    function clickedPlus(){
        console.log("clickedplus")
        setAddHabit(true)
        setAtualizaLista(false)

    }

    
    function clickedCancel(){

        setTextCancel(nameHabito[nameHabito.length-1])

        console.log("clickedplus")
        setAddHabit(false)
        setAtualizaLista(true)

        setArrayCancel(daysCheck)
        console.log(daysCheck)

    }



   function clickedSave(){

    setTextCancel("")

    

    setAtualizaLista1(true)

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

   

    console.log(atualizaLista)
    

   }

   function tratarSucesso(resposta) {
	const statusCode = resposta.data;
	console.log(statusCode);
    setAtualizaLista(true)
    setAddHabit(false)
    setAtualizaLista1(false)
    setNameHabit("")
    
}

function tratarFalha(erro) {
	const statusCode = erro.response.status;
	console.log(statusCode);
    setAtualizaLista1(false)
    alert("Digite os dados do hábito")

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

                <Input nameHabito={nameHabito} atualizaLista1={atualizaLista1}  setTextCancel={setTextCancel} textCancel={textCancel} setNameHabit={setNameHabit} nameHabit={nameHabit}/>

                <WeekStyle>

                {
                    arrayWeek.map((day, index)=><AddHabit day={day} key={index} click={false} daysCheck={daysCheck} 
                    index={index}  atualizaLista1={atualizaLista1}/>)

                }
                </WeekStyle>
              
            <Buttons >
                
                   <button id="cancelar" onClick={clickedCancel} disabled={atualizaLista1}> <h1>Cancelar
                   </h1>
                   </button> 
                

                   <button  id='salvar'  onClick={clickedSave} disabled={atualizaLista1} >

                    {!atualizaLista1 ? <h1>Salvar</h1> : <LoaderComponent/> }
                    
                </button>

            </Buttons>

                </ConteinerCriaHabito>
               
                }

                { !atualizaLista? 
                <></>
                :

                 <ShowHabits datesHabit={"datesHabit"} setAtualizaLista={setAtualizaLista}/> 

                }

              
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
margin-left: 5%;


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