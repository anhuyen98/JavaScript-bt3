var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// Javascript for accordion 
const accordionContent = $$('.accordion-content'); 
accordionContent.forEach((item, index) => {
    let head = item.querySelector("header");
    head.addEventListener('click', () => {
        item.classList.toggle('active');
        let des = item.querySelector('.accordion-des');
        if (item.classList.contains('active')) {
            des.style.height = `${des.scrollHeight}px`;
            item.querySelector('.icon').classList.replace('fa-plus', 'fa-minus');
        } else {
            des.style.height = '0px';
            item.querySelector('.icon').classList.replace('fa-minus', 'fa-plus');
        }
        removeActive(index);
    })
})
function removeActive(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('active');
            let des2 = item2.querySelector('.accordion-des');
            des2.style.height = '0px';
            item2.querySelector('.icon').classList.replace('fa-minus', 'fa-plus');
        }
    })
}
//-------- -------- ------- --------- --------- ---------
// Javascript for popup-alert
var innerLession = $('.innerLession');
var box1 = $('.box-modal-1');
var box2 = $('.box-modal-2');
var btnHide = $$('.hide-modal');
var overlay = $('.overlay');
// Hàm show popup-alert
function showPopup(box) {
    innerLession.classList.add('active');
    box.classList.add('active')
}
// Hàm ẩn popup-alert
function hidePopup(box) {
    innerLession.classList.remove('active')
    box.classList.remove('active');
}
// listen handle event
for (let btn of btnHide) {
    btn.addEventListener('click', () => {
        hidePopup(btn.offsetParent);
    })
    overlay.addEventListener('click',() => {
        hidePopup(btn.offsetParent);
    })
};
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Hàm lấy input Number
function inputNum() {
    return $('#inputNum').value;
}
// Reset ô input khi đã lấy được giá trị
function resetInput() {
    $('#inputNum').value = '';
}
// Khai báo mảng chứa các phần tử lấy từ input
var arrayInput = [];
$('#btnAddNum').onclick = function () {
    // Check nếu input là '' thì không add vào mảng
    if (inputNum() === '') {
        showPopup(box1);
    } else {
        // Nếu có phần tử thì add vào mảng
        arrayInput.push(Number(inputNum()))
        // Output
        $('#resultArray').innerHTML = arrayInput;
        // Reset ô input khi đã lấy value user nhập
        resetInput();
    };
}
// Hàm check xem có value không, trước khi process main 
function checkArray(width) {
    if (width !== 0) {
        return true
    } else {
        showPopup(box2);
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 1: Tổng số dương 
// Hàm số dương, số âm
function positiveNum(num) {
    return num > 0;
}
$('#btnSum').onclick = function () {
    // Input
    var sumNum = 0;
    var lengthArray = arrayInput.length;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        for (var i = 0; i < lengthArray; ++i) {
            if (positiveNum(arrayInput[i])) {
                sumNum += arrayInput[i]
            }
        }
        // Output
        $('#resultSum').innerHTML = sumNum;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 2: Đếm số dương 
$('#btnAmountPositive').onclick = function () {
    // Input
    var amountPositive = 0;
    var lengthArray = arrayInput.length;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        for (var i = 0; i < lengthArray; ++i) {
            if (positiveNum(arrayInput[i])) {
                amountPositive++;
            }
        }
        // Output
        $('#resultAmountPositive').innerHTML = amountPositive;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 3: Tìm số nhỏ nhất 
$('#btnSmallestNum').onclick = function () {
    // Input
    var smallestNum = arrayInput[0];
    var lengthArray = arrayInput.length;
    // Check 
    if (checkArray(lengthArray)) {
        // Process
        for (var i = 0; i < lengthArray; ++i) {
            if (smallestNum > arrayInput[i]) {
                smallestNum = arrayInput[i];
            }
        }
        // Output
        $('#resultSmallestNum').innerHTML = smallestNum;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 4: Tìm số dương nhỏ nhất 
$('#btnSmallestPositive').onclick = function () {
    // Input
    var smallestPositiveList = [];
    var lengthArray = arrayInput.length;
    if (checkArray(lengthArray)) {
        // Duyệt mảng tìm số dương
        for (var i = 0; i < lengthArray; ++i) {
            if (positiveNum(arrayInput[i])) {
                smallestPositiveList.push(arrayInput[i]);
            }
        }
        var lengthPositon = smallestPositiveList.length;
        // In ra màn hình nếu độ dài mảng số dương = 0 
        if (lengthPositon === 0) {
            $('#resultSmallestPositive').innerHTML = 'Không có số dương trong mảng';
        } else {
            // Process
            var smallestPositive = smallestPositiveList[0]
            for (var j = 0; j < lengthPositon; ++j) {
                if (smallestPositive > smallestPositiveList[j]) {
                    smallestPositive = smallestPositiveList[j]
                }
            }
            // Output
            $('#resultSmallestPositive').innerHTML = smallestPositive;
        }
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 5: Tìm số chẵn cuối cùng
// Hàm chẵn, lẻ
function isEven(num) {
    return num % 2 === 0;
}
$('#btnLastEven').onclick = function () {
    // Input
    var lastEven = arrayInput[arrayInput.length];
    var lengthArray = arrayInput.length;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        for (var i = lengthArray - 1; i >= 0; --i) {
            if (isEven(arrayInput[i])) {
                lastEven = arrayInput[i];
                break;
            }
        }
        // Output
        $('#resultLastEven').innerHTML = lastEven;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 6: Đổi chỗ
$('#btnSwap').onclick = function () {
    // Hàm nhập index
    function indexInput(index) {
        return $(index).value;
    }
    // Input
    // var lengthArray = arrayInput.length;
    var index1 = indexInput('#index1');
    var index2 = indexInput('#index2');
    var lengthArray = arrayInput.length;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        var tmp = arrayInput[index1];
        arrayInput[index1] = arrayInput[index2];
        arrayInput[index2] = tmp;
        // Output
        $('#resultSwap').innerHTML = arrayInput;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 7: Sắp xếp tăng dần
$('#btnSort').onclick = function () {
    // Input
    var lengthArray = arrayInput.length;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        // Sort with 2 loop (for(i) & for(j))
        for (var i = 0; i < lengthArray; i++) {
            for (var j = i + 1; j < lengthArray; j++) {
                if (arrayInput[i] > arrayInput[j]) {
                    var tmp = arrayInput[i];
                    arrayInput[i] = arrayInput[j];
                    arrayInput[j] = tmp;
                }
            }
        }
        // Output
        $('#resultSort').innerHTML = arrayInput;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 8: Tìm số nguyên tố đầu tiên
// Hàm số nguyên tố
function primeNumber(num) {
    if (num > 1) {
        var divisor = 0;
        for (var i = 2; i <= Math.sqrt(num); ++i) {
            if (num % i === 0) {
                divisor++;
            }
        }
        return divisor === 0;
    }
}
$('#btnPrimeNum').onclick = function () {
    // Input
    var lengthArray = arrayInput.length;
    var firstPrimeNum;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        for (var i = 0; i < lengthArray; ++i) {
            if (primeNumber(arrayInput[i])) {
                firstPrimeNum = arrayInput[i];
                break;
            }
        }
        // Output
        $('#resultPrimeNum').innerHTML = firstPrimeNum;
    }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 9: Đếm số nguyên
// Hàm lấy input Number 2
function inputNum2() {
    return $('#inputNum2').value;
}
// Reset ô input khi đã lấy được giá trị
function resetInput2() {
    $('#inputNum2').value = '';
}
// Khai báo mảng chứa các phần tử lấy từ input
var arrayInput2 = [];
$('#btnAddNum2').onclick = function () {
    // Check nếu input là '' thì không add vào mảng
    if (inputNum2() === '') {
        showPopup(box1);
    } else {
        // Nếu có phần tử thì add vào mảng
        arrayInput2.push(Number(inputNum2()))
        // Output
        $('#resultArray2').innerHTML = arrayInput2;
        // Reset ô input khi đã lấy value user nhập
        resetInput2();
    };
}
$('#btnIntegerCount').onclick = function () {
    // Input
    var lengthArray2 = arrayInput2.length;
    var countNum = 0;
    // Process
    for (var i = 0; i < lengthArray2; ++i) {
        if (Number.isInteger(arrayInput2[i])) {
            countNum++;
        }
    }
    // Output
    if (countNum === 0) {
        $('#resultIntegerCount').innerHTML = 'Không có số nguyên trong mảng';
    } else {
        $('#resultIntegerCount').innerHTML = countNum;
    }
}

// ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// Câu 10: So sánh số lượng số âm và số dương
$('#btnCompare').onclick = function () {
    // Input
    var lengthArray = arrayInput.length;
    var positiveNums = 0, negativeNums = 0;
    // Check
    if (checkArray(lengthArray)) {
        // Process
        // Đếm số lượng số âm và số dương
        for (var i = 0; i < lengthArray; ++i) {
            if (positiveNum(arrayInput[i])) {
                positiveNums++;
            } else if (arrayInput[i] !== 0) {
                negativeNums++;
            }
        }
        // So sánh (compare)
        if (positiveNums > negativeNums) {
            compare = '>';
        } else if (positiveNums < negativeNums) {
            compare = '<';
        } else {
            compare = '=';
        }
        // Output
        $('#resultCompare').innerHTML = 'Số dương ' + compare + ' số âm';
    }
}


