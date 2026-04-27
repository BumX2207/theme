(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra xem có đang ở Trang Chủ không?
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    if (!isHomePage) {
        console.log("[THEME ENGINE] Đang ở trang Báo Cáo. Tắt Theme để giữ giao diện gốc.");
        return;
    }

    // =========================================================================
    // 2. NHÚNG CSS GIAO DIỆN 30/04 (ĐỎ CỜ, SAO VÀNG, XE TĂNG, INTRO CHỮ LỚN)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-3004-style';
    style.innerHTML = `
        /* -------------------------------------------------------------
           MÀN CHÀO SÂN (INTRO BANNER) 3 GIÂY
           ------------------------------------------------------------- */
        #grand-holiday-banner {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0, 0, 0, 0.7); /* Phủ mờ nền đen để chữ nổi bật */
            z-index: 999999; /* Đè lên tất cả mọi thứ */
            display: flex; flex-direction: column;
            justify-content: center; align-items: center; text-align: center;
            pointer-events: none; /* Không cản trở click chuột */
            /* Đứng yên 3s rồi từ từ mờ đi trong 0.5s */
            animation: fadeOutBanner 0.5s ease 3s forwards; 
        }
        .holiday-text-main {
            font-size: clamp(28px, 8vw, 60px); /* Tự co giãn theo màn hình điện thoại/máy tính */
            font-weight: 900;
            color: #ffff00; /* Vàng sao */
            text-transform: uppercase;
            text-shadow: 0 0 15px #da251d, 0 0 30px #da251d, 0 5px 5px rgba(0,0,0,0.8);
            margin-bottom: 10px; padding: 0 15px;
            animation: zoomInText 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .holiday-text-sub {
            font-size: clamp(14px, 4.5vw, 28px);
            font-weight: bold;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 2px; padding: 0 15px;
            text-shadow: 0 2px 10px rgba(218, 37, 29, 0.9), 0 2px 2px rgba(0,0,0,0.8);
            opacity: 0;
            animation: slideUpText 0.6s ease 0.4s forwards; /* Trễ 0.4s so với chữ chính */
        }
        
        @keyframes zoomInText {
            0% { transform: scale(0.3); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUpText {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeOutBanner {
            0% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
        }

        /* -------------------------------------------------------------
           CSS BOTTOM NAV VÀ NÚT BÁO CÁO SAO VÀNG
           ------------------------------------------------------------- */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav {
            background: linear-gradient(135deg, #da251d, #b71c1c) !important; 
            border-top: 2px solid #ffeb3b !important; 
            backdrop-filter: none !important;
        }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #fff !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #fff !important; }
        body.glass-ui-mode .nav-footer-copyright, .nav-footer-copyright { color: #ffcccc !important; text-shadow: none !important; }

        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle {
            background: radial-gradient(circle, #da251d 40%, #b71c1c 100%) !important;
            border: 3px solid #ffff00 !important;
            box-shadow: 0 5px 20px rgba(255, 255, 0, 0.5) !important;
            overflow: visible !important; 
        }
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #ffff00 !important; }

       body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before {
            content: '';
            position: absolute;
            top: 0px;
            right: 1px;
            width: 40px;
            height: 40px;
            background-image: url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffff00' d='M256 14.316l73.416 225.962h237.584l-192.183 139.64 73.417 225.961-192.234-139.64-192.234 139.64 73.416-225.961-192.183-139.64h237.584z'/%3E%3C/svg%3E) !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            z-index: 100 !important;
            transform: rotate(0deg);
            pointer-events: none;
            filter: drop-shadow(0px 0px 5px rgba(255, 255, 0, 0.8)) !important;
        }

        /* -------------------------------------------------------------
           MƯA SAO VÀNG VÀ ĐOÀN XE TĂNG
           ------------------------------------------------------------- */
        #festive-container {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            pointer-events: none; z-index: 99999; overflow: hidden;
        }
        .star-flake {
            position: absolute; top: -20px; color: #ffff00;
            text-shadow: 0 0 5px rgba(255,215,0,0.8); opacity: 0.9; font-family: Arial, sans-serif;
            animation: fall-star linear infinite;
        }
        @keyframes fall-star {
            0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) translateX(50px) rotate(360deg); opacity: 0; }
        }

        #tank-squadron {
            position: absolute; top: -30px; left: 0; width: 100%; height: 30px;
            pointer-events: none; z-index: 50010; overflow: visible;
        }
        .tank {
            position: absolute; bottom: 0; width: 60px; height: 35px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%231b5e20' d='M608 320h-96v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V160c0-35.3-28.7-64-64-64H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h160v64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v32H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zM224 416c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'/%3E%3C/svg%3E");
            background-size: contain; background-repeat: no-repeat; background-position: bottom center; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
            animation: drive-tank 18s linear infinite, bump-tank 0.3s alternate infinite;
        }
        .tank::after {
            content: ''; position: absolute; top: -15px; left: 15px; width: 15px; height: 15px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23da251d' d='M0 0h512v320H0z'/%3E%3Cpath fill='%23ffff00' d='M256 32l47.2 145.3H456L332.4 267.1 379.6 412.4 256 322.7 132.4 412.4l47.2-145.3L56 177.3h152.8z'/%3E%3C/svg%3E");
            background-size: contain; background-repeat: no-repeat;
        }
        .tank::before {
            content: ''; position: absolute; bottom: 5px; left: -15px; width: 20px; height: 10px;
            background: rgba(100,100,100,0.5); border-radius: 50%; filter: blur(3px); animation: exhaust 0.5s infinite alternate;
        }
        @keyframes drive-tank { 0% { left: -100px; } 100% { left: 110vw; } }
        @keyframes bump-tank { 0% { transform: translateY(0); } 100% { transform: translateY(-2px); } }
        @keyframes exhaust { 0% { opacity: 0; transform: scale(0.5) translateX(0); } 100% { opacity: 1; transform: scale(1.5) translateX(-10px); } }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 3. KHỞI TẠO CÁC PHẦN TỬ LÊN MÀN HÌNH
    // =========================================================================
    
    // A. Hiển thị Intro Chào Mừng
    const showGrandIntro = () => {
        if (!document.getElementById('grand-holiday-banner')) {
            const banner = document.createElement('div');
            banner.id = 'grand-holiday-banner';
            banner.innerHTML = `
                <div class="holiday-text-main">Mừng Đại Lễ 30/04</div>
                <div class="holiday-text-sub">Giải Phóng Miền Nam<br>Thống Nhất Đất Nước</div>
            `;
            document.body.appendChild(banner);

            // Tự dọn rác (xóa div) sau 3.6 giây (chờ CSS animation mờ đi hoàn tất)
            setTimeout(() => {
                if (banner) banner.remove();
            }, 3600);
        }
    };

    // B. Gắn Xe Tăng
    const attachTanks = () => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav && !document.getElementById('tank-squadron')) {
            const squad = document.createElement('div'); squad.id = 'tank-squadron';
            const tank1 = document.createElement('div'); tank1.className = 'tank'; tank1.style.animationDelay = '0s, 0s';
            const tank2 = document.createElement('div'); tank2.className = 'tank'; tank2.style.animationDelay = '3s, 0.1s'; 
            squad.appendChild(tank1); squad.appendChild(tank2); bottomNav.appendChild(squad);
        }
    };

    // C. Gắn Mưa Sao Vàng
    const attachSkyElements = () => {
        if (!document.getElementById('festive-container')) {
            const sky = document.createElement('div'); sky.id = 'festive-container'; document.body.appendChild(sky);
            for (let i = 0; i < 25; i++) {
                let star = document.createElement('div'); star.className = 'star-flake'; star.innerHTML = '★'; 
                star.style.fontSize = (Math.random() * 15 + 10) + 'px'; star.style.left = Math.random() * 100 + 'vw';
                star.style.animationDuration = (Math.random() * 4 + 4) + 's'; star.style.animationDelay = Math.random() * 5 + 's';
                sky.appendChild(star);
            }
        }
    };

    // D. Vận hành toàn bộ
    showGrandIntro(); // Chạy Intro ngay lập tức

    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            attachSkyElements();
            attachTanks();
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme Hào Khí 30/04!");
})();
