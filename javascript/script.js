function hitungBMI() {
    var gender;
    var beratBadan = document.getElementById("beratBadan").value;
    var usia = document.getElementById("usia").value;
    var tinggiBadan = document.getElementById("tinggiBadan").value;
    var data_result1 = document.getElementById("data_result1");
    var content1_result1 = document.getElementById("content1_result1");
    var heading_result1 = document.getElementById("heading_result1");
    var content2_result1 = document.getElementById("content2_result1");
    var content_result2 = document.getElementById("content_result2");
    var heading_result3 = document.getElementById("heading_result3");
    var content_result3 = document.getElementById("content_result3");
    
    // Validasi Kalkulator BMI
    if (document.querySelectorAll("input[type='radio']:checked").length === 0) {
        alert("Jenis kelamin harus dipilih.")
    }
    else if (isNaN(beratBadan) || isNaN(usia) || isNaN(tinggiBadan) ) {
        alert("Input harus berupa angka.")
    }
    else if (beratBadan == "") {
        alert("Berat badan harus diisi.")
    }
    else if (usia == "") {
        alert("Usia harus diisi.")
    }
    else if (tinggiBadan == "") {
        alert("Tinggi badan harus diisi.")
    } else {
        // Validasi Kalkulator BMI == TRUE
        if (document.getElementById("pria").checked) {
            gender = document.getElementById("pria").value;
            genderType = 1;
        } else if (document.getElementById("wanita").checked) {
            gender = document.getElementById("wanita").value;
            genderType = 2;
        }

        // Show & Hide DIV
        document.getElementById("no-result").style.display = "none";
        document.getElementById("final-result").style.display = "block";
        document.getElementById("content-result1").style.display = "block";
        document.getElementById("btn-result2").style.display = "block";
        document.getElementById("download-app").style.display = "block";
        
        // Menampilkan Data Diri
        data_result1.innerText = "Gender: " + gender +"\nBerat Badan: " + beratBadan + " kg\nUsia: " + usia + " tahun\nTinggi Badan: " + tinggiBadan + " cm";
        
        // Rumus BMI
        tinggiBadan = tinggiBadan / 100;
        var result = beratBadan / (tinggiBadan*tinggiBadan);
        
        // Interpretasi Hasil Penghitungan BMI
        if (result < 18.5) {
            heading_result1.innerText = result;
            document.getElementById("result1").style.borderColor="yellow";
            content1_result1.innerText = "UNDERWEIGHT";
            content2_result1.innerText = "Anda memiliki berat badan yang kurang";
            content_result2.innerText = "Hasil BMI kurang dari 18.5\n\nAnda berada dalam kategori underweight atau berat badan kurang.\nCara terbaik untuk menaikkan berat badan adalah dengan mengatur meningkatkan asupan nutrisi dan kalori.\nJika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
            document.getElementById("result3").style.display = "block";
            heading_result3.innerText = "Beberapa penyakit yang berasal dari underweight";
            content_result3.innerText = "Gangguan Hormon\nInfeksi\nPenyakit Kronis\nPenyakit Saluran Cerna";
        } else if (result >= 18.5 && result < 25) {
            heading_result1.innerText = result;
            document.getElementById("result1").style.borderColor="green";
            content1_result1.innerText = "IDEAL";
            content2_result1.innerText = "Anda memiliki berat badan normal";
            content_result2.innerText = "Hasil BMI di antara 18.5 dan 24.9\n\nAnda berada dalam kategori normal (ideal).";
            document.getElementById("btn-result2").style.display = "none";
            document.getElementById("result3").style.display = "none";
        } else if (result >= 25 && result < 30) {  
            heading_result1.innerText = result;
            document.getElementById("result1").style.borderColor="orange";
            content1_result1.innerText = "OVERWEIGHT";
            content2_result1.innerText = "Anda memiliki berat badan berlebih";
            content_result2.innerText = "Hasil BMI di antara 25.0 dan 29.9 \n\nAnda berada dalam kategori overweight atau berat badan berlebih.\nCara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.\nJika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            document.getElementById("result3").style.display = "block";
            heading_result3.innerText = "Beberapa penyakit yang berasal dari overweight";
            content_result3.innerText = "Diabetes\nHipertensi\nSakit Jantung\nOsteoarthritis";
        } else if (result >= 30) {  
            heading_result1.innerText = result;
            document.getElementById("result1").style.borderColor="red";
            content1_result1.innerText = "OBESITY";
            content2_result1.innerText = "Anda memiliki berat badan sangat berlebih";
            content_result2.innerText = "Hasil BMI lebih dari sama dengan 30.0 \n\nAnda berada dalam kategori obesitas atau kegemukan.\nCara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.\nJika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            document.getElementById("result3").style.display = "block";
            heading_result3.innerText = "Beberapa penyakit yang berasal dari obesitas";
            content_result3.innerText = "Diabetes\nHipertensi\nPenyakit Kandung Empedu\nPenyakit Ginjal\nSakit Jantung\nStroke\nOsteoarthritis";
        }
    }
}

function ahliGizi() {
    window.open("https://www.halodoc.com/cari-dokter/spesialis/spesialis-gizi", "_blank");
}

function dokter() {
    window.open("https://www.halodoc.com/", "_blank");
}

function downloadResult() {
    const downloadResult = this.document.getElementById("final-result");
    var format = {
        filename: 'Hasil Kalkulator BMI'
    }

    html2pdf().from(downloadResult).set(format).save();
}
