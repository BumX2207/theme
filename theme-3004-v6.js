(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra xem có đang ở Trang Chủ không?
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    if (!isHomePage) {
        console.log("[THEME ENGINE] Đang ở trang Báo Cáo. Giữ giao diện gốc.");
        return;
    }

    // =========================================================================
    // 2. KHAI BÁO CÁC HIỆU ỨNG GIAO DIỆN (CSS)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-3004-style';
    style.innerHTML = `
        /* Intro Banner 3 giây lúc mới vào web */
        #grand-holiday-banner { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.7); z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; pointer-events: none; animation: fadeOutBanner 0.5s ease 3s forwards; }
        .holiday-text-main { font-size: clamp(28px, 8vw, 60px); font-weight: 900; color: #ffff00; text-transform: uppercase; text-shadow: 0 0 15px #da251d, 0 0 30px #da251d, 0 5px 5px rgba(0,0,0,0.8); margin-bottom: 10px; animation: zoomInText 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .holiday-text-sub { font-size: clamp(14px, 4.5vw, 28px); font-weight: bold; color: #ffffff; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 2px 10px rgba(218, 37, 29, 0.9), 0 2px 2px rgba(0,0,0,0.8); opacity: 0; animation: slideUpText 0.6s ease 0.4s forwards; }
        @keyframes zoomInText { 0% { transform: scale(0.3); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes slideUpText { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* Đổi màu Bottom Nav và Nút giữa */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav { background: linear-gradient(135deg, #da251d, #b71c1c) !important; border-top: 2px solid #ffeb3b !important; backdrop-filter: none !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #fff !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #fff !important; }
        body.glass-ui-mode .nav-footer-copyright, .nav-footer-copyright { color: #ffcccc !important; text-shadow: none !important; }
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle { background: radial-gradient(circle, #da251d 40%, #b71c1c 100%) !important; border: 3px solid #ffff00 !important; box-shadow: 0 5px 20px rgba(255, 255, 0, 0.5) !important; overflow: visible !important; }
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #ffff00 !important; }
        /* 1. CỘT CỜ (Gắn bên phải nút) */
        body.glass-ui-mode .nav-icon-circle::after, .nav-icon-circle::after {
            content: '';
            position: absolute;
            top: -50px;
            right: 19px;
            width: 4px;
            height: 50px;
            background: linear-gradient(to right, #8b4513, #5c2e0b); /* Màu vân gỗ nâu */
            border-radius: 2px;
            z-index: 99 !important;
            box-shadow: -2px 2px 3px rgba(0,0,0,0.5);
        }

        /* 2. LÁ CỜ ĐỎ SAO VÀNG TUNG BAY */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before {
            content: '';
            position: absolute;
            top: -50px;
            right: 19px;
            width: 38px;
            height: 25px;
            /* Mã SVG Cờ Việt Nam chuẩn tỷ lệ 2:3 */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23da251d'/%3E%3Cpolygon fill='%23ffff00' points='150,25 179,111 269,111 197,165 223,251 150,197 77,251 103,165 31,111 121,111'/%3E%3C/svg%3E") !important; 
            background-size: cover !important;
            background-repeat: no-repeat !important;
            z-index: 100 !important;
            pointer-events: none;
            transform-origin: right top; 
            
            /* Hiệu ứng tung bay */
            animation: wave-flag 0.6s infinite ease-in-out alternate;
            filter: drop-shadow(-2px 3px 3px rgba(0,0,0,0.4)) !important; 
        }
        @keyframes wave-flag { 0% { transform: skewY(-8deg) scaleY(0.9); } 100% { transform: skewY(8deg) scaleY(1.05); } }

        /* Mưa sao vàng */
        #festive-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 99999; overflow: hidden; }
        .star-flake { position: absolute; top: -20px; color: #ffff00; text-shadow: 0 0 5px rgba(255,215,0,0.8); opacity: 0.9; animation: fall-star linear infinite; }
        @keyframes fall-star { 0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) translateX(50px) rotate(360deg); opacity: 0; } }

        /* =========================================================================
           HIỆU ỨNG LOADING: XE TĂNG TÔNG CỔNG DINH ĐỘC LẬP
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle, rgba(20,20,20,0.8) 0%, rgba(0,0,0,0.95) 100%);
            z-index: 500000; display: flex; justify-content: center; align-items: center; overflow: hidden;
            transition: opacity 0.5s ease;
        }
        
        /* Cổng Sắt Dinh Độc Lập */
        .palace-gate {
            position: absolute; bottom: 30vh; left: 50%; transform: translateX(-50%);
            display: flex; width: 200px; height: 120px; z-index: 2;
            perspective: 1000px;
        }
        .gate-half {
            width: 50%; height: 100%;
            background-image: repeating-linear-gradient(90deg, transparent, transparent 10px, #555 10px, #555 15px),
                              repeating-linear-gradient(0deg, transparent, transparent 30px, #444 30px, #444 35px);
            border: 4px solid #333; box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
            transform-origin: top outer; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .gate-left { border-right: 2px solid #222; transform-origin: left center; }
        .gate-right { border-left: 2px solid #222; transform-origin: right center; }
        
        /* Trụ cổng */
        .gate-pillar {
            position: absolute; bottom: 30vh; width: 30px; height: 140px; background: #6d4c41;
            border: 2px solid #3e2723; z-index: 3; box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        }
        .pillar-left { left: calc(50% - 115px); }
        .pillar-right { left: calc(50% + 85px); }

        /* Xe tăng T-54 */
        .loading-tank {
            position: absolute; bottom: 30vh; left: -150px;
            width: 140px; height: 80px; z-index: 4;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%231b5e20' d='M608 320h-96v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V160c0-35.3-28.7-64-64-64H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h160v64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v32H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zM224 416c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'/%3E%3C/svg%3E");
            background-size: contain; background-repeat: no-repeat; background-position: bottom center;
            filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.8));
            transition: left 0.5s ease; /* Tốc độ cập nhật vị trí */
        }
        .loading-tank::after {
            content: ''; position: absolute; top: -20px; left: 35px; width: 35px; height: 25px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23da251d' d='M0 0h512v320H0z'/%3E%3Cpath fill='%23ffff00' d='M256 32l47.2 145.3H456L332.4 267.1 379.6 412.4 256 322.7 132.4 412.4l47.2-145.3L56 177.3h152.8z'/%3E%3C/svg%3E");
            background-size: contain; background-repeat: no-repeat; animation: wave-flag 0.4s infinite alternate;
        }

        /* Chữ hiển thị trạng thái */
        #theme-status-text {
            position: absolute; bottom: 15vh; width: 100%; text-align: center;
            color: #ffeb3b; font-size: 20px; font-weight: 900; letter-spacing: 2px;
            text-shadow: 0 0 10px red; animation: pulse-text 0.8s infinite alternate;
        }
        @keyframes pulse-text { 0% { opacity: 0.5; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }

        /* HIỆU ỨNG TÔNG CỔNG (Gắn class .crashing vào overlay) */
        .crashing .gate-left { transform: rotateY(-110deg) rotateZ(-10deg) translateX(-50px); opacity: 0; }
        .crashing .gate-right { transform: rotateY(110deg) rotateZ(10deg) translateX(50px); opacity: 0; }
        .crashing .loading-tank { left: 120vw !important; transition: left 1.5s cubic-bezier(0.5, 0, 1, 0.3) !important; }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 3. ĐĂNG KÝ API GIAO TIẾP VỚI TOOL (BẮT SỰ KIỆN LOADING)
    // =========================================================================
    window.TGDD_THEME = {
        startLoading: function(isStatic) {
            // Nếu là isStatic (Chạy xong báo cáo hiện Tick Xanh) -> Dùng phi thuyền mặc định của Tool
            if (isStatic) return false; 

            // Nếu là bắt đầu chạy -> Tạo màn hình Tông cổng
            const overlay = document.createElement('div');
            overlay.id = 'theme-loading-overlay';
            overlay.innerHTML = `
                <div class="gate-pillar pillar-left"></div>
                <div class="gate-pillar pillar-right"></div>
                <div class="palace-gate">
                    <div class="gate-half gate-left"></div>
                    <div class="gate-half gate-right"></div>
                </div>
                <div class="loading-tank" id="theme-loading-tank"></div>
                <div id="theme-status-text">ĐANG TẢI CẤU HÌNH...</div>
            `;
            document.body.appendChild(overlay);

            // Cho xe tăng tiến lại gần cổng (Đứng chờ ở 50% màn hình trừ đi 180px)
            setTimeout(() => {
                const tank = document.getElementById('theme-loading-tank');
                if (tank) tank.style.left = 'calc(50% - 160px)';
            }, 50);

            // Báo cho Tool biết là Theme đã chiếm quyền Loading thành công
            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                // 1. Đổi chữ
                document.getElementById('theme-status-text').innerHTML = "TIẾN VÀO DINH ĐỘC LẬP!";
                
                // 2. Kích hoạt hiệu ứng Tông Cổng (Xe tăng vút đi, Cổng vỡ đôi)
                overlay.classList.add('crashing');

                // 3. Đợi 1.2s cho xe tăng khuất màn hình rồi mới chuyển trang
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); // Ra lệnh cho Tool chuyển trang
                    }, 300);
                }, 1200);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 4. CHẠY MÀN CHÀO SÂN & MƯA SAO VÀNG BÌNH THƯỜNG
    // =========================================================================
    if (!document.getElementById('grand-holiday-banner')) {
        const banner = document.createElement('div'); banner.id = 'grand-holiday-banner';
        banner.innerHTML = `<div class="holiday-text-main">Mừng Đại Lễ 30/04</div><div class="holiday-text-sub">Giải Phóng Miền Nam<br>Thống Nhất Đất Nước</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 3600);
    }

    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            if (!document.getElementById('festive-container')) {
                const sky = document.createElement('div'); sky.id = 'festive-container'; document.body.appendChild(sky);
                for (let i = 0; i < 25; i++) {
                    let star = document.createElement('div'); star.className = 'star-flake'; star.innerHTML = '★'; 
                    star.style.fontSize = (Math.random() * 15 + 10) + 'px'; star.style.left = Math.random() * 100 + 'vw';
                    star.style.animationDuration = (Math.random() * 4 + 4) + 's'; star.style.animationDelay = Math.random() * 5 + 's';
                    sky.appendChild(star);
                }
            }
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme 30/04!");
})();

        

  
