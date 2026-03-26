document.addEventListener('DOMContentLoaded', () => {
    // 全てのギャラリー画像を取得
    const images = document.querySelectorAll('.gallery-img img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');

    // 画像がクリックされたらモーダルを表示
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    // モーダル（背景または×ボタン）をクリックしたら閉じる
    modal.addEventListener('click', () => {
        modal.style.display = "none";
    });
});