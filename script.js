const form = document.getElementById("formkontak");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    const nomorWhatsApp = "6281358233109";

    const isiPesan =
        "Halo, saya menghubungi melalui website CV.\n\n" +
        "Nama: " + nama + "\n" +
        "Email: " + email + "\n" +
        "Telepon: " + telepon + "\n" +
        "Bidang Minat: " + minat + "\n" +
        "Pesan: " + pesan;

    const pesanEncoded = encodeURIComponent(isiPesan);

    const urlWhatsApp =
        "https://wa.me/" + nomorWhatsApp + "?text=" + pesanEncoded;

    window.open(urlWhatsApp, "_blank");

});