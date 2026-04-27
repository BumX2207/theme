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
            background: linear-gradient(135deg, #c0392b, #e74c3c) !important;
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
            top: -20px; 
            right: -12px;
            width: 45px; 
            height: 45px;
            background-image: url('https://i.imgur.com/HIfi2Nn.png') !important; 
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            z-index: 100 !important;
            transform: rotate(15deg);
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
