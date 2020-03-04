const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
    SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
    FROM assistance_requests
      JOIN teachers ON teachers.id = teacher_id
      JOIN students ON students.id = student_id
      JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = \'${process.argv.slice(2)[0].toUpperCase()}\'
    ORDER BY teacher;
  `)
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));