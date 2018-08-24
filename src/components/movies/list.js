import React from 'react';
import Card from '../../base_components/card.js';

const MoviesList = (props) => {
    const { data } = props;
    console.log('props', props);
    return (
        <ul>
            {
                (data || []).map(movie => {
                    return (
                        <li>
                            <Card>
                                {movie.title}
                            </Card>
                        </li>
                    )
                })
            }

        </ul>
    )
}
export default MoviesList;