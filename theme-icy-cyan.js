/**
 * ==============================================================================
 * THEME: ICE CYAN BREEZE (Xanh Biển Nhẹ Nhàng & Kính Mờ Bóng Bẩy)
 * Tác giả: Auto BI Team
 * Phiên bản: 1.0
 * ==============================================================================
 */

(function() {
    'use strict';

    console.log("[THEME] 🌊 Đang kích hoạt giao diện Ice Cyan Breeze...");

    // 1. CHÈN CSS GIAO DIỆN BÓNG BẨY & PASTEL CYAN
    const themeStyle = document.createElement('style');
    themeStyle.id = 'tgdd-theme-ice-cyan';
    themeStyle.innerHTML = `
        /* ================= NỀN VÀ KHUNG CUỘN CHÍNH ================= */
        body {
            background: radial-gradient(circle at 10% 20%, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%) !important;
            background-attachment: fixed !important;
        }

        #report-scroll-wrapper {
            background: radial-gradient(circle at 50% 50%, rgba(240, 249, 255, 0.8), rgba(224, 242, 254, 0.9)) !important;
        }

        /* ================= THANH TOP BAR & BOTTOM NAV (GLASSMORPHISM BÓNG) ================= */
        #tgdd-bottom-nav, #tgdd-report-nav, .tgdd-top-bar {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(224, 242, 254, 0.55)) !important;
            backdrop-filter: blur(20px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.9) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.7) !important;
            box-shadow: 0 10px 30px rgba(2, 132, 199, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
        }

        /* Chữ và Icon trên thanh điều hướng */
        .nav-item, .rpt-nav-item, #btn-menu {
            color: #0369a1 !important;
            font-weight: 700 !important;
        }
        .nav-item svg, .rpt-nav-item svg, #btn-menu svg {
            stroke: #0284c7 !important;
        }

        /* Nút Tab đang active */
        .rpt-nav-item.active {
            color: #0284c7 !important;
            transform: translateY(-4px);
        }
        .rpt-nav-item.active svg {
            stroke: #0284c7 !important;
            fill: rgba(56, 189, 248, 0.2) !important;
            filter: drop-shadow(0 4px 8px rgba(56, 189, 248, 0.5)) !important;
        }

        /* ================= NÚT TRÒN TRUNG TÂM (AQUA GLOSS BUTTON) ================= */
        .nav-icon-circle {
            background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%) !important;
            border: 2.5px solid rgba(255, 255, 255, 0.9) !important;
            box-shadow: 0 8px 25px rgba(2, 132, 199, 0.45), inset 0 2px 5px rgba(255, 255, 255, 0.8) !important;
        }
        .nav-icon-circle svg {
            stroke: #ffffff !important;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }

        /* ================= SIDEBAR MENU (KÍNH MỜ XANH NGỌC) ================= */
        #tgdd-sidebar-menu {
            background: rgba(240, 249, 255, 0.65) !important;
            backdrop-filter: blur(25px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(25px) saturate(180%) !important;
            border-right: 1.5px solid rgba(255, 255, 255, 0.8) !important;
            box-shadow: 10px 0 40px rgba(2, 132, 199, 0.15) !important;
        }
        #tgdd-sidebar-menu::before {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 249, 255, 0.7) 100%) !important;
            border: 1px solid rgba(255, 255, 255, 0.9) !important;
        }
        .sidebar-header {
            border-bottom: 2px solid #38bdf8 !important;
        }
        .sidebar-title {
            color: #0369a1 !important;
        }
        .tgdd-menu-item {
            color: #0c4a6e !important;
        }
        .tgdd-menu-item:hover {
            background: rgba(56, 189, 248, 0.12) !important;
            color: #0284c7 !important;
        }

        /* ================= MODAL & POPUP (GLASS CARDS) ================= */
        .tgdd-modal-content, .tgdd-msg-content, .tgdd-select-content, .tgdd-deploy-content {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(224, 242, 254, 0.75)) !important;
            border: 1.5px solid rgba(255, 255, 255, 0.9) !important;
            box-shadow: 0 25px 50px -12px rgba(2, 132, 199, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.6) !important;
        }
        .tgdd-modal-header {
            color: #0284c7 !important;
            border-bottom: 2px solid #38bdf8 !important;
        }
        .tgdd-section-title {
            color: #0284c7 !important;
            border-left-color: #0284c7 !important;
            background: #e0f2fe !important;
        }

        /* Nút bấm Lưu / Hoàn thành */
        .tgdd-msg-btn, #btn-save-all, .tgdd-btn-save {
            background: linear-gradient(135deg, #38bdf8, #0284c7) !important;
            color: #ffffff !important;
            border: 1px solid rgba(255,255,255,0.4) !important;
            box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35) !important;
        }

        /* Dải nhạc nền chạy chữ Mini Bar */
        #tgdd-mini-music-bar {
            color: #0284c7 !important;
            border-top: 1px dashed rgba(56, 189, 248, 0.3) !important;
        }
    `;
    document.head.appendChild(themeStyle);

    // 2. TÍCH HỢP MÀN HÌNH LOADING RIÊNG (AQUA NEON PULSE)
    window.TGDD_THEME = {
        name: "Ice Cyan Breeze",
        startLoading: function(isStatic) {
            let overlay = document.getElementById('tgdd-ice-loading');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'tgdd-ice-loading';
                overlay.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: radial-gradient(circle at 50% 50%, rgba(240, 249, 255, 0.95), rgba(186, 230, 253, 0.9));
                    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
                    z-index: 50010; display: flex; flex-direction: column; align-items: center; justify-content: center;
                    transition: opacity 0.4s ease;
                `;
                overlay.innerHTML = `
                    <div style="position:relative; width: 85px; height: 85px; display:flex; align-items:center; justify-content:center;">
                        <div style="position:absolute; width: 100%; height: 100%; border-radius: 50%; border: 3px solid rgba(56, 189, 248, 0.2); border-top-color: #0284c7; animation: spin 0.8s linear infinite; box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);"></div>
                        <div style="font-size: 32px; filter: drop-shadow(0 2px 8px rgba(2, 132, 199, 0.4));">💎</div>
                    </div>
                    <div style="margin-top: 22px; font-family: -apple-system, sans-serif; font-size: 14px; font-weight: 900; color: #0369a1; letter-spacing: 2px; text-transform: uppercase;">
                        ĐANG TẢI DỮ LIỆU...
                    </div>
                `;
                document.body.appendChild(overlay);
            }
            return true; // Báo hiệu đã nhận quyền xử lý Loading
        },
        finishLoading: function(callback) {
            const overlay = document.getElementById('tgdd-ice-loading');
            if (overlay) {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.remove();
                    if (callback) callback();
                }, 400);
            } else {
                if (callback) callback();
            }
        }
    };
})();
