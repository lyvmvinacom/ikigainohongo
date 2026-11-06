# IKIGAI WORLD 4.0 — Reconstructed Living World

Bản 5.0 sử dụng artwork Gunny-style chi tiết cao làm cảnh quan bản đồ, kết hợp HUD, hotspot, nhân vật người chơi và hiệu ứng động HTML/CSS riêng. Các tòa nhà, đường đi, hồ cá koi, cổng Torii, cầu, cây sakura, đèn lồng và cảnh quan được vẽ thành các thành phần đồ họa có thể mở rộng theo kích thước màn hình. Các điểm vào phòng là hotspot HTML riêng, nhân vật người chơi được vẽ động trên lớp riêng và dữ liệu tài khoản tiếp tục lấy từ Supabase.

## Cấu trúc
- `index.html`: giao diện và hotspot bản đồ.
- `app.js`: đăng nhập, hồ sơ, realtime presence/chat, di chuyển, vào phòng và luyện tập.
- `style.css`: hiệu ứng bản đồ, nhân vật và nội thất riêng theo từng phòng.
- `assets/ikigai-world-map-gym-v2.png`: artwork bản đồ Gunny-style; các nhân vật vẽ sẵn trong tranh là chi tiết minh họa nền, không phải người chơi online. Người chơi thật được render riêng theo Presence Supabase.
- `assets/ikigai-n5-bank.json`: ngân hàng câu hỏi N5 hiện có.
- `assets/characters/`: bộ nhân vật hiện có, giữ nguyên ảnh thầy Ly đã được cung cấp.
- `supabase-schema.sql`: hồ sơ người chơi và RPC thưởng XP/xu.

## Triển khai GitHub Pages
1. Sao lưu phiên bản đang chạy.
2. Giải nén ZIP và mở thư mục `ikigainohongo-main`.
3. Thay `index.html`, `app.js`, `style.css` và tải thêm `assets/ikigai-world-map.svg`.
4. Giữ nguyên `assets/characters`, `assets/ikigai-n5-bank.json`, `assets/jft` (nếu đã có trên repo) và các dữ liệu Supabase.
5. Không đưa secret/service_role key lên GitHub. Chỉ dùng publishable/anon key ở trình duyệt.
6. Mở GitHub Actions, đợi workflow Pages màu xanh rồi tải lại trang bằng Ctrl+F5.

## Khu vực
Lớp học, Đấu trường, N5, N4, JFT, Gym và Phòng Anh Tùng có bố cục nội thất và skin riêng. Nội dung luyện thi chỉ hoạt động khi ngân hàng dữ liệu tương ứng đã có; N4 không tự tạo câu hỏi giả.

## Kết nối và tài khoản
Đăng nhập học viên/giáo viên, hồ sơ XP/xu, realtime presence/chat và thưởng kết quả sử dụng Supabase project đã cấu hình trong `app.js`. Nếu thay project Supabase, cập nhật URL và publishable key trong mã nguồn; không sử dụng secret key.

## Kiểm thử
Đã kiểm tra cú pháp JavaScript và tính toàn vẹn ZIP trong quá trình đóng gói. Kết nối realtime thật cần được xác nhận sau khi triển khai trên GitHub Pages bằng tài khoản thực của trung tâm.


## Ghi chú bản 5.0
- XP, xu, cấp độ và số người online trên HUD lấy từ hồ sơ/Presence; không dùng số minh họa trong ảnh nền làm dữ liệu tài khoản.
- Người chơi đăng nhập được hiển thị bằng sprite riêng; các nhân vật nằm sẵn trong artwork là minh họa môi trường (NPC trang trí), không đại diện tài khoản đang online.
- Các nút menu chưa có backend riêng sẽ thông báo trạng thái thay vì tự tạo dữ liệu giả.
- Khi cập nhật repo, giữ nguyên thư mục `assets/jft` nếu repo đang có dữ liệu JFT riêng.


## IKIGAI WORLD 6.0 — nâng cấp nội thất và tương tác phòng
- Các phòng được thiết kế bằng nhiều lớp HTML/CSS độc lập: tường, sàn, cửa sổ, bảng, kệ, bàn, thiết bị, biển hiệu và NPC; không còn phụ thuộc vào một ảnh chụp toàn phòng.
- Phòng trà có NPC Anh Tùng vẽ riêng với lông mày cau và biểu cảm nghiêm khắc; có thể nhấp để nghe lời thoại.
- Chat và danh sách người chơi được đặt ở cấp thế giới, có thể mở trong cả bản đồ lẫn từng phòng.
- Đấu trường có hàng chờ Presence: 1v1 cần 2 người, 2v2 cần 4 người; người tham gia phải bấm Sẵn sàng trước khi hệ thống mở màn hình bắt đầu thử thách.
- Ghép trận dựa trên Supabase Realtime Presence của cùng kênh thế giới. Đây là hàng chờ/điều kiện đủ người phía client, chưa phải hệ thống thi đấu có máy chủ phân xử chống gian lận.
- Giữ nguyên cơ chế đăng nhập, hồ sơ XP/xu và ngân hàng N5. Không chạy lại SQL chỉ để dùng giao diện phòng/chat/hàng chờ.
- Nếu repo có `assets/jft/` hoặc tài nguyên bổ sung khác không có trong gói này, giữ lại khi cập nhật.

## IKIGAI WORLD 7.0 — bản đồ không hiển thị nhân vật + bong bóng chat
- Bản đồ thế giới chỉ còn cảnh quan và các điểm vào phòng; không render sprite người chơi trên bản đồ. Nhân vật của tài khoản hiện ra sau khi vào phòng.
- Khi gửi tin nhắn trong phòng, bong bóng thoại xuất hiện phía trên nhân vật gửi; người khác trong cùng phòng nhận được bong bóng realtime. Bong bóng tự ẩn sau 5 giây; khung chat vẫn lưu nội dung trong phiên hiện tại.
- Tạo tài khoản học viên đã được tích hợp bằng Supabase Auth (`Đăng ký`). Mỗi học viên dùng email + mật khẩu riêng; đăng nhập cùng tài khoản đó trên máy khác sẽ vào cùng thế giới và thấy người chơi online qua Realtime Presence.
- Để cho phép đăng ký: trong Supabase Dashboard > Authentication > Providers > Email, bật Email provider; trong Authentication > Settings kiểm tra cho phép đăng ký mới. Nếu bật xác nhận email, học viên phải mở email xác nhận trước khi đăng nhập. Không dùng chế độ Khách nếu muốn tài khoản/hồ sơ đồng bộ lâu dài.
- Hồ sơ XP/xu cần chạy `supabase-schema.sql` trong SQL Editor một lần. Realtime cần bật/được phép dùng cho project và trình duyệt phải có Internet.
- Không cần chạy lại SQL nếu schema 3.2 đã được áp dụng ở phiên bản trước; thay đổi v7 chủ yếu là hiển thị bản đồ và bong bóng chat.
