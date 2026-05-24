(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    if (!isHomePage) return;

    // =========================================================================
    // 2. KHAI BÁO TÀI NGUYÊN SVG (Để không phụ thuộc link ngoài)
    // =========================================================================
    const SVG_BALL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Ccircle cx='256' cy='256' r='240' fill='%23fff' stroke='%23000' stroke-width='20'/%3E%3Cpath fill='%23000' d='M256 128l64 96h-128zM140 280l64-40-20-90zM372 280l-64-40 20-90zM256 400l-80-60h160zM120 380l60-40-20-80zM392 380l-60-40 20-80z'/%3E%3C/svg%3E";
    const SVG_TROPHY = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M400 64c0-35.3-28.7-64-64-64H176C140.7 0 112 28.7 112 64v48H64c-35.3 0-64 28.7-64 64v16c0 53 43 96 96 96h16.2c16.1 41 51.5 73.1 95.8 84.4V448H160c-17.7 0-32 14.3-32 32v32h256v-32c0-17.7-14.3-32-32-32h-48v-75.6c44.3-11.3 79.7-43.4 95.8-84.4H416c53 0 96-43 96-96v-16c0-35.3-28.7-64-64-64h-48V64zm-48 48H160V64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v48zM96 240c-26.5 0-48-21.5-48-48v-16c0-8.8 7.2-16 16-16h48v80H96zm320 0h-16v-80h48c8.8 0 16 7.2 16 16v16c0 26.5-21.5 48-48 48z'/%3E%3C/svg%3E";
    const SVG_KICKER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23fff' d='M208 48c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM149.3 221.7l-42.3-43c-14.9-15.1-38.3-16.7-54.8-3.8L9.3 210.8c-13.7 10.7-16.1 30.5-5.4 44.2s30.5 16.1 44.2 5.4l28.5-22.3 25.1 25.5-35.4 140.2c-4 15.8 5.6 31.8 21.4 35.8s31.8-5.6 35.8-21.4l34.4-136.2c3.5-13.7-2.3-28-14.1-34.9l-22.6-13.2 24.3-24.7 44.8 68.6c11 16.8 32.8 21.5 49.6 10.5s21.5-32.8 10.5-49.6l-58-88.7c-9.1-13.9-25.7-20.9-42.6-17.3l-24.8 5.3 24.3-24.7z'/%3E%3C/svg%3E";
    const SVG_KEEPER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 112c30.9 0 56-25.1 56-56S286.9 0 256 0s-56 25.1-56 56 25.1 56 56 56zM137 202.6l-85.3 35.5c-15.7 6.5-23.2 24.6-16.7 40.3s24.6 23.2 40.3 16.7l69.1-28.8 61.1 55-66.9 144.9c-7.5 16.2-.4 35.4 15.8 42.9s35.4 .4 42.9-15.8l77.7-168.3c5-10.9 3.5-23.8-3.9-33.3l-34.2-43.6 70.8 13.9c16.6 3.3 32.8-7.6 36.1-24.2s-7.6-32.8-24.2-36.1l-105-20.7c-17.7-3.5-35.8 3.5-45.7 18.6l-21.7 33.1-45.4-40.9c-11.4-10.3-28.7-11.3-41.2-2.5z'/%3E%3C/svg%3E";
    const SVG_YELLOW_CARD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Crect width='384' height='512' fill='%23FFD700' rx='30'/%3E%3C/svg%3E";
    const SVG_RED_CARD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Crect width='384' height='512' fill='%23EF4444' rx='30'/%3E%3C/svg%3E";

    // =========================================================================
    // 3. NHÚNG CSS GIAO DIỆN WORLD CUP
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-wc-style';
    style.innerHTML = `
        /* --- INTRO BANNER CHUYỂN ĐỘNG --- */
        #wc-banner { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle, #0f172a 0%, #000 100%); z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; pointer-events: none; animation: fadeOutBanner 0.5s ease 4s forwards; }
        .wc-text-main { font-size: clamp(40px, 10vw, 90px); font-weight: 900; background: linear-gradient(to right, #00bfff, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 20px rgba(16,185,129,0.8)); margin-bottom: 5px; font-style: italic; transform: skewX(-10deg); animation: zoomInText 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .wc-text-sub { font-size: clamp(16px, 4vw, 30px); font-weight: bold; color: #FFD700; text-transform: uppercase; letter-spacing: 5px; text-shadow: 0 2px 10px rgba(255,215,0,0.8); opacity: 0; animation: slideUpText 0.6s ease 0.6s forwards; }
        
        @keyframes zoomInText { 0% { transform: scale(0.3) skewX(-10deg); opacity: 0; } 100% { transform: scale(1) skewX(-10deg); opacity: 1; } }
        @keyframes slideUpText { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* --- BOTTOM NAV & NÚT BẤM BÓNG ĐÁ --- */
        body.glass-ui-mode #tgdd-bottom-nav, #tgdd-bottom-nav { background: linear-gradient(135deg, #022c22, #064e3b) !important; border-top: none !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item svg, #tgdd-bottom-nav .nav-item svg { stroke: #10b981 !important; fill: transparent !important; }
        body.glass-ui-mode #tgdd-bottom-nav .nav-item, #tgdd-bottom-nav .nav-item { color: #10b981 !important; font-weight: bold; }
        
        /* 🌿 THẢM CỎ LÁ LÚA MỌC TRÊN MÉP NAV (HIỆU ỨNG GIÓ THỔI LẮC LƯ) 🌿 */
        body.glass-ui-mode #tgdd-bottom-nav::before, #tgdd-bottom-nav::before {
            content: ''; position: absolute;
            top: -24px; /* Nâng cao lên để cỏ vươn dài ra */
            left: -5%; width: 110%; height: 25px; /* Mở rộng chiều ngang để khi nghiêng không bị hụt góc */
            /* Mã SVG tự vẽ lá lúa: Mảnh, cao, sắc nhọn và đan xen dày đặc */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' preserveAspectRatio='none'%3E%3Cpath fill='%23064e3b' d='M0,40 L3,10 L6,40 L10,5 L14,40 L18,15 L22,40 L25,8 L29,40 L32,12 L36,40 L40,5 L44,40 L48,15 L52,40 L55,10 L59,40 L62,5 L66,40 L70,12 L74,40 L78,8 L82,40 L85,15 L89,40 L93,5 L97,40 L100,20 L100,40 Z'/%3E%3Cpath fill='%2310b981' d='M2,40 L5,2 L8,40 L12,8 L15,40 L20,0 L23,40 L27,10 L30,40 L34,4 L38,40 L42,12 L46,40 L50,0 L53,40 L57,8 L60,40 L64,2 L68,40 L72,10 L76,40 L80,5 L84,40 L88,15 L91,40 L95,2 L98,40 Z'/%3E%3C/svg%3E");
            background-size: 60px 100%; /* Bóp nhỏ chiều ngang để cỏ mọc khít và mảnh hơn */
            background-repeat: repeat-x;
            background-position: bottom left;
            pointer-events: none;
            z-index: 0;
            
            /* Gốc giữ nguyên, ngọn lắc lư */
            transform-origin: bottom center; 
            animation: grass-sway 4s ease-in-out infinite alternate; 
            filter: drop-shadow(0 -2px 2px rgba(0,0,0,0.3));
        }

        /* Keyframes Gió lùa qua lại */
        @keyframes grass-sway {
            0% { transform: skewX(-10deg); }
            40% { transform: skewX(5deg); }
            80% { transform: skewX(-5deg); }
            100% { transform: skewX(8deg); }
        }
        
        /* Cục tròn ở giữa biến thành Sân cỏ thu nhỏ (Nâng z-index) */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle { background: radial-gradient(circle, #34d399 0%, #059669 100%) !important; border: 3px solid #fff !important; box-shadow: 0 0 15px rgba(16, 185, 129, 0.8), inset 0 0 10px rgba(0,0,0,0.5) !important; overflow: visible !important; z-index: 2 !important;}
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg { stroke: #fff !important; }
        
        /* Trái bóng nảy trên cục tròn */
        body.glass-ui-mode .nav-icon-circle::after, .nav-icon-circle::after { 
            content: ''; position: absolute; top: -20px; right: -10px; width: 35px; height: 35px; 
            background-image: url("${SVG_BALL}") !important; background-size: contain !important; background-repeat: no-repeat !important; 
            z-index: 100 !important; pointer-events: none; filter: drop-shadow(0px 5px 5px rgba(0,0,0,0.6)) !important;
            animation: bounce-ball 1s infinite alternate cubic-bezier(0.5, 0.05, 1, 0.5);
        }
        @keyframes bounce-ball { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-15px) rotate(180deg); } }

        /* --- VẬT THỂ RƠI MÙA BÓNG (Bóng, Thẻ phạt, Cúp) --- */
        #festive-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 99999; overflow: hidden; }
        .wc-item { position: absolute; top: -50px; opacity: 0.8; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4)); animation: fall-wc linear infinite; }
        @keyframes fall-wc { 0% { transform: translateY(-50px) translateX(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) translateX(100px) rotate(720deg); opacity: 0; } }

        /* =========================================================================
           HOẠT CẢNH SÚT BÓNG VÀO LƯỚI (LOADING MÀN HÌNH CHỜ)
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: linear-gradient(180deg, #1e3a8a 0%, #064e3b 100%); /* Bầu trời đêm -> Sân cỏ */
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            overflow: hidden; transition: opacity 0.5s ease;
        }

        /* Khung cảnh sân bóng 3D */
        .pitch { position: absolute; bottom: 0; width: 150vw; height: 50vh; background: #059669; transform: perspective(500px) rotateX(60deg); box-shadow: inset 0 50px 50px rgba(0,0,0,0.5); border-top: 5px solid #fff; }
        .penalty-box { position: absolute; top: 0; left: 50%; width: 400px; height: 150px; border: 5px solid #fff; border-top: none; transform: translateX(-50%); }

        /* Khung thành */
        .goal-post { position: absolute; bottom: 45vh; left: 50%; transform: translateX(-50%); width: 250px; height: 120px; border: 8px solid #fff; border-bottom: none; z-index: 2; display: flex; justify-content: center; align-items: center;}
        .goal-net { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.4)), linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.4)); background-size: 15px 15px; background-position: 0 0, 7.5px 7.5px; z-index: 1;}

        /* Nhân vật & Bóng */
        .kicker { position: absolute; bottom: 15vh; left: 35%; width: 100px; height: 100px; background-image: url("${SVG_KICKER}"); background-size: contain; background-repeat: no-repeat; filter: drop-shadow(-5px 10px 5px rgba(0,0,0,0.5)); z-index: 10; }
        
        .keeper { position: absolute; bottom: 45vh; left: 50%; width: 80px; height: 80px; transform: translateX(-50%); background-image: url("${SVG_KEEPER}"); background-size: contain; background-repeat: no-repeat; filter: drop-shadow(0 10px 5px rgba(0,0,0,0.6)); z-index: 5; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        
        .ball { position: absolute; bottom: 18vh; left: calc(35% + 70px); width: 35px; height: 35px; background-image: url("${SVG_BALL}"); background-size: contain; background-repeat: no-repeat; filter: drop-shadow(0 5px 5px rgba(0,0,0,0.5)); z-index: 15; }

        /* --- ANIMATION SÚT BÓNG --- */
        /* Trạng thái 1: Chuẩn bị */
        .kicker { transform: rotate(-10deg); transition: transform 0.2s; }
        
        /* Trạng thái 2: Sút */
        .kicker.act-shoot { transform: rotate(20deg) translateX(20px); }
        
        .ball.act-fly {
            animation: ball-curve 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes ball-curve {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            50% { transform: translate(50px, -150px) scale(0.7) rotate(360deg); }
            100% { transform: translate(110px, -220px) scale(0.4) rotate(720deg); } /* Góc chữ A bên phải */
        }

        /* Thủ môn bay người (nhưng hụt vì bóng bay góc phải, thủ môn bay góc trái hoặc bị với) */
        .keeper.act-dive {
            animation: keeper-fail 0.5s ease-out forwards;
        }
        @keyframes keeper-fail {
            0% { transform: translateX(-50%) rotate(0deg); }
            100% { transform: translate(-120%, -30px) rotate(-60deg); } /* Bay sang trái ngã */
        }

        /* Lưới tung lên khi bóng chạm */
        .goal-post.act-goal .goal-net {
            animation: net-shake 0.3s ease 0.6s; /* Trễ 0.6s bằng time bóng bay */
        }
        @keyframes net-shake {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05) translateX(5px); }
        }

        /* Chữ VÀOOOOOOOO! */
        #goal-text {
            position: absolute; top: 15%; width: 100%; text-align: center;
            font-size: clamp(50px, 15vw, 120px); font-weight: 900; font-style: italic; letter-spacing: 5px;
            color: #FFD700; text-transform: uppercase;
            -webkit-text-stroke: 3px #ef4444; text-shadow: 0 10px 30px #ef4444;
            opacity: 0; transform: scale(0); z-index: 50;
        }
        #goal-text.act-show {
            animation: goal-pop 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes goal-pop {
            0% { opacity: 0; transform: scale(0.2); }
            20% { opacity: 1; transform: scale(1.2) rotate(-5deg); }
            30% { transform: scale(1) rotate(0deg); }
            80% { opacity: 1; transform: scale(1) rotate(0deg); }
            100% { opacity: 0; transform: translateY(-50px); }
        }

        /* Chữ trạng thái */
        #theme-status-text {
            position: absolute; bottom: 5%; width: 100%; text-align: center;
            color: #fff; font-size: 20px; font-weight: bold; letter-spacing: 2px;
            animation: pulse-status 1s infinite alternate; z-index: 50;
        }
        @keyframes pulse-status { 0% { opacity: 0.5; } 100% { opacity: 1; } }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 4. API GIAO TIẾP VỚI TOOL (HIỆU ỨNG SÚT BÓNG)
    // =========================================================================
    window.TGDD_THEME = {
        startLoading: function(isStatic) {
            if (isStatic) return false; 

            const overlay = document.createElement('div');
            overlay.id = 'theme-loading-overlay';
            
            // Xây dựng Sân bóng
            overlay.innerHTML = `
                <div class="pitch"><div class="penalty-box"></div></div>
                <div class="goal-post" id="wc-goal"><div class="goal-net"></div></div>
                <div class="keeper" id="wc-keeper"></div>
                <div class="kicker" id="wc-kicker"></div>
                <div class="ball" id="wc-ball"></div>
                <div id="goal-text">VÀOOOO!</div>
                <div id="theme-status-text">ĐANG KHỞI ĐỘNG TRẬN ĐẤU...</div>
            `;
            document.body.appendChild(overlay);

            // Đạo diễn chuỗi hành động (Action Sequence)
            setTimeout(() => {
                // 1. Cầu thủ vung chân sút, bóng bay, thủ môn bay người
                document.getElementById('wc-kicker').classList.add('act-shoot');
                document.getElementById('wc-ball').classList.add('act-fly');
                document.getElementById('wc-keeper').classList.add('act-dive');
                document.getElementById('wc-goal').classList.add('act-goal');
                
                // 2. Chờ bóng bay tới lưới (0.6s) -> Hiện chữ VÀOOOO!
                setTimeout(() => {
                    document.getElementById('goal-text').classList.add('act-show');
                    document.getElementById('theme-status-text').innerText = "ĐANG TẢI DỮ LIỆU ĐỘI HÌNH...";
                }, 600);

            }, 500); // Trễ nửa giây đầu để ổn định giao diện

            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                document.getElementById('theme-status-text').style.color = "#FFD700";
                document.getElementById('theme-status-text').innerText = "TRẬN ĐẤU BẮT ĐẦU! ⚽";
                
                // Níu lại 1 giây cho User thấy chữ bắt đầu
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 500);
                }, 1000);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 5. CHẠY MÀN CHÀO SÂN & CƠN MƯA VẬT THỂ
    // =========================================================================
    if (!document.getElementById('wc-banner')) {
        const banner = document.createElement('div'); banner.id = 'wc-banner';
        banner.innerHTML = `<div class="wc-text-main">WORLD CUP 2026</div><div class="wc-text-sub">Sôi Động Cùng Trái Bóng Tròn 🏆</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4600);
    }

    const wcIcons = [SVG_BALL, SVG_TROPHY, SVG_YELLOW_CARD, SVG_RED_CARD, SVG_BALL]; // Nhiều bóng hơn chút

    const checkDomReady = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav) {
            if (!document.getElementById('festive-container')) {
                const sky = document.createElement('div'); sky.id = 'festive-container'; document.body.appendChild(sky);
                for (let i = 0; i < 25; i++) {
                    let item = document.createElement('div'); item.className = 'wc-item';
                    item.style.backgroundImage = `url("${wcIcons[Math.floor(Math.random() * wcIcons.length)]}")`;
                    item.style.backgroundSize = 'contain';
                    item.style.backgroundRepeat = 'no-repeat';
                    
                    let size = Math.random() * 20 + 20; // 20px - 40px
                    item.style.width = size + 'px'; item.style.height = size + 'px';
                    item.style.left = Math.random() * 100 + 'vw';
                    item.style.animationDuration = (Math.random() * 4 + 4) + 's'; // Rơi nhanh hơn hoa mai
                    item.style.animationDelay = Math.random() * 5 + 's';
                    sky.appendChild(item);
                }
            }
            clearInterval(checkDomReady);
        }
    }, 500);

    console.log("Đã kích hoạt Theme World Cup 2026! ⚽🏆");
})();
