import React from 'react';
import HeaderStyles from './styles';

const header = (props) => {
    console.log
    return (
        <HeaderStyles {...props}>{props.children}</HeaderStyles>
    );
}
export default header;