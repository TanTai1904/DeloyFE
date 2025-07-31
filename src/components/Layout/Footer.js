
import React from 'react';
import logo from '../../logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div className="flex flex-col items-start space-y-4">
            <img src={logo} alt="Red Ribbon Life" className="w-16 h-16 mb-2 rounded-full shadow-lg border-2 border-red-500 bg-white p-1" />
            <h3 className="text-2xl font-bold text-red-500 tracking-wide">Red Ribbon Life</h3>
            <p className="text-gray-400 max-w-xs">
              Hỗ trợ và đồng hành cùng bệnh nhân HIV/AIDS trong hành trình điều trị và chăm sóc sức khỏe. Chúng tôi cam kết mang lại dịch vụ tận tâm, bảo mật và chuyên nghiệp.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Thông tin liên hệ</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Đại học FPT TPHCM</span>
              </li>
              <li className="flex items-center gap-3 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@redribbonlife.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0123 456 789</span>
              </li>
            </ul>
          </div>

          {/* Đã xóa phần Kết nối (social media) */}
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="text-red-400 font-semibold">Red Ribbon Life</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 