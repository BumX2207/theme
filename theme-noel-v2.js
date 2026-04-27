(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra xem có đang ở Trang Chủ không?
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    // Nếu đang ở màn hình Báo Cáo -> Thoát ngay, trả lại giao diện gốc
    if (!isHomePage) {
        console.log("[THEME ENGINE] Đang ở trang Báo Cáo. Tắt Theme Noel để giữ giao diện gốc.");
        return;
    }

    // =========================================================================
    // 2. NHÚNG CSS GIAO DIỆN NOEL (ĐỎ ẤM, TUYẾT RƠI, MŨ SANTA, INTRO 5S)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-noel-style';
    style.innerHTML = `
        /* -------------------------------------------------------------
           MÀN CHÀO SÂN (INTRO BANNER) HIỂN THỊ ĐÚNG 5 GIÂY
           ------------------------------------------------------------- */
        #christmas-banner {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(10, 15, 30, 0.8); /* Phủ mờ nền tông xanh đen đêm đông */
            z-index: 999999; 
            display: flex; flex-direction: column;
            justify-content: center; align-items: center; text-align: center;
            pointer-events: none; 
            /* Đứng yên 5s rồi từ từ mờ đi trong 0.5s */
            animation: fadeOutXmas 0.5s ease 5s forwards; 
        }
        .xmas-text-main {
            font-size: clamp(35px, 9vw, 70px); 
            font-weight: 900;
            color: #ffffff; /* Trắng tuyết */
            text-transform: uppercase;
            /* Toả hào quang màu xanh băng giá */
            text-shadow: 0 0 15px #00bfff, 0 0 30px #00bfff, 0 5px 5px rgba(0,0,0,0.8);
            margin-bottom: 10px; padding: 0 15px;
            animation: popInXmas 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .xmas-text-sub {
            font-size: clamp(16px, 5vw, 30px);
            font-weight: bold;
            color: #ffcccc; /* Đỏ nhạt sưởi ấm */
            text-transform: uppercase;
            letter-spacing: 3px; padding: 0 15px;
            text-shadow: 0 2px 10px rgba(218, 37, 29, 0.9), 0 2px 2px rgba(0,0,0,0.8);
            opacity: 0;
            animation: slideUpXmas 0.6s ease 0.5s forwards; /* Hiện ra sau chữ chính một xíu */
        }
        
        @keyframes popInXmas { 0% { transform: scale(0.3); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes slideUpXmas { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOutXmas { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* -------------------------------------------------------------
           CSS BOTTOM NAV VÀ MŨ ÔNG GIÀ NOEL
           ------------------------------------------------------------- */
        /* CHỈ đổi màu Bottom Nav ở trang chủ */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav {
            background: linear-gradient(135deg, #c0392b, #e74c3c) !important; 
            border-top: 2px solid #fff !important; 
            backdrop-filter: none !important;
        }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #fff !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #fff !important; }
        body.glass-ui-mode .nav-footer-copyright, .nav-footer-copyright { color: #ffcccc !important; text-shadow: none !important; }

        /* Nút Báo cáo giữa Nav */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle {
            background: linear-gradient(145deg, #FFD700, #f39c12) !important;
            box-shadow: 0 5px 20px rgba(255, 215, 0, 0.5) !important;
            overflow: visible !important; 
        }

        /* Mũ Ông Già Noel đội lên nút Báo Cáo (Đã đổi link Imgur siêu ổn định) */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before {
            content: '';
            position: absolute;
            top: -30px;
            right: -24px;
            width: 55px;
            height: 55px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23E63946' d='M421.3 285.8c-12-32.8-37.4-87.3-68.5-125.5C311.2 109 256 64 256 64S171.1 113.8 119.5 175.7c-33 39.8-59 86-63.5 94.6-6.1 11.6-9.6 24.6-10.2 38-.9 17.5 3.3 34.6 11.8 49 14.5 24.5 40.5 38.6 68.4 38.6h260c27.9 0 53.9-14.1 68.4-38.6 8.5-14.4 12.7-31.5 11.8-49-.5-11.4-2.8-22.5-7.3-32.5z'/%3E%3Cpath fill='%23FFFFFF' d='M443.5 365H68.5C50 365 35 380 35 398.5S50 432 68.5 432h375c18.5 0 33.5-15 33.5-33.5S462 365 443.5 365z'/%3E%3Ccircle fill='%23FFFFFF' cx='93.2' cy='151.7' r='60'/%3E%3C/svg%3E") !important; 
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            z-index: 100 !important;
            transform: rotate(35deg);
            pointer-events: none;
            filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.4)) !important; 
        }

        /* -------------------------------------------------------------
           HIỆU ỨNG TUYẾT RƠI (SNOWFLAKES)
           ------------------------------------------------------------- */
        #snow-container {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            pointer-events: none; z-index: 99999; overflow: hidden;
        }
        .snowflake {
            position: absolute; top: -10px; background: white;
            border-radius: 50%; opacity: 0.8; filter: blur(1px);
            animation: fall-snow linear infinite;
        }
        @keyframes fall-snow {
            0% { transform: translateY(-10px) translateX(0); opacity: 1; }
            100% { transform: translateY(100vh) translateX(20px); opacity: 0.3; }
        }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 3. KHỞI TẠO CÁC PHẦN TỬ LÊN MÀN HÌNH
    // =========================================================================
    
    // A. Hiển thị Intro Chào Mừng (Tự tắt sau 5.6s)
    const showXmasIntro = () => {
        if (!document.getElementById('christmas-banner')) {
            const banner = document.createElement('div');
            banner.id = 'christmas-banner';
            banner.innerHTML = `
                <div class="xmas-text-main">MERRY CHRISTMAS</div>
                <div class="xmas-text-sub">❄️ Chúc Mừng Giáng Sinh ❄️</div>
            `;
            document.body.appendChild(banner);

            // Dọn rác (xóa div) sau khi CSS animation fadeOut kết thúc (5s đợi + 0.5s mờ)
            setTimeout(() => {
                if (banner) banner.remove();
            }, 5600);
        }
    };

    // B. Gắn Mưa Tuyết
    const attachSnowElements = () => {
        if (!document.getElementById('snow-container')) {
            const sky = document.createElement('div'); sky.id = 'snow-container'; document.body.appendChild(sky);
            for (let i = 0; i < 30; i++) {
                let flake = document.createElement('div'); flake.className = 'snowflake'; 
                let size = Math.random() * 5 + 3; 
                flake.style.width = size + 'px'; flake.style.height = size + 'px';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
                flake.style.animationDelay = Math.random() * 5 + 's';
                sky.appendChild(flake);
            }
        }
    };

    // D. Vận hành toàn bộ
    showXmasIntro(); // Bắn Intro ngay khi load code

    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            attachSnowElements();
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme Noel 🎄");
})();

        

       
