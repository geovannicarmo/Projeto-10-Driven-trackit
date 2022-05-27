import styled from "styled-components"
import { Link } from "react-router-dom"
import LoaderComponent from "../Geral/Loader"

export default function Bottom({TextButton, TextFim, Olink, dados, setName, setPassword, postedate, SignUp, setEmail, setimage, loader}){

console.log(loader)

    return(
<>


   
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
</>
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