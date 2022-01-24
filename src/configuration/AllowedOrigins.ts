import * as cors from 'cors';

const allowedOrigins = [
    'http://localhost:8080',
    'https://rochajario.github.io'
]

export const options: cors.CorsOptions = {
    origin: allowedOrigins
}
