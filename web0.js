const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTFBOFSxK40HX4wg23bI7IpDcWyZUq0OXYfleg0kA/dev";

function sendDataToOwner(pageName, questionText, answerText) {
    if (!answerText || answerText.trim() === "") return;
    var formData = new URLSearchParams();
    formData.append("page", pageName);
    formData.append("question", questionText);
    formData.append("answer", answerText);

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString()
    })
    .then(() => console.log("Gửi thành công:", pageName))
    .catch(error => console.error("Lỗi gửi:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", () => {
            document.getElementById("page1").classList.add("hidden");
            document.getElementById("page2").classList.remove("hidden");
            document.body.classList.add("bg-page2");
        });
    }

    const bindEnter = (inputId, btnId, callback) => {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);
        if (input && btn) {
            input.addEventListener("input", () => { btn.disabled = input.value.trim() === ""; });
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter" && input.value.trim() !== "") callback();
            });
        }
    };

    bindEnter("nameInput", "enterBtn2", submitAnswer);
    bindEnter("foodInput", "enterBtn3", submitFoodAnswer);
    bindEnter("drinkInput", "enterBtn4", submitDrinkAnswer);
    bindEnter("sootheInput", "enterBtn6", submitSootheAnswer);
    bindEnter("descInput", "enterBtn10", submitDescAnswer);
});

/* TRANG 2 */
function handleYesClick() {
    document.getElementById("yesBtn").classList.add("active-red");
    document.getElementById("noBtn").classList.remove("active-red");
    document.getElementById("resultMessage").classList.add("hidden");
    document.getElementById("nextBtn").classList.add("hidden");
    document.getElementById("inputContainer").classList.remove("hidden");
}

function handleNoClick() {
    document.getElementById("noBtn").classList.add("active-red");
    document.getElementById("yesBtn").classList.remove("active-red");
    document.getElementById("inputContainer").classList.add("hidden");

    const res = document.getElementById("resultMessage");
    res.innerHTML = "Tôi biết em sẽ bấm không mà!<br>Em coi chừng tôi đó💩";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");

    sendDataToOwner("Trang 2", "Xác nhận biết tên", "Không");
}

function submitAnswer() {
    const val = document.getElementById("nameInput").value.trim();
    if (val === "") return;

    const res = document.getElementById("resultMessage");
    if (val.toLowerCase() === "hoàng văn hòa") {
        res.innerHTML = "+1 tình yêu ❤️";
        res.className = "result-message text-love";
    } else {
        res.innerHTML = "-1 tình yêu 💩";
        res.className = "result-message";
    }
    res.classList.remove("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");

    sendDataToOwner("Trang 2", "Tên đầy đủ nhập vào", val);
}

function goToNextPage() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}

/* TRANG 3 */
function submitFoodAnswer() {
    const val = document.getElementById("foodInput").value.trim();
    if (val === "") return;

    const res = document.getElementById("resultMessage3");
    res.innerHTML = "Không ngon bằng em :))";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn3").classList.remove("hidden");

    sendDataToOwner("Trang 3", "Món ăn yêu thích", val);
}

function goToPage4() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");
}

/* TRANG 4 */
function submitDrinkAnswer() {
    const val = document.getElementById("drinkInput").value.trim();
    if (val === "") return;

    const res = document.getElementById("resultMessage4");
    res.innerHTML = "Không ngon bằng em x2 :))";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn4").classList.remove("hidden");

    sendDataToOwner("Trang 4", "Đồ uống yêu thích", val);
}

function goToPage5() {
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("page5").classList.remove("hidden");
}

/* TRANG 5 */
function validateGiftInput(input) {
    // Chỉ giữ lại chữ số và giới hạn từ 1 đến 5
    input.value = input.value.replace(/[^1-5]/g, '');
    checkGiftInputs();
}

function checkGiftInputs() {
    const inputs = document.querySelectorAll(".gift-rank-input");
    const values = Array.from(inputs).map(i => i.value.trim()).filter(v => v !== "");
    const allFilled = values.length === inputs.length;
    const hasNoDuplicates = new Set(values).size === values.length;
    document.getElementById("enterBtn5").disabled = !(allFilled && hasNoDuplicates);
}

function submitGiftRankAnswer() {
    const inputs = document.querySelectorAll(".gift-rank-input");
    let rankResults = [];
    inputs.forEach(input => {
        rankResults.push(input.getAttribute("data-label") + ": Hạng " + input.value);
    });

    const res = document.getElementById("resultMessage5");
    res.innerHTML = "+1 tình yêu ❤️";
    res.className = "result-message text-love";
    res.classList.remove("hidden");
    document.getElementById("nextBtn5").classList.remove("hidden");

    sendDataToOwner("Trang 5", "Xếp hạng quà", rankResults.join(" | "));
}

function goToPage6() {
    document.getElementById("page5").classList.add("hidden");
    document.getElementById("page6").classList.remove("hidden");
}

/* TRANG 6 */
function submitSootheAnswer() {
    const val = document.getElementById("sootheInput").value.trim();
    if (val === "") return;

    const res = document.getElementById("resultMessage6");
    res.innerHTML = "Anh đã lưu nó vào tim rồi!❤️";
    res.className = "result-message text-love";
    res.classList.remove("hidden");
    document.getElementById("nextBtn6").classList.remove("hidden");

    sendDataToOwner("Trang 6", "Cách dỗ dành", val);
}

