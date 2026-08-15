(function() {
    'use strict';

    console.log("[THEME] Đang tải giao diện sự kiện: Happy Birthday Hoài Thu! 🎉");

    // =========================================================================
    // PHÂN KHU 1: HỆ THỐNG CSS CHUYÊN BIỆT CHO CHỦ ĐỀ SINH NHẬT (COZY ROSE GOLD)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'tgdd-birthday-theme-styles';
    style.innerHTML = `
        /* --- ĐỒNG BỘ MÀU CHỦ ĐẠO ROSE GOLD GLASS CHO TOÀN TOOL --- */
        body.glass-ui-mode #tgdd-bottom-nav, 
        body.glass-ui-mode #tgdd-report-nav,
        body.glass-ui-mode .tgdd-top-bar {
            background: rgba(254, 244, 245, 0.45) !important;
            backdrop-filter: blur(20px) saturate(140%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(140%) !important;
            border-top: 1px solid rgba(255, 182, 193, 0.5) !important;
            box-shadow: 0 -10px 30px rgba(225, 112, 85, 0.1), inset 0 1px 0 rgba(255,255,255,0.6) !important;
        }
        body.glass-ui-mode .tgdd-top-bar {
            border-bottom: 1px solid rgba(255, 182, 193, 0.5) !important;
            border-top: none !important;
        }

        /* Đổi màu chữ và biểu tượng thanh điều hướng */
        .nav-item, .rpt-nav-item, #btn-menu {
            color: #d63031 !important;
        }
        .nav-item svg, .rpt-nav-item svg, #btn-menu svg {
            stroke: #d63031 !important;
        }
        .rpt-nav-item.active {
            color: #ff4757 !important;
        }
        .rpt-nav-item.active svg {
            stroke: #ff4757 !important;
            fill: rgba(255, 71, 87, 0.15) !important;
            filter: drop-shadow(0 4px 6px rgba(255, 71, 87, 0.4)) !important;
        }

        /* Biến nút chạy báo cáo tròn thành HỘP QUÀ SINH NHẬT phập phồng phát sáng */
        .nav-icon-circle {
            background: linear-gradient(135deg, #ff758c, #ff7eb3) !important;
            border: 2px solid #fff !important;
            box-shadow: 0 0 20px rgba(255, 117, 140, 0.6), inset 0 0 10px rgba(255,255,255,0.5) !important;
            animation: gift-pulse 2s infinite alternate !important;
        }
        @keyframes gift-pulse {
            0% { transform: translateY(-15px) scale(1); box-shadow: 0 0 15px rgba(255, 117, 140, 0.5); }
            100% { transform: translateY(-18px) scale(1.08); box-shadow: 0 0 30px rgba(255, 117, 140, 0.8), 0 0 10px #ff758c; }
        }

        /* --- KHÔNG GIAN PHÒNG SINH NHẬT COZY OVERLAY --- */
        #bday-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle at 50% 30%, #2d132c, #1f081d, #0d010d);
            z-index: 9999999 !important; display: flex; flex-direction: column; align-items: center; justify-content: center;
            font-family: 'Segoe UI', Arial, sans-serif; overflow: hidden; opacity: 1; transition: opacity 0.8s ease;
        }

        /* Tiêu đề bay bổng */
        .bday-title-box {
            text-align: center; margin-bottom: 30px; animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .bday-title-h1 { font-size: 32px; font-weight: 900; color: #ff758c; text-shadow: 0 0 15px rgba(255,117,140,0.6); margin: 0; text-transform: uppercase; letter-spacing: 1.5px; }
        .bday-title-h2 { font-size: 18px; font-weight: bold; color: #ffebb3; margin-top: 8px; text-shadow: 0 1px 4px rgba(0,0,0,0.5); }

        /* Sân khấu Góc Phòng */
        .room-stage {
            position: relative; width: 280px; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; margin-bottom: 25px;
        }
        /* Chiếc bàn gỗ */
        .wooden-table {
            width: 240px; height: 15px; background: linear-gradient(to bottom, #8B4513, #5C2E0B); border-radius: 6px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2); z-index: 2;
        }

        /* Chiếc bánh sinh nhật */
        .bday-cake {
            width: 140px; height: 75px; position: relative; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; margin-bottom: -2px;
        }
        .cake-layer {
            width: 130px; height: 38px; background: linear-gradient(135deg, #fbc2eb, #a6c1ee); border-radius: 12px 12px 4px 4px; border: 1.5px solid #fff; position: relative; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .cake-cream {
            position: absolute; top: 0; left: 0; width: 100%; height: 12px; background: #fff; border-radius: 12px 12px 0 0;
            background-image: radial-gradient(circle at 12px 100%, #fff 8px, transparent 9px); background-size: 24px 12px;
        }
        .cake-cherry {
            width: 12px; height: 12px; background: #ef4444; border-radius: 50%; position: absolute; top: -6px; left: 50%; transform: translateX(-50%); box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* Ngọn nến phát sáng */
        .candle-group { position: absolute; top: -38px; left: 50%; transform: translateX(-50%); display: flex; gap: 20px; z-index: 4; }
        .candle-stick { width: 8px; height: 35px; background: linear-gradient(to right, #e2e8f0, #cbd5e1); border-radius: 3px 3px 0 0; position: relative; }
        .candle-stick::before { content:''; position: absolute; top: -4px; left: 3.5px; width: 1px; height: 4px; background: #333; }
        
        /* Ngọn lửa bập bùng */
        .candle-flame {
            width: 10px; height: 18px; background: radial-gradient(circle at 50% 80%, #fff, #ffeb3b, #ff9800, #ff5722); border-radius: 50% 50% 20% 20%;
            position: absolute; top: -21px; left: -1px;
            box-shadow: 0 0 10px #ffeb3b, 0 0 20px #ff9800, 0 0 30px #ff5722;
            animation: flame-wag 0.15s infinite alternate ease-in-out;
            transition: opacity 0.5s ease, transform 0.5s ease;
            transform-origin: bottom center;
        }
        @keyframes flame-wag {
            0% { transform: scale(1) rotate(-2deg); }
            100% { transform: scale(1.15) rotate(2deg); }
        }
        
        /* Hiệu ứng khói khi dập nến */
        .smoke-puff {
            position: absolute; top: -25px; left: 3px; width: 2px; height: 0px; background: rgba(255,255,255,0.4); filter: blur(2px); border-radius: 50%; opacity: 0;
        }
        .smoke-puff.rise { animation: smoke-rise 1.2s ease-out forwards; }
        @keyframes smoke-rise {
            0% { width: 2px; height: 5px; opacity: 0.6; transform: translateY(0); }
            100% { width: 12px; height: 40px; opacity: 0; transform: translateY(-35px) translateX(5px); }
        }

        /* Nút ước và thổi nến */
        .bday-action-btn {
            background: linear-gradient(135deg, #ff758c, #ff7eb3); color: white; border: none; padding: 12px 35px; border-radius: 25px; font-weight: 900; font-size: 15px; cursor: pointer; box-shadow: 0 5px 20px rgba(255,117,140,0.5); transition: transform 0.2s, box-shadow 0.2s; z-index: 10;
        }
        .bday-action-btn:active { transform: scale(0.95); }

        /* --- PHONG THƯ ĐỎ NIÊM PHONG SÁP VÀNG --- */
        .envelope-wrapper {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.6); opacity: 0; pointer-events: none; z-index: 100; transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; align-items: center; justify-content: center; width: 300px; height: 200px;
        }
        .envelope-wrapper.show { opacity: 1; transform: translate(-50%, -50%) scale(1); pointer-events: auto; }
        
        .envelope {
            width: 280px; height: 180px; background: #b91c1c; border-radius: 12px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); border: 2.5px solid #a11616; cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        /* Nắp thư dạng tam giác */
        .envelope-flap {
            position: absolute; top: 0; left: 0; width: 0; height: 0; border-left: 140px solid transparent; border-right: 140px solid transparent; border-top: 95px solid #a11616; border-radius: 12px 12px 0 0; transform-origin: top center; transition: transform 0.5s ease; z-index: 5;
        }
        .envelope.open .envelope-flap { transform: rotateX(180deg); z-index: 1; }
        
        /* Điểm giao túi thư */
        .envelope-pockets {
            position: absolute; bottom: 0; left: 0; width: 0; height: 0; border-left: 140px solid #b91c1c; border-right: 140px solid #b91c1c; border-bottom: 90px solid #991b1b; border-radius: 0 0 12px 12px; z-index: 4;
        }

        /* Triện sáp niêm phong hoàng gia */
        .wax-seal {
            position: absolute; top: 80px; left: 125px; width: 34px; height: 34px; background: radial-gradient(circle, #fde047, #ca8a04); border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 1.5px solid #ffd700; z-index: 6; display: flex; align-items: center; justify-content: center; font-size: 15px; transition: opacity 0.3s ease;
        }
        .wax-seal::after { content: "❤️"; }
        .envelope.open .wax-seal { opacity: 0; }

        /* --- TỜ THƯ SANG TRỌNG TRƯỢT RA --- */
        .letter-paper {
            position: absolute; bottom: 10px; width: 250px; background: #fff8eb; border-radius: 8px; padding: 25px 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); box-sizing: border-box; text-align: left; transform: translateY(0); transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s; z-index: 3; opacity: 0; border: 1px solid #fed7aa;
        }
        .envelope.open .letter-paper { transform: translateY(-130px); opacity: 1; z-index: 10; }

        .letter-content { font-size: 13.5px; line-height: 1.8; color: #5c3d00; font-family: 'Times New Roman', Georgia, serif; font-style: italic; font-weight: bold; }
        
        /* --- ĐỒNG BỘ ĐỘNG CƠ CHẠY BÁO CÁO VINH DANH (GIFT BOX BLAST-OFF) --- */
        /* Thay rocket bằng hộp quà nơ vàng lấp lánh */
        .rocket-body.event-gift-theme {
            background: none !important; animation: ship-shake 0.1s infinite alternate !important;
        }
        .rocket-body.event-gift-theme::after {
            content: "🎁" !important; font-size: 55px !important; display: flex !important; justify-content: center; align-items: center; filter: drop-shadow(0 10px 20px rgba(255,117,140,0.8));
        }
        /* Thay đuôi lửa bằng chòm sao tinh vân lấp lánh */
        .rocket-flame.event-gift-theme {
            background: none !important; border: none !important; filter: drop-shadow(0 0 10px #ffebb3) !important;
        }
        .rocket-flame.event-gift-theme::after {
            content: "✨" !important; font-size: 28px !important; color: #ffebb3 !important; display: block; animation: pulse-text 0.2s infinite alternate; text-align: center;
        }
    `;
    document.head.appendChild(style);


    // =========================================================================
    // PHÂN KHU 2: LOGIC ĐIỀU KHIỂN SỰ KIỆN TƯƠNG TÁC CHÚC MỪNG SINH NHẬT
    // =========================================================================
    
    // Hàm bóc tách ID người dùng cục bộ thần tốc
    const getUserIdLocal = () => {
        let cachedUserStr = "";
        try {
            const cAuth = GM_getValue('tgdd_auth_cache_v1', null);
            if (cAuth) {
                if (typeof cAuth === 'string') {
                    const parsed = JSON.parse(cAuth);
                    cachedUserStr = parsed.user || "";
                } else if (cAuth.user) {
                    cachedUserStr = cAuth.user;
                }
            }
        } catch(e) {}
        if (!cachedUserStr) {
            try {
                const localAuth = localStorage.getItem('tgdd_auth_cache_v1');
                if (localAuth) {
                    const parsed = JSON.parse(localAuth);
                    cachedUserStr = parsed.user || "";
                }
            } catch(e) {}
        }
        if (!cachedUserStr && document.body) {
            const isCRM = window.location.href.includes('crm.thegioididong.com');
            const userNode = isCRM 
                ? document.querySelector('span.profile span a') 
                : document.querySelector('span.mr-2.d-none.d-lg-inline.text-gray-600.small');
            if (userNode) cachedUserStr = userNode.innerText.trim();
        }
        if (!cachedUserStr) return "";
        const match = cachedUserStr.match(/\d+/);
        return match ? match[0] : "";
    };

    const currentUserId = getUserIdLocal();
    const isOwner = (currentUserId === '42060'); // Tài khoản của bạn có quyền test đi test lại

    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '' || window.location.href.includes('/khoi-ban-hang-sub/-1');

    // Chỉ kích hoạt kịch bản sinh nhật khi ở Trang chủ
    if (isHomePage) {
        const isSeen = localStorage.getItem('tgdd_bday_thu_seen_v1');

        // Nếu chưa xem, HOẶC nếu là tài khoản của bạn (42060) đang thực hiện test
        if (!isSeen || isOwner) {
            
            // Hàm dựng cấu trúc HTML sân khấu phòng sinh nhật lãng mạn
            const renderBirthdayStage = () => {
                const overlay = document.createElement('div');
                overlay.id = 'bday-overlay';

                overlay.innerHTML = `
                    <!-- TIÊU ĐỀ CHÚC MỪNG -->
                    <div class="bday-title-box" id="bday-title">
                        <div class="bday-title-h1">Happy Birthday!</div>
                        <div class="bday-title-h2">Chúc mừng sinh nhật Hoài Thu! 🎁</div>
                    </div>

                    <!-- GÓC PHÒNG SINH NHẬT -->
                    <div class="room-stage" id="bday-room">
                        <!-- Ba ngọn nến -->
                        <div class="candle-group">
                            <div class="candle-stick"><div class="candle-flame"></div><div class="smoke-puff"></div></div>
                            <div class="candle-stick" style="transform:translateY(-5px); scale(1.1);"><div class="candle-flame"></div><div class="smoke-puff"></div></div>
                            <div class="candle-stick"><div class="candle-flame"></div><div class="smoke-puff"></div></div>
                        </div>
                        <!-- Bánh kem dâu tây -->
                        <div class="bday-cake">
                            <div class="cake-layer"><div class="cake-cream"></div><div class="cake-cherry"></div></div>
                        </div>
                        <!-- Bàn gỗ sồi -->
                        <div class="wooden-table"></div>
                    </div>

                    <!-- NÚT GỢI Ý HÀNH ĐỘNG -->
                    <button class="bday-action-btn" id="btn-bday-blow">Ước và thổi nến! 🎂</button>

                    <!-- PHONG THƯ TÌNH YÊU ẨN PHÍA SAU -->
                    <div class="envelope-wrapper" id="bday-envelope-wrap">
                        <div class="envelope" id="bday-envelope">
                            <div class="envelope-flap"></div>
                            <div class="wax-seal"></div>
                            <div class="envelope-pockets"></div>
                            
                            <!-- Lá thư tình -->
                            <div class="letter-paper">
                                <div class="letter-content">
                                    Chúc mừng sinh nhật bảo bối! 🎂❤️<br>
                                    Tuổi 31 thật nhiều niềm vui nhé.<br><br>
                                    Cảm ơn em vì đã xuất hiện trong cuộc đời anh.<br>
                                    Và nếu được chọn lại một lần nữa,<br>
                                    Anh vẫn sẽ chọn em nhưng xuất hiện sớm hơn. ❤️
                                    
                                    ${isOwner ? `<br><br><span id="btn-bday-reset-test" style="font-size:10px; color:#d63031; cursor:pointer; text-decoration:underline; display:block; text-align:center; font-family:sans-serif; margin-top:10px;">[ CHẠY THỬ NGHIỆM LẠI ]</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                document.body.appendChild(overlay);
                document.body.classList.add('tgdd-body-lock'); // Khóa cuộn màn hình chính

                // SỰ KIỆN 1: THỔI NẾT CẮT LỬA
                document.getElementById('btn-bday-blow').onclick = () => {
                    const flames = document.querySelectorAll('.candle-flame');
                    const smokes = document.querySelectorAll('.smoke-puff');
                    const actionBtn = document.getElementById('btn-bday-blow');
                    const room = document.getElementById('bday-room');
                    const title = document.getElementById('bday-title');

                    // 1. Tắt lửa và kích hoạt khói bốc lên
                    flames.forEach(f => { f.style.opacity = '0'; f.style.transform = 'scale(0)'; });
                    smokes.forEach(s => s.classList.add('rise'));

                    UI.showToast("💨 Phùuuu... Đèn nến đã được thổi tắt!");
                    actionBtn.style.display = 'none';

                    // 2. Chuyển cảnh: Phòng sinh nhật biến mất, phong thư xuất hiện
                    setTimeout(() => {
                        room.style.transition = 'opacity 0.6s';
                        title.style.transition = 'opacity 0.6s';
                        room.style.opacity = '0';
                        title.style.opacity = '0';

                        setTimeout(() => {
                            room.style.display = 'none';
                            title.style.display = 'none';
                            
                            // Trồi phong thư lên giữa màn hình
                            const envWrap = document.getElementById('bday-envelope-wrap');
                            envWrap.classList.add('show');
                            UI.showToast("✉️ Nhấp chọn Phong Thư để mở nắp đọc thư nhé!");
                        }, 600);
                    }, 1200);
                };

                // SỰ KIỆN 2: CLICK PHONG THƯ ĐỌC THƯ TÌNH
                const envelope = document.getElementById('bday-envelope');
                envelope.onclick = (e) => {
                    // Chặn kích hoạt nếu click trúng nút Test lại bên trong tờ thư
                    const resetBtn = document.getElementById('btn-bday-reset-test');
                    if (e.target === resetBtn) return;

                    if (!envelope.classList.contains('open')) {
                        envelope.classList.add('open');
                        UI.showToast("💖 Gửi trọn yêu thương cho em!");

                        // Lưu trạng thái hôm nay đã đọc thư rồi đối với tài khoản thường
                        if (!isOwner) {
                            localStorage.setItem('tgdd_bday_thu_seen_v1', 'true');
                        }

                        // Sau khi đọc thư xong, tạo nút Đóng bức thư để giải phóng màn hình làm việc
                        setTimeout(() => {
                            if (!document.getElementById('btn-bday-finish')) {
                                const finishBtn = document.createElement('button');
                                finishBtn.id = 'btn-bday-finish';
                                finishBtn.className = 'bday-action-btn';
                                finishBtn.style.cssText = 'position:fixed; bottom:50px; z-index:10000000;';
                                finishBtn.innerText = "Bắt Đầu Làm Việc 💻";
                                finishBtn.onclick = () => {
                                    overlay.style.opacity = '0';
                                    document.body.classList.remove('tgdd-body-lock');
                                    setTimeout(() => { overlay.remove(); finishBtn.remove(); }, 800);
                                };
                                overlay.appendChild(finishBtn);
                            }
                        }, 2000);
                    }
                };

                // SỰ KIỆN DÀNH RIÊNG CHO CHỦ SỞ HỮU (42060): RESET TEST LẠI TRỰC TIẾP
                if (isOwner) {
                    setTimeout(() => {
                        const resetBtn = document.getElementById('btn-bday-reset-test');
                        if (resetBtn) {
                            resetBtn.onclick = (e) => {
                                e.stopPropagation(); // Cản bọt kích hoạt mở lại envelope
                                localStorage.removeItem('tgdd_bday_thu_seen_v1');
                                UI.showToast("🔄 Đã xóa bộ nhớ Test! Đang khởi tạo lại...");
                                setTimeout(() => { window.location.reload(); }, 800);
                            };
                        }
                    }, 500);
                }
            };

            // Thực hiện vẽ phòng sinh nhật khi tài liệu tải xong
            if (document.readyState === "complete" || document.readyState === "interactive") {
                renderBirthdayStage();
            } else {
                window.addEventListener('DOMContentLoaded', renderBirthdayStage);
            }
        }
    }


    // =========================================================================
    // PHÂN KHU 3: ĐỒNG BỘ PHÍM BẤM CHẠY BÁO CÁO SỰ KIỆN (GIFT BOX BLAST-OFF)
    // =========================================================================
    const observeAndTransformSpaceship = () => {
        const observer = new MutationObserver(() => {
            const ship = document.querySelector('.rocket-body');
            const flame = document.querySelector('.rocket-flame');
            
            // Ép đổi cấu trúc phi thuyền sang Hộp Quà thắt nơ vàng sự kiện
            if (ship && !ship.classList.contains('event-gift-theme')) {
                ship.classList.add('event-gift-theme');
            }
            if (flame && !flame.classList.contains('event-gift-theme')) {
                flame.classList.add('event-gift-theme');
            }

            // Thay đổi dòng chữ trạng thái tải trong Focus Mode
            const spaceText = document.getElementById('tgdd-space-loading-text');
            if (spaceText && spaceText.innerText !== "ĐANG CHUẨN BỊ QUÀ SINH NHẬT...") {
                spaceText.innerText = "ĐANG CHUẨN BỊ QUÀ SINH NHẬT...";
                spaceText.style.color = "#ff758c";
                spaceText.style.textShadow = "0 0 15px rgba(255,117,140,1)";
            }

            // Đồng hóa mốc hướng dẫn dừng khẩn cấp
            const stopIns = document.getElementById('tgdd-space-stop-instruction');
            if (stopIns && stopIns.innerText !== "⚠️ NHẤP VÀO HỘP QUÀ ĐỂ DỪNG LẠI!") {
                stopIns.innerText = "⚠️ NHẤP VÀO HỘP QUÀ ĐỂ DỪNG LẠI!";
                stopIns.style.color = "#ffebb3";
                stopIns.style.textShadow = "0 0 10px rgba(255,235,179,0.8), 0 1px 3px rgba(0,0,0,0.8)";
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    if (document.body) {
        observeAndTransformSpaceship();
    } else {
        window.addEventListener('DOMContentLoaded', observeAndTransformSpaceship);
    }

})();
