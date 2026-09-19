(document.readyState === "complete" || document.readyState === "interactive") ? initBdayTheme() : window.addEventListener('DOMContentLoaded', initBdayTheme);

function initBdayTheme() {
    'use strict';

    console.log("[THEME] Đang tải giao diện sự kiện: Happy Birthday Hoài Thu! 🎉🎂");

    // =========================================================================
    // PHÂN KHU 1: HỆ THỐNG CSS GIAO DIỆN SINH NHẬT (ĐÃ HẠ THẤP PHONG THƯ & KHÓA MAX-HEIGHT)
    // =========================================================================
    if (!document.getElementById('tgdd-birthday-theme-styles')) {
        const style = document.createElement('style');
        style.id = 'tgdd-birthday-theme-styles';
        style.innerHTML = `
            /* --- TÙY BIẾN HEADER & SIDEBAR BẢN 15.5 TONE ROSE GOLD --- */
            #tgdd-header-menu-btn {
                background: rgba(255, 240, 243, 0.9) !important;
                border: 1.5px solid #ffb3c6 !important;
                color: #ff4757 !important;
                box-shadow: 0 3px 10px rgba(255, 71, 87, 0.25) !important;
            }
            #tgdd-header-menu-btn:hover {
                background: #fff0f3 !important;
                border-color: #ff4757 !important;
                transform: scale(1.08) !important;
            }

            #tgdd-sidebar-menu {
                background: rgba(255, 240, 243, 0.8) !important;
                backdrop-filter: blur(25px) !important;
                -webkit-backdrop-filter: blur(25px) !important;
                border-right: 1.5px solid rgba(255, 179, 198, 0.7) !important;
            }
            #tgdd-sidebar-menu::before {
                background: linear-gradient(180deg, #fff5f7, #ffffff) !important;
            }
            .sidebar-header {
                border-bottom: 2px solid #ff758f !important;
            }
            .sidebar-title {
                color: #ff4757 !important;
                font-family: 'Georgia', serif !important;
            }
            .tgdd-menu-item:hover {
                background: rgba(255, 71, 87, 0.08) !important;
                color: #ff4757 !important;
            }

            /* --- MÀN HÌNH KHÔNG GIAN SINH NHẬT OVERLAY --- */
            #bday-overlay {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: radial-gradient(circle at 50% 35%, #2d132c 0%, #1f081d 60%, #0d010d 100%);
                z-index: 9999999 !important; display: flex; flex-direction: column; align-items: center; justify-content: center;
                font-family: 'Segoe UI', Arial, sans-serif; overflow: hidden; opacity: 1; transition: opacity 0.8s ease;
            }

            .bday-title-box {
                text-align: center; margin-bottom: 25px; animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .bday-title-h1 { 
                font-size: clamp(26px, 6vw, 36px); font-weight: 900; color: #ff758c; 
                text-shadow: 0 0 20px rgba(255,117,140,0.8); margin: 0; text-transform: uppercase; letter-spacing: 1.5px; 
            }
            .bday-title-h2 { 
                font-size: clamp(15px, 3.5vw, 19px); font-weight: bold; color: #ffebb3; margin-top: 8px; 
                text-shadow: 0 1px 5px rgba(0,0,0,0.6); 
            }

            /* Sân khấu Bánh sinh nhật */
            .room-stage {
                position: relative; width: 280px; height: 210px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; margin-bottom: 25px;
            }
            .wooden-table {
                width: 260px; height: 16px; background: linear-gradient(to bottom, #8B4513, #5C2E0B); border-radius: 6px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.2); z-index: 2;
            }

            .bday-cake {
                width: 150px; height: 80px; position: relative; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; margin-bottom: -2px;
            }
            .cake-layer {
                width: 140px; height: 42px; background: linear-gradient(135deg, #fbc2eb, #a6c1ee); border-radius: 12px 12px 4px 4px; border: 2px solid #fff; position: relative; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }
            .cake-cream {
                position: absolute; top: 0; left: 0; width: 100%; height: 14px; background: #fff; border-radius: 12px 12px 0 0;
                background-image: radial-gradient(circle at 12px 100%, #fff 8px, transparent 9px); background-size: 24px 14px;
            }
            .cake-cherry {
                width: 14px; height: 14px; background: #ef4444; border-radius: 50%; position: absolute; top: -7px; left: 50%; transform: translateX(-50%); box-shadow: 0 2px 6px rgba(0,0,0,0.4);
            }

            /* 3 Ngọn nến */
            .candle-group { 
                position: absolute; top: 110px !important; left: 50%; transform: translateX(-50%); display: flex; gap: 22px; z-index: 4; 
            }
            .candle-stick { width: 9px; height: 38px; background: linear-gradient(to right, #ffffff, #e2e8f0); border-radius: 3px 3px 0 0; position: relative; }
            .candle-stick::before { content:''; position: absolute; top: -5px; left: 4px; width: 1px; height: 5px; background: #333; }
            
            .candle-flame {
                width: 11px; height: 20px; background: radial-gradient(circle at 50% 80%, #fff, #ffeb3b, #ff9800, #ff5722); border-radius: 50% 50% 20% 20%;
                position: absolute; top: -23px; left: -1px;
                box-shadow: 0 0 12px #ffeb3b, 0 0 25px #ff9800, 0 0 35px #ff5722;
                animation: flame-wag 0.15s infinite alternate ease-in-out;
                transition: opacity 0.5s ease, transform 0.5s ease;
                transform-origin: bottom center;
            }
            @keyframes flame-wag {
                0% { transform: scale(1) rotate(-3deg); }
                100% { transform: scale(1.15) rotate(3deg); }
            }
            
            .smoke-puff {
                position: absolute; top: -25px; left: 3px; width: 2px; height: 0px; background: rgba(255,255,255,0.6); filter: blur(2px); border-radius: 50%; opacity: 0;
            }
            .smoke-puff.rise { animation: smoke-rise 1.2s ease-out forwards; }
            @keyframes smoke-rise {
                0% { width: 2px; height: 5px; opacity: 0.8; transform: translateY(0); }
                100% { width: 14px; height: 45px; opacity: 0; transform: translateY(-40px) translateX(6px); }
            }

            .bday-action-btn {
                background: linear-gradient(135deg, #ff758c, #ff7eb3); color: #fff; border: none;
                padding: 12px 30px; font-size: 15px; font-weight: 900; border-radius: 25px; cursor: pointer;
                box-shadow: 0 5px 20px rgba(255, 117, 140, 0.5); transition: all 0.2s; z-index: 10; letter-spacing: 0.5px;
            }
            .bday-action-btn:hover { transform: scale(1.06); box-shadow: 0 8px 25px rgba(255, 117, 140, 0.7); }
            .bday-action-btn:active { transform: scale(0.95); }

            /* --- ✉️ PHONG THƯ ĐƯỢC HẠ THẤP XUỐNG DƯỚI (TOP 60%) --- */
            .envelope-wrapper {
                position: absolute; 
                top: 60% !important; /* Hạ thấp vị trí phong thư để có không gian mở thư */
                left: 50%; 
                transform: translate(-50%, -50%) scale(0.6); 
                opacity: 0; 
                pointer-events: none; 
                z-index: 100; 
                transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: clamp(300px, 90vw, 340px); 
                height: 200px;
            }
            .envelope-wrapper.show { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
                pointer-events: auto; 
            }
            
            .envelope {
                width: clamp(290px, 88vw, 330px); 
                height: 185px; 
                background: #b91c1c; 
                border-radius: 14px; 
                position: relative; 
                box-shadow: 0 20px 45px rgba(0,0,0,0.6); 
                border: 2.5px solid #991b1b; 
                cursor: pointer; 
                display: flex; 
                align-items: center; 
                justify-content: center;
            }
            .envelope-flap {
                position: absolute; top: 0; left: 0; width: 0; height: 0; border-left: 150px solid transparent; border-right: 150px solid transparent; border-top: 105px solid #991b1b; border-radius: 14px 14px 0 0; transform-origin: top center; transition: transform 0.6s ease; z-index: 5;
            }
            .envelope.open .envelope-flap { transform: rotateX(180deg); z-index: 1; }
            
            .envelope-pockets {
                position: absolute; bottom: 0; left: 0; width: 0; height: 0; border-left: 150px solid #b91c1c; border-right: 150px solid #b91c1c; border-bottom: 95px solid #7f1d1d; border-radius: 0 0 14px 14px; z-index: 4;
            }

            .wax-seal {
                position: absolute; top: 82px; left: 132px; width: 38px; height: 38px; background: radial-gradient(circle, #fde047, #ca8a04); border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.4); border: 2px solid #ffd700; z-index: 6; display: flex; align-items: center; justify-content: center; font-size: 16px; transition: opacity 0.3s ease;
            }
            .wax-seal::after { content: "❤️"; }
            .envelope.open .wax-seal { opacity: 0; }

            /* --- 📜 LÁ THƯ TÂM SỰ KHÓA MAX-HEIGHT (CUỘN MƯỢT, VỪA TẦM MẮT) --- */
            .letter-paper {
                position: absolute; 
                bottom: 10px; 
                width: clamp(270px, 82vw, 305px); 
                max-height: 48vh !important; /* Khóa chiều cao lá thư không bị trồi quá cao */
                overflow-y: auto !important; 
                -webkit-overflow-scrolling: touch;
                background: #fffdfa; 
                border-radius: 10px; 
                padding: 22px 18px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.35); 
                box-sizing: border-box; 
                text-align: left; 
                transform: translateY(0); 
                transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s; 
                z-index: 3; 
                opacity: 0; 
                border: 1.5px solid #fbd38d;
                scrollbar-width: none;
            }
            .letter-paper::-webkit-scrollbar { display: none; }
            .envelope.open .letter-paper { 
                transform: translateY(-115px) !important; /* Trượt lên ngay tâm màn hình */
                opacity: 1; 
                z-index: 10; 
            }

            .letter-content { 
                font-size: 13.5px; line-height: 1.75; color: #4a2c00; font-family: 'Times New Roman', Georgia, serif; font-style: italic; font-weight: bold; 
            }
        `;
        document.head.appendChild(style);
    }

    // =========================================================================
    // PHÂN KHU 2: LOGIC ĐIỀU KHIỂN SỰ KIỆN SINH NHẬT BẢN 15.5
    // =========================================================================
    const isPendingRender = !!document.getElementById('capture-area');
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/dashboard/home') || href.endsWith('baocao.dienmayxanh.com');

    if (isHomePage && !isPendingRender) {
        
        const renderBirthdayStage = () => {
            if (document.getElementById('bday-overlay')) return;
            
            const overlay = document.createElement('div');
            overlay.id = 'bday-overlay';

            overlay.innerHTML = `
                <div class="bday-title-box" id="bday-title">
                    <div class="bday-title-h1">Happy Birthday!</div>
                    <div class="bday-title-h2">Chúc mừng sinh nhật Hoài Thu! 🎁</div>
                </div>

                <div class="room-stage" id="bday-room">
                    <div class="candle-group">
                        <div class="candle-stick"><div class="candle-flame"></div><div class="smoke-puff"></div></div>
                        <div class="candle-stick" style="transform:translateY(-6px) scale(1.12);"><div class="candle-flame"></div><div class="smoke-puff"></div></div>
                        <div class="candle-stick"><div class="candle-flame"></div><div class="smoke-puff"></div></div>
                    </div>
                    <div class="bday-cake">
                        <div class="cake-layer"><div class="cake-cream"></div><div class="cake-cherry"></div></div>
                    </div>
                    <div class="wooden-table"></div>
                </div>

                <button class="bday-action-btn" id="btn-bday-blow">Ước và thổi nến! 🎂</button>

                <div class="envelope-wrapper" id="bday-envelope-wrap">
                    <div class="envelope" id="bday-envelope">
                        <div class="envelope-flap"></div>
                        <div class="wax-seal"></div>
                        <div class="envelope-pockets"></div>
                        
                        <!-- LÁ THƯ TÂM SỰ YÊU THƯƠNG -->
                        <div class="letter-paper">
                            <div class="letter-content">
                                Chúc Hoài Thu sinh nhật vui vẻ nhé! 🎂❤️<br><br>
                                Đáng lẽ ra thì anh đã có nhiều thời gian hơn để chuẩn bị cho em một món quà.<br><br>
                                Nhưng không sao, bao nhiêu quà bánh rồi cũng hết, phải hông?<br><br>
                                Chỉ có những dòng chữ này, anh ngồi đây soạn để gửi đến em là sẽ còn mãi thôi.<br><br>
                                Với anh, chỉ cần em nói với anh vài câu thôi, cũng đủ khiến anh vui cả ngày rồi.<br><br>
                                Điều tiếc nuối lớn nhất đời anh, là đã gặp được một người đặc biệt như em.<br><br>
                                Có thể Em sẽ chỉ bên anh một đoạn đường, nhưng anh sẽ nhớ em cả một đời.<br><br>
                                Nếu như được chọn lại, anh sẽ vẫn chọn quen em, nhưng là khi cả hai chưa là một nửa của ai cả.<br><br>
                                Chúc em sinh nhật vui vẻ nhé, em bé Hoài Thu. Anh Yêu Em! Anh sẽ rất nhớ em! ❤️
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);
            document.body.classList.add('tgdd-body-lock');

            // SỰ KIỆN 1: THỔI NẾN TẮT LỬA
            document.getElementById('btn-bday-blow').onclick = () => {
                const flames = document.querySelectorAll('.candle-flame');
                const smokes = document.querySelectorAll('.smoke-puff');
                const actionBtn = document.getElementById('btn-bday-blow');
                const room = document.getElementById('bday-room');
                const title = document.getElementById('bday-title');

                flames.forEach(f => { f.style.opacity = '0'; f.style.transform = 'scale(0)'; });
                smokes.forEach(s => s.classList.add('rise'));

                actionBtn.style.display = 'none';

                setTimeout(() => {
                    room.style.transition = 'opacity 0.6s';
                    title.style.transition = 'opacity 0.6s';
                    room.style.opacity = '0';
                    title.style.opacity = '0';

                    setTimeout(() => {
                        room.style.display = 'none';
                        title.style.display = 'none';
                        
                        // Trồi phong thư lên
                        const envWrap = document.getElementById('bday-envelope-wrap');
                        envWrap.classList.add('show');
                    }, 600);
                }, 1000);
            };

            // SỰ KIỆN 2: CHẠM MỞ PHONG THƯ ĐỌC TÂM SỰ
            const envelope = document.getElementById('bday-envelope');
            envelope.onclick = (e) => {
                if (!envelope.classList.contains('open')) {
                    envelope.classList.add('open');

                    // Hiện nút Đóng giải phóng màn hình làm việc
                    setTimeout(() => {
                        if (!document.getElementById('btn-bday-finish')) {
                            const finishBtn = document.createElement('button');
                            finishBtn.id = 'btn-bday-finish';
                            finishBtn.className = 'bday-action-btn';
                            finishBtn.style.cssText = 'position:fixed; bottom:25px; z-index:10000000; box-shadow: 0 4px 20px rgba(0,0,0,0.5);';
                            finishBtn.innerText = "Bắt Đầu Làm Việc 💻";
                            finishBtn.onclick = () => {
                                overlay.style.opacity = '0';
                                document.body.classList.remove('tgdd-body-lock');
                                setTimeout(() => { overlay.remove(); finishBtn.remove(); }, 800);
                            };
                            overlay.appendChild(finishBtn);
                        }
                    }, 2200);
                }
            };
        };

        renderBirthdayStage();
    }

    // =========================================================================
    // PHÂN KHU 3: GIAO TIẾP VỚI TOOL AUTOBI 15.5 KHI BẤM CHẠY BÁO CÁO
    // =========================================================================
    window.TGDD_THEME = {
        startLoading: function(isStatic) {
            return false;
        },
        finishLoading: function(callbackToNextPage) {
            if (callbackToNextPage) callbackToNextPage();
        }
    };
}
