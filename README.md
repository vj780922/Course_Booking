<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>健身課程預約系統</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>健身課程預約</h1>
    
    <div class="controls">
        <button id="prevWeek">上一週</button>
        <span id="weekDisplay">2026/05/11 - 2026/05/17</span>
        <button id="nextWeek">下一週</button>
    </div>

    <table id="bookingTable">
        <thead>
            <tr>
                <th>時段</th>
                <th>週一</th>
                <th>週二</th>
                <th>週三</th>
                <th>週四</th>
                <th>週五</th>
                <th>週六</th>
                <th>週日</th>
            </tr>
        </thead>
        <tbody id="tableBody">
            </tbody>
    </table>
</div>

<div id="modal" class="modal">
    <div class="modal-content">
        <h3>預約時段</h3>
        <p id="selectedSlotInfo"></p>
        <label for="custName">客人姓名：</label>
        <input type="text" id="custName" placeholder="請輸入姓名">
        <div class="modal-btns">
            <button onclick="saveBooking()">確認預約</button>
            <button onclick="closeModal()" class="cancel-btn">取消</button>
        </div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
