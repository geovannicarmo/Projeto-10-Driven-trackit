import UserContext from "../../context/datesUser"
import { useContext } from "react";
import styled from "styled-components";


export default function TodayTop({arrayHabits})

{
    const  {feito, setFeito} = useContext(UserContext)


    let feitos = arrayHabits.filter((feito)=>(feito.done))

    let percentual= ((feitos.length/arrayHabits.length)*100).toFixed()

    setFeito(percentual)

return(
    

    <Top>
        {
        (feitos.length)===0  ? 
        
    
    <h3> Nenhum hábito concluído ainda </h3>
    :

    <h2> {percentual} % dos hábitos concluídos </h2> 
        }
    </Top>
    

    

    )

}


const Top = styled.div`
h2{
    color: #8FC549;
}

`