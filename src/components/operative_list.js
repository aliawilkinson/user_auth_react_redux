import React from 'react';
import auth from '../HOC/auth';

const OpList = props => (
    <div>
        <h1 className="center">Secret Operative List</h1>
        <ol>Operatives
            <li>Sam</li>
            <li>Corey</li>
            <li>Andrew</li>
            <li>Steve</li>
            <li>Christian</li>
            <li>Olga</li>
            <li>Urkle</li>
        </ol>
    </div>
);

export default auth(OpList);
