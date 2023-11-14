import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB;

let cachedClient: any = null;
let cachedDb: any = null;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

const connectDatabase = async () => {
  try {
    if (cachedClient && cachedDb) {
      return { client: cachedClient, db: cachedDb };
    }

    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    const client = await mongoose.connect(mongodbUri);

    const db = client.connection.db;

    // Atualizar o cache após a conexão bem-sucedida
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

export default connectDatabase;



