(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    if (!isHomePage) return;

    // =========================================================================
    // 2. KHAI BÁO TÀI NGUYÊN SVG (Lãng mạn, ngọt ngào)
    // =========================================================================
    // Trái tim hồng pastel
    const SVG_HEART = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff4d6d' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E";
    // Cánh hoa rơi
    const SVG_PETAL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffb3c6' d='M256 0c30 80 120 60 170 120 50 60 30 150 0 200-40 60-120 40-170 120-50-80-140-60-170-120-40-70-10-150 0-200 40-60 140-40 170-120z'/%3E%3C/svg%3E";
    // Ngôi sao lấp lánh
    const SVG_SPARKLE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 0c15 110 65 160 175 175-110 15-160 65-175 175-15-110-65-160-175-175C191 160 241 110 256 0z'/%3E%3C/svg%3E";

    // =========================================================================
    // 3. NHÚNG CSS GIAO DIỆN "HOÀI THU"
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-hoaithu-style';
    style.innerHTML = `
        /* --- INTRO BANNER YÊU THƯƠNG --- */
        #ht-banner { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle, #fff0f3 0%, #ffc2d1 100%); z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; pointer-events: none; animation: fadeOutBanner 0.8s ease 4s forwards; }
        .ht-text-main { font-family: 'Georgia', serif; font-size: clamp(35px, 8vw, 80px); font-weight: bold; color: #ff4d6d; text-shadow: 2px 2px 10px rgba(255, 77, 109, 0.3); margin-bottom: 10px; animation: softZoom 1s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .ht-text-sub { font-family: 'Arial', sans-serif; font-size: clamp(14px, 3.5vw, 24px); font-weight: normal; color: #c9184a; letter-spacing: 2px; opacity: 0; animation: fadeInText 1s ease 1s forwards; }
        
        @keyframes softZoom { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes fadeInText { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* --- BOTTOM NAV & NÚT TRÁI TIM --- */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav { background: linear-gradient(135deg, #fff0f3, #ffe5ec) !important; border-top: 1px solid #ffb3c6 !important; box-shadow: 0 -5px 20px rgba(255, 179, 198, 0.3) !important;}
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #ff758f !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #ff758f !important; font-weight: bold; }
        
        /* Cục tròn ở giữa biến thành trái tim viền sáng */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle { background: linear-gradient(135deg, #ff4d6d, #c9184a) !important; border: 3px solid #fff !important; box-shadow: 0 0 20px rgba(255, 77, 109, 0.6) !important; overflow: visible !important; }
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #fff !important; }
        
        /* Hiệu ứng nhịp đập trái tim (Heartbeat) đính kèm trên nút tròn */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before { 
            content: ''; position: absolute; top: -15px; right: -15px; width: 30px; height: 30px; 
            background-image: url("${SVG_HEART}") !important; background-size: contain !important; background-repeat: no-repeat !important; 
            z-index: 100 !important; pointer-events: none; filter: drop-shadow(0px 2px 4px rgba(201, 24, 74, 0.5)) !important;
            animation: heartbeat 1.5s infinite;
        }
        @keyframes heartbeat { 
            0% { transform: scale(1); } 
            15% { transform: scale(1.3); } 
            30% { transform: scale(1); } 
            45% { transform: scale(1.3); } 
            60%, 100% { transform: scale(1); } 
        }

        /* --- MƯA CÁNH HOA VÀ TRÁI TIM --- */
        #romantic-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 99999; overflow: hidden; }
        .romantic-item { position: absolute; top: -50px; opacity: 0.7; animation: float-down linear infinite; }
        @keyframes float-down { 
            0% { transform: translateY(-50px) translateX(0) rotate(0deg); opacity: 0; } 
            10% { opacity: 1; }
            90% { opacity: 0.8; }
            100% { transform: translateY(110vh) translateX(60px) rotate(360deg); opacity: 0; } 
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

        /* Trái tim lớn ở giữa màn hình */
        .big-heart { width: 120px; height: 120px; background-image: url("${SVG_HEART}"); background-size: contain; background-repeat: no-repeat; animation: heartbeat-big 2s infinite; filter: drop-shadow(0 10px 20px rgba(255, 77, 109, 0.4)); margin-bottom: 30px;}
        @keyframes heartbeat-big { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

        /* Chữ động viên */
        #theme-status-text {
            text-align: center; color: #c9184a; font-size: 22px; font-weight: bold; font-family: 'Segoe UI', sans-serif;
            padding: 0 20px; line-height: 1.5;
            animation: softPulse 2s infinite alternate; z-index: 50;
        }
        #theme-status-sub {
            text-align: center; color: #ff758f; font-size: 14px; margin-top: 10px; font-style: italic;
        }
        @keyframes softPulse { 0% { opacity: 0.7; } 100% { opacity: 1; } }
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
            
            // Lời nhắn lãng mạn
            overlay.innerHTML = `
                <div class="big-heart"></div>
                <div id="theme-status-text">Đang chuẩn bị báo cáo cho Hoài Thu...</div>
                <div id="theme-status-sub">Đợi một chút nhé em bé! 💕</div>
            `;
            document.body.appendChild(overlay);

            // Bắn lấp lánh xung quanh trái tim
            for(let i=0; i<5; i++) {
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
                // Đổi lời nhắn khi tải xong
                document.getElementById('theme-status-text').innerHTML = "Chúc Hoài Thu một ngày làm việc<br>thật vui vẻ và nhẹ nhàng! 🌸";
                document.getElementById('theme-status-sub').innerText = "";
                
                // Níu lại 1.5 giây để cô ấy kịp đọc lời chúc
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 800); // Đợi mờ dần rồi mới vào báo cáo
                }, 1500);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 5. CHẠY MÀN CHÀO SÂN & CƠN MƯA CÁNH HOA
    // =========================================================================
    // Lời chào khi vừa mở trang
    if (!document.getElementById('ht-banner')) {
        const banner = document.createElement('div'); banner.id = 'ht-banner';
        banner.innerHTML = `<div class="ht-text-main">Chào Hoài Thu</div><div class="ht-text-sub">Ngày mới tốt lành nhé! ✨</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4800);
    }

    const romanticIcons = [SVG_HEART, SVG_PETAL, SVG_SPARKLE, SVG_PETAL]; 

    // Tạo cơn mưa cánh hoa và trái tim
    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            if (!document.getElementById('romantic-container')) {
                const sky = document.createElement('div'); sky.id = 'romantic-container'; document.body.appendChild(sky);
                for (let i = 0; i < 25; i++) {
                    let item = document.createElement('div'); item.className = 'romantic-item';
                    item.style.backgroundImage = `url("${romanticIcons[Math.floor(Math.random() * romanticIcons.length)]}")`;
                    item.style.backgroundSize = 'contain';
                    item.style.backgroundRepeat = 'no-repeat';
                    
                    let size = Math.random() * 15 + 15; // 15px - 30px
                    item.style.width = size + 'px'; item.style.height = size + 'px';
                    item.style.left = Math.random() * 100 + 'vw';
                    item.style.animationDuration = (Math.random() * 6 + 6) + 's'; // Rơi chầm chậm lãng mạn
                    item.style.animationDelay = Math.random() * 5 + 's';
                    sky.appendChild(item);
                }
            }
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme Hoài Thu! 💕🌸");
})();
