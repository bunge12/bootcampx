SELECT students.name AS student_name, cohorts.name AS cohort_name, cohorts.start_date AS cohort_start_date, students.start_date AS student_start_date
FROM students
  LEFT JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY students.name, cohorts.name, cohorts.start_date, students.start_date
HAVING students.start_date <> cohorts.start_date
ORDER BY cohort_name