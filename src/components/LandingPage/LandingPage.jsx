import React, { useState } from 'react';
import { connect } from 'react-redux';
import { configSet } from '../../actions/index.js';

const LandingPage = ({configSetFunc}) => {
    const [lang, setLang] = useState('')
    const [style, setStyle] = useState('')

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
            configSetFunc({lang, style})
            history.push(`/${lang}/${style}`)
        }
    }

    return (
        <div>
            <div>
                <span>Elija un idioma / Select a language</span>
                <div onChange={handleChange}>
                    <input type='radio' value='es' name='languageSel'/><img src='' alt='Español'/>
                    <input type='radio'value='en' name='languageSel'/><img src='' alt='English'/>
                </div>
            </div>
            <p>y / and</p>
            <div>
                <span>Seleccione un estilo / Choose a style</span>
                <div onChange={handleChange}>
                    <input type='radio' value='skullgirls' name='styleSel'/><img src='' alt=''/><span>Skullgirls</span>
                </div>
            </div>
            <button onClick={optCheck}>Continuar / Continue</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        configSetFunc: function(payload) {
            dispatch(configSet(payload))
        }
    }
}

export default connect(null, mapDispatchToProps)(LandingPage)