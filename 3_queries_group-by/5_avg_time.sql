SELECT students.name AS student, avg(assignment_submissions.duration) AS average_assignment_duration
FROM assignment_submissions
  JOIN students ON assignment_submissions.student_id = students.id
WHERE end_date IS NULL
GROUP BY students.NAME
ORDER BY average_assignment_duration DESC