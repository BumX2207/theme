(function() {
    // 1. NHÚNG CSS GIAO DIỆN NOEL
    const style = document.createElement('style');
    style.id = 'theme-noel-style';
    style.innerHTML = `
        /* Đổi màu Bottom Nav & Top Nav sang tone Đỏ Giáng Sinh */
        #tgdd-bottom-nav, #tgdd-report-nav, .tgdd-top-bar {
            background: linear-gradient(135deg, #c0392b, #e74c3c) !important;
            border-top: 2px solid #fff !important;
        }
        
        /* Đổi màu chữ và icon sang Trắng cho nổi bật trên nền đỏ */
        .nav-item svg, .rpt-nav-item svg, #btn-menu svg { stroke: #fff !important; fill: transparent !important; }
        .nav-item, .rpt-nav-item, #btn-menu { color: #fff !important; }
        .nav-footer-copyright { background: transparent !important; color: #ffcccc !important; }
        
        /* Highlight tab đang chọn */
        .rpt-nav-item.active { color: #fff !important; }
        .rpt-nav-item.active svg { stroke: #FFD700 !important; filter: drop-shadow(0 0 5px #FFD700); }

        /* Mũ Ông Già Noel đội lên nút Báo Cáo */
        #nav-report-circle {
            position: relative;
            background: linear-gradient(145deg, #FFD700, #f39c12) !important; /* Vàng mix cam */
        }
        #nav-report-circle::before {
            content: '';
            position: absolute;
            top: -15px; right: -5px;
            width: 40px; height: 40px;
            /* Ảnh mũ Noel tách nền trong suốt */
            background-image: url('https://cdn-icons-png.flaticon.com/512/1792/1792131.png'); 
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 100;
            transform: rotate(15deg);
            pointer-events: none;
        }

        /* -------------------------------------------------------------
           HIỆU ỨNG TUYẾT RƠI (Chỉ dùng CSS bóng mờ - Siêu mượt, không lag máy)
           ------------------------------------------------------------- */
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

    // 2. KHỞI TẠO TẠO HẠT TUYẾT TRÊN TRANG CHỦ HOẶC BÁO CÁO
    // (Bọc trong setTimeout để đợi web render xong)
    setTimeout(() => {
        if (!document.getElementById('snow-container')) {
            const snowContainer = document.createElement('div');
            snowContainer.id = 'snow-container';
            document.body.appendChild(snowContainer);

            // Tạo 30 hạt tuyết rơi ngẫu nhiên
            for (let i = 0; i < 30; i++) {
                let flake = document.createElement('div');
                flake.className = 'snowflake';
                
                // Random kích thước, vị trí, tốc độ
                let size = Math.random() * 5 + 3; // 3px -> 8px
                flake.style.width = size + 'px';
                flake.style.height = size + 'px';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4s -> 7s
                flake.style.animationDelay = Math.random() * 5 + 's';
                
                snowContainer.appendChild(flake);
            }
        }
    }, 1000);

    console.log("[THEME ENGINE] Đã kích hoạt Theme Noel! 🎄");
})();
