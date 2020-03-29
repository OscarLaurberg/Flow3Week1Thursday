import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons }) => {
    return (
        <>
        <h3>All Persons</h3>
        <ul>
            {persons.map(person => (
                <li key={person.id}>{person.id}, {person.name}</li>
            ))}
        </ul>
        </>
    );
};

export default PersonList;

PersonList.propTypes ={ 
    persons: PropTypes.array
}