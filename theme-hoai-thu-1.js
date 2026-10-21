(function() {
    // =========================================================================
    // 1. MÁY QUÉT ĐỊA CHỈ: Kiểm tra Trang Chủ
    // =========================================================================
    const path = window.location.pathname;
    const href = window.location.href;
    const isHomePage = path === '/' || path === '' || href.includes('/dashboard/home') || href.endsWith('baocao.dienmayxanh.com');

    if (!isHomePage) return;

    // =========================================================================
    // 2. TÀI NGUYÊN SVG & BỘ LỜI CHÚC YÊU THƯƠNG NGẪU NHIÊN
    // =========================================================================
    const SVG_HEART = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ff4d6d' d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E";
    const SVG_SPARKLE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFD700' d='M256 0c15 110 65 160 175 175-110 15-160 65-175 175-15-110-65-160-175-175C191 160 241 110 256 0z'/%3E%3C/svg%3E";

    const SWEET_MESSAGES = [
        { main: "Đang chuẩn bị số liệu cho Hoài Thu ...", sub: "Hôm nay em nhớ uống thật nhiều nước nha! 🥤💕" },
        { main: "Hệ thống đang tải dữ liệu ...", sub: "Chúc cô gái nhỏ một ngày luôn rạng rỡ và tràn đầy năng lượng! ☀️🌸" },
        { main: "Đang tổng hợp báo cáo cho em ...", sub: "Cứ nhẹ nhàng làm việc, mọi thứ đã có anh lo! ✨💖" },
        { main: "Sắp xong rồi nhe...", sub: "Hôm nay chắc chắn sẽ là một ngày siêu may mắn và chốt đơn mỏi tay! 🍀🥰" },
        { main: "Đang lấy số liệu mới nhất cho em...", sub: "Bắn tim cho cô bé chăm chỉ và dễ thương nhất! 💖🧸" },
        { main: "Đang đồng bộ dữ liệu cho Hoài Thu...", sub: "Hôm nay em xinh đẹp và rạng rỡ nhất trần đời đấy nhé! 🌷✨" },
        { main: "Đang gom số liệu xịn sò nhất...", sub: "Làm việc mệt thì nhớ chớp mắt nghỉ ngơi xíu nha! 👀💖" },
        { main: "Chờ xíu xiu thôi nè...", sub: "Gửi tặng Hoài Thu 1000 nụ cười tiếp thêm động lực hôm nay! 😊🌟" },
        { main: "Đang tải báo cáo siêu tốc...", sub: "Chúc Hoài Thu một ngày làm việc nhẹ nhàng như một cơn gió! 🍃💕" },
        { main: "Dữ liệu đang chạy tới tấp...", sub: "Đừng căng thẳng nha, việc khó tới đâu cũng sẽ qua hết thôi! 💪🌸" },
        { main: "Đang kiểm tra từng dòng số liệu...", sub: "Hôm nay cô bé đã ăn uống đầy đủ chưa đấy? 🍱🍓" },
        { main: "Hệ thống đang tăng tốc vì Hoài Thu...", sub: "Năng lượng tích cực đang được nạp đầy 100%! 🔋✨" },
        { main: "Báo cáo sắp hiện ra rồi nè...", sub: "Mỗi ngày đi làm đều là một ngày tỏa sáng của em! 🌟🥰" },
        { main: "Đang xử lý dữ liệu đặc biệt...", sub: "Vui vẻ không quạu, chuyện gì khó cứ để anh lo! 🐱💖" },
        { main: "Đang tổng hợp doanh số thật đẹp...", sub: "Chúc Hoài Thu hôm nay vượt KPI cái vèo luôn nhé! 🎯📈" },
        { main: "Hệ thống đang thả tim cho em...", sub: "Hít thở thật sâu, một ngày tuyệt vời đang chờ em đón nhận! 🌈💕" },
        { main: "Đang lọc những con số may mắn nhất...", sub: "Hôm nay có thèm trà sữa thì nhớ chọn ít đường cho khỏe nha! 🧋✨" },
        { main: "Dữ liệu đang bay về đây...", sub: "Nụ cười của Hoài Thu làm bừng sáng cả không gian luôn đó! ☀️🌻" },
        { main: "Tải nhanh để em không phải đợi lâu...", sub: "Cố gắng lên nào cô gái giỏi giang và kiên cường! 🎈💖" },
        { main: "Chờ tí xíu là xong ngay...", sub: "Nhớ ngồi thẳng lưng để không bị mỏi vai gáy nha em bé! 🧘‍♀️💗" },
        { main: "Đang chuẩn bị bảng biểu lung linh...", sub: "Mong mọi điều dịu dàng nhất sẽ đến với Hoài Thu hôm nay! 🍰🌸" },
        { main: "Số liệu đang xếp hàng ngay ngắn...", sub: "Hôm nay trông em đáng yêu cực kỳ luôn! 🧸💕" },
        { main: "Hệ thống ưu tiên phục vụ Hoài Thu...", sub: "Làm việc xong sớm rồi về nghỉ ngơi, đừng ôm việc nhiều quá nhé! 🏡✨" },
        { main: "Đang kết xuất báo cáo chuẩn xịn...", sub: "Gửi một cái ôm thật ấm tiếp thêm sức mạnh cho em nè! 🫂💖" },
        { main: "Tất cả đã sẵn sàng phục vụ em...", sub: "Chúc Hoài Thu luôn yêu đời, bình an và ngập tràn niềm vui! 🍀💌" },
        { main: "Đang triệu hồi những con số đẹp nhất...", sub: "Hôm nay em nhớ cười thật nhiều để xua tan mệt mỏi nha! 🌸✨" },
        { main: "Dữ liệu đang xếp hàng để show ra nè...", sub: "Nhớ chớp mắt và nhìn ra xa một chút cho đỡ mỏi mắt nha! 👀🌿" },
        { main: "Hệ thống đang chạy hết công suất...", sub: "Dù bận rộn thế nào thì Hoài Thu vẫn là số một trong lòng anh! 🥇💖" },
        { main: "Đang gọt giũa từng dòng báo cáo...", sub: "Trời có nóng hay lạnh thì cũng nhớ giữ gìn sức khỏe đấy nhé! ⛅🧣" },
        { main: "Đang tải niềm vui và số liệu...", sub: "Gửi một chút ngọt ngào để ngày làm việc của em thêm nhẹ tênh! 🍬💕" },
        { main: "Báo cáo đang trên đường cập bến...", sub: "Đừng quên uống một ngụm nước ấm để nạp lại năng lượng nha! 🍵✨" },
        { main: "Đang gom nhặt từng con số may mắn...", sub: "Chúc cô gái nhỏ hôm nay đi đến đâu cũng gặp quý nhân giúp đỡ! 🍀🧚‍♀️" },
        { main: "Chờ xíu xiu, dữ liệu tới liền nè...", sub: "Hôm nay Hoài Thu trông xink lắm nha! 👗🥰" },
        { main: "Hệ thống đang gửi tín hiệu yêu thương...", sub: "Cứ bình tĩnh xử lý từng việc một, em làm tốt lắm rồi! 👏💖" },
        { main: "Đang nén dữ liệu siêu tốc...", sub: "Tan làm nhớ tự thưởng cho mình một món ăn thật ngon nha em! 🍧🥞" },
        { main: "Đang hoàn tất các bước cuối cùng...", sub: "Chúc Hoài Thu cả ngày hôm nay chỉ toàn nhận được tin vui thôi! 💌🎉" },
        { main: "Đang kết nối với vũ trụ số liệu...", sub: "Hôm nay nỗ lực, cuối tháng nằm toppppppp! 🌟💪" },
        { main: "Chờ xíu nha, máy chủ đang cố hết sức...", sub: "Có mệt thì tựa lưng nghỉ một lát, đừng ép bản thân quá nhé! 🛋️💗" },
        { main: "Đang chuẩn bị màn hình rực rỡ...", sub: "Hôm nay thế giới có bận rộn thì em vẫn phải thật bình yên nha! 🕊️🌸" },
        { main: "Dữ liệu đang bay vèo vèo tới ...", sub: "Bắn ngàn tia may mắn để Hoài Thu chốt đơn ầm ầm hôm nay! 🎯⚡" },
        { main: "Chỉ còn vài giây nữa thôi nè...", sub: "Uống một ly nước cam cho da đẹp và tăng đề kháng nha cô bé! 🍊🍹" },
        { main: "Đang quét dữ liệu...", sub: "Mong rằng mọi điều muộn phiền cũng sẽ bay biến khỏi tâm trí em! 🍃💕" },
        { main: "Đang nạp năng lượng cho hệ thống...", sub: "Tặng Hoài Thu một bầu trời bình yên và ngập tràn niềm vui! 🌌🧸" },
        { main: "Đang tổng hợp thông tin chuẩn xác...", sub: "Làm việc vừa sức thôi, sức khỏe của em mới là quan trọng nhất! 🩺💖" },
        { main: "Dữ liệu đang ngoan ngoãn hiện ra...", sub: "Hôm nay chắc chắn là một ngày siêu cấp thuận lợi của Hoài Thu! 🌈✨" },
        { main: "Đang chọn lọc những điều tốt nhất...", sub: "Thương em vì đã luôn cố gắng và chăm chỉ mỗi ngày! 💐🥰" },
        { main: "Sắp có kết quả mỹ mãn rồi nè...", sub: "Nhớ ăn trưa đúng giờ, không được bỏ bữa đâu đấy nhé! 🍱🥢" },
        { main: "Hệ thống đang chạy mượt như lụa...", sub: "Mong nụ cười tươi rói luôn nở trên môi cô gái đáng yêu này! 🍓😊" },
        { main: "Đang kết xuất thông tin cho em...", sub: "Nếu thấy buồn ngủ thì đi rửa mặt hoặc vươn vai một cái nha! 🙆‍♀️💫" },
        { main: "Đang tối ưu hóa cho Hoài Thu...", sub: "Tất cả những điều tuyệt vời nhất đang trên đường đến với em! 🎁💖" },
        { main: "Dữ liệu sắp xuất hiện lung linh rồi...", sub: "Chúc em có những giây phút làm việc thật nhiều cảm hứng sáng tạo! 💡🎨" },
        { main: "Đang hoàn thiện bảng số liệu...", sub: "Đừng quên em luôn có một hậu phương cực kỳ vững chắc phía sau nhé! 🛡️💕" },
        { main: "Hệ thống đang mỉm cười với em...", sub: "Mong em luôn tìm thấy những niềm vui nho nhỏ trong từng phút giây! ☕🌼" },
        { main: "Chờ tí tẹo teo thôi nè...", sub: "Tan ca về nhà sớm, tắm nước ấm rồi thư giãn thật đã nha em! 🛁✨" },
        { main: "Đang chắt lọc từng con số tinh túy...", sub: "Chúc Hoài Thu hoàn thành xuất sắc mọi mục tiêu đề ra hôm nay! 🏹🎯" },
        { main: "Đang tăng tốc về đích vì em...", sub: "Gửi một chiếc 'high-five' từ xa để tiếp thêm động lực cho em nè! ✋💖" },
        { main: "Đang sắp xếp số liệu thật gọn gàng...", sub: "Cuộc sống này dịu dàng hơn rất nhiều kể từ khi có Hoài Thu xuất hiện! 🍀🥰" },
        { main: "Hệ thống đang đo đạc độ hạnh phúc...", sub: "Chỉ số hạnh phúc hôm nay của em phải đạt mức tối đa 100% đấy nhé! 💯💕" },
        { main: "Đang tải từng dòng dữ liệu ngọt ngào...", sub: "Dù công việc có nhiều, em vẫn nhớ phải thật yêu thương bản thân nha! 🧸🌷" },
        { main: "Báo cáo đã ở ngay trước mắt rồi...", sub: "Hôm nay em đã làm rất tốt, tự khen bản thân một cái đi nào! 👏🌟" },
        { main: "Mọi thứ đã sẵn sàng cho Hoài Thu...", sub: "Chúc em một ngày ngập tràn tiếng cười, bình yên và thật nhiều may mắn! 💌🌈" }
    ];

    // =========================================================================
    // 3. NHÚNG CSS GIAO DIỆN THEME "HOÀI THU" (TÂN TRANG MENU LUNG LINH)
    // =========================================================================
    const style = document.createElement('style');
    style.id = 'theme-hoaithu-style';
    style.innerHTML = `
        /* --- INTRO BANNER CHÀO SÂN --- */
        #ht-banner { 
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
            background: radial-gradient(circle, #fff0f3 0%, #ffc2d1 100%); 
            z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            text-align: center; pointer-events: none; animation: fadeOutBanner 0.8s ease 3.8s forwards; 
        }
        .ht-text-main { 
            font-family: 'Georgia', serif; font-size: clamp(35px, 8vw, 75px); font-weight: bold; 
            color: #ff4d6d; text-shadow: 2px 2px 12px rgba(255, 77, 109, 0.3); margin-bottom: 10px; 
            animation: softZoom 1s cubic-bezier(0.25, 1, 0.5, 1) forwards; 
        }
        .ht-text-sub { 
            font-family: 'Arial', sans-serif; font-size: clamp(14px, 3.5vw, 22px); font-weight: 600; 
            color: #c9184a; letter-spacing: 2px; opacity: 0; animation: fadeInText 1s ease 0.8s forwards; 
        }
        
        @keyframes softZoom { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes fadeInText { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOutBanner { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

        /* --- NÚT 3 GẠCH MENU HEADER TONE HỒNG NGỌC TRAI --- */
        #tgdd-header-menu-btn {
            background: rgba(255, 240, 243, 0.9) !important;
            border: 1.5px solid #ffb3c6 !important;
            color: #ff4d6d !important;
            box-shadow: 0 3px 12px rgba(255, 77, 109, 0.25) !important;
        }
        #tgdd-header-menu-btn:hover {
            background: #fff0f3 !important;
            border-color: #ff4d6d !important;
            transform: scale(1.08) !important;
            box-shadow: 0 5px 15px rgba(255, 77, 109, 0.4) !important;
        }

        /* =========================================================================
           💖 TÂN TRANG FULL MENU SIDEBAR CHO BÉ YÊU (FROSTED PINK PARADISE)
           ========================================================================= */
        #tgdd-sidebar-menu {
            background: radial-gradient(circle at 50% 20%, rgba(255, 240, 243, 0.96), rgba(255, 215, 225, 0.98)) !important;
            backdrop-filter: blur(30px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
            border: 2px solid rgba(255, 255, 255, 0.8) !important;
            box-shadow: 0 0 50px rgba(255, 107, 129, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.6) !important;
        }

        #tgdd-sidebar-overlay {
            background: rgba(153, 27, 74, 0.35) !important;
            backdrop-filter: blur(8px) !important;
            -webkit-backdrop-filter: blur(8px) !important;
        }

        /* HEADER MENU */
        .sidebar-header {
            border-bottom: 2px dashed rgba(255, 117, 143, 0.4) !important;
            padding: 10px 0 !important;
        }
        .sidebar-title {
            color: #d81b60 !important;
            font-family: 'Tahoma', serif !important;
            font-size: 18px !important;
            font-weight: 900 !important;
            letter-spacing: 1px !important;
            text-shadow: 0 2px 8px rgba(216, 27, 96, 0.2) !important;
        }

        /* NÚT ĐÓNG (X) DỄ THƯƠNG */
        .sidebar-close {
            background: #ffffff !important;
            border: 1.5px solid #ffb3c6 !important;
            color: #ff4d6d !important;
            box-shadow: 0 2px 8px rgba(255, 77, 109, 0.2) !important;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .sidebar-close:hover {
            background: #ff4d6d !important;
            color: #ffffff !important;
            border-color: #ff4d6d !important;
            transform: rotate(90deg) scale(1.15) !important;
            box-shadow: 0 4px 12px rgba(255, 77, 109, 0.4) !important;
        }

        /* CÁC Ô LƯỚI MENU (GRID TIỆN ÍCH VUÔNG VẮN LUNG LINH) */
        .tgdd-menu-item {
            background: rgba(255, 255, 255, 0.75) !important;
            backdrop-filter: blur(10px) !important;
            border: 1.5px solid rgba(255, 179, 198, 0.7) !important;
            border-radius: 18px !important;
            box-shadow: 0 6px 16px rgba(255, 77, 109, 0.08), inset 0 1px 1px #ffffff !important;
            color: #4a044e !important;
            transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }

        .tgdd-menu-item:hover {
            background: #ffffff !important;
            border-color: #ff4d6d !important;
            transform: translateY(-4px) scale(1.04) !important;
            box-shadow: 0 10px 25px rgba(255, 77, 109, 0.22), 0 0 12px rgba(255, 182, 193, 0.6) !important;
        }
        .tgdd-menu-item:active {
            transform: scale(0.92) !important;
        }

        .tgdd-menu-item span {
            color: #4a044e !important;
            font-weight: 800 !important;
            font-size: 11.5px !important;
            letter-spacing: 0.2px !important;
        }

        /* ĐIỂM XUYẾT MÀU CHO TỪNG LOẠI ICON */
        .tgdd-menu-item svg {
            filter: drop-shadow(0 2px 6px rgba(255, 77, 109, 0.25)) !important;
            transition: transform 0.25s ease !important;
        }
        .tgdd-menu-item:hover svg {
            transform: scale(1.18) !important;
        }

        /* =========================================================================
           MÀN HÌNH CHỜ (LOADING) YÊU THƯƠNG KHI BẤM CHẠY BÁO CÁO
           ========================================================================= */
        #theme-loading-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle at 50% 50%, #fff0f3 0%, #ffc2d1 100%);
            z-index: 500000; display: flex; flex-direction: column; justify-content: center; align-items: center; 
            overflow: hidden; transition: opacity 0.6s ease;
        }

        .heart-box {
            position: relative; width: 130px; height: 130px; margin-bottom: 25px;
            display: flex; justify-content: center; align-items: center;
        }
        .big-heart { 
            width: 100%; height: 100%; 
            background-image: url("${SVG_HEART}"); background-size: contain; background-repeat: no-repeat; background-position: center;
            animation: heartbeat-sweet 1.5s infinite; filter: drop-shadow(0 10px 25px rgba(255, 77, 109, 0.45)); 
        }
        @keyframes heartbeat-sweet { 
            0% { transform: scale(1); } 
            15% { transform: scale(1.18); } 
            30% { transform: scale(1); } 
            45% { transform: scale(1.18); } 
            60%, 100% { transform: scale(1); } 
        }

        .sparkle-item {
            position: absolute; width: 28px; height: 28px;
            background-image: url("${SVG_SPARKLE}"); background-size: contain; background-repeat: no-repeat;
            animation: sparkle-float 2s infinite ease-in-out alternate;
        }
        @keyframes sparkle-float {
            0% { transform: scale(0.6) rotate(0deg); opacity: 0.3; }
            100% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        #theme-status-text {
            text-align: center; color: #c9184a; font-size: clamp(20px, 4.5vw, 26px); font-weight: bold; 
            font-family: 'Georgia', serif; padding: 0 20px; line-height: 1.5; 
            text-shadow: 1px 1px 8px rgba(201, 24, 74, 0.15); animation: softPulse 2s infinite alternate; z-index: 50;
        }
        #theme-status-sub {
            text-align: center; color: #ff4d6d; font-size: clamp(13px, 3.2vw, 16px); 
            margin-top: 10px; font-style: italic; font-weight: 600; padding: 0 25px;
        }
        @keyframes softPulse { 0% { opacity: 0.8; } 100% { opacity: 1; } }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 4. API GIAO TIẾP VỚI TOOL (HIỆU ỨNG TẢI TRANG)
    // =========================================================================
    window.TGDD_THEME = {
        startLoading: function(isStatic) {
            if (isStatic) return false; 

            const overlay = document.createElement('div');
            overlay.id = 'theme-loading-overlay';
            
            // Chọn ngẫu nhiên 1 lời chúc dễ thương
            const randomMsg = SWEET_MESSAGES[Math.floor(Math.random() * SWEET_MESSAGES.length)];

            overlay.innerHTML = `
                <div class="heart-box">
                    <div class="big-heart"></div>
                    <div class="sparkle-item" style="top:-10px; left:-10px; animation-delay:0s;"></div>
                    <div class="sparkle-item" style="top:-10px; right:-10px; animation-delay:0.5s;"></div>
                    <div class="sparkle-item" style="bottom:-10px; left:0px; animation-delay:1s;"></div>
                    <div class="sparkle-item" style="bottom:-10px; right:0px; animation-delay:1.5s;"></div>
                </div>
                <div id="theme-status-text">${randomMsg.main}</div>
                <div id="theme-status-sub">${randomMsg.sub}</div>
            `;
            document.body.appendChild(overlay);

            return true; 
        },

        finishLoading: function(callbackToNextPage) {
            const overlay = document.getElementById('theme-loading-overlay');
            if (overlay) {
                // Đổi sang lời chúc khi nạp xong
                const titleEl = document.getElementById('theme-status-text');
                const subEl = document.getElementById('theme-status-sub');
                if (titleEl) titleEl.innerHTML = "Bắt đầu chạy báo cáo 💕";
                if (subEl) subEl.innerText = "Chờ chút nha ...";
                
                // Dừng lại 1.2 giây để người yêu đọc lời chúc ngọt ngào rồi chuyển tiếp
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        if (callbackToNextPage) callbackToNextPage(); 
                    }, 600);
                }, 3000);
            } else {
                if (callbackToNextPage) callbackToNextPage();
            }
        }
    };

    // =========================================================================
    // 5. CHẠY MÀN CHÀO SÂN BAN ĐẦU
    // =========================================================================
    if (!document.getElementById('ht-banner')) {
        const banner = document.createElement('div'); banner.id = 'ht-banner';
        banner.innerHTML = `<div class="ht-text-main">Chào Hoài Thu</div><div class="ht-text-sub">Ngày mới tốt lành nhé! ✨</div>`;
        document.body.appendChild(banner);
        setTimeout(() => { if (banner) banner.remove(); }, 4600);
    }

    console.log("Đã kích hoạt Theme Hoài Thu lung linh kẹo ngọt! 💕🌸");
})();
