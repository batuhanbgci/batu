// Rastgele bir sayı 1 ile 100 arasında üretilir
const rastgeleSayi = Math.floor(Math.random() * 100) + 1;

// Kullanıcıya verilen tahmin hakları (başlangıçta 10 hak)
let hak = 10;

// Tahmin kontrol fonksiyonu
function tahminKontrol() {
    // Kullanıcının girdiği tahmin değerini alır ve sayıya dönüştürür
    const kullaniciTahmin = parseInt(document.getElementById("tahmin").value);

    // Mesajın gösterileceği HTML elementini seçer
    const mesaj = document.getElementById("mesaj");

    // Eğer kullanıcı geçersiz bir değer girerse (sayı değilse veya 1-100 arasında değilse)
    if (isNaN(kullaniciTahmin) || kullaniciTahmin < 1 || kullaniciTahmin > 100) {
        mesaj.textContent = "⛔ 1 ile 100 arasında bir sayı gir!"; // Hata mesajı
        return;
    }

    // Kullanıcı doğru sayıyı tahmin ederse
    if (kullaniciTahmin === rastgeleSayi) {
        mesaj.textContent = `🎉 Doğru Tahmin! Sayı: ${rastgeleSayi}`; // Doğru tahmin mesajı
    } else {
        hak--; // Kalan hak sayısını bir azaltır
        // Eğer haklar biterse
        if (hak === 0) {
            mesaj.textContent = `😢 Oyun bitti! Doğru sayı: ${rastgeleSayi}`; // Oyun bitti mesajı
        } else {
            // Kullanıcı yanlış tahminde bulunduysa
            // Eğer tahmin, doğru sayıdan küçükse, "daha büyük" ipucu gösterir
            // Eğer tahmin, doğru sayıdan büyükse, "daha küçük" ipucu gösterir
            mesaj.textContent = kullaniciTahmin < rastgeleSayi
                ? `🔼 Daha büyük bir sayı dene! Kalan hak: ${hak}` // İpucu ve kalan haklar
                : `🔽 Daha küçük bir sayı dene! Kalan hak: ${hak}`; // İpucu ve kalan haklar
        }
    }
}

