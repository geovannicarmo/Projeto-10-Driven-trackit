import dayjs from "dayjs"
import PortuguesBrasileiro from 'dayjs/locale/pt-br';


export default function Today(){


    const now = dayjs().locale("pt-br").format('dddd')
    console.log (now)
    return(
        <>
        <h1>dw</h1>
        </>
    )
}