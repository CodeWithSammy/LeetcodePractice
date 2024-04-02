# Write your MySQL query statement below
SELECT *
FROM Cinema
WHERE id % 2 =1
AND LOWER(description) NOT LIKE '%boring%'
ORDER BY rating DESC;