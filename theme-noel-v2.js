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
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath fill='%23DA2F47' d='M33.649 19.344c-1.391-2.909-5.267-3.959-5.267-3.959-1.92-12.781-17.75-9.875-22.375-3.375-3.15 4.428-1.579 11.599-1.579 11.599 1.745-.335 4.316-1.523 5.485-1.905-1.258-2.617-.417-6.074 1.341-8.544 3.733-5.249 14.155-2.072 15.656 7.643.082.527.241 1.054.453 1.576.471.05 1.002.162 1.621.361 2.374.764 4.542 1.764 4.665-3.396z'/%3E%3Cpath fill='%23E1E8ED' d='M30 22c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4zM24.875 25C24.875 28.313 20.397 31 14.875 31 9.352 31 4.875 28.313 4.875 25c0-3.313 4.477-6 9.999-6 5.523 0 10.001 2.687 10.001 6z'/%3E%3C/svg%3E") !important; 
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            z-index: 100 !important;
            transform: rotate(35deg);
            pointer-events: none;
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
