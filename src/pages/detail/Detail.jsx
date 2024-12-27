import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail(); 
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 style={{fontSize: '40px', marginBottom: '0.5rem', marginTop: '2rem'}}>
                                    {item.title || item.name}
                                </h1>
                                <h1 className='title' style={{fontSize: '20px', fontWeight: 600}}>
                                    {item.tagline}
                                </h1>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    {item.vote_average ? 
                                    <h1 style={{fontSize: '20px', fontWeight: 400}}>
                                        Rating - {parseInt(item.vote_average)}/10
                                    </h1> : <h1></h1>
                                    }
                                    {item.runtime ?
                                        <h1 style={{fontSize: '20px', fontWeight: 400}}>
                                            {item.runtime} Min / {item.release_date.split("-")[0]}
                                        </h1> : <h1></h1>
                                    }
                                </div>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div> 
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            {/* <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div> */}
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;
