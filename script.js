const listContainer = document.querySelector('.list-container'); // menangkap elemen dengan class list-container.
const addBtn = document.querySelector('.row button'); // menangkap elemen button yang ada pada class row.
const userInput = document.querySelector('.row input'); // menangkap elemen input yang ada pada class row.
const alertText = document.querySelector('.alert'); // menangkap elemen dengan class alert.



addBtn.addEventListener('click', function() { // jika addBtn di klik maka jalankan fungsi berikut.


  if (userInput.value == '') { // jika nilai userInput kosong maka akan ada peringatan 'You must write something!' yang ditampilkan melalui alertText.
    const alertText = document.querySelector('.alert');
    alertText.textContent = 'You must write something!';
  } 
  else { // jika nilai userInput ada isinya maka jalankan fungsi berikut.
    alertText.textContent = ''; // alertText akan dikosongkan.

    const list = document.createElement('li'); // membuat elemen baru li.
    list.textContent = userInput.value; // isi teks dari list diisi dengan nilai userInput.
    listContainer.append(list); // menambahkan list ke dalam elemen listContainer sebagai anak (child) terakhir.

    const listClose = document.createElement('button'); // membuat elemen baru button
    listClose.innerHTML = '&times;'; // isi HTML dari listClose diisi dengan '&times;' yang akan menciptakan tanda silang seperti pada perkalian.
    list.append(listClose); // menambahkan listClose ke dalam elemen list sebagai anak (child) terakhir.
    saveData(); // menyimpan ke localStorage.

    listClose.addEventListener('click', function(e) { // jika listClose di klik maka jalankan fungsi berikut.
      e.target.parentElement.remove(); // elemen parent dari listClose yaitu list akan dihapus dari halaman.
      saveData(); // menyimpan ke localStorage.
    })

    listContainer.addEventListener('click', function(e) { // jika listContainer di klik maka jalankan fungsi berikut.
      if (e.target == list) { // jika yang di klik oleh user adalah list maka akan menambahkan atau menghilangkan class checked dari elemen tersebut menggunakan toggle.
        e.target.classList.toggle('checked');
        saveData(); // menyimpan ke localStorage.
      }
    })
  }

  userInput.value = ''; // nilai pada userInput akan dikosongkan.


})



function saveData() { // membuat fungsi untuk menyimpan data dengan nama saveData.
  localStorage.setItem('data', listContainer.innerHTML); // menyimpan isi dari listContainer ke dalam localStorage dengan key data.
}



function showData() {
  listContainer.innerHTML = localStorage.getItem('data'); // ambil data yang disimpan di localStorage dengan key data dan tampilkan di listContainer.

  listContainer.querySelectorAll('li').forEach(function (list) { // looping untuk setiap elemen li yang ada di dalam listContainer.
    const listClose = list.querySelector('button'); // menangkap tombol button yang ada di dalam setiap elemen li.
    listClose.addEventListener('click', function (e) { // jika listClose di klik, item li akan dihapus.
      e.target.parentElement.remove();
      saveData(); 
    })
    list.addEventListener('click', function (e) { // jika elemen li di klik, tambahkan/tanggalkan class checked.
      if (e.target == list) {
        e.target.classList.toggle('checked');
        saveData();
      }
    })
  })
}
showData(); // fungsi showData() berfungsi untuk menampilkan data daftar dari localStorage ke halaman dan menambahkan fungsionalitas klik agar item bisa dihapus atau ditandai sebagai selesai.