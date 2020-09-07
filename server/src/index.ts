import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import { replace } from 'lodash';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import routes from './routes';

const PORT = process.env.PORT || 5000;
// Connects to the Database -> then starts the express
createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    const root = replace(__dirname, 'server/src', '');
    app.use(express.static(path.join(root, 'client/build')));

    // Call middleware
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    // Set all routes from routes folder
    app.use('/api', routes);
    app.get('*', (req, res) => {
      res.sendFile(path.join(`${root}/client/build/index.html`));
    });
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  })
  .catch(error => console.log(error));
