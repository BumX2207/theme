(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra xem có đang ở Trang Chủ không?
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    // Nếu KHÔNG phải trang chủ (tức là đang ở màn hình báo cáo) -> Thoát luôn!
    if (!isHomePage) {
        console.log("[THEME ENGINE] Đang ở trang Báo Cáo. Tắt Theme để giữ giao diện gốc.");
        return;
    }

    // =========================================================================
    // 2. NHÚNG CSS GIAO DIỆN 30/04 (CHỈ TÁC ĐỘNG BOTTOM NAV VÀ TRANG CHỦ)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-3004-style';
    style.innerHTML = `
        /* CHỈ đổi màu Đỏ Cờ cho duy nhất thanh Bottom Nav */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav {
            background: linear-gradient(135deg, #da251d, #b71c1c) !important; 
            border-top: 2px solid #ffeb3b !important; 
            backdrop-filter: none !important;
        }
        
        /* Đổi màu chữ và icon của Bottom Nav sang Trắng */
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { 
            stroke: #fff !important; fill: transparent !important; 
        }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #fff !important; }
        body.glass-ui-mode .nav-footer-copyright, .nav-footer-copyright { color: #ffcccc !important; text-shadow: none !important; }

        /* Nút tròn Báo cáo: Viền vàng, Lõi đỏ */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle {
            background: radial-gradient(circle, #da251d 40%, #b71c1c 100%) !important;
            border: 3px solid #ffff00 !important;
            box-shadow: 0 5px 20px rgba(255, 255, 0, 0.5) !important;
            overflow: visible !important; 
        }
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #ffff00 !important; }

        /* Đính Ngôi Sao Vàng 5 cánh lên góc nút Báo cáo */
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
           HIỆU ỨNG MƯA SAO VÀNG
           ------------------------------------------------------------- */
        #festive-container {
            position: fixed; top: 0; left: 0;
            width: 100vw; height: 100vh;
            pointer-events: none; z-index: 99999; overflow: hidden;
        }
        .star-flake {
            position: absolute; top: -20px;
            color: #ffff00;
            text-shadow: 0 0 5px rgba(255,215,0,0.8);
            opacity: 0.9; font-family: Arial, sans-serif;
            animation: fall-star linear infinite;
        }
        @keyframes fall-star {
            0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) translateX(50px) rotate(360deg); opacity: 0; }
        }

        /* -------------------------------------------------------------
           HIỆU ỨNG CHIM BỒ CÂU HÒA BÌNH BAY
           ------------------------------------------------------------- */
        .dove {
            position: absolute;
            width: 40px; height: 40px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffffff' d='M500.5 186.6c-17.7-19-48.4-23.7-65.4-8-19.1 17.6-59.5 45.4-96 61.6-4.5-24.8-19.7-56-42.5-75.4-32.9-28-76.3-25.1-99.5-19.5-12.7 3.1-23.9 15.6-20.9 29 2 9.2 12.9 15.3 22.3 12.9 19.3-5 50.8-7.7 75.3 11.5 17.7 13.9 29.5 35.5 35.4 56.6-43.3 5-85 19.2-114.7 34.6-28.7 15-72.2 46.2-94.8 75.4-12 15.4-18.4 34.1-14.8 53.6 4.3 23.3 21 40.8 44.1 46.1 27.2 6.3 54.3-5.2 68.3-30.8 7.3-13.4 9.1-29.2 8-44.5-29.3 17.4-60.8 19-67 18-9.4-1.5-15.6-10.4-13.6-19.6 1.9-8.9 11.3-15 20.7-13.3 14.5 2.6 57.5 4.8 91.5-35.1 11.4-13.4 19.3-29.4 23.8-46.3 43-22.9 104-36.8 163-44 26.6-3.2 56-11.8 75.4-31.5 11.6-11.8 12.9-29.6 1.4-41.5z'/%3E%3C/svg%3E");
            background-size: contain; background-repeat: no-repeat; opacity: 0.8; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
            animation: fly-dove linear infinite;
        }
        @keyframes fly-dove {
            0% { transform: translate(110vw, 20vh) scale(1) rotate(-10deg); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translate(-20vw, 5vh) scale(0.6) rotate(5deg); opacity: 0; }
        }

        /* -------------------------------------------------------------
           HIỆU ỨNG ĐOÀN XE TĂNG 390
           ------------------------------------------------------------- */
        #tank-squadron {
            position: absolute;
            top: -30px; 
            left: 0; width: 100%; height: 30px;
            pointer-events: none; z-index: 50010;
            overflow: visible;
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
    const attachTanks = () => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav && !document.getElementById('tank-squadron')) {
            const squad = document.createElement('div');
            squad.id = 'tank-squadron';
            const tank1 = document.createElement('div'); tank1.className = 'tank'; tank1.style.animationDelay = '0s, 0s';
            const tank2 = document.createElement('div'); tank2.className = 'tank'; tank2.style.animationDelay = '3s, 0.1s'; 
            squad.appendChild(tank1); squad.appendChild(tank2); bottomNav.appendChild(squad);
        }
    };

    const attachSkyElements = () => {
        if (!document.getElementById('festive-container')) {
            const sky = document.createElement('div'); sky.id = 'festive-container'; document.body.appendChild(sky);
            for (let i = 0; i < 25; i++) {
                let star = document.createElement('div'); star.className = 'star-flake'; star.innerHTML = '★'; 
                star.style.fontSize = (Math.random() * 15 + 10) + 'px'; star.style.left = Math.random() * 100 + 'vw';
                star.style.animationDuration = (Math.random() * 4 + 4) + 's'; star.style.animationDelay = Math.random() * 5 + 's';
                sky.appendChild(star);
            }
            for (let j = 0; j < 2; j++) {
                let dove = document.createElement('div'); dove.className = 'dove';
                dove.style.animationDuration = (Math.random() * 10 + 15) + 's'; dove.style.animationDelay = (Math.random() * 10) + 's';
                dove.style.top = (Math.random() * 20 + 10) + 'vh'; sky.appendChild(dove);
            }
        }
    };

    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            attachSkyElements();
            attachTanks();
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme 30/04");
})();
