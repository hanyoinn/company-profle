// DATA PRODUK

const products = [
    {
        id: 1,
        name: "Croissant",
        description: "Croissant mentega yang rangup dan lembut.",
        price: 25000,
        image: "images/croissant.jpg"
    },
    {
        
    id: 2,
    name: "Macaron",
    description: "Macaron kecil, 1 box berisi 15 buah.",
    price: 50000,
    image: "images/macaron.jpg"
},
    
    {
        id: 3,
        name: "Baguette Premium",
        description: "Roti klasik premium dengan kulit renyah.",
        price: 30000,
        image: "images/baguette.jpg"
    },
    {
        id: 4,
        name: "Coklat Dubai",
        description: "Cokelat premium dengan sensasi istimewa.",
        price: 125000,
        image: "images/coklat-dubai.jpg"
    },
    {
        id: 5,
        name: "Dubai Mini Dessert",
        description: "Dessert mini untuk momen manis.",
        price: 68000,
        image: "images/dubai-dessert.jpg"
    }
];
image: "croissant.jpg"
image: "macaron.jpg"
image: "baguette.jpg"
image: "coklat-dubai.jpg"
image: "dubai-dessert.jpg"

const cart = {};

function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(number);
}
    // Menampilkan semua produk dengan gambar
    function renderProducts() {
        const productList = document.getElementById("product-list");
    
        productList.innerHTML = products.map(product => `
            <article class="product-card">
                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-photo"
                    >
                </div>
    
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
    
                    <div class="price">
                        ${formatRupiah(product.price)}
                    </div>
    
                    <button class="btn"
                        onclick="addToCart(${product.id})">
                        + Tambah ke Keranjang
                    </button>
                </div>
            </article>
        `).join("");
    }

// CHECKOUT VIA WHATSAPP
function checkout() {
    // GANTI DENGAN NOMOR WHATSAPP TOKO KAMU
    const nomorWhatsApp = "628563026618";

    const entries = Object.entries(cart)
        .filter(([id, qty]) => qty > 0);

    if (entries.length === 0) {
        alert("Keranjangmu masih kosong! Yuk, pilih produk dulu.");
        return;
    }

    let pesan = "Halo The Golden Crust! Saya ingin memesan:\n\n";
    let total = 0;

    entries.forEach(([id, qty]) => {
        const product = products.find(
            item => item.id === Number(id)
        );

        if (!product) return;

        const subtotal = product.price * qty;
        total += subtotal;

        pesan += `${product.name} x ${qty} = ${formatRupiah(subtotal)}\n`;
    });

    pesan += `\nTotal pembayaran: ${formatRupiah(total)}`;
    pesan += "\n\nTerima kasih!";

    const url = "https://wa.me/" + 628563026618 +
        "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}