document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const nameInput = document.getElementById("nameInput");
    const enterBtn2 = document.getElementById("enterBtn2");

    const foodInput = document.getElementById("foodInput");
    const enterBtn3 = document.getElementById("enterBtn3");

    const drinkInput = document.getElementById("drinkInput");
    const enterBtn4 = document.getElementById("enterBtn4");

    if (startButton) {
        startButton.addEventListener("click", () => {
            page1.classList.add("hidden");
            page2.classList.remove("hidden");
            document.body.classList.add("bg-page2");
        });
    }

    // --- RÀNG BUỘC KHÔNG CHO BẤM ENTER KHI Ô TRỐNG ---
    
    // Trang 2: Tên
    if (nameInput && enterBtn2) {
        nameInput.addEventListener("input", () => {
            enterBtn2.disabled = nameInput.value.trim() === "";
        });
        nameInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && nameInput.value.trim() !== "") {
                submitAnswer();
            }
        });
    }

    // Trang 3: Món ăn
    if (foodInput && enterBtn3) {
        foodInput.addEventListener("input", () => {
            enterBtn3.disabled = foodInput.value.trim() === "";
        });
        foodInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && foodInput.value.trim() !== "") {
                submitFoodAnswer();
            }
        });
    }

    // Trang 4: Đồ uống
    if (drinkInput && enterBtn4) {
        drinkInput.addEventListener("input", () => {
            enterBtn4.disabled = drinkInput.value.trim() === "";
        });
        drinkInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && drinkInput.value.trim() !== "") {
                submitDrinkAnswer();
            }
        });
    }
});

/* --- XỬ LÝ TRANG 2 --- */
function handleYesClick() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const inputContainer = document.getElementById("inputContainer");
    const resultMessage = document.getElementById("resultMessage");
    const nextBtn = document.getElementById("nextBtn");

    yesBtn.classList.add("active-red");
    noBtn.classList.remove("active-red");

    resultMessage.classList.add("hidden");
    nextBtn.classList.add("hidden");
    inputContainer.classList.remove("hidden");
    
    setTimeout(() => {
        const nameInput = document.getElementById("nameInput");
        if (nameInput) nameInput.focus();
    }, 100);
}

function handleNoClick() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const inputContainer = document.getElementById("inputContainer");
    const resultMessage = document.getElementById("resultMessage");
    const nextBtn = document.getElementById("nextBtn");

    noBtn.classList.add("active-red");
    yesBtn.classList.remove("active-red");

    inputContainer.classList.add("hidden");

    resultMessage.innerHTML = "Tôi biết em sẽ bấm không mà!<br>Em coi chừng tôi đó💩";
    resultMessage.className = "result-message";
    resultMessage.classList.remove("hidden");

    nextBtn.classList.remove("hidden");
}

function submitAnswer() {
    const nameInput = document.getElementById("nameInput");
    const resultMessage = document.getElementById("resultMessage");
    const nextBtn = document.getElementById("nextBtn");

    const val = nameInput.value.trim().toLowerCase();
    if (val === "") return; // Nếu trống thì không thực hiện

    if (val === "hoàng văn hòa") {
        resultMessage.innerHTML = "+1 tình yêu ❤️";
        resultMessage.className = "result-message text-love";
    } else {
        resultMessage.innerHTML = "-1 tình yêu 💩";
        resultMessage.className = "result-message";
    }

    resultMessage.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function goToNextPage() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
    
    setTimeout(() => {
        const foodInput = document.getElementById("foodInput");
        if (foodInput) foodInput.focus();
    }, 100);
}

/* --- XỬ LÝ TRANG 3: MÓN ĂN --- */
function submitFoodAnswer() {
    const foodInput = document.getElementById("foodInput");
    const resultMessage3 = document.getElementById("resultMessage3");
    const nextBtn3 = document.getElementById("nextBtn3");

    const val = foodInput.value.trim();
    if (val === "") return;

    resultMessage3.innerHTML = "Không ngon bằng em :))";
    resultMessage3.className = "result-message";
    resultMessage3.classList.remove("hidden");

    nextBtn3.classList.remove("hidden");
}

