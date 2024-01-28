

function cekResult() {
    const inputYear = document.getElementById("inputYear"); 
    const year = inputYear.value;
    
    const now = new Date().getFullYear();
    const calculate = now - year;
    const hasil = document.getElementById("Result");

    if (year == "") {
        alert("isi dulu...")
        hasil.innerHTML = "";
    } else {
        hasil.innerHTML = "Umur anda adalah " + calculate + " Tahun";
    }
}


