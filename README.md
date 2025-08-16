Library Management System - Frontend (Vite + React + TailwindCSS)
Ứng dụng frontend cho hệ thống quản lý thư viện, xây dựng bằng Vite + React + TailwindCSS.
Công nghệ sử dụng
- Vite
- React
- TailwindCSS
- Axios (gọi API)
Chức năng chính
- Hiển thị danh sách sách từ backend
- Thêm, sửa, xóa sách
- Quản lý độc giả
- Chức năng mượn / trả sách
- Kết nối tới API Spring Boot backend
Cài đặt & Chạy project
1. Clone repo:
git clone https://github.com/your-username/library-frontend.git
cd library-frontend
2. Cài dependencies:
npm install
3. Chạy dev server:
npm run dev
Mặc định chạy tại: http://localhost:5173
Cấu hình API
Chỉnh sửa file `src/config.js` để trỏ tới backend API:

export const BASE_URL = "http://localhost:8080/api";

Roadmap
[x] Hiển thị danh sách sách
[x] CRUD sách
[x] CRUD độc giả
[ ] Đăng nhập / phân quyền
[ ] Responsive UI với Tailwind
Tác giả
Ngô Thắng – GitHub: https://github.com/your-username
