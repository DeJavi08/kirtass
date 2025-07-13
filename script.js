document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fungsi untuk Menu Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Menutup menu saat link di-klik (untuk mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 2. Fungsi untuk Slider Kegiatan
    const scrollContainer = document.getElementById('kegiatan-container');
    const scrollLeftButton = document.getElementById('kegiatan-scroll-left');
    const scrollRightButton = document.getElementById('kegiatan-scroll-right');

    if (scrollContainer && scrollLeftButton && scrollRightButton) {
        const scrollAmount = 300; // Jarak geser dalam pixel

        scrollLeftButton.addEventListener('click', () => {
            scrollContainer.scrollLeft -= scrollAmount;
        });

        scrollRightButton.addEventListener('click', () => {
            scrollContainer.scrollLeft += scrollAmount;
        });
    }

    // 3. Fungsi untuk Modal/Popup Galeri Foto
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const galleryImages = document.querySelectorAll('.galeri-frame img');
    const closeModalButton = document.querySelector('.close-modal-button');

    if (modal && modalImg && galleryImages.length > 0 && closeModalButton) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = "flex";
                modalImg.src = img.src;
            });
        });

        // Fungsi untuk menutup modal
        const closeModal = () => {
            modal.style.display = "none";
        };

        // Menutup saat tombol close di-klik
        closeModalButton.addEventListener('click', closeModal);

        // Menutup saat area di luar gambar di-klik
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
