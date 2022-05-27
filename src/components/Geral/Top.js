import UserContext from '../.././context/datesUser';
import { useContext } from "react";
import styled from "styled-components";
import TrackIt from "../.././assets/TrackIt.png"
import UserContextImg from '../../context/dateimage';


export default function Top(){

    const  {contextImg, setContextImg} = useContext(UserContext)

    


    return(
        <>
        <Topo>
        <img id="logo" src={TrackIt} alt="" />
        <img id="foto" src={contextImg} alt="" />
        </Topo>
        
        </>
    )
}

const Topo = styled.div`



background-color: #126BA5;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
width: 100%;
top: 0px;
margin-bottom: 200px;



#logo{
    width: 97px;
    height: 49px;
    margin-left: 18px;  
}

#foto{
    width: 51px;
    height: 51px;
    margin-right: 18px; 
    border-radius : 100%;
}
`