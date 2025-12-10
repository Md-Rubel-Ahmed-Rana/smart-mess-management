import mongodbConnection from '@/config/mongoDbConnection';
import mongoose from 'mongoose';
import { envConfig } from '../config';

const mongodbUrl = envConfig.database.mongodb_url;

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}));

describe('MongoDB Connection', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should connect to MongoDB successfully', async () => {
    (mongoose.connect as jest.Mock).mockResolvedValueOnce(true);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await mongodbConnection();

    expect(mongoose.connect).toHaveBeenCalledWith(
      mongodbUrl,
      expect.objectContaining({
        ssl: true,
        retryWrites: true,
        serverSelectionTimeoutMS: 10000,
      }),
    );

    expect(logSpy).toHaveBeenCalledWith('⏳ Connecting MongoDB Database...');
    expect(logSpy).toHaveBeenCalledWith('✅ MongoDB Connected Successfully!');

    logSpy.mockRestore();
  });

  it('should log error when MongoDB connection fails', async () => {
    (mongoose.connect as jest.Mock).mockRejectedValueOnce(
      new Error('Mock connection failed'),
    );

    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await mongodbConnection();

    expect(errorSpy).toHaveBeenCalledWith(
      'Failed to connect to MongoDB. Error: Mock connection failed',
    );

    errorSpy.mockRestore();
  });
});
