(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    if (!isHomePage) {
        console.log("[THEME ENGINE] Đang ở trang Báo Cáo. Tắt Theme Tết.");
        return;
    }

    // =========================================================================
    // 2. NHÚNG CSS GIAO DIỆN TẾT (HOA, BÁNH CHƯNG, PHÁO HOA)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-tet-style';
    style.innerHTML = `
        /* -------------------------------------------------------------
           MÀN CHÀO SÂN INTRO 
           ------------------------------------------------------------- */
        #tet-banner {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle, #3a0000 0%, #000000 100%); 
            z-index: 999999; display: flex; flex-direction: column;
            justify-content: center; align-items: center; text-align: center;
            pointer-events: none; animation: fadeOutBanner 0.5s ease 4s forwards; 
        }
        .tet-text-main {
            font-size: clamp(35px, 8vw, 70px); font-weight: 900;
            background: linear-gradient(to bottom, #FFD700, #ff8c00);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
            margin-bottom: 10px; padding: 0 15px;
            animation: zoomInText 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .tet-text-sub {
            font-size: clamp(16px, 4.5vw, 30px); font-weight: bold; color: #ffcccc;
            text-transform: uppercase; letter-spacing: 2px; padding: 0 15px;
            opacity: 0; animation: slideUpText 0.6s ease 0.6s forwards; 
        }
        @keyframes zoomInText { 0% { transform: scale(0.3); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes slideUpText { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* -------------------------------------------------------------
           CSS BOTTOM NAV VÀ NÚT TẾT
           ------------------------------------------------------------- */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav { background: linear-gradient(135deg, #c0392b, #8e44ad) !important; border-top: 2px solid #FFD700 !important; backdrop-filter: none !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #FFD700 !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #FFD700 !important; font-weight: bold; }
        body.glass-ui-mode .nav-footer-copyright, .nav-footer-copyright { color: #ffcccc !important; text-shadow: none !important; }

        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle {
            background: radial-gradient(circle, #e74c3c 40%, #c0392b 100%) !important;
            border: 3px solid #FFD700 !important; box-shadow: 0 5px 20px rgba(255, 0, 0, 0.6) !important; overflow: visible !important; 
        }
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #FFD700 !important; }

        /* Đính Bánh Chưng Lên Nút */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before {
            content: ''; position: absolute; top: -15px; right: -10px; width: 35px; height: 35px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='400' height='400' x='56' y='56' fill='%234caf50' rx='30'/%3E%3Cpath fill='%238bc34a' d='M56 86v340c0 16.5 13.5 30 30 30h340c16.5 0 30-13.5 30-30V86c0-16.5-13.5-30-30-30H86C69.5 56 56 69.5 56 86z'/%3E%3Crect width='40' height='400' x='236' y='56' fill='%23ffeb3b'/%3E%3Crect width='400' height='40' x='56' y='236' fill='%23ffeb3b'/%3E%3C/svg%3E") !important; 
            background-size: contain !important; background-repeat: no-repeat !important; z-index: 100 !important;
            transform: rotate(15deg); pointer-events: none; filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.5)) !important; 
        }

        /* -------------------------------------------------------------
           HIỆU ỨNG RƠI HOA MAI, HOA ĐÀO, LÌ XÌ
           ------------------------------------------------------------- */
        #festive-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 99999; overflow: hidden; }
        .tet-item { position: absolute; top: -30px; opacity: 0.9; animation: fall-tet linear infinite; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.3)); }
        @keyframes fall-tet { 0% { transform: translateY(-30px) translateX(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) translateX(50px) rotate(360deg); opacity: 0; } }

        /* =========================================================================
           HIỆU ỨNG LOADING: ĐÊM PHÁO HOA -> NGÀY XUÂN ONG BƯỚM
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: #0f172a; /* Đêm tối */
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden;
            transition: background 1.5s ease-in-out, opacity 0.5s ease;
        }
        
        /* Chế độ ban ngày (Khi Load xong) */
        #theme-loading-overlay.day-mode {
            background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
        }

        /* Chữ hiển thị trạng thái */
        #theme-status-text {
            color: #FFD700; font-size: 22px; font-weight: 900; letter-spacing: 2px;
            text-shadow: 0 0 10px #ff0000; animation: pulse-text 0.8s infinite alternate;
            z-index: 10; margin-top: 20px; transition: color 1s;
        }
        #theme-loading-overlay.day-mode #theme-status-text { color: #d32f2f; text-shadow: 0 0 10px #fff; }
        @keyframes pulse-text { 0% { opacity: 0.6; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }

        /* --- PHÁO HOA (Chỉ hiện ban đêm) --- */
        .firework { position: absolute; width: 5px; height: 5px; border-radius: 50%; box-shadow: 0 0 20px 5px #ff5722; animation: explode 1.5s infinite ease-out; }
        .fw-1 { top: 30%; left: 20%; background: #ffeb3b; animation-delay: 0s; }
        .fw-2 { top: 20%; left: 70%; background: #ff0055; animation-delay: 0.5s; }
        .fw-3 { top: 40%; left: 50%; background: #00ffaa; animation-delay: 1s; }
        @keyframes explode { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(30); opacity: 0; } }

        #theme-loading-overlay.day-mode .firework { display: none; }

        /* --- HOA MAI / ĐÀO NỞ (Chỉ hiện ban ngày) --- */
        .blooming-flower {
            position: absolute; width: 50px; height: 50px; opacity: 0; transform: scale(0);
            background-size: contain; background-repeat: no-repeat; filter: drop-shadow(0 5px 5px rgba(0,0,0,0.2));
            transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .flower-mai { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFEB3B' d='M256 0c30 80 120 60 170 120 50 60 30 150 0 200-40 60-120 40-170 120-50-80-140-60-170-120-40-70-10-150 0-200 40-60 140-40 170-120z'/%3E%3Ccircle cx='256' cy='256' r='40' fill='%23FF9800'/%3E%3C/svg%3E"); }
        .flower-dao { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23F48FB1' d='M256 0c30 80 120 60 170 120 50 60 30 150 0 200-40 60-120 40-170 120-50-80-140-60-170-120-40-70-10-150 0-200 40-60 140-40 170-120z'/%3E%3Ccircle cx='256' cy='256' r='40' fill='%23C2185B'/%3E%3C/svg%3E"); }
        
        #theme-loading-overlay.day-mode .blooming-flower { opacity: 1; transform: scale(1) rotate(360deg); }

        /* --- BƯỚM BAY (Chỉ hiện ban ngày) --- */
        .butterfly {
            position: absolute; width: 40px; height: 40px; opacity: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23E91E63' d='M256 256C150 100 0 200 100 350c0 0 100 0 156-94 56 94 156 94 156 94 100-150-50-250-156-94z'/%3E%3Cpath fill='%23FCE4EC' d='M120 280c-30-20-40-60-20-90s60-40 90-20-30 80-70 110zM392 280c30-20 40-60 20-90s-60-40-90-20 30 80 70 110z'/%3E%3C/svg%3E");
            background-size: contain; background-repeat: no-repeat;
            /* Cánh bướm đập liên tục */
            animation: fly-butter 4s ease-in-out infinite, flap-wings 0.2s infinite alternate;
            transition: opacity 1s ease 0.5s;
        }
        #theme-loading-overlay.day-mode .butterfly { opacity: 1; }
        
        @keyframes fly-butter { 0% { transform: translate(0, 0); } 50% { transform: translate(150px, -50px); } 100% { transform: translate(0, 0); } }
        @keyframes flap-wings { 0% { transform: scaleX(1); } 100% { transform: scaleX(0.3); } }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 3. ĐĂNG KÝ API GIAO TIẾP VỚI TOOL (BẮT SỰ KIỆN LOADING)
    // =========================================================================
    window.TGDD_THEME = {
        startLoading: function(isStatic) {
            if (isStatic) return false; 

            const overlay = document.createElement('div');
            overlay.id = 'theme-loading-overlay';
            
            // Render Pháo Hoa (Đêm)
            let innerHtml = `
                <div class="firework fw-1"></div>
                <div class="firework fw-2"></div>
                <div class="firework fw-3"></div>
            `;
            
            // Render Hoa và Bướm ẩn (Chờ ban ngày)
            for(let i=0; i<8; i++) {
                const isMai = i % 2 === 0;
                const top = Math.random() * 80 + 10;
                const left = Math.random() * 80 + 10;
                innerHtml += `<div class="blooming-flower ${isMai?'flower-mai':'flower-dao'}" style="top:${top}%; left:${left}%; transition-delay:${Math.random()}s"></div>`;
            }
            innerHtml += `<div class="butterfly" style="top:40%; left:30%;"></div>`;
            innerHtml += `<div class="butterfly" style="top:60%; left:60%; animation-delay: 1s;"></div>`;

            innerHtml += `<div id="theme-status-text">BẮN PHÁO HOA GIAO THỪA...</div>`;
            overlay.innerHTML = innerHtml;
            document.body.appendChild(overlay);

            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                // Đổi sang ban ngày
                overlay.classList.add('day-mode');
                document.getElementById('theme-status-text').innerHTML = "CHÚC MỪNG NĂM MỚI! 🌸 XUẤT HÀNH...";
                
                // Níu lại thêm 2.5 giây cho User ngắm hoa nở bướm lượn
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 500);
                }, 2500);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 4. CHẠY MÀN CHÀO SÂN & MƯA HOA TRANG CHỦ
    // =========================================================================
    if (!document.getElementById('tet-banner')) {
        const banner = document.createElement('div'); banner.id = 'tet-banner';
        banner.innerHTML = `<div class="tet-text-main">HAPPY NEW YEAR</div><div class="tet-text-sub">🎊 Chúc Mừng Năm Mới 🎊</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4600);
    }

    // Các icon SVG: Hoa Mai, Lì xì, Bánh Chưng, Đồng tiền vàng
    const tetIcons = [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFEB3B' d='M256 0c30 80 120 60 170 120 50 60 30 150 0 200-40 60-120 40-170 120-50-80-140-60-170-120-40-70-10-150 0-200 40-60 140-40 170-120z'/%3E%3Ccircle cx='256' cy='256' r='40' fill='%23FF9800'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23F44336' d='M64 128h384v288H64z'/%3E%3Cpath fill='%23FFEB3B' d='M256 224a48 48 0 100 96 48 48 0 000-96z'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Ccircle cx='256' cy='256' r='200' fill='%23FFC107'/%3E%3Crect width='100' height='100' x='206' y='206' fill='%23FFF9C4'/%3E%3C/svg%3E"
    ];

    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            if (!document.getElementById('festive-container')) {
                const sky = document.createElement('div'); sky.id = 'festive-container'; document.body.appendChild(sky);
                for (let i = 0; i < 20; i++) {
                    let item = document.createElement('div'); item.className = 'tet-item';
                    item.style.backgroundImage = `url("${tetIcons[Math.floor(Math.random() * tetIcons.length)]}")`;
                    item.style.backgroundSize = 'contain';
                    let size = Math.random() * 20 + 15; 
                    item.style.width = size + 'px'; item.style.height = size + 'px';
                    item.style.left = Math.random() * 100 + 'vw';
                    item.style.animationDuration = (Math.random() * 5 + 5) + 's'; 
                    item.style.animationDelay = Math.random() * 5 + 's';
                    sky.appendChild(item);
                }
            }
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme Tết Nguyên Đán! 🌸🧨");
})();
