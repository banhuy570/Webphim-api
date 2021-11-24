const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd8f01ce32ce0dbc225894e820d424890',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;