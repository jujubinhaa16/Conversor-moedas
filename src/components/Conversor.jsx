import cssConversor from "./Conversor.module.css"
import {useState} from "react";

function Conversor() {
    const [moeda1, setMoeda1] = useState("")
    const [moeda2, setMoeda2] = useState("")
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function converterMoedas(){

        if (moeda1 === "real" && moeda2 === "dolar"){
            setValor2(valor1 * 5.07)
        } else if (moeda1 === "dolar" && moeda2 === "real"){
            setValor2(valor1 * 0.20)
        } else if (moeda1 === "real" && moeda2 === "peso"){
            setValor2(valor1 * 68.76)
        } else if (moeda1 === "peso" && moeda2 === "real"){
            setValor2(valor1 * 0.015)
        }else if (moeda1 === "real" && moeda2 === "euro"){
            setValor2(valor1 * 0.19)
        } else if (moeda1 === "dolar" && moeda2 === "real"){
            setValor2(valor1 * 5.36)
        } else if (moeda1 === "dolar" && moeda2 === "euro"){
            setValor2(valor1 * 0.94)
        } else if (moeda1 === "euro" && moeda2 === "dolar"){
            setValor2(valor1 * 1.06)
        } else if (moeda1 === "dolar" && moeda2 === "peso"){
            setValor2(valor1 * 349.95)
        } else if (moeda1 === "peso" && moeda2 === "dolar"){
            setValor2(valor1 * 0.0029)
        } else if (moeda1 === "euro" && moeda2 === "peso"){
            setValor2(valor1 * 370.64)
        } else if (moeda1 === "peso" && moeda2 === "euro"){
            setValor2(valor1 * 0.0027)
        } else {
            alert("Nada selecionado")
        }

    }

    function alteraMoeda1(e) {
        setMoeda1(e.target.value)
    }

    function alteraMoeda2(e) {
        setMoeda2(e.target.value)
    }

    function alteraValor1(e) {
        setValor1(e.target.value)
    }

    return(
        <div>
            <div className={cssConversor.titulo}>
                <h2>Conversor de Moeda</h2>
                <p>Dolar, Peso Argentino, Euro e Real</p>
            </div>

            <div className={cssConversor.tudo}>
                <div className={cssConversor.moedas}>
                    <div>
                        <p>De:</p>
                        <select onChange={alteraMoeda1} name="" id="">
                            <option selected disabled>Selecione</option>
                            <option value="real">Real</option>
                            <option value="dolar">Dolar</option>
                            <option value="peso">Peso Argentino</option>
                            <option value="euro">Euro</option>
                        </select>
                    </div>

                    <div>
                        <p>Para:</p>
                        <select onChange={alteraMoeda2} name="" id="">
                            <option selected disabled>Selecione</option>
                            <option value="real">Real</option>
                            <option value="dolar">Dolar</option>
                            <option value="peso">Peso Argentino</option>
                            <option value="euro">Euro</option>
                        </select>
                    </div>
                </div>

                <input className={cssConversor.input}
                       onChange={alteraValor1}
                       value={valor1}
                />

                <p className={cssConversor.p}>{valor2}</p>

                <button className={cssConversor.botao} onClick={converterMoedas}>Converter</button>

            </div>


        </div>
    )

}
export default Conversor