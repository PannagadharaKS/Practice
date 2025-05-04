-- 1. Recyclable&LowFat
SELECT product_id 
FROM Products 
WHERE low_fats = 'Y' AND recyclable = 'Y';

-- 2. CustomerReferee
SELECT name 
FROM Customer 
WHERE referee_id != 2 OR referee_id IS NULL;

-- 3. BigCountries
SELECT name, population, area 
FROM World 
WHERE area >= 3000000 OR population >= 25000000;

-- 4. ArticleViewsI
SELECT DISTINCT author_id AS id 
FROM Views 
WHERE author_id = viewer_id ORDER BY author_id ASC;

-- 5. InvalidTweets
SELECT DISTINCT tweet_id 
FROM Tweets 
WHERE CHAR_LENGTH(content) > 15;

-- 6. ReplaceEmployeeIDWithUniqueIdentifier
SELECT
    (
        SELECT unique_id
        FROM EmployeeUNI
        WHERE EmployeeUNI.id = Employees.id
    ) AS unique_id,
    name
FROM Employees;

-- 7. ProductSalesAnalysisI
SELECT P.product_name, S.year, S.price
FROM SALES AS S
JOIN Product AS P
    ON S.product_id = P.product_id;

-- 8. CustomerWhoVisitedButDidNotMakeAnyTransaction
SELECT V.customer_id, COUNT(*) AS count_no_trans
FROM Visits AS V
LEFT JOIN Transactions AS T
    ON V.visit_id = T.visit_id
WHERE T.transaction_id IS NULL
GROUP BY V.customer_id;

-- 9. RisingTemperature
WITH Weather2 AS (
    SELECT 
        *, 
        LEAD(id) OVER (ORDER BY recordDate) AS nextId, 
        LEAD(recordDate) OVER (ORDER BY recordDate) AS nextRecordDate,
        LEAD(temperature) OVER (ORDER BY recordDate) AS nextTemperature 
    FROM Weather
)

SELECT 
    nextId AS Id
FROM Weather2
WHERE DATEDIFF(nextRecordDate, recordDate) = 1
AND temperature < nextTemperature

-- 9. OR
SELECT W2.id AS Id
FROM Weather AS W1
JOIN Weather AS W2
    ON DATEDIFF(W2.recordDate, W1.recordDate) = 1
WHERE W1.temperature < W2.temperature;

-- 10. AverageTimeOfProcessPerMachine
SELECT machine_id, (ROUND(AVG(duration), 3)) AS processing_time
FROM (
    SELECT A1.machine_id, (A2.timestamp - A1.timestamp) AS duration
    FROM Activity AS A1
    JOIN Activity AS A2
        ON A1.machine_id = A2.machine_id AND
        A1.process_id = A2.process_id
    WHERE A1.activity_type = 'start'
    AND A2.activity_type = 'end'
) AS durations
GROUP BY machine_id

-- 11. EmployeeBonus
SELECT E.name, B.bonus
FROM Employee AS E
LEFT JOIN Bonus AS B
    ON E.empId = B.empId
WHERE B.empId IS NULL
OR B.bonus < 1000;