function goToPage4() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");
    
    setTimeout(() => {
        const drinkInput = document.getElementById("drinkInput");
        if (drinkInput) drinkInput.focus();
    }, 100);
}

/* --- XỬ LÝ TRANG 4: ĐỒ UỐNG --- */
function submitDrinkAnswer() {
    const drinkInput = document.getElementById("drinkInput");
    const resultMessage4 = document.getElementById("resultMessage4");
    const nextBtn4 = document.getElementById("nextBtn4");

    const val = drinkInput.value.trim();
    if (val === "") return;

    // Hiển thị dòng thông báo theo yêu cầu ảnh mới
    resultMessage4.innerHTML = "Không ngon bằng em x2 :))";
    resultMessage4.className = "result-message";
    resultMessage4.classList.remove("hidden");

    nextBtn4.classList.remove("hidden");
}

function goToPage5() {
    document.getElementById("page4").classList.add("hidden");
    // Chuyển sang Trang 5
}/* --- HÀM CHUYỂN TỪ TRANG 4 SANG TRANG 5 --- */
function goToPage5() {
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("page5").classList.remove("hidden");
}

/* --- KIỂM TRA ĐIỀU KIỆN Ô NHẬP TRANG 5 --- */
function checkGiftInputs() {
    const inputs = document.querySelectorAll(".gift-rank-input");
    const enterBtn5 = document.getElementById("enterBtn5");

    // Bắt buộc tất cả 5 ô đều phải điền nội dung mới mở khóa ENTER
    let allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
    enterBtn5.disabled = !allFilled;
}

/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 5 --- */
function submitGiftRankAnswer() {
    const resultMessage5 = document.getElementById("resultMessage5");
    const nextBtn5 = document.getElementById("nextBtn5");

    // Hiển thị thông báo hoặc phản hồi (bạn có thể thay đổi câu chữ nếu muốn)
    resultMessage5.innerHTML = "+1 tình yêu ❤️";
    resultMessage5.className = "result-message text-love";
    resultMessage5.classList.remove("hidden");

    // Hiện nút TIẾP THEO
    nextBtn5.classList.remove("hidden");
}

function goToPage6() {
    document.getElementById("page5").classList.add("hidden");
    // Chuyển sang Trang 6
}
// Bổ sung vào sự kiện DOMContentLoaded trong web0.js:
document.addEventListener("DOMContentLoaded", () => {
    // ... các đoạn code cũ ...

    // Xử lý ràng buộc ô nhập cho Trang 6
    const sootheInput = document.getElementById("sootheInput");
    const enterBtn6 = document.getElementById("enterBtn6");

    if (sootheInput && enterBtn6) {
        sootheInput.addEventListener("input", () => {
            enterBtn6.disabled = sootheInput.value.trim() === "";
        });

        sootheInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && sootheInput.value.trim() !== "") {
                submitSootheAnswer();
            }
        });
    }
});

/* --- HÀM CHUYỂN TỪ TRANG 5 SANG TRANG 6 --- */
function goToPage6() {
    document.getElementById("page5").classList.add("hidden");
    document.getElementById("page6").classList.remove("hidden");

    // Auto focus vào ô nhập ở Trang 6
    setTimeout(() => {
        const sootheInput = document.getElementById("sootheInput");
        if (sootheInput) sootheInput.focus();
    }, 100);
}


/* --- XỬ LÝ TRANG 6: CÁCH DỖ DÀNH KHI GIẬN --- */
function submitSootheAnswer() {
    const sootheInput = document.getElementById("sootheInput");
    const resultMessage6 = document.getElementById("resultMessage6");
    const nextBtn6 = document.getElementById("nextBtn6");

    const val = sootheInput.value.trim();
    if (val === "") return;

    // Cập nhật câu phản hồi chính xác theo thiết kế mới
    resultMessage6.innerHTML = "Anh đã lưu nó vào tim rồi!❤️";
    resultMessage6.className = "result-message text-love";
    resultMessage6.classList.remove("hidden");

    // Hiển thị nút TIẾP THEO
    nextBtn6.classList.remove("hidden");
}

