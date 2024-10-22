var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) {slideIndex = 1}
    else if (n < 1) {slideIndex = imglist.length}

    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display = "none";  
    }
    imglist[slideIndex-1].style.display = "block";  
}

setInterval(() => {
    plusDivs(1);
  }, 1000);

function replacename(){
    let nameuser = prompt("Hai... Siapakah nama anda?","");
    document.getElementById("nama-user").innerHTML = nameuser
}

// document.getElementById("ganti-nama").addEventListener("click", function(){replacename()})
// replacename();

function validateForm() {
    const namapesan = document.forms["message-forms"]["nama-pesan"].value;
    const tanggalLahir = document.forms["message-forms"]["tanggalLahir"].value;
    const jenisKelamin = document.forms["message-forms"]["jenisKelamin"].value;
    const pesan = document.forms["message-forms"]["pesan"].value;

    if (namapesan == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "") {
        alert ("Tidak boleh ada yang kosong");
        return false;
    }

    // setSenderUI (namapesan, tanggalLahir, jenisKelamin, pesan);

    document.getElementById("hasil-pesan").innerHTML = 
    "<p>Nama: " + namapesan + 
    "</p><p>Tanggal Lahir: " + tanggalLahir + 
    "</p><p>Jenis Kelamin: " + jenisKelamin + 
    "</p><p>Pesan: " + pesan + "</p>";

    return false;
}



