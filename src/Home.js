import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <Link to='/clipit'>Clip It</Link>
            <br/><br/>
            <Link to='/chat'>Chat</Link>
        </div>
    );
};
export default Home;