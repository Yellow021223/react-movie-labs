export const getMovies = (args) => {
  console.log(args)
  const [, pagePart] = args.queryKey;
    const { page } = pagePart;
    console.log(page)
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=58ac426817dbdd46e759d1ae7cc7bbb3&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
        throw error
    });
  };
  
  export const getMovie = (args) => {
    //console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=58ac426817dbdd46e759d1ae7cc7bbb3`
    ).then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=58ac426817dbdd46e759d1ae7cc7bbb3"
         +
        "&language=en-US"
    ).then( (response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getMovieImages = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=58ac426817dbdd46e759d1ae7cc7bbb3`
    ).then( (response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };

    export const getMovieReviews = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=58ac426817dbdd46e759d1ae7cc7bbb3`
    ).then( (response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };

    export const getUpComingMovies = () => {
        return fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=58ac426817dbdd46e759d1ae7cc7bbb3&language=en-US&page=1`
        ).then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
            });
          }
          return response.json();
        })
        .catch((error) => {
            throw error
        });
      };

      export const getTrendingMovies = () => {
        return fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=58ac426817dbdd46e759d1ae7cc7bbb3&language=en-US&page=1`
        ).then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
            });
          }
          return response.json();
        })
        .catch((error) => {
            throw error
        });
      };

      export const getTopRatedMovies = () => {
        return fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=58ac426817dbdd46e759d1ae7cc7bbb3&language=en-US&page=1`
        ).then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.status_message || "Something went wrong");
            });
          }
          return response.json();
        })
        .catch((error) => {
            throw error
        });
      };