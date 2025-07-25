
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
  const [stats] = useState({
    todaySchedules: 0,
    currentPatients: 0,
    newTestResults: 0,
    completedTreatments: 0,
    pendingAppointments: 0,
    canceledAppointments: 0,
  });

  const chartData = {
    labels: [
      'Lịch khám hôm nay',
      'Bệnh nhân điều trị',
      'Xét nghiệm mới',
      'Điều trị hoàn thành',
      'Lịch chờ duyệt',
      'Lịch bị hủy',
    ],
    datasets: [
      {
        label: 'Số liệu',
        data: [
          stats.todaySchedules,
          stats.currentPatients,
          stats.newTestResults,
          stats.completedTreatments,
          stats.pendingAppointments,
          stats.canceledAppointments,
        ],
        backgroundColor: [
          'rgba(59,130,246,0.7)', // blue
          'rgba(16,185,129,0.7)', // green
          'rgba(250,204,21,0.7)', // yellow
          'rgba(107,114,128,0.7)', // gray
          'rgba(239,68,68,0.7)', // red
          'rgba(190,24,93,0.7)', // pink
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
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Thống kê bác sĩ</h1>
        {/* Biểu đồ cột */}
        <div className="mb-8">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
        {/* Bảng số liệu chia 2 cột */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cột 1 */}
            <div>
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
                  <tr className="hover:bg-blue-50">
                    <td className="py-3 px-6 text-left font-medium text-gray-800">Lịch khám hôm nay</td>
                    <td className="py-3 px-6 text-center text-2xl text-blue-600 font-bold">{stats.todaySchedules}</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="py-3 px-6 text-left font-medium text-gray-800">Số bệnh nhân đang điều trị</td>
                    <td className="py-3 px-6 text-center text-2xl text-green-600 font-bold">{stats.currentPatients}</td>
                  </tr>
                  <tr className="hover:bg-yellow-50">
                    <td className="py-3 px-6 text-left font-medium text-gray-800">Kết quả xét nghiệm mới</td>
                    <td className="py-3 px-6 text-center text-2xl text-yellow-600 font-bold">{stats.newTestResults}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Cột 2 */}
            <div>
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
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-6 text-left font-medium text-gray-800">Số ca điều trị hoàn thành</td>
                    <td className="py-3 px-6 text-center text-2xl text-gray-600 font-bold">{stats.completedTreatments}</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="py-3 px-6 text-left font-medium text-gray-800">Số lịch khám chờ duyệt</td>
                    <td className="py-3 px-6 text-center text-2xl text-red-600 font-bold">{stats.pendingAppointments}</td>
                  </tr>
                  <tr className="hover:bg-pink-50">
                    <td className="py-3 px-6 text-left font-medium text-gray-800">Số lịch khám bị hủy</td>
                    <td className="py-3 px-6 text-center text-2xl text-pink-600 font-bold">{stats.canceledAppointments}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
