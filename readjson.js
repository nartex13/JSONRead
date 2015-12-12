var fs = require('fs');

fs.readFile(__dirname + '/mahsiswa.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Nama = " + jsonObj.Nama;
    console.log("Alamat = " + jsonObj.Alamat);
    console.log("Fakultas = " + jsonObj.Fakultas);
      if (jsonObj.spouse == null) {
        console.log("Belum menikah");
    } else {
        console.log("Sudah menikah dengan " + jsonObj.spouse);
    }
        });
