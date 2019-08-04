process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const supertest = require('supertest');
const catsData = require('../src/cats/cat-service');

global.expect = expect;
global.supertest = supertest;
