
function replacename(){
    let nameuser = prompt("Hai... Siapakah nama anda?","");
    document.getElementById("nama-user").innerHTML = nameuser
}

document.getElementById("ganti-nama").addEventListener("click", function(){replacename()})
// replacename();

function tampilkanData() {
    var namapesan = document.getElementById("nama-pesan").value;
    var tanggalLahir = document.getElementById("tanggalLahir").value;
    var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    var pesan = document.getElementById("pesan").value;

    // var hasilDiv = document.getElementById("hasil-pesan");
    // hasilDiv.innerHTML = 
    // "<p>Nama: " + namapesan + 
    // "</p><p>Tanggal Lahir: " + tanggalLahir + 
    // "</p><p>Jenis Kelamin: " + jenisKelamin + 
    // "</p><p>Pesan: " + pesan + "</p>";

    document.getElementById("hasil-pesan").innerHTML = 
    "<p>Nama: " + namapesan + 
    "</p><p>Tanggal Lahir: " + tanggalLahir + 
    "</p><p>Jenis Kelamin: " + jenisKelamin + 
    "</p><p>Pesan: " + pesan + "</p>";
}