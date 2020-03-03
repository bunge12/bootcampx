SELECT assignments.id AS id, assignments.name AS name, day, chapter, count(assignment_id) AS total_requests
FROM assignments
  JOIN assistance_requests ON assistance_requests.assignment_id = assignments.id
GROUP BY assignments.id
ORDER BY total_requests DESC;