/* --- HÀM CHUYỂN TỪ TRANG 6 SANG TRANG 7 --- */
function goToPage7() {
    document.getElementById("page6").classList.add("hidden");
    document.getElementById("page7").classList.remove("hidden");
}

let selectedOption7 = "";

/* --- XỬ LÝ CHỌN NÚT Ở TRANG 7 --- */
function selectOption7(option) {
    selectedOption7 = option;
    const anhBtn = document.getElementById("anhBtn7");
    const anhHoaBtn = document.getElementById("anhHoaBtn7");
    const enterBtn7 = document.getElementById("enterBtn7");

    if (option === 'ANH') {
        anhBtn.classList.add("active-red");
        anhHoaBtn.classList.remove("active-red");
    } else {
        anhHoaBtn.classList.add("active-red");
        anhBtn.classList.remove("active-red");
    }

    // Mở khóa nút ENTER khi đã chọn 1 trong 2 đáp án
    enterBtn7.disabled = false;
}

/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 7 --- */
function submitChoice7() {
    if (!selectedOption7) return;

    const resultMessage7 = document.getElementById("resultMessage7");
    const nextBtn7 = document.getElementById("nextBtn7");

    // Hiển thị nội dung phản hồi chính xác theo ảnh
    resultMessage7.innerHTML = "Em tính chọn thằng Sơn Tùng chứ gì?  Không đơn giản thế đâu :))))";
    resultMessage7.className = "result-message";
    resultMessage7.classList.remove("hidden");

    // Hiển thị nút TIẾP THEO
    nextBtn7.classList.remove("hidden");
}

/* --- HÀM CHUYỂN TỪ TRANG 7 SANG TRANG 8 --- */
function goToPage8() {
    document.getElementById("page7").classList.add("hidden");
    document.getElementById("page8").classList.remove("hidden");
}

let selectedOption8 = "";

/* --- XỬ LÝ CHỌN NÚT Ở TRANG 8 --- */
function selectOption8(option) {
    selectedOption8 = option;
    const traiBtn = document.getElementById("traiBtn8");
    const gaiBtn = document.getElementById("gaiBtn8");
    const enterBtn8 = document.getElementById("enterBtn8");

    if (option === 'TRAI') {
        traiBtn.classList.add("active-red");
        gaiBtn.classList.remove("active-red");
    } else {
        gaiBtn.classList.add("active-red");
        traiBtn.classList.remove("active-red");
    }

    // Mở khóa nút ENTER khi đã chọn Trai hoặc Gái
    enterBtn8.disabled = false;
}

/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 8 --- */
function submitChoice8() {
    if (!selectedOption8) return;

    const resultMessage8 = document.getElementById("resultMessage8");
    const nextBtn8 = document.getElementById("nextBtn8");

    // Hiển thị nội dung phản hồi chính xác theo thiết kế
    resultMessage8.innerHTML = "Với anh chỉ cần bố nó tên HÒA<br>mẹ nó tên Hương là được!!!!";
    resultMessage8.className = "result-message";
    resultMessage8.classList.remove("hidden");

    // Hiển thị nút TIẾP THEO
    nextBtn8.classList.remove("hidden");
}

/* --- HÀM CHUYỂN TỪ TRANG 8 SANG TRANG 9 --- */
function goToPage9() {
    document.getElementById("page8").classList.add("hidden");
    document.getElementById("page9").classList.remove("hidden");
}

// Biến lưu trạng thái chọn của Trang 9
let selectedPage9 = {
    xemPhim: false,
    diAn: false
};

