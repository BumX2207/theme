(function() {
    // 1. NHÚNG CSS GIAO DIỆN NOEL (ĐÃ FIX LỖI GHI ĐÈ GLASS UI VÀ MŨ NOEL)
    const style = document.createElement('style');
    style.id = 'theme-noel-style';
    style.innerHTML = `
        /* Đè bẹp Glass UI: Đổi màu Bottom Nav, Report Nav & Top Nav sang Đỏ */
        body.glass-ui-mode #tgdd-bottom-nav, 
        body.glass-ui-mode #tgdd-report-nav, 
        body.glass-ui-mode .tgdd-top-bar,
        #tgdd-bottom-nav, #tgdd-report-nav, .tgdd-top-bar {
            background: linear-gradient(135deg, #695d5c, #c47168) !important;
            border-top: 2px solid #fff !important;
            backdrop-filter: none !important; /* Tắt kính mờ để thấy rõ màu đỏ */
        }
        
        /* Đổi màu chữ và icon sang Trắng */
        body.glass-ui-mode .nav-item svg, body.glass-ui-mode .rpt-nav-item svg, body.glass-ui-mode #btn-menu svg,
        .nav-item svg, .rpt-nav-item svg, #btn-menu svg { 
            stroke: #fff !important; fill: transparent !important; 
        }
        body.glass-ui-mode .nav-item, body.glass-ui-mode .rpt-nav-item, body.glass-ui-mode #btn-menu,
        .nav-item, .rpt-nav-item, #btn-menu { 
            color: #fff !important; 
        }
        body.glass-ui-mode .nav-footer-copyright, .nav-footer-copyright { 
            color: #ffcccc !important; text-shadow: none !important;
        }
        
        /* Highlight tab đang chọn */
        .rpt-nav-item.active { color: #fff !important; }
        .rpt-nav-item.active svg { stroke: #FFD700 !important; filter: drop-shadow(0 0 5px #FFD700) !important; }

        /* MỞ KHÓA NÚT TRÒN (Tắt overflow:hidden để mũ thò ra ngoài được) */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle {
            background: linear-gradient(145deg, #FFD700, #f39c12) !important;
            overflow: visible !important; 
        }

        /* Mũ Ông Già Noel đội lên nút Báo Cáo (Đã đổi link Imgur siêu ổn định) */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before {
            content: '';
            position: absolute;
            top: -35px; 
            right: -30px;
            width: 65px; 
            height: 65px;
            /* Cục mã SVG siêu việt nằm luôn trong CSS */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23E63946' d='M421.3 285.8c-12-32.8-37.4-87.3-68.5-125.5C311.2 109 256 64 256 64S171.1 113.8 119.5 175.7c-33 39.8-59 86-63.5 94.6-6.1 11.6-9.6 24.6-10.2 38-.9 17.5 3.3 34.6 11.8 49 14.5 24.5 40.5 38.6 68.4 38.6h260c27.9 0 53.9-14.1 68.4-38.6 8.5-14.4 12.7-31.5 11.8-49-.5-11.4-2.8-22.5-7.3-32.5z'/%3E%3Cpath fill='%23FFFFFF' d='M443.5 365H68.5C50 365 35 380 35 398.5S50 432 68.5 432h375c18.5 0 33.5-15 33.5-33.5S462 365 443.5 365z'/%3E%3Ccircle fill='%23FFFFFF' cx='93.2' cy='151.7' r='60'/%3E%3C/svg%3E") !important; 
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            z-index: 100 !important;
            transform: rotate(18deg);
            pointer-events: none;
            filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.4)) !important; 
        }

        /* HIỆU ỨNG TUYẾT RƠI MƯỢT MÀ */
        #snow-container {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            pointer-events: none;
            z-index: 99999;
            overflow: hidden;
        }
        .snowflake {
            position: absolute;
            top: -10px;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
            filter: blur(1px);
            animation: fall linear infinite;
        }
        @keyframes fall {
            0% { transform: translateY(-10px) translateX(0); opacity: 1; }
            100% { transform: translateY(100vh) translateX(20px); opacity: 0.3; }
        }
    `;
    document.head.appendChild(style);

    // 2. KHỞI TẠO TẠO HẠT TUYẾT
    setTimeout(() => {
        if (!document.getElementById('snow-container')) {
            const snowContainer = document.createElement('div');
            snowContainer.id = 'snow-container';
            document.body.appendChild(snowContainer);

            for (let i = 0; i < 30; i++) {
                let flake = document.createElement('div');
                flake.className = 'snowflake';
                let size = Math.random() * 5 + 3; 
                flake.style.width = size + 'px';
                flake.style.height = size + 'px';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
                flake.style.animationDelay = Math.random() * 5 + 's';
                snowContainer.appendChild(flake);
            }
        }
    }, 1000);

    console.log("[THEME ENGINE] Đã kích hoạt Theme Noel Đỏ Rực! 🎄🎅");
})();
