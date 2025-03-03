import supertest from "supertest";
import app from '../src/application/app';
import logger from "../src/application/logging";
import UserTest from "./user-util";

describe('POST API Register', () => {
  afterEach(async () => {
    await UserTest.deleteUser();
  });

  it('should reject register new user if request is invalid', async () => {
    const response = await supertest(app)
      .post('/api/users')
      .send({
        username: '',
        name: '',
        password: ''
      });

    logger.debug(response.body);
    expect(response.statusCode).toBe(400);
    expect(response.body.errors).toBeDefined();
  });

  it('should success register new user', async () => {
    const response = await supertest(app)
      .post('/api/users')
      .send({
        username: 'test',
        name: 'test',
        password: 'test123'
      });

    logger.debug(response.body);
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toBeDefined();
  });
});

describe('POST API Login', () => {
  beforeEach(async () => {
    await UserTest.addUser();
  });

  afterEach(async () => {
    await UserTest.deleteUser();
  });

  it('should success login', async () => {
    const response = await supertest(app)
      .post('/api/users/login')
      .send({
        username: 'test',
        password: 'test'
      });

    logger.debug(response.body);
    console.log(response.body)
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
  });

  it('should denied to login', async () => {
    const response = await supertest(app)
      .post('/api/users/login')
      .send({
        username: 'a',
        password: 'aa'
      });

    logger.debug(response.body);
    expect(response.status).toBe(401);
  });
});