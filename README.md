# IKIGAI WORLD 4.0 — Reconstructed Living World

Bản 4.0 tái dựng bản đồ IKIGAI thành SVG vector riêng, không còn sử dụng ảnh chụp giao diện làm nền bản đồ. Các tòa nhà, đường đi, hồ cá koi, cổng Torii, cầu, cây sakura, đèn lồng và cảnh quan được vẽ thành các thành phần đồ họa có thể mở rộng theo kích thước màn hình. Các điểm vào phòng là hotspot HTML riêng, nhân vật người chơi được vẽ động trên lớp riêng và dữ liệu tài khoản tiếp tục lấy từ Supabase.

## Cấu trúc
- `index.html`: giao diện và hotspot bản đồ.
- `app.js`: đăng nhập, hồ sơ, realtime presence/chat, di chuyển, vào phòng và luyện tập.
- `style.css`: hiệu ứng bản đồ, nhân vật và nội thất riêng theo từng phòng.
- `assets/ikigai-world-map.svg`: bản đồ vector mới, không chứa sẵn HUD hay nhân vật giả.
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
