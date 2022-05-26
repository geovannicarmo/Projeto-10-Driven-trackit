import ImglLogo from "../.././assets/ImglLogo.png"
import Bottom from "./Bottom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserContext from '../../context/datesUser'
import { useContext } from "react";


export default function PageSignUp(){

    const  {dates, setDates} = useContext(UserContext)

    const [name, setName]=useState("")
    const [password, setPassword ]=useState("")
    const [email, setEmail ]=useState("")
    const [image, setimage ]=useState("")

    let navigate = useNavigate();



    function postedate(event){

        event.preventDefault();

        const dados = {
            email,
            name,
            image,
            password
        }

        
       
        console.log(dados)
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', dados);
        
        requisicao.then(tratarSucesso);
        requisicao.catch(tratarFalha);
    }

    function tratarSucesso(resposta) {
        const statusCode = resposta.status;
        console.log(statusCode);

        navigate(`/`);
    }

    function tratarFalha(erro) {
        const statusCode = erro.response.status;
        console.log("o erro foi:" + statusCode);
    }

    return(
        <>
            <img src={ImglLogo} alt="logo" />

            <Bottom TextButton={"Cadastrar"} TextFim={"Já tem uma conta? Faça login!"} Olink={"/"}  setName={setName} setPassword={setPassword} postedate={postedate} SignUp={true} setEmail={setEmail} setimage={setimage}/>
        </>
    )
}