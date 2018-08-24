import React from 'react';
import Item from './list_item.js';

const MoviesList = (props) => {
    const { data } = props;
    return (
        <ul className='m-t-15'>
            {
                (data || []).map((item, i) => <Item key={i} data={item} />)
            }

        </ul>
    )
}
export default MoviesList;