document.getElementById('tampilkanBtn').onclick = reset();
document.getElementById('tampilkanBtn').onclick = function() {
    var nama = document.getElementById('nama').value.trim();
	var kelas = document.getElementById('kelas').value.trim.();
    if (nama === "") {
        nama = "(tidak diisi)";
    }

    var gender = "";
    var radios = document.getElementsByName('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    var jadwal = "";
    var jadwalRadio = document.getElementsByName('jadwal');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            jadwal = radios[i].value;
        }
    }
    if (jadwal === "") {
        jadwal = "(belum dipilih)";
    }

var hasilText = "Nama lengkap*" + nama + "\nKelas/Tingkatan* " + kelas + "\nJenis Kelamin* " + gender + "\nJadwal*" + jadwal;

document.getElementById('hasil').innerText = hasilText;
};