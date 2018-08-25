import React from 'react';
import HeaderStyles from './styles';

const header = () => {
    const title = 'Minimal React Webpack (4) Babel Setup | List with pagination and sorting | React router 4';
    return (
        <HeaderStyles><h4 style={{ fontSize: '18px' }}>{title}</h4></HeaderStyles>
    );
}
export default header;