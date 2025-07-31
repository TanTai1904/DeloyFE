import React from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: '1. Đăng nhập & bảo mật',
    description:
      'Bệnh nhân đăng nhập bằng tài khoản cá nhân để sử dụng các chức năng của hệ thống. Thông tin cá nhân và lịch sử điều trị được bảo mật.',
    details: [
      { value: 'Chỉ bệnh nhân mới xem được thông tin cá nhân, lịch sử khám và kết quả xét nghiệm của mình.' },
      { value: 'Hệ thống bảo vệ quyền riêng tư, không chia sẻ dữ liệu cho bên thứ ba.' },
    ],
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0v2m0 4h.01" />
      </svg>
    ),
  },
  {
    title: '2. Đặt & quản lý lịch hẹn',
    description:
      'Bệnh nhân có thể đặt lịch khám hoặc xét nghiệm trực tuyến, chọn bác sĩ và thời gian phù hợp.',
    details: [
      { value: 'Đặt lịch khám, xét nghiệm nhanh chóng, có thể chọn ẩn danh nếu muốn.' },
      { value: 'Xem danh sách lịch hẹn đã đặt, kiểm tra trạng thái xác nhận.' },
      { value: 'Nhận thông báo nhắc lịch qua hệ thống.' },
    ],
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: '3. Tra cứu kết quả & lịch sử điều trị',
    description:
      'Bệnh nhân dễ dàng tra cứu kết quả xét nghiệm, đơn thuốc và lịch sử điều trị của bản thân.',
    details: [
      { value: 'Xem kết quả xét nghiệm (CD4, tải lượng HIV, ...).' },
      { value: 'Xem đơn thuốc, phác đồ điều trị được bác sĩ kê.' },
      { value: 'Theo dõi tiến trình điều trị và các lần tái khám.' },
    ],
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h4" />
      </svg>
    ),
  },
  {
    title: '4. Nhận nhắc nhở & hỗ trợ',
    description:
      'Hệ thống gửi nhắc nhở lịch tái khám, uống thuốc và hỗ trợ liên hệ với bác sĩ khi cần thiết.',
    details: [
      { value: 'Nhận thông báo nhắc lịch tái khám, nhắc uống thuốc đúng giờ.' },
      { value: 'Liên hệ đội ngũ hỗ trợ qua trang liên hệ hoặc hotline.' },
    ],
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: '5. Xem tài liệu & tin tức',
    description:
      'Bệnh nhân có thể đọc các bài viết, tài liệu giáo dục về HIV/AIDS, kinh nghiệm sống và các thông tin hữu ích.',
    details: [
      { value: 'Xem tin tức, tài liệu, blog chia sẻ kinh nghiệm.' },
      { value: 'Nâng cao kiến thức, giảm kỳ thị và tự tin điều trị.' },
    ],
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h5l2-2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const LearnMorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl border border-red-100">
        <h1 className="text-4xl font-extrabold text-red-600 mb-10 text-center tracking-tight">
          Tìm hiểu thêm dành cho bệnh nhân
        </h1>
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 bg-gray-50 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">{section.icon}</div>
              <div>
                <h2 className="text-2xl font-bold mb-1 text-red-500">{section.title}</h2>
                <p className="mb-2 text-gray-600">{section.description}</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  {section.details.map((item, i) => (
                    <li key={i}>{item.value}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-red-700 hover:to-red-600 transition-all text-lg"
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