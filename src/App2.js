import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./PersonList"
import NewPerson from "./NewPerson"
import { v4 as uuidv4 } from 'uuid';



function App2() {
const initialData = [
  {id: uuidv4(), personName: "Clark Kent"},
  {id: uuidv4(), personName: "Peter Parker"},
  {id: uuidv4(), personName: "Bruce Wayne"}
]
const[persons, setPersons] = useState(initialData);
const[newPerson, setNewPerson] = useState({id: "", personName: "" });
console.log(persons);

const addPerson = person => {
    if (person.id === "") {
        person.id = uuidv4();
        persons.push(person);
    } else {
        let personToEdit = persons.find (p => p.id === person.id);
        personToEdit.personName = person.personName;
    }
    setPersons([...persons]);
    setNewPerson({id:"", personName: ""});
};

return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
       Lifting state 2
      </h2>

      <div className="row">
        <div className="col-6 allPersons">
          <PersonList persons={persons} />
        </div>
        <div className="col-5 new-person">
          <NewPerson
            addPerson={addPerson}
            nextTodo={newPerson}            
          />
        </div>
      </div>
    </div>
  );
}

export default App2;