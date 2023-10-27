import mongoose from "mongoose";

export async function connection(DB_URL) {
  console.log("DB_URL", DB_URL)
  const OPTIONS = {
    dbname: 'epamdb'
  };
  try {
    await mongoose.connect("mongodb+srv://virendra-chauhan0555:9926262714a@first-cluster.gqypz8z.mongodb.net/?retryWrites=true&w=majority", OPTIONS);
    console.log("Connected successfully...")
  }
  catch(err) {
    console.log("Connection failed")
    console.log(err)
  }
}

