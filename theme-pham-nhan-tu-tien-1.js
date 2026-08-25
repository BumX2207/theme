/**
 * ==============================================================================
 * THEME: PHÀM NHÂN TU TIÊN - CHƯỞNG THIÊN KIẾM TRẬN (V1.1 - FIX FONT CONTRAST)
 * Lấy cảm hứng từ: Hoạt hình 3D Phàm Nhân Tu Tiên (Hàn Lập)
 * Tông màu: Lục Bảo Tiên Khí (Jade Emerald) & Kim Cổ Trận Pháp
 * ==============================================================================
 */

(function() {
    'use strict';

    console.log("[THEME] ⚔️ Đang khởi động Đại Trận Tu Tiên: Chưởng Thiên Kiếm Trận...");

    // 1. INJECT CSS TU TIÊN HUYỀN ẢO & PHÙ ĐIÊU TIÊN PHÁP
    const themeStyle = document.createElement('style');
    themeStyle.id = 'tgdd-theme-pham-nhan';
    themeStyle.innerHTML = `
        /* ================= CẢNH GIỚI LINH ĐỊA (BACKGROUND) ================= */
        body {
            background: radial-gradient(ellipse at 50% 0%, #064e3b 0%, #022c22 45%, #050b14 100%) !important;
            background-attachment: fixed !important;
            color: #d1fae5 !important;
        }

        #report-scroll-wrapper {
            background: radial-gradient(circle at 50% 30%, rgba(6, 78, 59, 0.4) 0%, rgba(2, 44, 34, 0.8) 100%) !important;
        }

        /* ================= THANH TIÊN TRẬN (TOP BAR & BOTTOM NAV) ================= */
        #tgdd-bottom-nav, #tgdd-report-nav, .tgdd-top-bar {
            background: linear-gradient(135deg, rgba(6, 78, 59, 0.75), rgba(2, 44, 34, 0.85)) !important;
            backdrop-filter: blur(20px) saturate(200%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(200%) !important;
            border-top: 1.5px solid rgba(52, 211, 153, 0.4) !important;
            border-bottom: 1.5px solid rgba(245, 158, 11, 0.3) !important;
            box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(251, 191, 36, 0.4), 0 0 15px rgba(16, 185, 129, 0.2) !important;
        }

        /* Chữ và biểu tượng phong cách Linh Kiếm */
        .nav-item, .rpt-nav-item, #btn-menu {
            color: #a7f3d0 !important;
            font-weight: 800 !important;
            text-shadow: 0 1px 4px rgba(0,0,0,0.8);
        }
        .nav-item svg, .rpt-nav-item svg, #btn-menu svg {
            stroke: #34d399 !important;
            filter: drop-shadow(0 0 4px rgba(52, 211, 153, 0.4));
        }

        .rpt-nav-item.active {
            color: #fbbf24 !important;
            transform: translateY(-5px);
        }
        .rpt-nav-item.active svg {
            stroke: #fbbf24 !important;
            fill: rgba(251, 191, 36, 0.2) !important;
            filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.8)) !important;
        }

        /* ================= NÚT CHƯỞNG THIÊN BÌNH (CENTER BUTTON) ================= */
        .nav-icon-circle {
            background: radial-gradient(circle at 35% 35%, #6ee7b7 0%, #059669 45%, #064e3b 100%) !important;
            border: 2px solid #fbbf24 !important;
            box-shadow: 0 0 25px rgba(52, 211, 153, 0.6), inset 0 0 10px #fbbf24, 0 8px 20px rgba(0,0,0,0.6) !important;
            animation: breatheAura 3s ease-in-out infinite alternate !important;
        }
        .nav-icon-circle svg {
            stroke: #fffbeb !important;
            filter: drop-shadow(0 0 6px #fbbf24);
        }

        @keyframes breatheAura {
            0% { box-shadow: 0 0 15px rgba(52, 211, 153, 0.5), inset 0 0 6px #fbbf24; }
            100% { box-shadow: 0 0 30px rgba(52, 211, 153, 0.9), inset 0 0 15px #fbbf24, 0 0 15px rgba(251, 191, 36, 0.6); }
        }

        /* ================= TÀNG KINH CÁC (SIDEBAR MENU) ================= */
        #tgdd-sidebar-menu {
            background: rgba(2, 44, 34, 0.75) !important;
            backdrop-filter: blur(25px) saturate(200%) !important;
            -webkit-backdrop-filter: blur(25px) saturate(200%) !important;
            border-right: 1.5px solid rgba(52, 211, 153, 0.4) !important;
            box-shadow: 15px 0 50px rgba(0, 0, 0, 0.9) !important;
        }
        #tgdd-sidebar-menu::before {
            background: linear-gradient(180deg, #064e3b 0%, #022c22 100%) !important;
            border: 1px solid rgba(251, 191, 36, 0.3) !important;
            opacity: 0.95;
        }
        .sidebar-header {
            border-bottom: 2px solid #fbbf24 !important;
        }
        .sidebar-title {
            color: #fbbf24 !important;
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.4);
            font-family: 'Segoe UI', Tahoma, sans-serif;
            letter-spacing: 1.5px;
        }
        .tgdd-menu-item {
            color: #ecfdf5 !important;
        }
        .tgdd-menu-item:hover {
            background: rgba(52, 211, 153, 0.15) !important;
            color: #34d399 !important;
            border-left: 3px solid #fbbf24;
        }

        /* ================= TIÊN THẠCH TRUYỀN PHÁP (MODALS) ================= */
        .tgdd-modal-content, .tgdd-msg-content, .tgdd-select-content, .tgdd-deploy-content {
            background: linear-gradient(145deg, rgba(6, 78, 59, 0.95), rgba(2, 44, 34, 0.98)) !important;
            border: 2px solid rgba(251, 191, 36, 0.7) !important;
            border-radius: 24px !important;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9), inset 0 0 20px rgba(16, 185, 129, 0.3) !important;
            color: #ecfdf5 !important;
        }
        .tgdd-modal-content::before, .tgdd-msg-content::before, .tgdd-select-content::before, .tgdd-deploy-content::before {
            background: #022c22 !important; /* Lớp nền đệm tối */
        }
        .tgdd-modal-header, .tgdd-msg-title {
            color: #fbbf24 !important;
            border-bottom: 2px solid rgba(52, 211, 153, 0.5) !important;
            text-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
        }
        .tgdd-section-title {
            color: #34d399 !important;
            background: rgba(6, 78, 59, 0.6) !important;
            border-left-color: #fbbf24 !important;
        }

        /* ================= FIX ĐẶC BIỆT: MODAL CHỌN LOẠI BÁO CÁO ================= */
        #md-tab-auto, #md-tab-excel {
            background: rgba(6, 78, 59, 0.7) !important;
            color: #a7f3d0 !important;
            font-weight: 900 !important;
        }
        #md-tab-auto[style*="border-bottom:3px solid"], #md-tab-auto[style*="border-bottom: 3px solid"],
        #md-tab-excel[style*="border-bottom:3px solid"], #md-tab-excel[style*="border-bottom: 3px solid"] {
            background: rgba(6, 78, 59, 0.95) !important;
            color: #fbbf24 !important;
            border-bottom: 3px solid #fbbf24 !important;
        }

        /* Từng dòng Checkbox - Thiết kế thẻ bài Tiên Đạo */
        .tgdd-chk-group {
            background: rgba(6, 78, 59, 0.6) !important;
            border: 1.5px solid rgba(52, 211, 153, 0.4) !important;
            border-radius: 10px !important;
            margin-bottom: 8px !important;
            padding: 10px 12px !important;
            transition: all 0.2s ease !important;
        }
        .tgdd-chk-group:hover {
            background: rgba(16, 185, 129, 0.25) !important;
            border-color: #fbbf24 !important;
            box-shadow: 0 0 12px rgba(52, 211, 153, 0.4) !important;
        }

        /* Chữ của các dòng chọn - TRẮNG SÁNG & DỄ ĐỌC 100% */
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
            accent-color: #10b981 !important;
            cursor: pointer !important;
        }

        /* Thẻ đặc biệt: ALL & Lưu Data (Viền Kim Lôi Hoàng Kim) */
        .tgdd-chk-group:has(#chk-all-save) {
            background: linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(6, 78, 59, 0.8)) !important;
            border: 1.5px solid #fbbf24 !important;
        }
        .tgdd-chk-group label[for="chk-all-save"] {
            color: #fbbf24 !important;
            font-weight: 900 !important;
            text-shadow: 0 0 8px rgba(251, 191, 36, 0.6) !important;
        }

        /* Thẻ đặc biệt: Báo cáo Test Admin */
        .tgdd-chk-group:has(#chk-test) {
            background: rgba(220, 38, 38, 0.2) !important;
            border: 1.5px solid #f87171 !important;
        }
        .tgdd-chk-group label[for="chk-test"] {
            color: #fca5a5 !important;
        }

        /* Nút Bắt đầu chạy & Hủy */
        .tgdd-btn-cancel {
            background: linear-gradient(135deg, #dc2626, #991b1b) !important;
            color: #ffffff !important;
            font-weight: 800 !important;
            border: 1px solid #f87171 !important;
            border-radius: 10px !important;
            box-shadow: 0 4px 10px rgba(220, 38, 38, 0.4) !important;
        }
        .tgdd-btn-run, .tgdd-msg-btn, #btn-save-all, .tgdd-btn-save {
            background: linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%) !important;
            color: #fbbf24 !important;
            font-weight: 900 !important;
            border: 1.5px solid #fbbf24 !important;
            border-radius: 10px !important;
            box-shadow: 0 4px 20px rgba(5, 150, 105, 0.5), inset 0 0 8px rgba(251, 191, 36, 0.3) !important;
            text-transform: uppercase;
        }
        .tgdd-btn-run:hover, .tgdd-msg-btn:hover {
            box-shadow: 0 0 25px rgba(251, 191, 36, 0.7) !important;
            transform: scale(1.02);
        }

        /* Mini Music strip */
        #tgdd-mini-music-bar {
            color: #6ee7b7 !important;
            border-top: 1px dashed rgba(52, 211, 153, 0.4) !important;
        }
    `;
    document.head.appendChild(themeStyle);

    // 2. MÀN HÌNH LOADING: NGƯNG TỤ LINH KHÍ ĐẠI TRẬN
    window.TGDD_THEME = {
        name: "Phàm Nhân Tu Tiên",
        startLoading: function(isStatic) {
            let overlay = document.getElementById('tgdd-xianxia-loading');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'tgdd-xianxia-loading';
                overlay.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: radial-gradient(circle at 50% 50%, rgba(4, 47, 46, 0.95), rgba(2, 15, 12, 0.98));
                    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
                    z-index: 50010; display: flex; flex-direction: column; align-items: center; justify-content: center;
                    transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                `;
                overlay.innerHTML = `
                    <div style="position:relative; width: 120px; height: 120px; display:flex; align-items:center; justify-content:center;">
                        <div style="position:absolute; width: 100%; height: 100%; border-radius: 50%; border: 2px dashed rgba(251, 191, 36, 0.6); animation: spinFormation 8s linear infinite;"></div>
                        <div style="position:absolute; width: 85%; height: 85%; border-radius: 50%; border: 3px solid transparent; border-top-color: #34d399; border-bottom-color: #10b981; animation: spinReverse 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; box-shadow: 0 0 25px rgba(52, 211, 153, 0.7);"></div>
                        <div style="font-size: 38px; filter: drop-shadow(0 0 12px #fbbf24); animation: floatVessel 2s ease-in-out infinite alternate;">🏺</div>
                    </div>

                    <div style="margin-top: 30px; font-family: 'Segoe UI', serif; font-size: 15px; font-weight: 900; color: #fbbf24; letter-spacing: 3px; text-shadow: 0 0 12px rgba(251, 191, 36, 0.8); text-transform: uppercase;">
                        ĐANG VẬN HÀNH KIẾM TRẬN...
                    </div>
                    <div style="margin-top: 6px; font-size: 11px; color: #6ee7b7; letter-spacing: 1px; font-style: italic;">
                        Linh khí đang ngưng tụ, đạo hữu chớ nóng vội!
                    </div>

                    <style>
                        @keyframes spinFormation { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        @keyframes spinReverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
                        @keyframes floatVessel { 0% { transform: translateY(-4px) scale(0.95); } 100% { transform: translateY(4px) scale(1.05); } }
                    </style>
                `;
                document.body.appendChild(overlay);
            }
            return true;
        },
        finishLoading: function(callback) {
            const overlay = document.getElementById('tgdd-xianxia-loading');
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
