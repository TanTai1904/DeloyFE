import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatisticsDashboard = () => {
  const [stats, setStats] = useState({
    totalPatients: 0, // Số lượng bệnh nhân
    totalTestResults: 0, // Số lượng kết quả xét nghiệm
    completedAppointments: 0, // Số lịch khám hoàn thành
    pendingAppointments: 0, // Số lịch khám chờ duyệt
  });

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token');
    // Debug: log API_URL and userId
    let debugUserId = null;
    // Lấy số lượng bệnh nhân
    axios.get(`${API_URL}/api/Patient/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setStats(prev => ({ ...prev, totalPatients: res.data.data?.length || 0 })))
      .catch(() => {});
    // Lấy số lượng kết quả xét nghiệm
    axios.get(`${API_URL}/api/TestResult/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setStats(prev => ({ ...prev, totalTestResults: res.data.data?.length || 0 })))
      .catch(() => {});
    // Lấy userId từ localStorage (giả sử lưu trong userDetails)
    let userId = null;
    try {
      // Lấy userId từ token (nếu có) hoặc từ localStorage userDetails hoặc từ localStorage 'user'
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      userId = userDetails?.userId;
      if (!userId) {
        const user = JSON.parse(localStorage.getItem('user'));
        userId = user?.userId || user?.id;
      }
      debugUserId = userId;
    } catch {}
    if (userId) {
      console.log('API_URL:', API_URL);
      console.log('userId:', debugUserId);
      // Lấy danh sách lịch hẹn của bác sĩ (bao gồm cả lịch đã hoàn thành, chờ duyệt...)
      axios.get(`${API_URL}/api/Appointment/GetByDoctorId/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => {
          const all = Array.isArray(res.data.data) ? res.data.data : [];
          // Đếm các trạng thái hoàn thành và chờ duyệt cả tiếng Việt và tiếng Anh
          const completedStatuses = ['confirmed', 'completed', 'đã hoàn thành'];
          const pendingStatuses = ['pending', 'scheduled', 'đang chờ duyệt'];
          // Normalize status: trim and lowercase
          const normalize = s => (s || '').toString().trim().toLowerCase();
          const completedCount = all.filter(a => completedStatuses.includes(normalize(a.status))).length;
          const pendingCount = all.filter(a => pendingStatuses.includes(normalize(a.status))).length;
          console.log('Danh sách lịch hẹn:', all);
          console.log('Số lịch hẹn đã hoàn thành:', completedCount);
          console.log('Số lịch hẹn chờ duyệt:', pendingCount);
          setStats(prev => ({
            ...prev,
            completedAppointments: completedCount,
            pendingAppointments: pendingCount,
          }));
        })
        .catch(() => {
          // Nếu lỗi, set số lịch hẹn về 0
          setStats(prev => ({ ...prev, completedAppointments: 0, pendingAppointments: 0 }));
        });
    }
  }, []);

  const chartData = {
    labels: [
      'Số lượng bệnh nhân',
      'Số lượng kết quả xét nghiệm',
      'Lịch hẹn đã hoàn thành',
      'Lịch hẹn chờ duyệt',
    ],
    datasets: [
      {
        label: 'Số liệu',
        data: [
          stats.totalPatients,
          stats.totalTestResults,
          stats.completedAppointments,
          stats.pendingAppointments,
        ],
        backgroundColor: [
          'rgba(16,185,129,0.7)', // green
          'rgba(59,130,246,0.7)', // blue
          'rgba(107,114,128,0.7)', // gray
          'rgba(239,68,68,0.7)', // red
        ],
        borderRadius: 8,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Thống kê tổng quan', font: { size: 20 } },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed.y}`;
          }
        }
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Thống kê bác sĩ</h1>
        {/* Biểu đồ cột */}
        <div className="mb-8">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
        {/* Bảng số liệu */}
        <table className="w-full border border-gray-200 rounded-lg shadow table-fixed">
          <colgroup>
            <col style={{ width: '60%' }} />
            <col style={{ width: '40%' }} />
          </colgroup>
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-8 text-left text-xl font-semibold text-gray-700">Chỉ số</th>
              <th className="py-4 px-8 text-center text-xl font-semibold text-gray-700">Số liệu</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-green-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng bệnh nhân</td>
              <td className="py-3 px-6 text-center text-2xl text-green-600 font-bold">{stats.totalPatients}</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng kết quả xét nghiệm</td>
              <td className="py-3 px-6 text-center text-2xl text-blue-600 font-bold">{stats.totalTestResults}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Lịch hẹn đã hoàn thành</td>
              <td className="py-3 px-6 text-center text-2xl text-gray-600 font-bold">{stats.completedAppointments}</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Lịch hẹn chờ duyệt</td>
              <td className="py-3 px-6 text-center text-2xl text-red-600 font-bold">{stats.pendingAppointments}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
