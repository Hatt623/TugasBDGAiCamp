// Gak ngerti
window.onload = function() {
    document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};  

        // Soal 2, 4 & 5

function Perlihatkan()  {
    // Nama dan Umur
    let name = "John";
    const age = 30;

    // Buahan
    let fruits = ["Apple", "Banana", "Mango"];
    for (let i = 0; i < fruits.length; i++) {
    }

    // Nama Lengkap
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        fullname: function() {
            return this.firstName + " " + this.lastName;
        }
    };

    // Memanggil Nama
    function greet(name) {
        return "Hello, " + name;
    };

    // Kuadrat
    function calculateSquare(number) {
        return number * number;
    };

    // Penjumlahab antar 2 angka
    const Tambah = (A, B) => A + B;

    // Array Student
    let students = ["Alice", "Bob", "Charlie"];
    students.push("Abel");

    // Objek mobil
    let car = {brand: "Toyota", model: "Corolla", year: 2020};
    
    // Array Obejk data mobil
    let cars = [
        { brand: "Toyota", model: "Corolla", year: 2020 },
        { brand: "Honda", model: "Civic", year: 2019 },
        { brand: "Ford", model: "Mustang", year: 2021 }
    ];
    

        let output = document.getElementById("Output");
            output.innerHTML = "";
        
        // Nama dan Umur
        output.innerHTML += "Nama: " + name + "<br>";
        output.innerHTML += "Umur: " + age + "<br><br>";

        // Buah
        output.innerHTML += "Buah-buahan:<br>";
        for (let i = 0; i < fruits.length; i++) {
            output.innerHTML += fruits[i] + "<br>";
        }

        output.innerHTML += "<br>";

        // Nama Lengkap
        output.innerHTML += "Nama Lengkap: " + person.firstName + " " + person.lastName + "<br><br>";

        // Memanggil John
        output.innerHTML += "Memanggil Nama: " + greet("Abel") + "<br><br>";

        // Kuadrat
        output.innerHTML += "Kuadrat 2: " + calculateSquare(2) + "<br>";
        output.innerHTML += "Kuadrat 5: " + calculateSquare(5) + "<br>";
        output.innerHTML += "Kuadrat 12: " + calculateSquare(12) + "<br><br>";

        // Pemanbahan antar dua Angka
        output.innerHTML += "100 + 50 :" + Tambah(100,50) + "<br>";
        output.innerHTML += "20 + 25 :" + Tambah(20,25) + "<br>";
        output.innerHTML += "10 + 5 :" + Tambah(10,5) + "<br><br>";

        // Memanggil Array
        output.innerHTML += "Daftar Siswa:<br>";
            students.forEach(student => {
                output.innerHTML += student + "<br>";

            });
        output.innerHTML += "<br>";

        // Memanggil Objek
        output.innerHTML += "Info Mobil :<br>";
        for (let key in car) {
            if (car.hasOwnProperty(key)) {
                output.innerHTML += key + (car[key]) + "<br>";
            }
        }

        output.innerHTML += "<br>";

        // Memanggil Array Objek mobil dengan For Each
        cars.forEach(car => {
            output.innerHTML += "<b>Brand:</b>" + car.brand + "<br>";
            output.innerHTML += "Model:" + car.model + "<br>";
            output.innerHTML += "Year: " + car.year + "</div><br><br>";
        });
    

}

        // Soal 3
function checkValue() {
    let inputValue = document.getElementById("userInput").value;
    let outputDiv = document.getElementById("Output");

    if (inputValue > 10) {
        outputDiv.innerHTML = "Nilai Anda adalah :" + "&nbsp <b>" + inputValue + "&nbsp </b>" + "Maka lebih besar dari 10.<br><br>";
    } 
    
    else if (inputValue === 10) {
        outputDiv.innerHTML =  "Nilai Anda adalah :" + "&nbsp <b>" + inputValue + "&nbsp </b>" + "Maka Nilai sama dengan 10.<br><br>";
    } 
    
    else {
        outputDiv.innerHTML =  "Nilai Anda adalah:" + "&nbsp <b>" + inputValue + "&nbsp </b>" + "Maka Nilai kurang dari 10.<br><br>";
    }

    outputDiv.innerHTML += "Menampilkan angka dari 1 hingga " + inputValue + ":<br>";
    for (let i = 1; i <= inputValue; i++) {
        outputDiv.innerHTML += i + "<br>";
    }
}


