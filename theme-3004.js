(function() {
    // =========================================================================
    // 1. NHÚNG CSS GIAO DIỆN 30/04 (ĐỎ CỜ & SAO VÀNG)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-3004-style';
    style.innerHTML = `
        /* Tone màu Đỏ Cờ Việt Nam cho các thanh Điều hướng */
        body.glass-ui-mode #tgdd-bottom-nav, 
        body.glass-ui-mode #tgdd-report-nav, 
        body.glass-ui-mode .tgdd-top-bar,
        #tgdd-bottom-nav, #tgdd-report-nav, .tgdd-top-bar {
            background: linear-gradient(135deg, #da251d, #b71c1c) !important; /* Đỏ cờ chuẩn */
            border-top: 2px solid #ffeb3b !important; /* Viền vàng */
            backdrop-filter: none !important;
        }
        
        /* Chữ và icon mặc định là Trắng */
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
        
        /* Highlight tab đang chọn sẽ sáng rực màu VÀNG SAO */
        .rpt-nav-item.active { color: #ffff00 !important; font-weight: 900 !important; }
        .rpt-nav-item.active svg { stroke: #ffff00 !important; filter: drop-shadow(0 0 8px rgba(255,255,0,0.8)) !important; }

        /* Nút tròn Báo cáo: Viền vàng, Lõi đỏ */
        body.glass-ui-mode .nav-icon-circle, .nav-icon-circle {
            background: radial-gradient(circle, #da251d 40%, #b71c1c 100%) !important;
            border: 3px solid #ffff00 !important;
            box-shadow: 0 5px 20px rgba(255, 255, 0, 0.5) !important;
            overflow: visible !important; 
        }
        /* Icon bên trong nút Báo cáo đổi thành màu vàng */
        body.glass-ui-mode .nav-icon-circle svg, .nav-icon-circle svg {
            stroke: #ffff00 !important;
        }

        /* Đính Ngôi Sao Vàng 5 cánh lên góc nút Báo cáo */
        body.glass-ui-mode .nav-icon-circle::before, .nav-icon-circle::before {
            content: '';
            position: absolute;
            top: -12px; 
            right: -8px;
            width: 35px; 
            height: 35px;
            /* Mã SVG Ngôi sao vàng đặc ruột */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffff00' d='M256 14.316l73.416 225.962h237.584l-192.183 139.64 73.417 225.961-192.234-139.64-192.234 139.64 73.416-225.961-192.183-139.64h237.584z'/%3E%3C/svg%3E") !important; 
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            z-index: 100 !important;
            transform: rotate(15deg);
            pointer-events: none;
            /* Toả sáng vầng hào quang quanh ngôi sao */
            filter: drop-shadow(0px 0px 5px rgba(255,255,0,0.8)) !important; 
        }

        /* -------------------------------------------------------------
           HIỆU ỨNG MƯA SAO VÀNG RƠI LẤP LÁNH
           ------------------------------------------------------------- */
        #star-container {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            pointer-events: none;
            z-index: 99999;
            overflow: hidden;
        }
        .star-flake {
            position: absolute;
            top: -20px;
            color: #ffff00; /* Màu vàng */
            text-shadow: 0 0 5px rgba(255,215,0,0.8); /* Bóng đổ để sao nổi trên nền trắng */
            opacity: 0.9;
            font-family: Arial, sans-serif;
            animation: fall-star linear infinite;
        }
        @keyframes fall-star {
            0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) translateX(50px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 2. KHỞI TẠO HẠT SAO VÀNG RƠI
    // =========================================================================
    setTimeout(() => {
        if (!document.getElementById('star-container')) {
            const starContainer = document.createElement('div');
            starContainer.id = 'star-container';
            document.body.appendChild(starContainer);

            // Tạo 25 ngôi sao vàng rơi lấp lánh
            for (let i = 0; i < 25; i++) {
                let star = document.createElement('div');
                star.className = 'star-flake';
                star.innerHTML = '★'; // Ký tự ngôi sao đặc
                
                // Random kích thước, vị trí, tốc độ
                let size = Math.random() * 15 + 10; // 10px -> 25px
                star.style.fontSize = size + 'px';
                star.style.left = Math.random() * 100 + 'vw';
                star.style.animationDuration = (Math.random() * 4 + 4) + 's'; // 4s -> 8s
                star.style.animationDelay = Math.random() * 5 + 's';
                
                starContainer.appendChild(star);
            }
        }
    }, 1000);

    console.log("Đã kích hoạt Theme 30/04! 🇻🇳★");
})();
