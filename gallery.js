const correct = "Eye";

if (localStorage.getItem("galleryPass") !== correct) {
  window.location.replace("gate.html");
} else {
  const galleryData = [
    {
      src: "20250531.jpg",
      title: "三夜の夢",
      caption: "もっと酷く抱いて欲しかった。"
    },
    {
      src: "2025_05_24.jpg",
      title: "私に後悔して欲しいのか。",
      caption: "嗤える。"
    },
    {
      src: "20250403.jpg",
      title: "与えられる毒",
      caption: "毒だと分かってても浴びずにはいられなかった。"
    },

  ];

  const container = document.getElementById("galleryArea");
  let html = `
    <section>
      <h2>イラスト一覧</h2>
      <div class="gallery">
  `;

  for (const item of galleryData) {
    html += `
      <figure>
        <img src="${item.src}" 
             alt="${item.title}" 
             width="200" 
             style="cursor:pointer;" 
             data-title="${item.title}" 
             data-caption="${item.caption || ""}" />
        <figcaption>${item.title}</figcaption>
      </figure>
    `;
  }
html += `
  </div> <!-- .gallery 終了 -->

  <div style="text-align: center; margin-top: 30px;">
    <button onclick="location.href='index.html'" style="all: unset; cursor: pointer; text-decoration: underline; color: #f0f0f0;">
      トップページに戻る
    </button>
  </div>
</section>
`;

  
  html += `</div></section>`;

  container.innerHTML = html;

  // モーダル関連
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  // 画像クリックでモーダル表示
  document.querySelectorAll("#galleryArea img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalCaption.textContent = img.dataset.caption || img.alt || "";
    });
  });

  // 閉じるボタンでモーダル閉じる
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
    modalCaption.textContent = "";
  });

  // 背景クリックでも閉じる
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modalClose.click();
    }
  });
}
