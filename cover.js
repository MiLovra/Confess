// JavaScript untuk halaman cover
document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan tombol "Mulai" berdasarkan ID
    const mulaiButton = document.getElementById("mulaiButton");

    // Menambahkan event listener untuk saat tombol "Mulai" diklik
    mulaiButton.addEventListener("click", function () {
        // Mengubah opacity menjadi 0 (transparan)
        document.body.style.opacity = "0";
        
        // Menunggu sejenak (misalnya, 1000ms atau 1 detik) sebelum mengarahkan ke halaman visual novel
        setTimeout(function () {
            // Mengarahkan ke halaman visual novel
            window.location.href = "index.html";
        }, 1000);
    });
});
