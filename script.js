document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    // 1. สร้างปุ่มสลับธีม Dark / Light Mode
    const themeBtn = document.createElement("button");
    themeBtn.id = "theme-toggle";
    themeBtn.innerText = "🌙 เปลี่ยนธีม";
    card.appendChild(themeBtn);

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeBtn.innerText = isDark ? "☀️ สลับเป็นโหมดสว่าง" : "🌙 สลับเป็นโหมดมืด";
    });

    // 2. คลิกที่บรรทัดติดต่อเพื่อคัดลอกอีเมลอัตโนมัติ
    const infoItems = document.querySelectorAll(".info-item");
    const contactItem = infoItems[infoItems.length - 1]; // รายการสุดท้าย (ติดต่อ)

    if (contactItem) {
        contactItem.style.cursor = "pointer";
        contactItem.title = "คลิกเพื่อคัดลอกอีเมล";
        
        contactItem.addEventListener("click", () => {
            const email = "attasan.au@ksu.ac.th";
            navigator.clipboard.writeText(email).then(() => {
                alert("📋 คัดลอกอีเมลเรียบร้อยแล้ว: " + email);
            });
        });
    }
});