function goToPage7() {
    document.getElementById("page6").classList.add("hidden");
    document.getElementById("page7").classList.remove("hidden");
}

/* TRANG 7 */
let selectedOption7 = "";
function selectOption7(option) {
    selectedOption7 = option;
    document.getElementById("anhBtn7").classList.toggle("active-red", option === 'ANH');
    document.getElementById("anhHoaBtn7").classList.toggle("active-red", option === 'ANH HÒA');
    document.getElementById("enterBtn7").disabled = false;
}

function submitChoice7() {
    if (!selectedOption7) return;
    const res = document.getElementById("resultMessage7");
    res.innerHTML = "Em tính chọn thằng Sơn Tùng chứ gì? Không đơn giản thế đâu :))))";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn7").classList.remove("hidden");

    sendDataToOwner("Trang 7", "Lựa chọn giữa Anh/Sơn Tùng", selectedOption7);
}

function goToPage8() {
    document.getElementById("page7").classList.add("hidden");
    document.getElementById("page8").classList.remove("hidden");
}

/* TRANG 8 */
let selectedOption8 = "";
function selectOption8(option) {
    selectedOption8 = option;
    document.getElementById("traiBtn8").classList.toggle("active-red", option === 'TRAI');
    document.getElementById("gaiBtn8").classList.toggle("active-red", option === 'GÁI');
    document.getElementById("enterBtn8").disabled = false;
}

function submitChoice8() {
    if (!selectedOption8) return;
    const res = document.getElementById("resultMessage8");
    res.innerHTML = "Với anh chỉ cần bố nó tên HÒA<br>mẹ nó tên Hương là được!!!!";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn8").classList.remove("hidden");

    sendDataToOwner("Trang 8", "Giới tính em bé", selectedOption8);
}

function goToPage9() {
    document.getElementById("page8").classList.add("hidden");
    document.getElementById("page9").classList.remove("hidden");
}

/* TRANG 9 */
let selectedPage9 = { xemPhim: false, diAn: false };
function toggleOption9(type) {
    if (type === 'xemPhim') selectedPage9.xemPhim = !selectedPage9.xemPhim;
    if (type === 'diAn') selectedPage9.diAn = !selectedPage9.diAn;

    document.getElementById("xemPhimBtn9").classList.toggle("active-red", selectedPage9.xemPhim);
    document.getElementById("diAnBtn9").classList.toggle("active-red", selectedPage9.diAn);
    document.getElementById("enterBtn9").disabled = !(selectedPage9.xemPhim && selectedPage9.diAn);
}

function submitChoice9() {
    if (!selectedPage9.xemPhim || !selectedPage9.diAn) return;
    const res = document.getElementById("resultMessage9");
    res.innerHTML = "Trẻ con sẽ chọn 1 và ấn enter<br>Người lớn sẽ chọn cả 2 nhé! 😆";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn9").classList.remove("hidden");

    sendDataToOwner("Trang 9", "Xem phim / Đi ăn", "Chọn cả 2");
}

function goToPage10() {
    document.getElementById("page9").classList.add("hidden");
    document.getElementById("page10").classList.remove("hidden");
}

/* TRANG 10 */
function submitDescAnswer() {
    const val = document.getElementById("descInput").value.trim();
    if (val === "") return;

    const res = document.getElementById("resultMessage10");
    res.innerHTML = "Cảm ơn em!";
    res.className = "result-message";
    res.classList.remove("hidden");
    document.getElementById("nextBtn10").classList.remove("hidden");

    sendDataToOwner("Trang 10", "Cảm nhận về anh", val);
}

function goToPage11() {
    document.getElementById("page10").classList.add("hidden");
    document.getElementById("page11").classList.remove("hidden");
}

/* TRANG 11 */
function formatAndCheckDate11(input) {
    let v = input.value.replace(/\D/g, '');
    if (v.length > 8) v = v.slice(0, 8);
    if (v.length >= 5) input.value = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    else if (v.length >= 3) input.value = `${v.slice(0, 2)}/${v.slice(2)}`;
    else input.value = v;
    checkInputs11();
}

function checkInputs11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();
    document.getElementById("enterBtn11").disabled = !(dateVal.length === 10 && locVal !== "");
}

function submitPage11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();
    if (dateVal === "" || locVal === "") return;

    sendDataToOwner("Trang 11", "Thông tin nhận quà", "Ngày: " + dateVal + " | Địa điểm: " + locVal);
    document.getElementById("page11").classList.add("hidden");
    document.getElementById("page12").classList.remove("hidden");
}

/* --- CHUYỂN TỪ TRANG 11 SANG TRANG 12 --- */
function submitPage11() {
    const dateVal = document.getElementById("dateInput11").value.trim();
    const locVal = document.getElementById("locationInput11").value.trim();

    if (dateVal.length !== 10 || locVal === "") return;

    // Chuyển sang Trang 12
    document.getElementById("page11").classList.add("hidden");
    document.getElementById("page12").classList.remove("hidden");
}

/* --- XỬ LÝ NÚT THOÁT Ở TRANG 12 --- */
function handleExit() {
    // Tải lại trang để reset toàn bộ về Trang 1
    window.location.reload();
}