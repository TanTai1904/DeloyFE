import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearnMorePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Tìm hiểu thêm về Red Ribbon Life</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-red-500">1. Giới thiệu về Red Ribbon Life</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Tầm nhìn, sứ mệnh:</strong> Hỗ trợ người sống chung với HIV/AIDS, nâng cao chất lượng cuộc sống và xóa bỏ kỳ thị.</li>
            <li><strong>Đối tượng hỗ trợ:</strong> Người sống chung với HIV/AIDS.</li>
            <li><strong>Lịch sử thành lập:</strong> Được thành lập với sự tài trợ và quản lý của các tổ chức y tế uy tín.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-red-500">2. Dịch vụ cung cấp</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Tư vấn sức khỏe miễn phí</li>
            <li>Khám & điều trị HIV/AIDS</li>
            <li>Hỗ trợ tâm lý</li>
            <li>Kết nối cộng đồng và nhóm hỗ trợ</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-red-500">3. Câu hỏi thường gặp (FAQ)</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>HIV/AIDS là gì?</strong> HIV là virus gây suy giảm miễn dịch, AIDS là giai đoạn cuối của nhiễm HIV.</li>
            <li><strong>Điều trị ARV như thế nào?</strong> ARV là thuốc kháng virus giúp kiểm soát HIV, cần tuân thủ phác đồ điều trị.</li>
            <li><strong>Bảo mật thông tin cá nhân?</strong> Thông tin của bạn được bảo mật tuyệt đối.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-red-500">4. Hướng dẫn sử dụng hệ thống</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Cách đăng ký tài khoản: Điền thông tin cá nhân và xác thực email.</li>
            <li>Cách đặt lịch khám: Chọn bác sĩ, thời gian và xác nhận lịch.</li>
            <li>Liên hệ đội ngũ bác sĩ chuyên môn: Sử dụng trang liên hệ hoặc hotline.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-red-500">5. Câu chuyện người thật</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Những câu chuyện tích cực từ người bệnh hoặc bác sĩ.</li>
            <li>Trải nghiệm dùng nền tảng Red Ribbon Life.</li>
          </ul>
        </section>
        <div className="flex justify-center mt-8">
          <button
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-md font-semibold hover:from-red-700 hover:to-red-600 transition-all"
            onClick={() => navigate(-1)}
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;
