const correct = "Eye";

if (localStorage.getItem("galleryPass") !== correct) {
  window.location.replace("gate.html");
} else {
  const galleryData = [
    {
      src: "20250403.jpg",
      title: "与えられる毒",
    },
    {
      src: "20250531.jpg",
      title: "三夜の夢",
    },
    {
      src: "2025_05_24.jpg",
      title: "私に後悔して欲しいのか。嗤える。",
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
        <a href="${item.src}" target="_blank">
          <img src="${item.src}" alt="${item.title}" width="200" />
        </a>
        <figcaption>${item.title}</figcaption>
      </figure>
    `;
  }

  html += `</div>`;

   // ここで戻るボタンを追加
html += `
  <div style="text-align: center; margin-top: 30px;">
    <button onclick="location.href='index.html'" 
      style="
        padding: 10px 20px;
        font-size: 1rem;
        border: none;
        background: none;
        color: #f0f0f0;
        cursor: pointer;
        border-radius: 0;
        text-decoration: underline;
      ">
      トップページに戻る
    </button>
  </div>
`;

  html += `</section>`;

  container.innerHTML = html;
}
