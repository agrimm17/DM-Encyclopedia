const { Pool } = require('pg');

const PG_URI =
//Why does Supabase need Transaction Pooler instead of Direct Connection URI?
  'postgresql://postgres.turfivqqpzhgkonhzhyy:strahdvonzarovic@aws-0-us-west-1.pooler.supabase.com:6543/postgres';
  // 'postgresql://postgres.turfivqqpzhgkonhzhyy:strahdvonzarovic@aws-0-us-west-1.pooler.supabase.com:6543/postgre';
const pool = new Pool({
  connectionString: PG_URI,
});
// console.log(pool)





module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
