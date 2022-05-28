import ImglLogo from "../.././assets/ImglLogo.png"
import Bottom from "./Bottom"
import { useState } from "react";
import axios from "axios";
import UserContext from '../.././context/datesUser';
import { useContext } from "react";
import { useNavigate } from "react-router-dom"





export default function PageLogin(){
   
    const [email, setEmail]=useState("")
    const [password, setPassword ]=useState("")

    const  {dates, setDates} = useContext(UserContext)

    const  {contextImg, setContextImg} = useContext(UserContext)

    const [loader, setLoader] = useState(false)

    let navigate = useNavigate();

    

    function postedate(event){

        setLoader(true)
       

        event.preventDefault();
        
        console.log(email)
        console.log(password)

        const dados = {email, password}
       
        console.log(dados)

        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', dados);

        requisicao.then(tratarSucesso);
        requisicao.catch(tratarFalha);
    }

    function tratarSucesso(resposta) {
        const statusCode = resposta.data;
    
        console.log(statusCode);

        setDates(resposta.data.token)
        setContextImg(resposta.data.image)

        console.log (dates)

        setLoader(false)

        navigate(`/hoje`);


    }

    function tratarFalha(erro) {
        const statusCode = erro.response.status;
        console.log(statusCode);
        alert("Dados incorretos")

        setLoader(false)
    }

    return(
        <>

        

        <Bottom TextButton={"Entrar"} TextFim={"Não tem uma conta? Cadastre-se!"} Olink={"/cadastro"} setEmail={setEmail} setPassword={setPassword} postedate={postedate}  loader={loader}/>
        
        
        
        
        </>

    )
}