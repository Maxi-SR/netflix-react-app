const key = 'faa1cb9983e5db4c894014b6d45fcc2f'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`
}

export default requests;