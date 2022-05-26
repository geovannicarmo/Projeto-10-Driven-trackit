 import styled from "styled-components"
 
 export default function ShowDayHabit({click, day, daysSelected, index }){
  

     click = daysSelected.some(selectd => selectd === index);

    return(
        <>
        <DayStyle selectd={click} >

        
            <h1>{day}</h1>
           

        </DayStyle>
         
        </>
    )
}



const DayStyle = styled.div`


background-color: ${props => !props.selectd ? "" : "#CFCFCF"};

display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-style: ridge;
border-width: 2px;
border-color: #D4D4D4;
margin: 4px;
border-radius: 4px;

h1{
    color: ${props => !props.selectd ? "D4D4D4" : "#FFFFFF"};
}
`