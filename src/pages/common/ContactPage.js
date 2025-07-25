import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    try {
      // Lấy token từ localStorage nếu có
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      const response = await fetch(`${API_URL}/api/Email/SendEmail`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: form.email,
        }),
      });
      if (!response.ok) {
        throw new Error('Gửi email thất bại. Vui lòng thử lại sau!');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-red-600 mb-2 text-center">Gửi phản hồi & góp ý</h1>
          <p className="text-gray-700 mb-4 text-center text-base">Chúng tôi luôn lắng nghe ý kiến của bạn để cải thiện dịch vụ. Vui lòng điền thông tin bên dưới, đội ngũ sẽ phản hồi sớm nhất có thể.</p>
          <div className="mb-6 text-center">
            <div className="font-semibold">Hotline: <span className="text-red-600">0123 456 789</span></div>
            <div>Email: <span className="text-blue-600">taitruonguquangtan@gmail.com</span></div>
            <div>Địa chỉ: 123 Đường Sức Khỏe, Quận 1, TP.HCM</div>
          </div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="bg-green-50 border border-green-400 text-green-700 px-6 py-4 rounded-md text-center font-semibold mb-4 shadow">
                <span className="text-lg">Cảm ơn bạn đã gửi phản hồi!</span><br />
                Chúng tôi sẽ liên hệ lại sớm nhất có thể.
              </div>
              <a
                href="/"
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-md font-semibold hover:from-red-700 hover:to-red-600 transition-all shadow"
              >
                Quay lại trang chủ
              </a>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Tên của bạn</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nhập tên của bạn"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Nhập email của bạn"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nội dung phản hồi / góp ý / câu hỏi</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Nhập nội dung bạn muốn gửi..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  rows={4}
                  required
                ></textarea>
              </div>
              {error && <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-2 rounded-md text-center text-sm font-semibold mb-2 shadow">{error}</div>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-2 rounded-md font-semibold hover:from-red-700 hover:to-red-600 transition-all shadow"
              >
                Gửi phản hồi
              </button>
              <div className="flex justify-center pt-2">
                <a
                  href="/"
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold border-2 border-red-600 shadow hover:bg-red-50 hover:text-red-700 hover:border-red-700 transition-all duration-200"
                  style={{ minWidth: '180px', textAlign: 'center', fontSize: '1rem', letterSpacing: '0.5px' }}
                >
                  Quay lại trang chủ
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* Image Section */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-white">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src="/contact-illustration.png"
            alt="Contact Support"
            className="w-[400px] h-[400px] object-contain mx-auto"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

