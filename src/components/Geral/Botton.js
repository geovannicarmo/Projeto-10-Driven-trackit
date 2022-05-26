import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Botton(){

    return(
        <>
        <BottonStyled>

        <Link to="/habitos">
        <h1>
            Habitos
        </h1>
        </Link>

        <Link to="/historico">
        <h1>
            Historico
        </h1>
        </Link>
        
        </BottonStyled>
        </>
    )
}



const BottonStyled = styled.div`

margin-top: 100px;
position: fixed;
width: 100%;
height: 60px;
bottom: 0px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #FFFFFF;

h1{
    margin-right: 36px;
    margin-left: 36px;
    color: #52B6FF;
    font-size: 18px;
    text-decoration: none;
}
`