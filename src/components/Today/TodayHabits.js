import axios from "axios";
import styled from "styled-components"
import { useEffect } from "react";


export default function TodayHabits({name, index, id, done, highestSequence, currentSequence, feitos, config, setArrayHabits, setMostraHabit}){


    function Marcar(){


        setMostraHabit(false)
    
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config)
            request.then(answer=> {setMostraHabit(true)});
  
    }

    function Desmarcar(){

        setMostraHabit(false)
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)
            request.then(answer=> { setMostraHabit(true)});

    }


    let record = false
    if(currentSequence===highestSequence && highestSequence>0){
        record=true
    }



    console.log(done)
    if(done===false){
        feitos.push(1)
    }
    console.log(feitos)

    return(
        <Container>
            <DatasHabit  selectd={done} selectd2={record} >
        <h1>{name}</h1>
        <h2>Sequência atual: {currentSequence} dias </h2>
        <h3>Seu recorde: {highestSequence} dias </h3>
        
        </DatasHabit>

        <Check selectd={done}  onClick={!done ? Marcar : Desmarcar}>
            opa
        </Check>

        </Container>
    )
}

const Check = styled.button`
width: 69px;
height: 69px;
background-color: ${props => !props.selectd ? "8FC549" : "#8FC549"};
margin-top: 13px;
position: absolute;
right: 13px;
`
const Container = styled.div`
 height: 94px;
 width: 94%;
 background-color: #FFFFFF;
 margin-bottom: 10px;
 display: flex;
 position: relative;
 margin-top: 10px;


 `

 const DatasHabit = styled.div`


 h1{
     font-size: 20px;
     font-weight: 400;
     color: #666666;
     margin: 13px 17px 7px 15px;

 }

 h2{
     font-size: 13px;
     font-weight: 400;
    
     margin-left: 15px;
        color: ${props => !props.selectd ? "" : "#8FC549"};

 }

 h3{
     font-size: 13px;
     font-weight: 400;
    
     margin-left: 15px;
        color: ${props => !props.selectd2 ? "" : "#8FC549"}; 

 }
 
 `



