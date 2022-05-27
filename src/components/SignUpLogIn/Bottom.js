import styled from "styled-components"
import { Link } from "react-router-dom"
import LoaderComponent from "../Geral/Loader"
import ImglLogo from "../.././assets/ImglLogo.png"

export default function Bottom({TextButton, TextFim, Olink, dados, setName, setPassword, postedate, SignUp, setEmail, setimage, loader}){

console.log(loader)

    return(
<Containar>
<Image>
    <img src={ImglLogo} alt="logo" />
    </Image>
        <Form >
        <input placeholder="E-mail"  onChange={e => setEmail(e.target.value)} disabled={loader}/>
        
        <input placeholder="senha"  onChange={e => setPassword(e.target.value)}  disabled={loader}/>

        {
            !SignUp ? 
            <></>
            :
            <>
            <input placeholder="Nome"  onChange={e => setName(e.target.value)} disabled={loader}/>

            <input placeholder="Foto"  onChange={e => setimage(e.target.value)} disabled={loader}/>
            </>
        
            
        }

        

            <Button onClick={postedate} disabled={loader}> 
            {
                !loader ?
                <h1>{TextButton}</h1> 
                : <LoaderComponent/>
                } 
                
                 </Button >
            

        </Form>
       

        <Text>
        <Link to={Olink}> {TextFim}</Link>
        </Text>   
</Containar>
    )
}


const Button = styled.button`
width: 303px;
height: 45px;
background-color:#52B6FF;
margin-bottom: 25px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 20%;
cursor: pointer;

h1{
    color: #FFFFFF;
}
`

const Text = styled.h2`

color: #52B6FF;
font-weight: bold;
text-decoration: underline;
font-size: 16px;
margin-left: 20%;
margin-bottom: 40px;
`



const Form = styled.form`

display: flex;
flex-direction: column;
justify-content: center;

input{

width: 80%;
height: 50px;
margin-bottom: 20px;
margin-top: 20px;
margin-left:  30px;
}
`
const Containar = styled.div`

`

const Image = styled.div`
margin-left: 24%;
`