/* --- XỬ LÝ CHỌN/BỎ CHỌN NÚT Ở TRANG 9 (BẮT BUỘC CHỌN CẢ 2) --- */
function toggleOption9(type) {
    const xemPhimBtn = document.getElementById("xemPhimBtn9");
    const diAnBtn = document.getElementById("diAnBtn9");
    const enterBtn9 = document.getElementById("enterBtn9");

    if (type === 'xemPhim') {
        selectedPage9.xemPhim = !selectedPage9.xemPhim;
        xemPhimBtn.classList.toggle("active-red", selectedPage9.xemPhim);
    } else if (type === 'diAn') {
        selectedPage9.diAn = !selectedPage9.diAn;
        diAnBtn.classList.toggle("active-red", selectedPage9.diAn);
    }

    // Nút ENTER chỉ bật khi CẢ 2 NÚT đều được chọn (true)
    enterBtn9.disabled = !(selectedPage9.xemPhim && selectedPage9.diAn);
}

/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 9 --- */
function submitChoice9() {
    if (!selectedPage9.xemPhim || !selectedPage9.diAn) return;

    const resultMessage9 = document.getElementById("resultMessage9");
    const nextBtn9 = document.getElementById("nextBtn9");

    // Hiển thị nội dung phản hồi chính xác theo hình minh họa
    resultMessage9.innerHTML = "Trẻ con sẽ chọn 1 và ấn enter<br>Người lớn sẽ chọn cả 2 nhé! 😆";
    resultMessage9.className = "result-message";
    resultMessage9.classList.remove("hidden");

    // Hiển thị nút TIẾP THEO
    nextBtn9.classList.remove("hidden");
}

// Bổ sung vào sự kiện DOMContentLoaded trong web0.js:
document.addEventListener("DOMContentLoaded", () => {
    // ... các đoạn code cũ ...

    // Xử lý ràng buộc ô nhập cho Trang 10
    const descInput = document.getElementById("descInput");
    const enterBtn10 = document.getElementById("enterBtn10");

    if (descInput && enterBtn10) {
        descInput.addEventListener("input", () => {
            enterBtn10.disabled = descInput.value.trim() === "";
        });

        descInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && descInput.value.trim() !== "") {
                submitDescAnswer();
            }
        });
    }
});

/* --- HÀM CHUYỂN TỪ TRANG 9 SANG TRANG 10 --- */
function goToPage10() {
    document.getElementById("page9").classList.add("hidden");
    document.getElementById("page10").classList.remove("hidden");

    // Auto focus vào ô nhập ở Trang 10
    setTimeout(() => {
        const descInput = document.getElementById("descInput");
        if (descInput) descInput.focus();
    }, 100);
}

/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 10 --- */
function submitDescAnswer() {
    const descInput = document.getElementById("descInput");
    const resultMessage10 = document.getElementById("resultMessage10");
    const nextBtn10 = document.getElementById("nextBtn10");

    const val = descInput.value.trim();
    if (val === "") return;

    // Hiển thị nội dung phản hồi chính xác theo ảnh
    resultMessage10.innerHTML = "Cảm ơn em!";
    resultMessage10.className = "result-message";
    resultMessage10.classList.remove("hidden");

    // Hiển thị nút TIẾP THEO
    nextBtn10.classList.remove("hidden");
}

/* --- HÀM CHUYỂN TỪ TRANG 10 SANG TRANG 11 --- */
function goToPage11() {
    document.getElementById("page10").classList.add("hidden");
    document.getElementById("page11").classList.remove("hidden");

    setTimeout(() => {
        const dateInput = document.getElementById("dateInput11");
        if (dateInput) dateInput.focus();
    }, 100);
}

/* --- KIỂM TRA ĐIỀU KIỆN 2 Ô NHẬP TRANG 11 --- */
function checkInputs11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();
    const enterBtn11 = document.getElementById("enterBtn11");

    // Bắt buộc cả 2 ô đều phải có dữ liệu mới mở khóa nút ENTER
    if (enterBtn11) {
        enterBtn11.disabled = !(dateVal !== "" && locVal !== "");
    }
}

