import * as path from 'path';
import { HeaderResolver, I18nModule, QueryResolver } from '../src/lib';
import { Module } from '@nestjs/common';
import { HelloController } from './controllers/hello.controller';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';

@Module({
  imports: [
    I18nModule.forRoot({
      path: path.join(__dirname, '/i18n/'),
      fallbackLanguage: 'en',
      saveMissing: false,
      resolvers: [
        new QueryResolver(['lang', 'locale', 'l']),
        new HeaderResolver(),
      ],
    }),
  ],
  controllers: [HelloController],
})
export class AppModule {}

describe('i18n module e2e', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const adapter = new FastifyAdapter();
    const module = await Test.createTestingModule({
      imports: [
        I18nModule.forRoot({
          path: path.join(__dirname, '/i18n/'),
          fallbackLanguage: 'en',
          saveMissing: false,
          resolvers: [
            new QueryResolver(['lang', 'locale', 'l']),
            new HeaderResolver(),
          ],
        }),
      ],
      controllers: [HelloController],
    }).compile();

    app = module.createNestApplication<NestFastifyApplication>(adapter);

    await app.init();
  });

  it(`/GET hello should return translation`, () => {
    return app
      .inject({
        url: '/hello',
        method: 'GET',
      })
      .then(({ payload }) => expect(payload).toBe('Hello'));
  });

  it(`/GET hello should return right language when using query resolver`, () => {
    return app
      .inject({
        url: '/hello?lang=nl',
        method: 'GET',
        query: { lang: 'nl' },
      })
      .then(({ payload }) => {
        expect(payload).toBe('Hallo');
        return app
          .inject({
            url: '/hello?l=nl',
            method: 'GET',
          })
          .then(({ payload }) => expect(payload).toBe('Hallo'));
      });
  });

  it(`/GET hello should return translation when providing accept-language`, () => {
    return app
      .inject({
        url: '/hello',
        method: 'GET',
        headers: {
          'accept-language': 'nl',
        },
      })
      .then(({ payload }) => expect(payload).toBe('Hallo'));
  });

  it(`/GET hello should return translation when providing accept-language`, () => {
    return app
      .inject({
        url: '/hello',
        method: 'GET',
        headers: {
          'accept-language': 'nl',
        },
      })
      .then(({ payload }) => expect(payload).toBe('Hallo'));
  });

  afterAll(async () => {
    await app.close();
  });
});