const API_KEY = 'vcNAQ91czijBlXeLQIHCsk5SuDI47lk1SvYGb3Ot'
const today = new Date(Date.now()).toISOString().slice(0, 10);

export const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${today}`;

export const ROVER_CALENDAR = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date=${today}`


export const ROVER_LATEST = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${API_KEY}`
