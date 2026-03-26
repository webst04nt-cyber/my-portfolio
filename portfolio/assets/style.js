document.addEventListener('DOMContentLoaded', function() {
  // すべてのフェードイン対象（sectionやwork-item）を取得
  const fadeElements = document.querySelectorAll('.section, .work-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 画面内に入ったら 'is-visible' クラスをつける
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { 
    threshold: 0.1 // 10%見えたら実行
  });

  fadeElements.forEach(el => observer.observe(el));
});