import React from 'react';
import { useNavigate } from 'react-router-dom';
import contactImg from '../../assets/contact-illustration.png';

const ContactInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-red-100 to-white font-sans relative">
      {/* Nút quay lại trang chủ phía dưới hình ảnh minh họa */}
      <div className="hidden md:flex flex-col w-1/2 h-screen items-center justify-center bg-gradient-to-b from-white via-red-50 to-red-100 rounded-r-3xl shadow-2xl border-r-8 border-red-200">
        <div className="flex items-center justify-center h-[80%] w-[80%] bg-white/70 backdrop-blur-lg rounded-3xl shadow-[0_8px_40px_rgba(255,0,0,0.10)] p-8 mx-auto border-4 border-gradient-to-br from-red-200 to-white hover:scale-105 transition-all duration-300">
          <img src={contactImg} alt="Liên hệ" className="max-h-full max-w-full object-contain rounded-2xl shadow-lg border-2 border-red-100" />
        </div>
        {/* Nút quay lại trang chủ phía dưới ảnh minh họa */}
        <div className="w-full flex justify-center items-center mt-8 mb-2 z-30">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-pink-400 text-white font-bold text-lg md:text-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 border-2 border-white/70 focus:outline-none focus:ring-4 focus:ring-red-200"
            style={{letterSpacing: '0.5px'}}
          >
            <svg className="w-6 h-6 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Quay lại trang chủ
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="bg-white/80 backdrop-blur-lg px-16 py-16 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] w-full max-w-3xl text-center md:text-left border-2 border-gradient-to-br from-red-200 to-white transition-all duration-300 tracking-wide" style={{fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'}}>
          <h1 className="text-4xl md:text-5xl font-black text-red-700 mb-8 flex items-center justify-center md:justify-start gap-2 tracking-tight uppercase drop-shadow-sm" style={{letterSpacing: '-1px'}}>
            <svg className="w-8 h-8 md:w-10 md:h-10 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5M21 10.5l-9 9m9-9h-5.25" /></svg>
            Thông tin liên hệ
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 italic font-medium">Hãy liên hệ với chúng tôi để được hỗ trợ nhanh chóng và tận tâm!</p>
          <div className="space-y-6 md:space-y-8 mb-10">
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l8.954 6.716a2.25 2.25 0 002.592 0l8.954-6.716M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
              <span className="font-semibold text-gray-800 text-xl md:text-2xl">Email:</span>
              <a href="mailto:support@redribbonlife.vn" className="text-blue-700 font-bold text-xl md:text-2xl hover:underline hover:text-blue-900 transition">support@redribbonlife.vn</a>
            </div>
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l8.954 6.716a2.25 2.25 0 002.592 0l8.954-6.716M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
              <span className="font-semibold text-gray-800 text-xl md:text-2xl">Hotline:</span>
              <a href="tel:19001234" className="text-red-700 font-bold text-xl md:text-2xl hover:underline hover:text-red-900 transition">1900 1234</a>
            </div>
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0h-7.5" /></svg>
              <span className="font-semibold text-gray-800 text-xl md:text-2xl">Đường dây nóng:</span>
              <a href="tel:0987654321" className="text-red-800 font-bold text-xl md:text-2xl hover:underline hover:text-red-900 transition">0987 654 321</a>
            </div>
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5" /></svg>
              <span className="font-medium text-gray-800 text-lg md:text-xl">Giờ làm việc:</span>
              <span className="text-gray-600 text-lg md:text-xl">Thứ 2 - Thứ 7, 8:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="font-medium text-gray-800 text-lg md:text-xl">Địa chỉ:</span>
              <span className="text-gray-600 text-lg md:text-xl">123 Đường Sức Khỏe, Quận 1, TP. Hồ Chí Minh</span>
            </div>
          </div>
          <div className="mt-10 text-center text-gray-400 text-lg italic tracking-wide font-medium">Red Ribbon Life - Luôn đồng hành cùng bạn!</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
