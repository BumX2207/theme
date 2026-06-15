(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    if (!isHomePage) return;

    // =========================================================================
    // 2. KHAI BÁO TÀI NGUYÊN SVG (Tông vàng nắng ấm, dịu ngọt)
    // =========================================================================
    // Trái tim vàng mật ong ấm áp
    const SVG_HEART_GOLD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFB703' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E";
    // Hoa dã quỳ/hoa bồ công anh vàng nhạt dập dờn
    const SVG_FLOWER_GOLD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFE082' d='M256 0c30 80 120 60 170 120 50 60 30 150 0 200-40 60-120 40-170 120-50-80-140-60-170-120-40-70-10-150 0-200 40-60 140-40 170-120z'/%3E%3C/svg%3E";
    // Ngôi sao vàng lấp lánh (Tia nắng)
    const SVG_SUN_SPARKLE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 0c15 110 65 160 175 175-110 15-160 65-175 175-15-110-65-160-175-175C191 160 241 110 256 0z'/%3E%3C/svg%3E";

    // =========================================================================
    // 3. NHÚNG CSS GIAO DIỆN "TINH KHÔI - NẮNG ẤM"
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-hoaithu-gold-style';
    style.innerHTML = `
        /* --- INTRO BANNER NẮNG BAN MAI --- */
        #ht-banner { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle, #fffdf0 0%, #fefae0 100%); z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; pointer-events: none; animation: fadeOutBanner 0.8s ease 4s forwards; }
        .ht-text-main { font-family: 'Georgia', serif; font-size: clamp(35px, 8vw, 80px); font-weight: bold; color: #b5820f; text-shadow: 2px 2px 10px rgba(181, 130, 15, 0.2); margin-bottom: 10px; animation: softZoom 1s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .ht-text-sub { font-family: 'Arial', sans-serif; font-size: clamp(13px, 3.5vw, 22px); font-weight: bold; color: #d48c00; letter-spacing: 2px; opacity: 0; animation: fadeInText 1s ease 1s forwards; }
        
        @keyframes softZoom { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes fadeInText { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* --- BOTTOM NAV & NÚT TRÒN TRÁI TIM NẮNG --- */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav { background: linear-gradient(135deg, #fffdf0, #fcf8e3) !important; border-top: 1px solid #ffe082 !important; box-shadow: 0 -5px 20px rgba(254, 250, 224, 0.5) !important;}
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #d48c00 !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #b5820f !important; font-weight: bold; }
        
        /* Cục tròn ở giữa biến thành trái tim viền sáng vàng hoàng kim */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle { background: linear-gradient(135deg, #ffb703, #fb8500) !important; border: 3px solid #fff !important; box-shadow: 0 0 20px rgba(255, 183, 3, 0.7) !important; overflow: visible !important; }
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #fff !important; }
        
        /* Hiệu ứng nhịp đập trái tim vàng mật ong đính kèm trên nút tròn */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before { 
            content: ''; position: absolute; top: -15px; right: -15px; width: 30px; height: 30px; 
            background-image: url("${SVG_HEART_GOLD}") !important; background-size: contain !important; background-repeat: no-repeat !important; 
            z-index: 100 !important; pointer-events: none; filter: drop-shadow(0px 2px 4px rgba(251, 133, 0, 0.4)) !important;
            animation: heartbeat 1.5s infinite;
        }
        @keyframes heartbeat { 
            0% { transform: scale(1); } 
            15% { transform: scale(1.3); } 
            30% { transform: scale(1); } 
            45% { transform: scale(1.3); } 
            60%, 100% { transform: scale(1); } 
        }

        /* --- MƯA SAO LẤP LÁNH & HOA RƠI --- */
        #romantic-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 99999; overflow: hidden; }
        .romantic-item { position: absolute; top: -50px; opacity: 0.6; animation: float-down linear infinite; }
        @keyframes float-down { 
            0% { transform: translateY(-50px) translateX(0) rotate(0deg); opacity: 0; } 
            10% { opacity: 0.8; }
            90% { opacity: 0.6; }
            100% { transform: translateY(110vh) translateX(50px) rotate(360deg); opacity: 0; } 
        }

        /* =========================================================================
           MÀN HÌNH CHỜ (LOADING) ĐÔNG ẤM DÀNH RIÊNG CHO CÔ ẤY
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: linear-gradient(180deg, #fefae0 0%, #fffdf0 100%);
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            overflow: hidden; transition: opacity 0.8s ease;
        }

        /* Trái tim vàng lớn tỏa sáng lung linh */
        .big-heart-gold { width: 120px; height: 120px; background-image: url("${SVG_HEART_GOLD}"); background-size: contain; background-repeat: no-repeat; animation: heartbeat-big 2s infinite; filter: drop-shadow(0 10px 25px rgba(255, 183, 3, 0.5)); margin-bottom: 30px;}
        @keyframes heartbeat-big { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

        /* Lời nhắn ngọt ngào */
        #theme-status-text {
            text-align: center; color: #b5820f; font-size: 21px; font-weight: bold; font-family: 'Segoe UI', sans-serif;
            padding: 0 20px; line-height: 1.6;
            animation: softPulse 2s infinite alternate; z-index: 50;
        }
        #theme-status-sub {
            text-align: center; color: #d48c00; font-size: 14px; margin-top: 12px; font-style: italic; font-weight: bold;
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
            
            // Khôi phục lại đầy đủ cấu trúc thẻ chứa để tránh lỗi unhandled type null ở hàm kết thúc
            overlay.innerHTML = `
                <div class="big-heart-gold"></div>
                <div id="theme-status-text">Chờ một chút nhé, cô gái đáng yêu! ☀️💛...</div>
                <div id="theme-status-sub"></div>
            `;
            document.body.appendChild(overlay);

            // Bắn các vì tinh tú lấp lánh xung quanh trái tim
            for(let i=0; i<6; i++) {
                let sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '24px'; sparkle.style.height = '24px';
                sparkle.style.backgroundImage = `url("${SVG_SUN_SPARKLE}")`;
                sparkle.style.backgroundSize = 'contain';
                sparkle.style.top = (40 + Math.random()*25 - 12) + '%';
                sparkle.style.left = (45 + Math.random()*12 - 6) + '%';
                sparkle.style.animation = `heartbeat-big ${1.2 + Math.random()}s infinite alternate`;
                overlay.appendChild(sparkle);
            }

            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                // Đổi lời nhắn khi tải xong
                document.getElementById('theme-status-text').innerHTML = "Chúc Hoài Thu ngày mới rạng rỡ! ☀️🌻";
                
                const statusSub = document.getElementById('theme-status-sub');
                if (statusSub) {
                    statusSub.innerText = "Nụ cười của em là niềm vui của anh! 💛";
                }
                
                // Trì hoãn 1.6 giây để cô ấy cảm nhận trọn vẹn lời nhắn
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 800); // Đợi mờ dần rồi mới vẽ bảng
                }, 1600);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 5. HIỆU ỨNG MƯA LÁ VÀNG & SAO KHUYA (MƯA ROMANTIC NHẸ)
    // =========================================================================
    const romanticContainer = document.createElement('div');
    romanticContainer.id = 'romantic-container';
    document.body.appendChild(romanticContainer);

    const elementsArr = [SVG_FLOWER_GOLD, SVG_SUN_SPARKLE];
    
    // Tự động rụng 14 hạt sương lấp lánh để tránh lag và tăng tính thẩm mỹ
    for (let i = 0; i < 14; i++) {
        let item = document.createElement('div');
        item.className = 'romantic-item';
        
        let randomSvg = elementsArr[Math.floor(Math.random() * elementsArr.length)];
        item.style.backgroundImage = `url("${randomSvg}")`;
        item.style.backgroundSize = 'contain';
        item.style.backgroundRepeat = 'no-repeat';
        
        // Kích thước ngẫu nhiên từ 12px đến 24px
        let size = (Math.random() * 12 + 12) + 'px';
        item.style.width = size; item.style.height = size;
        
        // Cấu hình vị trí và thời gian rơi (ĐÃ KHẮC PHỤC LỖI CÚ PHÁP CHUỖI 's')
        item.style.left = (Math.random() * 95) + 'vw';
        item.style.animationDuration = (Math.random() * 6 + 4) + 's'; // Chuyển thành cộng chuỗi chuẩn
        item.style.animationDelay = `-${Math.random() * 8}s`;
        
        romanticContainer.appendChild(item);
    }

    // =========================================================================
    // 6. CHẠY MÀN CHÀO SÂN KHI MỞ TRANG
    // =========================================================================
    if (!document.getElementById('ht-banner')) {
        const banner = document.createElement('div'); banner.id = 'ht-banner';
        banner.innerHTML = `<div class="ht-text-main">Chào Hoài Thu 💛</div><div class="ht-text-sub">Yêu Hoài Thu nhấttttt! 🌻☀️</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4800);
    }

    console.log("Đã kích hoạt Theme Hoài Thu - Nắng Ấm Ban Mai! 💛☀️");
})();
