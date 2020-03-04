const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const coh = process.argv.slice(2)[0].toUpperCase();
const limit = process.argv.slice(2)[1];

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
join cohorts on cohort_id = cohorts.id
where cohorts.name like \'%${coh}%\'
LIMIT ${limit};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));