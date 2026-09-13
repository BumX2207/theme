(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra chuẩn xác Trang Chủ Auto BI 15.5
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/dashboard/home') || href.endsWith('baocao.dienmayxanh.com');

    if (!isHomePage) return;

    // =========================================================================
    // 2. KHAI BÁO TÀI NGUYÊN SVG (Lãng mạn, ngọt ngào)
    // =========================================================================
    // Trái tim hồng pastel
    const SVG_HEART = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff4d6d' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E";
    // Ngôi sao lấp lánh
    const SVG_SPARKLE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 0c15 110 65 160 175 175-110 15-160 65-175 175-15-110-65-160-175-175C191 160 241 110 256 0z'/%3E%3C/svg%3E";

    // =========================================================================
    // 3. NHÚNG CSS GIAO DIỆN "HOÀI THU" (TƯƠNG THÍCH 15.5)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-hoaithu-style';
    style.innerHTML = `
        /* --- INTRO BANNER YÊU THƯƠNG --- */
        #ht-banner { 
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
            background: radial-gradient(circle, #fff0f3 0%, #ffc2d1 100%); 
            z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            text-align: center; pointer-events: none; animation: fadeOutBanner 0.8s ease 3.8s forwards; 
        }
        .ht-text-main { 
            font-family: 'Georgia', serif; font-size: clamp(35px, 8vw, 75px); font-weight: bold; 
            color: #ff4d6d; text-shadow: 2px 2px 12px rgba(255, 77, 109, 0.3); margin-bottom: 10px; 
            animation: softZoom 1s cubic-bezier(0.25, 1, 0.5, 1) forwards; 
        }
        .ht-text-sub { 
            font-family: 'Arial', sans-serif; font-size: clamp(14px, 3.5vw, 22px); font-weight: 600; 
            color: #c9184a; letter-spacing: 2px; opacity: 0; animation: fadeInText 1s ease 0.8s forwards; 
        }
        
        @keyframes softZoom { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes fadeInText { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* --- TÙY BIẾN NÚT MENU 3 GẠCH TRÊN HEADER TONE HỒNG NGỌT NGÀO --- */
        #tgdd-header-menu-btn {
            background: rgba(255, 240, 243, 0.85) !important;
            border: 1.5px solid #ffb3c6 !important;
            color: #ff4d6d !important;
            box-shadow: 0 3px 10px rgba(255, 77, 109, 0.2) !important;
        }
        #tgdd-header-menu-btn:hover {
            background: #fff0f3 !important;
            border-color: #ff4d6d !important;
            transform: scale(1.08) !important;
        }

        /* --- SIDEBAR MENU TONE HỒNG PASTEL GLASSMORPHISM --- */
        #tgdd-sidebar-menu {
            background: rgba(255, 240, 243, 0.75) !important;
            backdrop-filter: blur(25px) !important;
            -webkit-backdrop-filter: blur(25px) !important;
            border-right: 1.5px solid rgba(255, 179, 198, 0.6) !important;
        }
        #tgdd-sidebar-menu::before {
            background: linear-gradient(180deg, #fff5f7, #ffffff) !important;
            box-shadow: 0 4px 20px rgba(255, 77, 109, 0.1) !important;
        }
        .sidebar-header {
            border-bottom: 2px solid #ff758f !important;
        }
        .sidebar-title {
            color: #ff4d6d !important;
            font-family: 'Georgia', serif !important;
            letter-spacing: 0.5px !important;
        }
        .tgdd-menu-item {
            color: #4a5568 !important;
        }
        .tgdd-menu-item:hover {
            background: rgba(255, 77, 109, 0.08) !important;
            color: #ff4d6d !important;
        }

        /* =========================================================================
           MÀN HÌNH CHỜ (LOADING) DÀNH RIÊNG CHO CÔ ẤY
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: linear-gradient(180deg, #ffc2d1 0%, #fff0f3 100%);
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            overflow: hidden; transition: opacity 0.8s ease;
        }

        .big-heart { 
            width: 120px; height: 120px; 
            background-image: url("${SVG_HEART}"); background-size: contain; background-repeat: no-repeat; 
            animation: heartbeat-big 1.8s infinite; filter: drop-shadow(0 10px 20px rgba(255, 77, 109, 0.4)); 
            margin-bottom: 30px;
        }
        @keyframes heartbeat-big { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }

        #theme-status-text {
            text-align: center; color: #c9184a; font-size: 22px; font-weight: bold; font-family: 'Segoe UI', sans-serif;
            padding: 0 20px; line-height: 1.5; animation: softPulse 2s infinite alternate; z-index: 50;
        }
        #theme-status-sub {
            text-align: center; color: #ff758f; font-size: 14px; margin-top: 10px; font-style: italic;
        }
        @keyframes softPulse { 0% { opacity: 0.75; } 100% { opacity: 1; } }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 4. API GIAO TIẾP VỚI TOOL (HIỆU ỨNG TẢI TRANG)
    // =========================================================================
    window.TGDD_THEME = {
        startLoading: function(isStatic) {
            if (isStatic) return false; 

            const overlay = document.createElement('div');
            overlay.id = 'theme-loading-overlay';
            
            overlay.innerHTML = `
                <div class="big-heart"></div>
                <div id="theme-status-text">Đang chuẩn bị báo cáo cho Hoài Thu...</div>
                <div id="theme-status-sub">Đợi một chút nhé em bé! 💕</div>
            `;
            document.body.appendChild(overlay);

            // Bắn lấp lánh xung quanh trái tim
            for(let i = 0; i < 5; i++) {
                let sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '30px'; sparkle.style.height = '30px';
                sparkle.style.backgroundImage = `url("${SVG_SPARKLE}")`;
                sparkle.style.backgroundSize = 'contain';
                sparkle.style.top = (40 + Math.random()*20 - 10) + '%';
                sparkle.style.left = (45 + Math.random()*10 - 5) + '%';
                sparkle.style.animation = `heartbeat-big ${1 + Math.random()}s infinite alternate`;
                overlay.appendChild(sparkle);
            }

            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                document.getElementById('theme-status-text').innerHTML = "Chúc Hoài Thu một ngày làm việc<br>thật vui vẻ và nhẹ nhàng! 🌸";
                document.getElementById('theme-status-sub').innerText = "";
                
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 800);
                }, 1500);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 5. CHẠY MÀN CHÀO SÂN
    // =========================================================================
    if (!document.getElementById('ht-banner')) {
        const banner = document.createElement('div'); banner.id = 'ht-banner';
        banner.innerHTML = `<div class="ht-text-main">Chào Hoài Thu</div><div class="ht-text-sub">Ngày mới tốt lành nhé! ✨</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4600);
    }

    console.log("Đã kích hoạt Theme Hoài Thu (Bản 15.5)! 💕🌸");
})();
