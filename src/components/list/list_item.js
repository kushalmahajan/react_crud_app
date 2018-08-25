import React from 'react';
import Card from '../../base_components/card/card.js';

import Row from '../../base_components/row.js';
import Col from '../../base_components/col.js';
import male from './male.png';
import female from './female.png';

// const getIcon = async (gender) => {
//     let placeholder = '';
//     if (gender === 'male') {
//         placeholder = await import(/* webpackChunkName male */ `./${gender}.png`);
//     } else {
//         placeholder = await import(/* webpackChunkName female */ `./${gender}.png`);
//     }

//     return placeholder.default;
// }
const Item = (props) => {
    const { name, height, hair_color, eye_color, gender, url, created } = props.data;
    return (
        <li className='m-b-15'>
            <Card>
                <Row>
                    <Col sm={4}>
                        <img width='40' height='40' src={gender === 'male' ? male : female} />
                    </Col>
                    <Col sm={8}>
                        <h4>{name}</h4>
                        <p className='text-muted'>
                            Hello
                            </p>
                    </Col>
                </Row>
            </Card>
        </li>
    );
}
export default Item;