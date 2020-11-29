import React from 'react';

const PersonComponent = ({person}) => {
    return (
        <li>
            {person.name}<br />
            {person.height}<br />
            {person.eye_color}<br />
            {person.hair_color}<br />
            {person.birth_year}
        </li>
    )
}

export default PersonComponent;