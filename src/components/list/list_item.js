import React from 'react';
import Card from '../../base_components/card/card.js';

import Row from '../../base_components/row.js';
import Col from '../../base_components/col.js';
import male from './male.png';
import female from './female.png';
import { format } from '../../utils/date.js';

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
                    <Col sm={2}>
                        <img width='40' height='40' src={gender === 'male' ? male : female} />
                    </Col>
                    <Col sm={10}>
                        <h4>{name}</h4>

                        <Row className='text-muted'>
                            <Col sm={3}>Gender: <span className='font-black'>{gender}</span></Col>
                            <Col sm={3}>Eye Color: <span className='font-black'>{eye_color}</span></Col>
                            <Col sm={3}>Hair Color: <span className='font-black'>{hair_color}</span></Col>
                            <Col sm={3}>Height: <span className='font-black'>{height}</span></Col>
                        </Row>
                        <Row className='m-t-30'>
                            <Col sm={3} smOffset={9}>
                                <span className='text-muted light-font'>{format(created)}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </li>
    );
}
export default Item;