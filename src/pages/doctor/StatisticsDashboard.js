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
  // Chức năng: Lấy số liệu tổng quan cho bác sĩ
  // - Số lượng bệnh nhân
  // - Số lượng kết quả xét nghiệm

  const [stats, setStats] = useState({
    totalPatients: 0,
    totalTestResults: 0,
  });

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token');

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

    // Lấy userId của bác sĩ từ localStorage
    let userId = null;
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      userId = userDetails?.userId;
      if (!userId) {
        const user = JSON.parse(localStorage.getItem('user'));
        userId = user?.userId || user?.id;
      }
    } catch {}

    // Đã bỏ lấy số lịch hẹn đã hoàn thành và chờ duyệt
  }, []);

  // Biểu đồ cột: chỉ hiển thị 2 chỉ số
  const chartData = {
    labels: [
      'Số lượng bệnh nhân',
      'Số lượng kết quả xét nghiệm',
    ],
    datasets: [
      {
        label: 'Số liệu',
        data: [
          stats.totalPatients,
          stats.totalTestResults,
        ],
        backgroundColor: [
          'rgba(16,185,129,0.7)', // green
          'rgba(59,130,246,0.7)', // blue
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
        {/* Biểu đồ cột tổng quan */}
        <div className="mb-8">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
        {/* Bảng số liệu chi tiết */}
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
        </tbody>
        </table>
        {/* 
          Ghi chú chức năng:
          - Thống kê tổng quan cho bác sĩ: số bệnh nhân, số kết quả xét nghiệm, số lịch hẹn đã hoàn thành, số lịch hẹn chờ duyệt.
          - Dữ liệu lấy động từ API backend.
          - Hiển thị trực quan bằng biểu đồ cột và bảng số liệu.
        */}
      </div>
    </div>
  );
};

export default StatisticsDashboard;