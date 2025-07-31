import React, { useState } from 'react';
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
    totalArticles: 0,
    totalPrescriptions: 0,
    totalProtocols: 0,
    totalTestTypes: 0,
    totalTestResults: 0,
    totalARVComponents: 0,
    totalPatientAccounts: 0,
    totalDoctorAccounts: 0,
  });

  React.useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    fetch(`${API_URL}/api/Article/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalArticles: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/Treatment/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalPrescriptions: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/ARVRegimens/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalProtocols: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/TestType/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalTestTypes: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/TestResult/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalTestResults: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/ARVComponents/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalARVComponents: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/Patient/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalPatientAccounts: res.data?.length || 0 })))
      .catch(() => {});
    fetch(`${API_URL}/api/Doctor/GetAll`, { headers })
      .then(res => res.json())
      .then(res => setStats(prev => ({ ...prev, totalDoctorAccounts: res.data?.length || 0 })))
      .catch(() => {});
  }, []);

  const chartData = {
    labels: [
      'Số lượng bài viết',
      'Số lượng đơn thuốc',
      'Số lượng phác đồ',
      'Số loại xét nghiệm',
      'Số lượng kết quả xét nghiệm',
      'Số lượng thành phần ARV',
      'Tài khoản bệnh nhân',
      'Tài khoản bác sĩ',
    ],
    datasets: [
      {
        label: 'Số liệu',
        data: [
          stats.totalArticles,
          stats.totalPrescriptions,
          stats.totalProtocols,
          stats.totalTestTypes,
          stats.totalTestResults,
          stats.totalARVComponents,
          stats.totalPatientAccounts,
          stats.totalDoctorAccounts,
        ],
        backgroundColor: [
          'rgba(16,185,129,0.7)', // green
          'rgba(250,204,21,0.7)', // yellow
          'rgba(107,114,128,0.7)', // gray
          'rgba(59,130,246,0.7)', // blue
          'rgba(239,68,68,0.7)', // red
          'rgba(190,24,93,0.7)', // pink
          'rgba(34,197,94,0.7)', // emerald
          'rgba(168,85,247,0.7)', // purple
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
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Thống kê nhân viên</h1>
        {/* Biểu đồ cột */}
        <div className="mb-8">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
        {/* Bảng số liệu */}
        <table className="w-full border border-gray-200 rounded-lg shadow table-fixed mb-8">
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
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng bài viết</td>
              <td className="py-3 px-6 text-center text-2xl text-green-600 font-bold">{stats.totalArticles}</td>
            </tr>
            <tr className="hover:bg-yellow-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng đơn thuốc</td>
              <td className="py-3 px-6 text-center text-2xl text-yellow-600 font-bold">{stats.totalPrescriptions}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng phác đồ</td>
              <td className="py-3 px-6 text-center text-2xl text-gray-600 font-bold">{stats.totalProtocols}</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số loại xét nghiệm</td>
              <td className="py-3 px-6 text-center text-2xl text-blue-600 font-bold">{stats.totalTestTypes}</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng kết quả xét nghiệm</td>
              <td className="py-3 px-6 text-center text-2xl text-red-600 font-bold">{stats.totalTestResults}</td>
            </tr>
            <tr className="hover:bg-pink-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng thành phần ARV</td>
              <td className="py-3 px-6 text-center text-2xl text-pink-600 font-bold">{stats.totalARVComponents}</td>
            </tr>
            <tr className="hover:bg-emerald-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Tài khoản bệnh nhân</td>
              <td className="py-3 px-6 text-center text-2xl text-emerald-600 font-bold">{stats.totalPatientAccounts}</td>
            </tr>
            <tr className="hover:bg-purple-50">
              <td className="py-3 px-6 text-left font-medium text-gray-800">Tài khoản bác sĩ</td>
              <td className="py-3 px-6 text-center text-2xl text-purple-600 font-bold">{stats.totalDoctorAccounts}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsDashboard;

