import api from './configs/api'

const store = () => {

    /* MOVIES */
    let movies = [];
    const moviesSubscribers = [];
    const movieSubscriber = {};

    let movieActors = [];
    let fetchingMovies = false;


    const fetchMovies = () => {
        
        fetchingMovies = fetch(api.url + api.endpoints.movies)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                movies = json.data;
                fetchingMovies = false;
            })
            .then(() => {
                moviesSubscribers.forEach((sub) => {
                    sub(movies);
                });

                Object.keys(movieSubscriber).forEach((id) => {
                    const movie = movies.find((movie) => {
                        return movie.id == id;
                    });
                    
                    movieSubscriber[id].forEach((subscriber) => {
                        subscriber(movie);
                    });    
                })
            });
    }

    /* OLD WAY*/
    /*
    const fetchMovie = (id) => {
        if (fetchingMovies) {
            return fetchingMovies.then(() => {
                return movies.find((movie) => {
                    return movie.id == id;
                });
            });
        }
    }
    */

    const subscribeMovie = (id, cb) => {
        const currentSubscribers = movieSubscriber[id] || [];
        currentSubscribers.push(cb);

        movieSubscriber[id] = currentSubscribers;
    }

    const unsubscribeMovie = (id, cb) => {
        const currentSubscribers = movieSubscriber[id] || [];
        currentSubscribers.pop(cb);

        moviesSubscribers[id] = currentSubscribers;
        
    }

    const addMovie = (movie) => {
        movies.push(movie);
        callMoviesSubscribers();
    }

    const removeMovie = () => {
        movies.pop();
        callMoviesSubscribers();
    }

    const getMovies = (movies) => {
        return movies;
    }



    const callMoviesSubscribers = () => {
        moviesSubscribers.forEach((subscriber) => {
            subscriber(movies);
        });
    }

    const subscribeMovies = (cb) => {
        cb(movies);
        moviesSubscribers.push(cb);
    }

    const fetchMovieActors = (movieId) => {
        return fetch(api.url + api.endpoints.movie + '/' + movieId + '/actors')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json.data;
            });
            
    }

    const fetchMovieGenres = (movieId) => {
        return fetch(api.url + api.endpoints.movie + '/' + movieId + '/genres')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json.data;
            });
            
    }


    /* ACTORS */
    let actors = [];
    const actorsSubscribers = [];

    const fetchActors = () => {
        fetch(api.url + api.endpoints.actors)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                actors = json.data;
            })
            .then(() => {
                actorsSubscribers.forEach((sub) => {
                    sub(actors);
                });
            });
    }

    const addActor = (actor) => {
        actors.push(actor);
        callActorsSubscribers();
    }

    const removeActor = () => {
        actors.pop();
        callActorsSubscribers();
    }

    const getActors = (actors) => {
        return actors;
    }

    const callActorsSubscribers = () => {
        actorsSubscribers.forEach((subscriber) => {
            subscriber(actors);
        });
    }

    const subscribeActors = (cb) => {
        cb(actors);
        actorsSubscribers.push(cb);
    }


    /* GENRES */
    let genres = [];
    const genresSubscribers = [];

    const fetchGenres = () => {
        fetch(api.url + api.endpoints.genres)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                genres = json.data;
            })
            .then(() => {
                genresSubscribers.forEach((sub) => {
                    sub(genres);
                });
            });
    }

    const addGenre = (genre) => {
        genres.push(genre);
        callGenresSubscribers();
    }

    const removeGenre = () => {
        genres.pop();
        callGenresSubscribers();
    }

    const getGenres = (genres) => {
        return genres;
    }

    const callGenresSubscribers = () => {
        genresSubscribers.forEach((subscriber) => {
            subscriber(genres);
        });
    }

    const subscribeGenres = (cb) => {
        cb(genres);
        genresSubscribers.push(cb);
    }


    return {
        addMovie,
        getMovies,
        subscribeMovies,
        removeMovie,
        fetchMovies,

        subscribeMovie,
        unsubscribeMovie,

        fetchMovieActors,
        fetchMovieGenres,
     /*   fetchMovie, */

        addActor,
        getActors,
        subscribeActors,
        removeActor,
        fetchActors,

        addGenre,
        getGenres,
        subscribeGenres,
        removeGenre,
        fetchGenres,
        

    }
};

export {
    store
}