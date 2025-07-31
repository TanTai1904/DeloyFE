
# HIV Treatment and Medical Services System

**Phần mềm dịch vụ y tế và điều trị HIV**

## Mục tiêu dự án
Tăng cường tiếp cận dịch vụ y tế và điều trị HIV cho bệnh nhân tại các cơ sở y tế, hỗ trợ quản lý, nhắc nhở, giảm kỳ thị và nâng cao hiệu quả điều trị.

## Vai trò hệ thống
- Guest (Khách)
- Customer (Bệnh nhân)
- Staff (Nhân viên)
- Doctor (Bác sĩ)
- Manager (Quản lý)
- Admin (Quản trị viên)

## Chức năng chính
- Trang chủ giới thiệu cơ sở, tài liệu giáo dục, blog chia sẻ kinh nghiệm, giảm kỳ thị HIV.
- Đăng ký lịch khám & điều trị HIV, chỉ định bác sĩ điều trị, đặt lịch ẩn danh nếu cần.
- Tra cứu thông tin xét nghiệm (phác đồ ARV, CD4, tải lượng HIV), theo dõi lịch sử khám bệnh.
- Nhắc nhở lịch tái khám & uống thuốc theo phác đồ điều trị.
- Đặt lịch hẹn trực tuyến với bác sĩ, hỗ trợ tư vấn, đăng ký ẩn danh.
- Bác sĩ lựa chọn/cá nhân hóa phác đồ ARV điều trị phù hợp từng bệnh nhân.
- Quản lý thông tin bác sĩ: hồ sơ, bằng cấp, chuyên môn, lịch làm việc.
- Quản lý hồ sơ người dùng, lịch sử đặt hẹn, lịch sử điều trị.
- Dashboard & báo cáo thống kê cho từng vai trò.

## Luồng nghiệp vụ chính
1. **Đăng nhập, xác thực, phân quyền**: Người dùng đăng nhập, hệ thống xác thực và phân quyền truy cập.
2. **Quản lý tài khoản**: Tạo, sửa, xóa, xem danh sách tài khoản (bệnh nhân, bác sĩ, nhân viên, quản lý, admin).
3. **Đặt & quản lý lịch hẹn**: Bệnh nhân đặt lịch khám/xét nghiệm, bác sĩ duyệt và quản lý lịch hẹn.
4. **Quản lý bài viết/tin tức**: Thêm, sửa, xóa, xem bài viết, tài liệu giáo dục, blog.
5. **Quản lý xét nghiệm**: Quản lý loại xét nghiệm, nhập kết quả, tra cứu lịch sử xét nghiệm.
6. **Quản lý phác đồ điều trị & thành phần ARV**: Thêm, sửa, xóa phác đồ, thành phần ARV.
7. **Quản lý đơn thuốc/điều trị**: Bác sĩ kê đơn, nhập thông tin điều trị, quản lý lịch sử điều trị.
8. **Thống kê, báo cáo**: Dashboard số liệu lịch hẹn, bệnh nhân, bác sĩ, xét nghiệm, bài viết, phác đồ, ...
9. **Gửi thông báo, email**: Nhắc lịch, xác thực, quên mật khẩu, thông báo điều trị.

## Công nghệ sử dụng
- ReactJS (frontend)
- Axios, Fetch API (giao tiếp backend)
- React Router, React Hook Form, React Toastify, Chart.js, TailwindCSS
- Backend: .NET Core (API RESTful)

## Hướng dẫn cài đặt & chạy dự án
1. Clone project về máy
2. Cài đặt dependencies:
   ```bash
   npm install
   ```
3. Tạo file `.env` và cấu hình biến `REACT_APP_API_URL` trỏ về backend
4. Chạy dự án:
   ```bash
   npm start
   ```
5. Truy cập [http://localhost:3000](http://localhost:3000)

## Thông tin thêm
- Mọi chức năng đều có kiểm tra phân quyền, xác thực token.
- Giao diện hiện đại, responsive, thân thiện với người dùng.
- Dễ dàng mở rộng, tích hợp thêm các dịch vụ y tế khác.
