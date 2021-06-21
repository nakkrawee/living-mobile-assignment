import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { StoresModule } from '../src/stores/stores.module';
import { StoresService } from '../src/stores/stores.service';
import { INestApplication , HttpStatus} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreateStoreDto } from '../src/stores/dto/createStore.dto'

describe('StoresController (e2e)', () => {
    let app: INestApplication;
    let service: StoresService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [
                SequelizeModule.forRoot({
                    dialect: 'sqlite',
                    autoLoadModels: true,
                    synchronize: true,
                    logging: false,
                }),
                StoresModule,
            ],
            providers: [StoresService],
        }).compile();
        app = module.createNestApplication();
        await app.init();
        service = module.get<StoresService>(StoresService);
    });

    describe('Find all store', () => {
        it('When there is one user, then return that store', async () => {
            const createStoresInput = {
                name: 'store D',
                description: 'description D',
                rating: 5,
            };
            await service.create(createStoresInput);
            return request(app.getHttpServer())
                .get('/stores')
                .expect(200)
                .then((response) => {
                    expect(response.body[0]).toEqual(
                        expect.objectContaining(createStoresInput),
                    );
                });
        });
    });

    describe('Create stores', () => {
        it('When store with valid input, then response 200 (OK) with created stores', async () => {
            const createStoreInput = {
                name: 'Mo-Mo-Paradise',
                description: 'Japanese restaurant',
                rating: 5,
            };
            return request(app.getHttpServer())
                .post('/stores')
                .send(createStoreInput)
                .expect(201)
                .then((response) => {
                    expect(response.body).toEqual(
                        expect.objectContaining(createStoreInput),
                    );
            });
        });
    });

    describe('Update stores', () => {
        it('When store with valid input, then response 200 (OK) with update stores', async () => {
            const updateStoreInput = {
                id: "52dafa9c-91bc-47d3-a744-7448b597ca5a",
                name: 'Mo-Mo-Paradise',
                description: 'Japanese restaurant',
                rating: 4,
            };
            return request(app.getHttpServer())
                .put('/stores/{id}')
                .send(updateStoreInput)
                .expect(200)
                .then((response) => {
                    expect(response.statusCode).toEqual(200);
                    });
            });
    });

    describe('Delete stores', () => {
        it('When store with valid input, then response 200 (OK) with deleted stores', async () => {
            const deleteStoreInput = {
                id: "52dafa9c-91bc-47d3-a744-7448b597ca5a"
            };
            return request(app.getHttpServer())
                .delete('/stores/{id}')
                .send(deleteStoreInput)
                .expect(200)
                .then((response) => {
                    expect(response.statusCode).toEqual(200);
                    });
            });
        });

    
    afterAll(async () => {
        await app.close();
    });
});
    