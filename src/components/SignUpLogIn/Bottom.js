import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Bottom({TextButton, TextFim, Olink, dados, setName, setPassword, postedate, SignUp, setEmail, setimage}){



    return(
<>


    <form >
        <Form>
        <input placeholder="E-mail"  onChange={e => setEmail(e.target.value)} />
        
        <input placeholder="senha"  onChange={e => setPassword(e.target.value)} />

        {
            !SignUp ? 
            <></>
            :
            <>
            <input placeholder="Nome"  onChange={e => setName(e.target.value)} />

            <input placeholder="Foto"  onChange={e => setimage(e.target.value)} />
            </>
        
            
        }

        <Button onClick={postedate}> <h1>{TextButton}</h1>  </Button >
      
       
        </Form>
        </form>

        <Text>
        <Link to={Olink}> {TextFim}</Link>
        </Text>   
</>
    )
}


const Button = styled.div`
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



const Form = styled.div`

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