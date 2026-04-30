// 確保 DOM 載入後執行
document.addEventListener('DOMContentLoaded', () => {
    
    // 簡單的導覽列滾動效果
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 可以在這裡加入簡單的 Console Log 確認運行
    console.log("Zheng Yujing's Portfolio MVP Loaded.");
});