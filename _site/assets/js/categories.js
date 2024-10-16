const categories = { enrollment: [{ url: `/blog/posts/phd_mail/`, date: `05 Aug 2024`, title: `【研究室探し】海外の教授へのメールの書き方`},{ url: `/blog/posts/phdschedule/`, date: `01 Aug 2024`, title: `ヨーロッパで博士課程に進むためには`},],administration: [{ url: `/blog/posts/france_residence_permit/`, date: `25 Sep 2024`, title: `【フランス】滞在許可証のオンライン申請方法`},{ url: `/blog/posts/france_phd_security-copy/`, date: `07 Aug 2024`, title: `【フランス】博士課程入学のためのセキュリティチェック`},{ url: `/blog/posts/france_visa_reservation/`, date: `06 Aug 2024`, title: `フランス大使館予約システムの使い方（ビザ申請）`},{ url: `/blog/posts/france_visa_duration/`, date: `04 Aug 2024`, title: `何日かかる？ - 5日で届いたフランス研究者ビザ`},{ url: `/blog/posts/france_visa_documents/`, date: `03 Aug 2024`, title: `【必要書類】フランス研究者ビザ申請2024`},{ url: `/blog/posts/france_visa_todo/`, date: `02 Aug 2024`, title: `【フランス研究者ビザ申請の流れ】研究室内定からビザ取得まで`},], }

console.log(categories);

window.onload = function () {
  document.querySelectorAll(".article-category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      console.log(posts);
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};