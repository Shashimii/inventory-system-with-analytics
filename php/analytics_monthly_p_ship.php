<?php
include 'script_con.php';

$stmt = $con->prepare("SELECT SUBSTRING_INDEX(action_date, '/', 1) AS month_num, item_name, SUM(shipped_quantity) AS total_quantity 
FROM `products_data` 
WHERE item_data_status = ? 
GROUP BY item_name, SUBSTRING_INDEX(action_date, '/', 1)
ORDER BY SUBSTRING_INDEX(action_date, '/', 1) ASC");
$stmt->bind_param("s", $dataStatusShip);
$stmt->execute();
$result = $stmt->get_result();

// arrays
$monthNames = [
    '01' => 'January',
    '02' => 'February',
    '03' => 'March',
    '04' => 'April',
    '05' => 'May',
    '06' => 'June',
    '07' => 'July',
    '08' => 'August',
    '09' => 'September',
    '10' => 'October',
    '11' => 'November',
    '12' => 'December'
];

$datasets = [];

// Loop through the result set
while ($row = $result->fetch_assoc()) {
    $label = $row['item_name'];
    $data = (float)$row['total_quantity'];
    $month = (string)$row['month_num'];
    $monthName = $monthNames[$month];
    $borderColor = 'rgb(' . mt_rand(100, 200) . ', ' . mt_rand(100, 200) . ', ' . mt_rand(100, 200) . ')';

    $datasetExists = false;
    foreach ($datasets as &$dataset) {
        if ($dataset['label'] === $label) {
            $dataset['data'][$monthName] = $data; // Use the month name as the key
            $datasetExists = true;
            break;
        }
    }

    // If the dataset doesn't exist, create a new one
    if (!$datasetExists) {
        $datasets[] = [
            'label' => $label, // Product name (legend of the chart)
            'data' => array_fill_keys($monthNames, 0), // Initialize data as an array of zeros for all months
            'borderColor' => $borderColor,
            'fill' => false, // Do not fill under the line
        ];
        $datasets[count($datasets) - 1]['data'][$monthName] = $data; // Update the data for the current month
    }
}

// Convert to JSON format for use in JavaScript
$chart_data_json = json_encode($datasets);
header('Content-Type: application/json');
echo $chart_data_json;

