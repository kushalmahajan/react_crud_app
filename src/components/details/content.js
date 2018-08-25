import React from 'react';
import Row from '../../base_components/row.js';
import Col from '../../base_components/col.js';
import Label from '../../base_components/label.js';

export default (props) => {
    const { data } = props;
    const { name, gender, films, species, homeworld } = data;
    return (
        <div>
            <p style={{ color: 'blue' }}>Hey, look. I have used data from previous route - url. Used that url to fetch details.
            Displaying a few values below from that data for demonstration which were not used on previous page.
            </p>
            <Row className='m-t-30'>
                <Col sm={12}>
                    <p><Label>Name</Label>: {name}</p>
                    <p><Label>Gender</Label>: {gender}</p>
                    <p><Label>Homeworld</Label>: {homeworld}</p>
                    <p><Label>Films urls</Label>: {films.join(',       ')}</p>
                    <p><Label>Species Urls</Label>: {species.join(',     ')}</p>
                </Col>
            </Row>
        </div>
    );
}