import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('CICD learning server')
        .setDescription('The CICD learning server API description')
        .setVersion('1.0')
        .addTag('cicd')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
