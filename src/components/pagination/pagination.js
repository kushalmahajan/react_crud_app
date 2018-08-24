import React from 'react';
import Button from '../../base_components/button.js';
import { Container } from './styles.js';

const pagination = (props) => {
    return (
        <Container className='group'>
            <div style={{ float: 'right' }}>
                <span>{props.page} of {props.data.count}</span>
                <div className='group' style={{ display: 'inline-block', marginLeft: '15px' }}>
                    <Button default onClick={() => props.handler(true)} title='Prev' disabled={props.page <= 1} />
                    <Button default onClick={() => props.handler(false)} title='Next' disabled={props.count === 1} />
                </div>
            </div>

        </Container>
    );
}
export default pagination;