import Top from "../Geral/Top"
import Botton from "../Geral/Botton"
import styled from "styled-components"

export default function History(){

    return(
        <>
            <Top/>
                <HistoryStyle>
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </HistoryStyle>
            <Botton/>
        </>


    )
}

const HistoryStyle = styled.div`

margin-top:100px;
margin-left: 18px;

h1{
    margin-bottom:18px;
    color: #126BA5;
    font-size: 22px;
    font-weight: 400;
}

h2{
    font-size: 18px;
    font-weight: 400;
}
`