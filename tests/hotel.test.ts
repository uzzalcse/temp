import request from 'supertest';
import app from '../src/app';
import fs from 'fs/promises';
import path from 'path';

const TEST_DATA_DIR = path.join(__dirname, '../data/hotels');

describe('Hotel API', () => {
  beforeEach(async () => {
    try {
      await fs.rm(TEST_DATA_DIR, { recursive: true, force: true });
    } catch (error) {
      // Directory might not exist
    }
  });

  const sampleHotel = {
    title: 'Test Hotel',
    description: 'A beautiful test hotel',
    guestCount: 4,
    bedroomCount: 2,
    bathroomCount: 2,
    amenities: ['wifi', 'parking'],
    host: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    address: '123 Test Street',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
    rooms: [],
  };

  describe('POST /api/hotel', () => {
    it('should create a new hotel', async () => {
      const response = await request(app)
        .post('/api/hotel')
        .send(sampleHotel);

      expect(response.status).toBe(201);
      expect(response.body.title).toBe(sampleHotel.title);
      expect(response.body.slug).toBe('test-hotel');
    });
  });

  describe('GET /api/hotel/:hotelId', () => {
    it('should get a hotel by ID', async () => {
      const createResponse = await request(app)
        .post('/api/hotel')
        .send(sampleHotel);

      const hotelId = createResponse.body.id;

      const getResponse = await request(app)
        .get(`/api/hotel/${hotelId}`);

      expect(getResponse.status).toBe(200);
      expect(getResponse.body.title).toBe(sampleHotel.title);
    });
  });

  describe('PUT /api/hotel/:hotelId', () => {
    it('should update a hotel', async () => {
      const createResponse = await request(app)
        .post('/api/hotel')
        .send(sampleHotel);

      const hotelId = createResponse.body.id;
      const updatedData = {
        title: 'Updated Hotel',
        description: 'Updated description',
      };

      const updateResponse = await request(app)
        .put(`/api/hotel/${hotelId}`)
        .send(updatedData);

      expect(updateResponse.status).toBe(200);
      expect(updateResponse.body.title).toBe(updatedData.title);
      expect(updateResponse.body.slug).toBe('updated-hotel');
    });
  });
});