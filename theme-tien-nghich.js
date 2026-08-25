/**
 * ==============================================================================
 * THEME: TIÊN NGHỊCH - SÁT LỤC HÓA MA (RENEGADE IMMORTAL)
 * Lấy cảm hứng từ: Hoạt hình 3D Tiên Nghịch (Vương Lâm - Thiên Nghịch Châu)
 * Tông màu: Tím Hư Không (Void Purple) & Đỏ Huyết Sát (Crimson Lightning)
 * ==============================================================================
 */

(function() {
    'use strict';

    console.log("[THEME] ⚡ Đang thức tỉnh Ma Đạo: Tiên Nghịch - Cực Cảnh Sát Lục...");

    // 1. INJECT CSS MA ĐẠO NGHỊCH THIÊN & HUYẾT LÔI
    const themeStyle = document.createElement('style');
    themeStyle.id = 'tgdd-theme-tien-nghich';
    themeStyle.innerHTML = `
        /* ================= VỰC THẨM HƯ KHÔNG (BACKGROUND) ================= */
        body {
            background: radial-gradient(ellipse at 50% 0%, #2e0854 0%, #120326 45%, #05010d 100%) !important;
            background-attachment: fixed !important;
            color: #f3e8ff !important;
        }

        #report-scroll-wrapper {
            background: radial-gradient(circle at 50% 30%, rgba(46, 8, 84, 0.45) 0%, rgba(5, 1, 13, 0.85) 100%) !important;
        }

        /* ================= CỰC CẢNH MA TRẬN (TOP BAR & BOTTOM NAV) ================= */
        #tgdd-bottom-nav, #tgdd-report-nav, .tgdd-top-bar {
            background: linear-gradient(135deg, rgba(30, 8, 56, 0.82), rgba(10, 2, 20, 0.92)) !important;
            backdrop-filter: blur(20px) saturate(220%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(220%) !important;
            border-top: 1.5px solid rgba(168, 85, 247, 0.5) !important;
            border-bottom: 1.5px solid rgba(239, 68, 68, 0.4) !important;
            box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(239, 68, 68, 0.5), 0 0 20px rgba(168, 85, 247, 0.25) !important;
        }

        /* Chữ và Icon phong cách Huyết Kiếm & Ma Đồng */
        .nav-item, .rpt-nav-item, #btn-menu {
            color: #e9d5ff !important;
            font-weight: 800 !important;
            text-shadow: 0 1px 4px rgba(0,0,0,0.9);
        }
        .nav-item svg, .rpt-nav-item svg, #btn-menu svg {
            stroke: #c084fc !important;
            filter: drop-shadow(0 0 5px rgba(192, 132, 252, 0.5));
        }

        /* Nút Tab đang Active - Huyết Ma Tỏa Sáng */
        .rpt-nav-item.active {
            color: #ef4444 !important;
            transform: translateY(-5px);
        }
        .rpt-nav-item.active svg {
            stroke: #ef4444 !important;
            fill: rgba(239, 68, 68, 0.25) !important;
            filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.9)) !important;
        }

        /* ================= THIÊN NGHỊCH CHÂU (CENTER BUTTON) ================= */
        .nav-icon-circle {
            background: radial-gradient(circle at 35% 35%, #f43f5e 0%, #881337 50%, #1f020a 100%) !important;
            border: 2px solid #c084fc !important;
            box-shadow: 0 0 25px rgba(239, 68, 68, 0.8), inset 0 0 12px #c084fc, 0 8px 25px rgba(0,0,0,0.8) !important;
            animation: breatheBloodAura 3s ease-in-out infinite alternate !important;
        }
        .nav-icon-circle svg {
            stroke: #ffffff !important;
            filter: drop-shadow(0 0 8px #ef4444);
        }

        @keyframes breatheBloodAura {
            0% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.6), inset 0 0 8px #c084fc; }
            100% { box-shadow: 0 0 35px rgba(239, 68, 68, 1), inset 0 0 18px #f43f5e, 0 0 20px rgba(168, 85, 247, 0.8); }
        }

        /* ================= HUYẾT MA ĐIỆN (SIDEBAR MENU) ================= */
        #tgdd-sidebar-menu {
            background: rgba(15, 3, 28, 0.8) !important;
            backdrop-filter: blur(25px) saturate(200%) !important;
            -webkit-backdrop-filter: blur(25px) saturate(200%) !important;
            border-right: 1.5px solid rgba(168, 85, 247, 0.4) !important;
            box-shadow: 15px 0 50px rgba(0, 0, 0, 0.95) !important;
        }
        #tgdd-sidebar-menu::before {
            background: linear-gradient(180deg, #1f0438 0%, #0d0117 100%) !important;
            border: 1px solid rgba(239, 68, 68, 0.3) !important;
            opacity: 0.95;
        }
        .sidebar-header {
            border-bottom: 2px solid #ef4444 !important;
        }
        .sidebar-title {
            color: #f43f5e !important;
            text-shadow: 0 0 12px rgba(244, 63, 94, 0.6);
            font-family: 'Segoe UI', Tahoma, sans-serif;
            letter-spacing: 1.5px;
        }
        .tgdd-menu-item {
            color: #fae8ff !important;
        }
        .tgdd-menu-item:hover {
            background: rgba(168, 85, 247, 0.18) !important;
            color: #f43f5e !important;
            border-left: 3px solid #ef4444;
        }

        /* ================= PHÙ ĐIÊU CỔ THẦN (MODALS & POPUPS) ================= */
        .tgdd-modal-content, .tgdd-msg-content, .tgdd-select-content, .tgdd-deploy-content {
            background: linear-gradient(145deg, rgba(30, 8, 56, 0.96), rgba(12, 2, 23, 0.98)) !important;
            border: 2px solid rgba(168, 85, 247, 0.7) !important;
            border-radius: 24px !important;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.95), inset 0 0 20px rgba(239, 68, 68, 0.35) !important;
            color: #f3e8ff !important;
        }
        .tgdd-modal-content::before, .tgdd-msg-content::before, .tgdd-select-content::before, .tgdd-deploy-content::before {
            background: #0d0117 !important;
        }
        .tgdd-modal-header, .tgdd-msg-title {
            color: #f43f5e !important;
            border-bottom: 2px solid rgba(168, 85, 247, 0.5) !important;
            text-shadow: 0 0 10px rgba(244, 63, 94, 0.6);
        }
        .tgdd-section-title {
            color: #c084fc !important;
            background: rgba(46, 8, 84, 0.65) !important;
            border-left-color: #ef4444 !important;
        }

        /* ================= MODAL CHỌN BÁO CÁO (CHỮ RÕ NÉT 100%) ================= */
        #md-tab-auto, #md-tab-excel {
            background: rgba(30, 8, 56, 0.7) !important;
            color: #d8b4fe !important;
            font-weight: 900 !important;
        }
        #md-tab-auto[style*="border-bottom:3px solid"], #md-tab-auto[style*="border-bottom: 3px solid"],
        #md-tab-excel[style*="border-bottom:3px solid"], #md-tab-excel[style*="border-bottom: 3px solid"] {
            background: rgba(46, 8, 84, 0.95) !important;
            color: #ef4444 !important;
            border-bottom: 3px solid #ef4444 !important;
        }

        /* Thẻ bài Checkbox Ma Đạo */
        .tgdd-chk-group {
            background: rgba(30, 8, 56, 0.65) !important;
            border: 1.5px solid rgba(168, 85, 247, 0.4) !important;
            border-radius: 10px !important;
            margin-bottom: 8px !important;
            padding: 10px 12px !important;
            transition: all 0.2s ease !important;
        }
        .tgdd-chk-group:hover {
            background: rgba(168, 85, 247, 0.25) !important;
            border-color: #ef4444 !important;
            box-shadow: 0 0 12px rgba(239, 68, 68, 0.5) !important;
        }

        /* Chữ nhãn Checkbox sáng nét */
        .tgdd-chk-group label {
            color: #ffffff !important;
            font-weight: 800 !important;
            font-size: 14px !important;
            letter-spacing: 0.3px !important;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9) !important;
        }
        .tgdd-chk-group input[type="checkbox"] {
            width: 18px !important;
            height: 18px !important;
            accent-color: #ef4444 !important;
            cursor: pointer !important;
        }

        /* Thẻ ALL & Lưu Data (Huyết Ma Chi Tôn) */
        .tgdd-chk-group:has(#chk-all-save) {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(46, 8, 84, 0.8)) !important;
            border: 1.5px solid #ef4444 !important;
        }
        .tgdd-chk-group label[for="chk-all-save"] {
            color: #fca5a5 !important;
            font-weight: 900 !important;
            text-shadow: 0 0 8px rgba(239, 68, 68, 0.8) !important;
        }

        /* Nút Bắt Đầu / Xuất Chiêu */
        .tgdd-btn-cancel {
            background: linear-gradient(135deg, #475569, #1e293b) !important;
            color: #ffffff !important;
            font-weight: 800 !important;
            border: 1px solid #64748b !important;
            border-radius: 10px !important;
        }
        .tgdd-btn-run, .tgdd-msg-btn, #btn-save-all, .tgdd-btn-save {
            background: linear-gradient(135deg, #ef4444 0%, #b91c1c 50%, #4c0519 100%) !important;
            color: #ffffff !important;
            font-weight: 900 !important;
            border: 1.5px solid #f87171 !important;
            border-radius: 10px !important;
            box-shadow: 0 4px 20px rgba(239, 68, 68, 0.6), inset 0 0 8px rgba(248, 113, 113, 0.4) !important;
            text-transform: uppercase;
        }
        .tgdd-btn-run:hover, .tgdd-msg-btn:hover {
            box-shadow: 0 0 25px rgba(239, 68, 68, 0.9) !important;
            transform: scale(1.02);
        }

        /* Dải nhạc nền Marquee */
        #tgdd-mini-music-bar {
            color: #c084fc !important;
            border-top: 1px dashed rgba(168, 85, 247, 0.4) !important;
        }
    `;
    document.head.appendChild(themeStyle);

    // 2. MÀN HÌNH LOADING: THIÊN NGHỊCH HUYẾT LÔI TRẬN
    window.TGDD_THEME = {
        name: "Tiên Nghịch",
        startLoading: function(isStatic) {
            let overlay = document.getElementById('tgdd-tiennghich-loading');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'tgdd-tiennghich-loading';
                overlay.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: radial-gradient(circle at 50% 50%, rgba(26, 4, 48, 0.96), rgba(5, 1, 13, 0.99));
                    backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
                    z-index: 50010; display: flex; flex-direction: column; align-items: center; justify-content: center;
                    transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                `;
                overlay.innerHTML = `
                    <div style="position:relative; width: 120px; height: 120px; display:flex; align-items:center; justify-content:center;">
                        <!-- Vòng xoay Ma Trận Hư Không -->
                        <div style="position:absolute; width: 100%; height: 100%; border-radius: 50%; border: 2px dashed rgba(239, 68, 68, 0.7); animation: spinFormationTN 6s linear infinite;"></div>
                        <!-- Vòng xoay Cực Cảnh Sát Khí -->
                        <div style="position:absolute; width: 85%; height: 85%; border-radius: 50%; border: 3px solid transparent; border-top-color: #ef4444; border-bottom-color: #c084fc; animation: spinReverseTN 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; box-shadow: 0 0 25px rgba(239, 68, 68, 0.8);"></div>
                        <!-- Tâm bảo vật Thiên Nghịch Châu -->
                        <div style="font-size: 40px; filter: drop-shadow(0 0 15px #ef4444); animation: pulseBead 2s ease-in-out infinite alternate;">🔮</div>
                    </div>

                    <div style="margin-top: 30px; font-family: 'Segoe UI', serif; font-size: 15px; font-weight: 900; color: #f43f5e; letter-spacing: 3px; text-shadow: 0 0 15px rgba(244, 63, 94, 0.8); text-transform: uppercase;">
                        CỰC CẢNH SÁT LỤC ĐANG QUÉT...
                    </div>
                    <div style="margin-top: 6px; font-size: 11px; color: #c084fc; letter-spacing: 1px; font-style: italic;">
                        Thuận vi phàm, nghịch vi tiên, chỉ tại nhất niệm!
                    </div>

                    <style>
                        @keyframes spinFormationTN { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        @keyframes spinReverseTN { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
                        @keyframes pulseBead { 0% { transform: scale(0.92); filter: drop-shadow(0 0 10px #ef4444); } 100% { transform: scale(1.08); filter: drop-shadow(0 0 22px #c084fc); } }
                    </style>
                `;
                document.body.appendChild(overlay);
            }
            return true;
        },
        finishLoading: function(callback) {
            const overlay = document.getElementById('tgdd-tiennghich-loading');
            if (overlay) {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.remove();
                    if (callback) callback();
                }, 500);
            } else {
                if (callback) callback();
            }
        }
    };
})();