/* --- KIỂM TRA ĐIỀU KIỆN 2 Ô NHẬP TRANG 11 --- */
function checkInputs11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();
    const enterBtn11 = document.getElementById("enterBtn11");

    if (enterBtn11) {
        // Chỉ cần cả 2 ô đều không trống
        enterBtn11.disabled = !(dateVal !== "" && locVal !== "");
    }
}

/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 11 (GỘP THÀNH 1 HÀM DUY NHẤT) --- */
function submitPage11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();

    if (dateVal === "" || locVal === "") return;

    // Chuyển trực tiếp sang Trang 12
    document.getElementById("page11").classList.add("hidden");
    document.getElementById("page12").classList.remove("hidden");
}
/* --- XỬ LÝ KHI BẤM ENTER Ở TRANG 11 (GỘP THÀNH 1 HÀM DUY NHẤT) --- */
function submitPage11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();

    if (dateVal === "" || locVal === "") return;

    // Chuyển trực tiếp sang Trang 12
    document.getElementById("page11").classList.add("hidden");
    document.getElementById("page12").classList.remove("hidden");
}
/* --- XỬ LÝ NÚT THOÁT Ở TRANG 12 --- */
function handleExit() {
    // Cố gắng đóng cửa sổ/tab
    window.close();

    // Dự phòng cho trình duyệt di động (Safari/Chrome) chặn đóng tab tự động
    setTimeout(() => {
        window.location.href = "about:blank";
    }, 100);
}
/* --- CHỈ CHO PHÉP NHẬP SỐ VÀ KIỂM TRA ĐIỀU KIỆN KHÔNG TRÙNG NHAU (TRANG 5) --- */
function validateGiftInput(input) {
    // Lọc bỏ toàn bộ ký tự không phải là số (0-9)
    input.value = input.value.replace(/[^0-9]/g, '');

    // Kiểm tra điều kiện nhập
    checkGiftInputs();
}

function checkGiftInputs() {
    const inputs = document.querySelectorAll(".gift-rank-input");
    const enterBtn5 = document.getElementById("enterBtn5");

    // Lấy danh sách các giá trị đã nhập (loại bỏ ô trống)
    const values = Array.from(inputs)
                        .map(i => i.value.trim())
                        .filter(v => v !== "");

    // 1. Kiểm tra đã điền đủ 5 ô chưa
    const allFilled = values.length === inputs.length;

    // 2. Kiểm tra các số có bị trùng nhau không bằng Set
    const hasNoDuplicates = new Set(values).size === values.length;

    // Chỉ bật nút ENTER khi ĐIỀN ĐỦ 5 Ô và KHÔNG CÓ SỐ NÀO TRÙNG NHAU
    if (enterBtn5) {
        enterBtn5.disabled = !(allFilled && hasNoDuplicates);
    }
}
/* --- TỰ ĐỘNG THÊM DẤU / KHI NHẬP NGÀY THÁNG NĂM (DD/MM/YYYY) --- */
function formatAndCheckDate11(input) {
    // Chỉ lấy chữ số 0-9
    let v = input.value.replace(/\D/g, '');

    // Giới hạn tối đa 8 chữ số (DDMMYYYY)
    if (v.length > 8) v = v.slice(0, 8);

    // Tự động chèn dấu / sau ngày (2 số) và tháng (4 số)
    if (v.length >= 5) {
        input.value = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    } else if (v.length >= 3) {
        input.value = `${v.slice(0, 2)}/${v.slice(2)}`;
    } else {
        input.value = v;
    }

    // Kiểm tra điều kiện mở nút ENTER
    checkInputs11();
}

/* --- KIỂM TRA ĐIỀU KIỆN MỞ NÚT ENTER TẠI TRANG 11 --- */
function checkInputs11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();
    const enterBtn11 = document.getElementById("enterBtn11");

    // Mở khóa khi nhập đủ định dạng 10 ký tự (DD/MM/YYYY) và ô nơi nhận không trống
    if (enterBtn11) {
        enterBtn11.disabled = !(dateVal.length === 10 && locVal !== "");
    }
}