
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

function ExpandableRow({ label, value, approved, pending, cancelled }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr className="hover:bg-green-50">
        <td className="py-3 px-6 text-left font-medium text-gray-800">{label}</td>
        <td className="py-3 px-6 text-center text-2xl text-green-600 font-bold">{value}</td>
        <td className="py-3 px-6 text-center">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all font-semibold"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Ẩn chi tiết' : 'Xem chi tiết'}
          </button>
        </td>
      </tr>
      {open && (
        <tr className="bg-green-50">
          <td colSpan={3} className="px-10 pb-4 pt-2">
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                <span>Lịch khám đã duyệt:</span>
                <span className="font-bold text-emerald-700">{approved}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                <span>Lịch khám chờ duyệt:</span>
                <span className="font-bold text-yellow-700">{pending}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
                <span>Lịch khám đã hủy:</span>
                <span className="font-bold text-red-700">{cancelled}</span>
              </li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
}

// Expandable row for accounts
function AccountExpandableRow() {
  const [open, setOpen] = useState(false);
  // Số liệu mẫu, thay bằng dữ liệu thực tế nếu có
  const totalAccounts = 0;
  const totalPatients = 0;
  const totalDoctors = 0;
  const totalStaff = 0;
  return (
    <>
      <tr className="hover:bg-red-50">
        <td className="py-3 px-6 text-left font-medium text-gray-800">Tổng số tài khoản</td>
        <td className="py-3 px-6 text-center text-2xl text-red-600 font-bold">{totalAccounts}</td>
        <td className="py-3 px-6 text-center">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all font-semibold"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Ẩn chi tiết' : 'Xem chi tiết'}
          </button>
        </td>
      </tr>
      {open && (
        <tr className="bg-red-50">
          <td colSpan={3} className="px-10 pb-4 pt-2">
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Bệnh nhân:</span>
                <span className="font-bold text-blue-700">{totalPatients}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                <span>Bác sĩ:</span>
                <span className="font-bold text-green-700">{totalDoctors}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
                <span>Nhân viên:</span>
                <span className="font-bold text-purple-700">{totalStaff}</span>
              </li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
}

const StatisticsDashboard = () => {
  // Số liệu mẫu, bạn chỉ cần thay bằng dữ liệu API
  // const [stats, setStats] = useState({
  //   totalUsers: 0,
  //   totalReports: 0,
  //   totalSchedules: 0,
  //   totalFeedbacks: 0,
  // });

  // Dữ liệu mẫu cho biểu đồ
  // Dữ liệu mẫu
  const totalSchedules = 0;
  const approvedSchedules = 0;
  const pendingSchedules = 0;
  const cancelledSchedules = 0;

  const chartData = {
    labels: ['Tài khoản', 'Lịch khám', 'Bác sĩ', 'Nhân viên'],
    datasets: [
      {
        label: 'Tổng số',
        data: [0, totalSchedules, 0, 0],
        backgroundColor: 'rgba(59,130,246,0.7)', // xanh dương
        stack: 'main',
        borderRadius: 8,
        borderWidth: 1,
      },
      {
        label: 'Đã duyệt',
        data: [0, approvedSchedules, 0, 0],
        backgroundColor: 'rgba(16,185,129,0.8)', // xanh ngọc
        stack: 'status',
        borderRadius: 8,
        borderWidth: 1,
      },
      {
        label: 'Chờ duyệt',
        data: [0, pendingSchedules, 0, 0],
        backgroundColor: 'rgba(250,204,21,0.8)', // vàng
        stack: 'status',
        borderRadius: 8,
        borderWidth: 1,
      },
      {
        label: 'Đã hủy',
        data: [0, cancelledSchedules, 0, 0],
        backgroundColor: 'rgba(239,68,68,0.8)', // đỏ
        stack: 'status',
        borderRadius: 8,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { font: { size: 15 } } },
      title: { display: true, text: 'Thống kê tổng quan', font: { size: 20 } },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          }
        }
      },
    },
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { stacked: true, beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  const listItems = [
    'Tổng số tài khoản',
    'Số lượng lịch khám',
    'Số lượng bác sĩ',
    'Số lượng nhân viên',
    'Lịch khám đã duyệt',
    'Lịch khám chờ duyệt',
    'Lịch khám đã hủy',
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Thống kê hệ thống (Admin)</h1>
        {/* Biểu đồ cột */}
        <div className="mb-8">
          <Bar data={chartData} options={chartOptions} height={220} />
        </div>
        {/* Bảng số liệu */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-200 rounded-lg shadow table-fixed">
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '40%' }} />
            </colgroup>
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-8 text-left text-xl font-semibold text-gray-700">Chỉ số</th>
                <th className="py-4 px-8 text-center text-xl font-semibold text-gray-700">Số liệu</th>
                <th className="py-4 px-8 text-center text-xl font-semibold text-gray-700">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {/* Expandable row for accounts */}
              <AccountExpandableRow />
              <ExpandableRow
                label="Số lượng lịch khám"
                value={totalSchedules}
                approved={approvedSchedules}
                pending={pendingSchedules}
                cancelled={cancelledSchedules}
              />
              <tr className="hover:bg-yellow-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng bài viết</td>
                <td className="py-3 px-6 text-center text-2xl text-yellow-600 font-bold">0</td>
                <td className="py-3 px-6 text-center">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all font-semibold">Xem chi tiết</button>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng đơn thuốc</td>
                <td className="py-3 px-6 text-center text-2xl text-indigo-600 font-bold">0</td>
                <td className="py-3 px-6 text-center">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-all font-semibold">Xem chi tiết</button>
                </td>
              </tr>
              <tr className="hover:bg-pink-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng phác đồ</td>
                <td className="py-3 px-6 text-center text-2xl text-pink-600 font-bold">0</td>
                <td className="py-3 px-6 text-center">
                  <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-all font-semibold">Xem chi tiết</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Danh sách các chỉ số */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Danh sách các chỉ số:</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
