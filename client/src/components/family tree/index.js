import React from 'react';
import FamilyTree from './treeK';
import members from './familyK';
import members2 from './familyH';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { flexbox } from '@mui/system';


const Tree = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

            <div><h1>Kendalls</h1>
                <FamilyTree members={members} /></div>


            <div><h1>Hagens</h1>
                <FamilyTree members={members2} /></div>



        </div >

    );
};

export default Tree;
