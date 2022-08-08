import express from 'express';

const app = express();

app.use(express.json())

import create from '../controllers/create.js';

import tips from '../controllers/tips.js';

create(app);
tips(app);

export default app;