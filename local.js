import config from 'config';
import swaggerUi from 'swagger-ui-express';
import app from './server';
import {consoleLoggerInfo, consoleLoggerWarn} from './logger';
import {swaggerConfig} from './swagger';

consoleLoggerInfo.info(`${config.application} version ${config.version} is starting...`);

let allDSEnvSet = true;

if (allDSEnvSet) {
  const port = '8080';

  app.set('port', config.port || port);
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  app.listen(app.get('port'), () => {
    console.log(`Palindrome REST API server started on port ${app.get('port')}`);
  });
} else {
  console.log('ERROR: An environment variable for a data source config not found.');
}
