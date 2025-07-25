import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientListAdmin = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/Patient/GetAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatients(response.data.data);
      } catch (err) {
        setError('Không thể tải danh sách bệnh nhân.');
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, [API_URL]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Danh sách bệnh nhân</h1>
        {loading ? (
          <div className="text-center text-lg">Đang tải...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">STT</th>
                  <th className="py-3 px-4 text-left">Họ tên</th>
                  <th className="py-3 px-4 text-left">Tên đăng nhập</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Số điện thoại</th>
                  <th className="py-3 px-4 text-left">Ngày sinh</th>
                  <th className="py-3 px-4 text-left">Giới tính</th>
                </tr>
              </thead>
              <tbody>
                {patients && patients.length > 0 ? (
                  patients.map((p, idx) => (
                    <tr key={p.userId || p.id || idx} className="hover:bg-blue-50">
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{p.fullName || '-'}</td>
                      <td className="py-2 px-4">{p.username || '-'}</td>
                      <td className="py-2 px-4">{p.email || '-'}</td>
                      <td className="py-2 px-4">{p.phoneNumber || '-'}</td>
                      <td className="py-2 px-4">{p.dateOfBirth ? new Date(p.dateOfBirth).toLocaleDateString() : '-'}</td>
                      <td className="py-2 px-4">{p.gender || '-'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">Không có bệnh nhân nào.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientListAdmin;
