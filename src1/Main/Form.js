import React, { useState } from "react";

function Form(props) {
    const [isActive, setIsActive] = useState(false);
    const [cas, setCas] = useState('')
    const [prof, setProf] = useState('')
    const [kab, setKab] = useState('')

    const handleChange0 = e => {
        setCas(e.target.value)
    }

    const handleChange1 = e => {
        setProf(e.target.value)
    }

    const handleChange2 = e => {
        setKab(e.target.value)
    }

    const addClass = () => {
        setIsActive(current => !current);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: 1,
            cas: cas,
            prof: prof,
            kabinet: kab
        });

        setCas('')
        setProf('')
    };  //ovo je za dodjeljivanje objekta datom rpedmetu tj casu kada se napravi trebam jos dodati kabinet 

    return (
        <div className="maindiv">
            <form className="raspored-form" onSubmit={handleSubmit}>
                <div onClick={addClass}>Ponedjeljak</div>
                <div style={{
          display: isActive ? 'block' : '',
          display: isActive ? 'none' : '',
        }}
        className="editor">
                    <h1 className="title">Dodajte cas</h1>
                    <input value={cas} placeholder="Predmet" onChange={handleChange0}></input>
                    <input value={prof} placeholder="Profesor/ica" onChange={handleChange1}></input>
                    <input value={kab} placeholder="Kabinet" onChange={handleChange2}></input>
                    <button>Dodaj cas</button>
                </div>
            </form>
        </div>
    );
  }
  
  export default Form;
  