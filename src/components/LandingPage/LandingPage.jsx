import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const [lang, setLang] = useState('')
    const [style, setStyle] = useState('')
    const history = useHistory()

    function handleChange(e) {
        switch(e.target.name) {
            case 'languageSel':
                setLang(e.target.value)
                break;
            case 'styleSel':
                setStyle(e.target.value)
                break;
            default:
                break;
        }
    }

    function optCheck(e) {
        if(!lang || !style) {
            alert('Por favor, seleccione idioma Y estilo / Please, select language AND style')
        } else {
            history.push(`/${lang}/${style}`)
        }
    }

    return (
        <div>
            <div>
                <span>Elija un idioma / Select a language</span>
                <div onChange={handleChange}>
                    <label><input type='radio' value='es' name='languageSel'/><img src='' alt='Español'/></label>
                    <label><input type='radio'value='en' name='languageSel'/><img src='' alt='English'/></label>
                </div>
            </div>
            <p>y / and</p>
            <div>
                <span>Seleccione un estilo / Choose a style</span>
                <div onChange={handleChange}>
                    <label><input type='radio' value='skullgirls' name='styleSel'/><img src='' alt=''/><span>Skullgirls</span></label>
                </div>
            </div>
            <button onClick={optCheck}>Continuar / Continue</button>
        </div>
    )
}

export default LandingPage