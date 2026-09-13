(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ Auto BI 15.5
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/dashboard/home') || href.endsWith('baocao.dienmayxanh.com');

    if (!isHomePage) return;

    // =========================================================================
    // 2. TÀI NGUYÊN SVG & BỘ LỜI CHÚC YÊU THƯƠNG NGẪU NHIÊN
    // =========================================================================
    const SVG_HEART = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff4d6d' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E";
    const SVG_SPARKLE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 0c15 110 65 160 175 175-110 15-160 65-175 175-15-110-65-160-175-175C191 160 241 110 256 0z'/%3E%3C/svg%3E";

    const SWEET_MESSAGES = [
        { main: "Đang chuẩn bị số liệu cho Hoài Thu ...", sub: "Hôm nay em nhớ uống thật nhiều nước nha! 🥤💕" },
        { main: "Hệ thống đang tải dữ liệu ...", sub: "Chúc cô gái nhỏ một ngày luôn rạng rỡ và tràn đầy năng lượng! ☀️🌸" },
        { main: "Đang tổng hợp báo cáo cho em ...", sub: "Cứ nhẹ nhàng làm việc, mọi thứ đã có anh lo! ✨💖" },
        { main: "Sắp xong rồi nhe...", sub: "Hôm nay chắc chắn sẽ là một ngày siêu may mắn và chốt đơn mỏi tay! 🍀🥰" },
        { main: "Đang lấy số liệu mới nhất cho em...", sub: "Bắn tim cho cô bé chăm chỉ và dễ thương nhất! 💖🧸" }
    ];

    // =========================================================================
    // 3. NHÚNG CSS GIAO DIỆN THEME "HOÀI THU"
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-hoaithu-style';
    style.innerHTML = `
        /* --- INTRO BANNER CHÀO SÂN --- */
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

        /* --- TÙY BIẾN NÚT 3 GẠCH MENU HEADER TONE HỒNG --- */
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

        /* --- SIDEBAR MENU TONE HỒNG PASTEL --- */
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
        }
        .tgdd-menu-item:hover {
            background: rgba(255, 77, 109, 0.08) !important;
            color: #ff4d6d !important;
        }

        /* =========================================================================
           MÀN HÌNH CHỜ (LOADING) YÊU THƯƠNG KHI BẤM CHẠY BÁO CÁO
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle at 50% 50%, #fff0f3 0%, #ffc2d1 100%);
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            overflow: hidden; transition: opacity 0.6s ease;
        }

        .heart-box {
            position: relative; width: 130px; height: 130px; margin-bottom: 25px;
            display: flex; justify-content: center; align-items: center;
        }
        .big-heart { 
            width: 100%; height: 100%; 
            background-image: url("${SVG_HEART}"); background-size: contain; background-repeat: no-repeat; background-position: center;
            animation: heartbeat-sweet 1.5s infinite; filter: drop-shadow(0 10px 25px rgba(255, 77, 109, 0.45)); 
        }
        @keyframes heartbeat-sweet { 
            0% { transform: scale(1); } 
            15% { transform: scale(1.18); } 
            30% { transform: scale(1); } 
            45% { transform: scale(1.18); } 
            60%, 100% { transform: scale(1); } 
        }

        .sparkle-item {
            position: absolute; width: 28px; height: 28px;
            background-image: url("${SVG_SPARKLE}"); background-size: contain; background-repeat: no-repeat;
            animation: sparkle-float 2s infinite ease-in-out alternate;
        }
        @keyframes sparkle-float {
            0% { transform: scale(0.6) rotate(0deg); opacity: 0.3; }
            100% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        #theme-status-text {
            text-align: center; color: #c9184a; font-size: clamp(20px, 4.5vw, 26px); font-weight: bold; 
            font-family: 'Georgia', serif; padding: 0 20px; line-height: 1.5; 
            text-shadow: 1px 1px 8px rgba(201, 24, 74, 0.15); animation: softPulse 2s infinite alternate; z-index: 50;
        }
        #theme-status-sub {
            text-align: center; color: #ff4d6d; font-size: clamp(13px, 3.2vw, 16px); 
            margin-top: 10px; font-style: italic; font-weight: 600; padding: 0 25px;
        }
        @keyframes softPulse { 0% { opacity: 0.8; } 100% { opacity: 1; } }
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
            
            // Chọn ngẫu nhiên 1 lời chúc dễ thương
            const randomMsg = SWEET_MESSAGES[Math.floor(Math.random() * SWEET_MESSAGES.length)];

            overlay.innerHTML = `
                <div class="heart-box">
                    <div class="big-heart"></div>
                    <div class="sparkle-item" style="top:-10px; left:-10px; animation-delay:0s;"></div>
                    <div class="sparkle-item" style="top:-10px; right:-10px; animation-delay:0.5s;"></div>
                    <div class="sparkle-item" style="bottom:-10px; left:0px; animation-delay:1s;"></div>
                    <div class="sparkle-item" style="bottom:-10px; right:0px; animation-delay:1.5s;"></div>
                </div>
                <div id="theme-status-text">${randomMsg.main}</div>
                <div id="theme-status-sub">${randomMsg.sub}</div>
            `;
            document.body.appendChild(overlay);

            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                // Đổi sang lời chúc khi nạp xong
                const titleEl = document.getElementById('theme-status-text');
                const subEl = document.getElementById('theme-status-sub');
                if (titleEl) titleEl.innerHTML = "Bắt đầu chạy báo cáo 💕";
                if (subEl) subEl.innerText = "Chờ chút nha ...";
                
                // Níu lại 1.2 giây để đọc lời chúc rồi chuyển tiếp
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 600);
                }, 3000);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 5. CHẠY MÀN CHÀO SÂN BAN ĐẦU
    // =========================================================================
    if (!document.getElementById('ht-banner')) {
        const banner = document.createElement('div'); banner.id = 'ht-banner';
        banner.innerHTML = `<div class="ht-text-main">Chào Hoài Thu</div><div class="ht-text-sub">Ngày mới tốt lành nhé! ✨</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4600);
    }

    console.log("Đã kích hoạt Theme Hoài Thu! 💕🌸");
})();
