import React from 'react';
import Card from '../../base_components/card/card.js';

import Row from '../../base_components/row.js';
import Col from '../../base_components/col.js';
// import male from './male.png';

const getIcon = async (gender) => {
    const placeholder = await import(`./${gender}.png`);
    return placeholder.default;
}
const Item = (props) => {
    const { name, height, hair_color, eye_color, gender, url, created } = props.data;
    const elms = [];
    getIcon(gender).then(res => {
        console.log(gender, res);
        elms.push(
            <li className='m-b-15'>
                <Card>
                    <Row>
                        <Col sm={4}>
                            <img width='40' height='40' src={res} />
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
        )
    });
    return elms;
}
export default Item;