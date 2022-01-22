import * as cors from 'cors';

const allowedOrigins = [
    'https://rochajario.github.io'
]

export const options: cors.CorsOptions = {
    origin: allowedOrigins
}
