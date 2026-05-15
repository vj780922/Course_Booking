const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('modal');
const custNameInput = document.getElementById('custName');
const slotInfo = document.getElementById('selectedSlotInfo');

let selectedCell = null;

// 設定營業時段 (09:00 - 21:00)
const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

// 初始化表格
function initTable() {
    hours.forEach(hour => {
        const row = document.createElement('tr');
        
        // 時段列
        const timeCell = document.createElement('td');
        timeCell.innerText = `${hour} - ${parseInt(hour)+1}:00`;
        timeCell.style.fontWeight = "bold";
        timeCell.style.backgroundColor = "#f9f9f9";
        row.appendChild(timeCell);

        // 週一至週日列 (7天)
        for (let i = 0; i < 7; i++) {
            const cell = document.createElement('td');
            cell.dataset.time = hour;
            cell.dataset.day = i;
            cell.onclick = () => openModal(cell, hour, i);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}

function openModal(cell, hour, dayIndex) {
    if (cell.classList.contains('booked')) return; // 已預約則不動作

    selectedCell = cell;
    const days = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];
    slotInfo.innerText = `預約時間：${days[dayIndex]} ${hour}:00 - ${parseInt(hour)+1}:00`;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    custNameInput.value = "";
}

function saveBooking() {
    const name = custNameInput.value.trim();
    if (name === "") {
        alert("請輸入姓名");
        return;
    }

    // 模擬保存資料
    selectedCell.innerText = name;
    selectedCell.classList.add('booked');
    
    closeModal();
}

// 點擊 Modal 外部關閉
window.onclick = function(event) {
    if (event.target == modal) closeModal();
}

initTable();
