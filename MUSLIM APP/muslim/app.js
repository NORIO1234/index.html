async function getPrayerTimes(city = "Tirana", country = "Albania") {
  const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`);
  const data = await response.json();
  return data.data.timings;
}

async function loadTranslation(lang = "sq") {
  const res = await fetch(`translations/${lang}.json`);
  const t = await res.json();
  document.getElementById("prayer-title").textContent = t.title;
  document.getElementById("fajr-label").textContent = `${t.fajr}:`;
  document.getElementById("dhuhr-label").textContent = `${t.dhuhr}:`;
  document.getElementById("asr-label").textContent = `${t.asr}:`;
  document.getElementById("maghrib-label").textContent = `${t.maghrib}:`;
  document.getElementById("isha-label").textContent = `${t.isha}:`;
}

getPrayerTimes().then(times => {
  document.getElementById("fajr").textContent = times.Fajr;
  document.getElementById("dhuhr").textContent = times.Dhuhr;
  document.getElementById("asr").textContent = times.Asr;
  document.getElementById("maghrib").textContent = times.Maghrib;
  document.getElementById("isha").textContent = times.Isha;
});

loadTranslation("sq");

function goTo(page) {
  window.location.href = page;
}
