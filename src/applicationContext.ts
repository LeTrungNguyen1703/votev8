import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// Mounting the application as bare Nest standalone application so that we can use
// the Nest services inside our Encore endpoints
const applicationContext: Promise<{ }> =
  NestFactory.createApplicationContext(AppModule).then((app) => {
    return {
    };
  });

export default applicationContext;
