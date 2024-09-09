// import axios from 'axios';
// import { apiKey } from '../constants';

// // endpoints

// const apiBaseUrl = 'http://www.omdbapi.com'
// const trendingMoviesEndpoint =`http://www.omdbapi.com/?apikey=436d54b4&`
// // const trendingMoviesEndpoint =`${apiBaseUrl}/?apikey=${apiKey}&`
// const upcomingMoviesEndpoint =`${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
// const topRatedMoviesEndpoint =`${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

// export const image500 = path => path? `https://image.tmdb.org/t/p/w500${path}`: null;
// export const image342 = path => path? `https://image.tmdb.org/t/p/w342${path}`: null;
// export const image185 = path => path? `https://image.tmdb.org/t/p/w185${path}`: null;

// const apiCall = async (endpoint, params)=>{
//     const options = {
//         method: 'GET',
//         url: endpoint,
//         params: params? params: {}
//     }

//     try{
//         const response = await axios.request(options);
//         return response.data;
//     }catch(error){
//         console.log('error: ', error);
//         return {}
//     }
// }

// export const fetchTrendingMovies= ()=>{
//     return apiCall(trendingMoviesEndpoint)
// }

// export const fetchUpcomingMovies= ()=>{
//     return apiCall(upcomingMoviesEndpoint)
// }

// export const fetchTopRatedMovies= ()=>{
//     return apiCall(topRatedMoviesEndpoint)
// }

// // import { apiKey } from '../constants';

// // // endpoints

// // const apiBaseUrl = 'https://api.themoviedb.org/3';
// // const trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=61067dc5b51dc44cc227602884139482`;
// // const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
// // const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

// // export const image500 = (path) => (path ? `https://image.tmdb.org/t/p/w500${path}` : null);
// // export const image342 = (path) => (path ? `https://image.tmdb.org/t/p/w342${path}` : null);
// // export const image185 = (path) => (path ? `https://image.tmdb.org/t/p/w185${path}` : null);

// // // Fetch API call function
// // const apiCall = async (endpoint, params = {}) => {
// //   try {
// //     const url = new URL(endpoint);
// //     Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

// //     const response = await fetch(url.toString());
// //     if (!response.ok) {
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }

// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     console.log('Error:', error.message);
// //     return {};
// //   }
// // };

// // // Fetch trending movies
// // export const fetchTrendingMovies = () => {
// //   return apiCall(trendingMoviesEndpoint);
// // };

// // // Fetch upcoming movies
// // export const fetchUpcomingMovies = () => {
// //   return apiCall(upcomingMoviesEndpoint);
// // };

// // // Fetch top-rated movies
// // export const fetchTopRatedMovies = () => {
// //   return apiCall(topRatedMoviesEndpoint);
// // };
