import pg from "pg";

// connect postgresql with user's credential, replace with your user, password and port
const connectionString = process.env.POSTGRES_URL;
const connection = new pg.Pool({
   connectionString,
});

const executeQuery = (sql, cb) => {

   return new Promise(resolve => {
      return connection.connect((err, client, done) => {
         if (err) {
            resolve([err, true]);
         } else {
            return client.query(sql, (err, res) => {
               done();
               (err) ?
               resolve([err, true]) :
                  resolve([res, false]);
            });
         }
      });
   });
}

export const processError = (error, hasError)=>{
   if (hasError) {
      throw new Error(`${error}`);
  }
}

export default executeQuery;