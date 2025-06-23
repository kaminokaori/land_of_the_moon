function checkPassword() {
  const pass = document.getElementById("password").value.trim();
  const correct = "Eye"; // 合言葉

  if (pass === correct) {
    localStorage.setItem("galleryPass", pass); // 合言葉を保存
    window.location.href = "gallery.html";     // ギャラリーへ移動
  } else {
    document.getElementById("error").textContent = "はぁ？";
  }
}
