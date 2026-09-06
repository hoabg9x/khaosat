document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const nameInput = document.getElementById("nameInput");

    if (startButton) {
        startButton.addEventListener("click", () => {
            page1.classList.add("hidden");
            page2.classList.remove("hidden");
            document.body.classList.add("bg-page2");
        });
    }

    if (nameInput) {
        nameInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                submitAnswer();
            }
        });
    }
});

// Khi nhấn CÓ
function handleYesClick() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const inputContainer = document.getElementById("inputContainer");
    const resultMessage = document.getElementById("resultMessage");
    const nextBtn = document.getElementById("nextBtn");

    yesBtn.classList.add("active-red");
    noBtn.classList.remove("active-red");

    resultMessage.classList.add("hidden");
    nextBtn.classList.add("hidden"); // Ẩn nút Tiếp theo cho đến khi nhấn ENTER
    inputContainer.classList.remove("hidden");
    
    setTimeout(() => {
        document.getElementById("nameInput").focus();
    }, 100);
}

// Khi nhấn KHÔNG
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

    // Hiện nút TIẾP THEO
    nextBtn.classList.remove("hidden");
}

// Khi nhấn ENTER
function submitAnswer() {
    const nameInput = document.getElementById("nameInput");
    const inputContainer = document.getElementById("inputContainer");
    const resultMessage = document.getElementById("resultMessage");
    const nextBtn = document.getElementById("nextBtn");

    const val = nameInput.value.trim().toLowerCase();

    if (val === "") {
        alert("Vui lòng nhập tên!");
        return;
    }

    if (val === "hoàng văn hòa") {
        inputContainer.classList.remove("hidden");
        resultMessage.innerHTML = "+1 tình yêu ❤️";
        resultMessage.className = "result-message text-love";
        resultMessage.classList.remove("hidden");
    } else {
        inputContainer.classList.remove("hidden");
        resultMessage.innerHTML = "-1 tình yêu 💩";
        resultMessage.className = "result-message";
        resultMessage.classList.remove("hidden");
    }

    // Hiện nút TIẾP THEO sau khi nhấn Enter
    nextBtn.classList.remove("hidden");
}

// Chuyển sang Trang 3 khi bấm TIẾP THEO
function goToNextPage() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}