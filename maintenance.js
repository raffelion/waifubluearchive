// maintenance.js

// Variabel untuk mengaktifkan atau menonaktifkan mode pemeliharaan
let maintenanceMode = true;

//Fungsi untuk menampilkan pesan pemeliharaan
function showMaintenanceMessage() {
  const maintenanceDiv = document.createElement("div");
  maintenanceDiv.style.position = "fixed";
  maintenanceDiv.style.top = "0";
  maintenanceDiv.style.left = "0";
  maintenanceDiv.style.width = "100%";
  maintenanceDiv.style.height = "100%";
  maintenanceDiv.style.display = "flex";
  maintenanceDiv.style.justifyContent = "center";
  maintenanceDiv.style.alignItems = "center";
  maintenanceDiv.style.fontSize = "24px";
  maintenanceDiv.style.fontWeight = "bold";
  maintenanceDiv.style.zIndex = "9999";

  // Tambahkan pesan ke elemen div
  const maintenanceText = document.createElement("p");
  maintenanceText.textcontent =
    "Web sedang dalam perbaikan. Mohon maaf atas ketidaknyamanan. ";
  maintenanceDiv.appendChild(maintenanceText);

  // Tambahan elemen div ke body
  document.body.appenChild(maintenanceDiv);
}

// Fungsi untuk menyembunyikan pesan pemeliharaan
function hideMaintenanceMessage() {
  // Cari elemen div dengan pesan pemeliharaan
  const maintenanceDiv = document.querySelector('div[style*="fixed"]');

  // Jika elemen div ditemukan, hapuslah
  if (maintenanceDiv) {
    maintenanceDiv.remove();
  }
}

// Aktifkan mode pemeliharaan jika variabel maintenanceMode bernilai true
if (maintenanceMode) {
  showMaintenanceMessage();
} else {
  hideMaintenanceMessage();
}
