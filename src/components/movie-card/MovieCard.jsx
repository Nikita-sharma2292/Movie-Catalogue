import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi'; 
import apiConfig from '../../api/apiConfig';
 
const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontSize: "12px", height: '40px', justifyContent: 'space-between'}}>
                    <h3 style={{fontWeight: 400}}>{item.title || item.name}</h3>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;
