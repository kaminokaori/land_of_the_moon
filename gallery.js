const correct = "Eye";

if (localStorage.getItem("galleryPass") !== correct) {
  window.location.replace("gate.html");
} else {
  const galleryData = [
    {
      src: "2025:7:5-01.jpg",
      title: "黄金の眼",
      caption: "「————有り得ない。」"
    },

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
    {
      src: "IMG_20231201_214845.jpg",
      title: "悪意",
      caption: "いつも笑顔でいるとお思いで。"
    },
    {
      src: "IMG_20230922_030852.jpg",
      title: "無象無象",
      caption: "握り潰してやる。"
    },
    {
      src: "scan-001.jpg",
      title: "Mayra",
      caption: "背景貴男様へ"
    },
    {
      src: "20220620.jpg",
      title: "engrave",
      caption: "girugamesh一時復活時祝い絵"
    },
    {
      src: "20220615.jpg",
      title: "でろぉ",
      caption: "「あのですねぇ」"
    },
    {
      src: "20220528.jpg",
      title: "「アイ」",
      caption: ""
    },
    {
      src: "20220522-02.jpg",
      title: "レイラ",
      caption: ""
    },
    {
      src: "20220501.jpg",
      title: "異教徒",
      caption: ""
    },
    {
      src: "20220103jinx.jpg",
      title: "LOL-JINX",
      caption: "ファンアート"
    },
    {
      src: "20210708-01.jpg",
      title: "Datura",
      caption: "-花言葉-"
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
  let currentIndex = -1;

// ギャラリー画像のNodeListを取得
const galleryImages = Array.from(document.querySelectorAll("#galleryArea img"));

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.textContent = img.dataset.caption || img.alt || "";
    currentIndex = index;
  });
});

// 左右キーで画像切り替え
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") {
      modalclose.click();
      currentIndex = (currentIndex + 1) % galleryImages.length;
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      return;
    }

    const nextImg = galleryImages[currentIndex];
    modalImg.src = nextImg.src;
    modalImg.alt = nextImg.alt;
    modalCaption.textContent = nextImg.dataset.caption || nextImg.alt || "";
  }
});
}

