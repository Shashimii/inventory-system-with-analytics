<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <title>Document</title>
</head>
<body>
<div class="container mt-5">
    <table class="table">
        <thead>
            <tr>
                <th>Material Name</th>
                <th>Description</th>
                <th>ID</th>
                <th>Batch Number</th>
                <th>Pallet Number</th>
                <th>Date Received</th>
                <th>Time Received</th>
                <th>Received By</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        Toggle
                    </button>
                </td>
            </tr>
            <tr>
                <td colspan="9">
                    <div class="collapse" id="collapse1">
                        <div class="card card-body">
                            <p>AAAAAAA</p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Toggle
                    </button>
                </td>
            </tr>
            <tr>
                <td colspan="9">
                    <div class="collapse" id="collapse2">
                        <div class="card card-body">
                            <p>CCCCCCC</p>
                        </div>
                    </div>
                </td>
            </tr>
            <!-- Add more rows and collapsible content as needed -->
        </tbody>
    </table>
</div>


</body>
</html>