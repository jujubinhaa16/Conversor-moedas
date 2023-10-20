import {useState} from "react";
function Contador() {
    const [cliques, setCliques] = useState(0)
    const [texto, setTexto] = useState("")

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)


   function digitoualtura(event){
        setAltura(event.target.value)
   }

   function digitoupeso(event){
        setPeso(event.target.value)
   }

    function clicou() {
        setCliques(cliques + 1)
    }


    function digitou(event){
        setTexto(event.target.value)
    }

    return(
        <div>
            <button onClick={clicou}>Clique Aqui</button>
            <p>Você clicou {cliques} vezes</p>
            {cliques > 50 && <p>Você clicou mais de 50 vezes </p>}
            <input value={texto} onChange={digitou}/>
            <p>Você digitou: {texto}</p>
           <br/>

            <p>Seu peso</p>
            <input value={peso} onChange={digitoupeso}/>
            <p>Sua altura</p>
            <input value={altura} onChange={digitoualtura}/>
            <br/>
            <br/>
            <h4>Seu IMC é: {peso/(altura*altura)}</h4>
        </div>
    )
}

export default Contador


