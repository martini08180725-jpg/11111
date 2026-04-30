// 確保 DOM 載入後執行[cite: 2]
document.addEventListener('DOMContentLoaded', () => {
    
    // 簡單的導覽列滾動效果[cite: 2]
    const navbar = document.querySelector('.navbar'); /*[cite: 2] */
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 36, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(110, 180, 135, 0.2)'; // 叢雲綠色光暈
        } else {
            navbar.style.background = 'rgba(26, 26, 36, 0.8)';
            navbar.style.boxShadow = 'none'; /*[cite: 2] */
        }
    });

    // 可以在這裡加入簡單的 Console Log 確認運行[cite: 2]
    console.log("🥷 叢人模式已啟動。Zheng Yujing's Portfolio Loaded.");
});
