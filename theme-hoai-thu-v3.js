(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/khoi-ban-hang-sub/-1');

    // Lưu ý: Nếu bạn đang thử nghiệm ở môi trường khác, hãy tạm thời comment dòng dưới đây
    if (!isHomePage) return;

    // =========================================================================
    // 2. KHAI BÁO TÀI NGUYÊN SVG (Lãng mạn, ngọt ngào)
    // =========================================================================
    const SVG_HEART = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff4d6d' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E";
    const SVG_PETAL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffb3c6' d='M256 0c30 80 120 60 170 120 50 60 30 150 0 200-40 60-120 40-170 120-50-80-140-60-170-120-40-70-10-150 0-200 40-60 140-40 170-120z'/%3E%3C/svg%3E";
    const SVG_SPARKLE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 0c15 110 65 160 175 175-110 15-160 65-175 175-15-110-65-160-175-175C191 160 241 110 256 0z'/%3E%3C/svg%3E";

    // =========================================================================
    // 3. KHỞI TẠO VÀ GẮN STYLE CSS
    // =========================================================================
    const style = document.createElement('style');
    style.textContent = `
        /* HOẠT CẢNH TỎ TÌNH: BÉ TRAI & BÉ GÁI */
        #love-story-scene { position: absolute; top: -60px; left: 0; width: 100%; height: 60px; pointer-events: none; z-index: 110; overflow: hidden; }
        
        /* Bé gái ngồi trên nút giữa */
        .cute-girl { position: absolute; left: 50%; bottom: 0px; transform: translateX(-50%); width: 35px; height: 45px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ff4d6d' d='M12 4c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2m5 7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v5.5c0 .55.45 1 1 1h1v4.5c0 .55.45 1 1 1s1-.45 1-1V17h2v4.5c0 .55.45 1 1 1s1-.45 1-1V17h1c.55 0 1-.45 1-1V11z'/%3E%3C/svg%3E"); background-size: contain; background-repeat: no-repeat; background-position: bottom center; filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3)); z-index: 15; }
        
        /* Cụm Bé trai và Trái tim */
        .boy-wrap { position: absolute; bottom: 0; left: -50px; width: 50px; height: 45px; animation: boy-walks 5s infinite cubic-bezier(0.4, 0, 0.2, 1); }
        .cute-boy { width: 35px; height: 45px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%233b82f6' d='M12 4c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2m4 7v6c0 .55-.45 1-1 1h-2v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H9c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h6c.55 0 1 .45 1 1z'/%3E%3C/svg%3E"); background-size: contain; background-repeat: no-repeat; background-position: bottom center; animation: boy-bob 0.3s infinite alternate; filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3)); }
        
        /* Trái tim bé trai cầm và tung lên */
        .throw-heart { position: absolute; top: 10px; right: 0px; width: 16px; height: 16px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff0000' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E'); background-size: contain; background-repeat: no-repeat; opacity: 0; animation: heart-fly 5s infinite; filter: drop-shadow(0 2px 5px rgba(255,0,0,0.6)); z-index: 20;}

        /* Trái tim bung tỏa khi bé gái nhận được */
        .burst-heart { position: absolute; left: 50%; bottom: 25px; width: 14px; height: 14px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff0000' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E"); background-size: contain; background-repeat: no-repeat; opacity: 0; animation: burst 5s infinite; z-index: 20;}
        .bh-1 { margin-left: -20px; animation-delay: 0.1s; }
        .bh-2 { margin-left: 5px; animation-delay: 0.2s; }

        /* --- KỊCH BẢN KEYFRAMES --- */
        @keyframes boy-walks {
            0% { left: -50px; opacity: 1; }
            35% { left: calc(50% - 60px); opacity: 1; }
            65% { left: calc(50% - 60px); opacity: 1; }
            75% { opacity: 0; }
            100% { left: -50px; opacity: 0; }
        }

        @keyframes boy-bob { 0% { transform: translateY(0); } 100% { transform: translateY(-4px); } }

        @keyframes heart-fly {
            0%, 34% { transform: translate(0, 0) scale(1); opacity: 0; }
            35% { transform: translate(0, 0) scale(1); opacity: 1; }
            40% { transform: translate(0, 0) scale(1.3); opacity: 1; }
            48% { transform: translate(30px, -40px) scale(1.5) rotate(15deg); opacity: 1; }
            52% { transform: translate(45px, -15px) scale(0); opacity: 0; }
            100% { opacity: 0; }
        }

        @keyframes burst {
            0%, 50% { transform: translateY(0) scale(0); opacity: 0; }
            52% { transform: translateY(0) scale(1); opacity: 1; }
            65% { transform: translateY(-25px) scale(1.5); opacity: 0; }
            100% { opacity: 0; }
        }

        /* MÀN HÌNH CHỜ (LOADING) */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: linear-gradient(180deg, #ffc2d1 0%, #fff0f3 100%);
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            overflow: hidden; transition: opacity 0.8s ease;
        }

        .big-heart { width: 120px; height: 120px; background-size: contain; background-repeat: no-repeat; animation: heartbeat-big 2s infinite; filter: drop-shadow(0 10px 20px rgba(255, 77, 109, 0.4)); margin-bottom: 30px;}
        @keyframes heartbeat-big { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

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
    
    // Gán SVG_HEART từ biến JS vào CSS
    const modifiedStyle = style.textContent.replace('background-image: url("${SVG_HEART}")', `background-image: url("${SVG_HEART}")`);
    style.textContent = modifiedStyle;
    
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
                <div class="big-heart" style="background-image: url('${SVG_HEART}')"></div>
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
    // 5. GẮN CÂU CHUYỆN TÌNH YÊU LÊN THANH BOTTOM NAV
    // =========================================================================
    const initLoveStory = setInterval(() => {
        const bottomNav = document.getElementById('tgdd-bottom-nav');
        if (bottomNav && !document.getElementById('love-story-scene')) {
            const scene = document.createElement('div');
            scene.id = 'love-story-scene';
            
            scene.innerHTML = `
                <!-- Bé gái ngồi giữa -->
                <div class="cute-girl"></div>
                
                <!-- Bé trai chạy tới -->
                <div class="boy-wrap">
                    <div class="cute-boy"></div>
                    <div class="throw-heart"></div>
                </div>

                <!-- Tim nổ tung khi nhận được -->
                <div class="burst-heart bh-1"></div>
                <div class="burst-heart bh-2"></div>
            `;
            
            bottomNav.appendChild(scene);
            clearInterval(initLoveStory);
        }
    }, 500);

    console.log("Đã kích hoạt Theme Hoài Thu! 💕🌸");
})();
