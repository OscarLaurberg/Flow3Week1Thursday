import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewPerson(props){

    const [person, setPerson] = useState(props.nextPerson);

    const savePerson = evt => {
        if (person.personName === ""){
            return;
        }
        props.addPerson(person);
        evt.preventDefault();
    };


    useEffect(() => setPerson({...props.nextPerson}), [props.nextPerson]);

    const onChange = evt => {
        const val = evt.target.value;
        person.personName = val;
        setPerson({...person});
    };

    const title = person.id === "" ? "Create new Person" : "Edit Peron"
    return (
        <div>
            <h3>{title}</h3>
            <form>
                <input value ={person.personName} onChange={onChange}/>
                <br/><br/>
                <button onClick={savePerson} className="btn btn-danger">save</button>
            </form>
            {person.id !== "" && <p> Editing person with</p>}
        </div>
    )
}

export default NewPerson;
NewPerson.propTypes = {
    nextPerson: PropTypes.object,
    addPerson: PropTypes.func
  }