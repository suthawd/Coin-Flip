//getElementById Mengambil ELement atau di html untuk menjadi tombol interaktif
//Sumber : https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const flipBtn = document.getElementById("flip-btn");
const coin = document.getElementById("coin");
const result = document.getElementById("result");
//Mencegah terjadinya doble klik pada animasi coin
let isFlipping = false;
//GONG, Disini fungsi button dibuat dengan menggunakan EventListener dan 'Click' berfungsi agar saat pointer mouse mengklik tombol tersebut, tombol berfungsi
//sumber : https://aws.amazon.com/id/what-is/event-listener/
flipBtn.addEventListener("click", () => {
  if (isFlipping) return;
  
  isFlipping = true;
  flipBtn.disabled = true;
  //Menimbulkan text flipping saat animasi berlangsung
  result.textContent = "Flipping...";
  //Menghapus kelas lama kemudian menambah animasi antara heads dan tails
  //https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
  coin.classList.remove("coin--heads", "coin--tails");
  coin.classList.add("coin--flipping");
  //Mengacak kemungkinan antara heads dan tails, ditandai dengan 0 dan 1
  const outcome = Math.random() < 0.5 ? "heads" : "tails";
  const endRotation = outcome === "heads" ? 1800 : 1980;
  //Mengatur putaran akhir agar bisa dibaca oleh CSS posisi berhentinya
  https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
  coin.style.setProperty("--end-rotation", `${endRotation}deg`);

  //Timer animasi
  //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
  window.setTimeout(() => {
    //Menyelesaikan animasi, kemudian menambahkan atau memunculkan hasil
    coin.classList.remove("coin--flipping");
    coin.classList.add(outcome === "heads" ? "coin--heads" : "coin--tails");
    coin.style.removeProperty("--end-rotation");
    //Menampilkan hasil
    result.textContent = outcome === "heads" ? "Heads!" : "Tails!";
    //Mengaktifkan kembali tombol Flip
    flipBtn.disabled = false;
    isFlipping = false;
  }, 800);
});
