// Inisialisasi peta
var map = L.map('mapContainer').setView([2.6307344287460896, 98.75815156491267], 8); // Koordinat Kabupaten Toba

// Menambahkan layer peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Mengambil data wisata dari file JSON
fetch('data/wisata.json')
    .then(response => response.json())
    .then(data => {
        // Menambahkan marker untuk setiap lokasi wisata
        data.forEach(item => {
            L.marker([item.lat, item.lon]).addTo(map)
                .bindPopup('<strong>' + item.nama + '</strong><br>' + item.deskripsi);
        });
    })
    .catch(error => console.error('Error loading the data:', error));

    // Event listener for the Info button
document.getElementById('infoButton').addEventListener('click', function () {
    document.getElementById('infoModal').style.display = 'block'; // Show the modal
});

// Event listener for the close button
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('infoModal').style.display = 'none'; // Hide the modal
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});