function checkPassword() {
  const pass = document.getElementById("password").value.trim();
  const correct = "Eye"; // 合言葉

  if (pass === correct) {
    localStorage.setItem("galleryPass", pass);
    window.location.href = "gallery.html";
  } else {
    document.getElementById("error").textContent = "はぁ？";

    // まだリンクが出ていなければ追加
    if (!document.getElementById("backlink")) {
      document.body.insertAdjacentHTML("beforeend", `
        <nav id="backlink" style="margin-top: 30px; text-align: center;">
          <a href="index.html" style="color: #f4c430; font-weight: bold;">👁‍🗨帰れ？</a>
        </nav>
      `);
    }
  }
}
