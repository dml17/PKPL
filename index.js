

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Inisialisasi slider
function showSlide(index) {
    // Pastikan index berada dalam rentang
    if (index >= totalSlides) { slideIndex = 0; }
    if (index < 0) { slideIndex = totalSlides - 1; }

    // Geser slides
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Navigasi ke slide berikutnya atau sebelumnya
function plusSlides(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);


function filterProducts(category) {
    // Dapatkan semua elemen produk
    const products = document.querySelectorAll('.product-item');
    
    // Loop melalui semua produk
    products.forEach(product => {
        // Jika kategori adalah 'all', tampilkan semua produk
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            // Tampilkan atau sembunyikan produk berdasarkan kategori
            if (product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });

    // Ubah tombol kategori yang aktif
    const buttons = document.querySelectorAll('.btn-category');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke tombol yang diklik
    event.target.classList.add('active');
}

document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
});

