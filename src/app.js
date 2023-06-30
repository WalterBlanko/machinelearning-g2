import express from 'express';
import cors from 'cors';
import config from './config.js';
import router from './router/ml.router.js';

const app = express();

// Settings 
app.set('port', config.port);

// Cors
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use(router);

// Export app
export default app;