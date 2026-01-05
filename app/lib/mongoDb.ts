
import { MongoClient, Db } from "mongodb";

if (!process.env.MONGO_DB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const uri: string = process.env.MONGO_DB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // allow global `var` in dev to avoid multiple connections
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so that the value
  // is preserved across module reloads caused by HMR (hot reload)
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a helper function to get the DB
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db('TaskDB'); // Optional: you can pass db name like client.db("myDb")
}
