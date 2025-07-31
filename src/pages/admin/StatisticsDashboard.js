// ...existing code...

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

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
function AccountExpandableRow({ totalAccounts, totalPatients, totalDoctors, totalStaff }) {
  const [open, setOpen] = useState(false);

  // Dữ liệu cho doughnut 3 phần
  const doughnutData = {
    labels: ['Bệnh nhân', 'Bác sĩ', 'Nhân viên'],
    datasets: [
      {
        data: [totalPatients, totalDoctors, totalStaff],
        backgroundColor: ['#3b82f6', '#22c55e', '#a855f7'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { font: { size: 14 } } },
      title: { display: true, text: 'Tỉ lệ các loại tài khoản', font: { size: 16 } },
    },
    cutout: '60%',
  };

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
            <ul className="space-y-2 text-base mb-4">
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
  const [appointments6Months, setAppointments6Months] = useState([]);
  // const [loadingChart, setLoadingChart] = useState(true);
  // const [errorChart, setErrorChart] = useState(null);

  // State cho số liệu tài khoản thực tế
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);

  // Mock API states for articles, prescriptions, regimens, test types, test results, ARV components
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalPrescriptions, setTotalPrescriptions] = useState(0);
  const [totalRegimens, setTotalRegimens] = useState(0);
  const [totalTestTypes, setTotalTestTypes] = useState(0);
  const [totalTestResults, setTotalTestResults] = useState(0);
  const [totalARVComponents, setTotalARVComponents] = useState(0);

  // Biểu đồ tài khoản từng loại (Bar)
  const accountBarData = {
    labels: ['Bệnh nhân', 'Bác sĩ', 'Nhân viên'],
    datasets: [
      {
        label: 'Số lượng',
        data: [totalPatients, totalDoctors, totalStaff],
        backgroundColor: [
          'rgba(59,130,246,0.7)', // blue
          'rgba(34,197,94,0.7)',  // green
          'rgba(168,85,247,0.7)', // purple
        ],
        borderRadius: 8,
        borderWidth: 1,
      },
    ],
  };

  const accountBarOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Biểu đồ số lượng tài khoản từng loại', font: { size: 18 } },
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
      x: { grid: { display: false }, title: { display: false } },
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  // Biểu đồ Pie/Doughnut cho từng loại tài khoản
  const pieData = [
    {
      label: 'Bệnh nhân',
      data: [totalPatients, totalAccounts - totalPatients],
      backgroundColor: ['#3b82f6', '#e5e7eb'],
    },
    {
      label: 'Bác sĩ',
      data: [totalDoctors, totalAccounts - totalDoctors],
      backgroundColor: ['#22c55e', '#e5e7eb'],
    },
    {
      label: 'Nhân viên',
      data: [totalStaff, totalAccounts - totalStaff],
      backgroundColor: ['#a855f7', '#e5e7eb'],
    },
  ];
  const pieOptions = (title) => ({
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { font: { size: 14 } } },
      title: { display: true, text: title, font: { size: 16 } },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}`;
          }
        }
      },
    },
    cutout: '60%',
  });

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token');

    // Lấy lịch khám 6 tháng
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/AdminDashboard/GetAppointmentsLast6Months`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments6Months(response.data.data || []);
      } catch (err) {
        // Không thể tải dữ liệu biểu đồ.
      } finally {
        // Kết thúc tải dữ liệu biểu đồ.
      }
    };

    // Lấy tổng số tài khoản
    const fetchAccounts = async () => {
      try {
        // Lấy user chính thức từ /api/User/All
        const resUser = await axios.get(`${API_URL}/api/User/All`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const users = resUser.data.data || [];
        const officialDoctors = users.filter(u => u.userRole === 'Doctor' && u.isVerified && u.isActive);
        const officialStaff = users.filter(u => u.userRole === 'Staff' && u.isVerified && u.isActive);

        // Lấy bệnh nhân chính thức từ /api/Patient/GetAll
        const resPatient = await axios.get(`${API_URL}/api/Patient/GetAll`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const patients = resPatient.data.data || [];
        const officialPatients = patients.filter(p => p.isVerified && p.isActive);

        setTotalAccounts(officialPatients.length + officialDoctors.length + officialStaff.length);
        setTotalPatients(officialPatients.length);
        setTotalDoctors(officialDoctors.length);
        setTotalStaff(officialStaff.length);
      } catch (err) {
        // Nếu lỗi thì giữ nguyên số liệu 0
      }
    };

    fetchAppointments();
    fetchAccounts();

    // Mock API for articles
    axios.get(`${API_URL}/api/Article/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setTotalArticles(res.data.data?.length || 0))
      .catch(() => setTotalArticles(0));

    // Mock API for prescriptions (assuming /api/Treatment/GetAll is for prescriptions)
    axios.get(`${API_URL}/api/Treatment/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setTotalPrescriptions(res.data.data?.length || 0))
      .catch(() => setTotalPrescriptions(0));

    // Mock API for regimens
    axios.get(`${API_URL}/api/ARVRegimens/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setTotalRegimens(res.data.data?.length || 0))
      .catch(() => setTotalRegimens(0));

    // Mock API for test types
    axios.get(`${API_URL}/api/TestType/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setTotalTestTypes(res.data.data?.length || 0))
      .catch(() => setTotalTestTypes(0));

    // Mock API for test results
    axios.get(`${API_URL}/api/TestResult/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setTotalTestResults(res.data.data?.length || 0))
      .catch(() => setTotalTestResults(0));

    // Mock API for ARV components
    axios.get(`${API_URL}/api/ARVComponents/GetAll`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setTotalARVComponents(res.data.data?.length || 0))
      .catch(() => setTotalARVComponents(0));
  }, []);

  // Tạo nhãn tháng (6 tháng gần nhất)
  const now = new Date();
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(`${d.getMonth() + 1}/${d.getFullYear()}`);
  }

  // Map dữ liệu API vào đúng thứ tự tháng
  const monthToCount = {};
  appointments6Months.forEach(item => {
    monthToCount[item.month] = item.count;
  });
  const chartCounts = months.map(m => {
    const monthNum = parseInt(m.split('/')[0], 10);
    return monthToCount[monthNum] || 0;
  });

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Lịch khám',
        data: chartCounts,
        backgroundColor: 'rgba(59,130,246,0.7)',
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
              <AccountExpandableRow
                totalAccounts={totalAccounts}
                totalPatients={totalPatients}
                totalDoctors={totalDoctors}
                totalStaff={totalStaff}
              />
              {/* Các chỉ số khác */}
              <tr className="hover:bg-yellow-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng bài viết</td>
                <td className="py-3 px-6 text-center text-2xl text-yellow-600 font-bold">{totalArticles}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng đơn thuốc</td>
                <td className="py-3 px-6 text-center text-2xl text-indigo-600 font-bold">{totalPrescriptions}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
              <tr className="hover:bg-pink-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng phác đồ</td>
                <td className="py-3 px-6 text-center text-2xl text-pink-600 font-bold">{totalRegimens}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
              <tr className="hover:bg-green-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số loại xét nghiệm</td>
                <td className="py-3 px-6 text-center text-2xl text-green-600 font-bold">{totalTestTypes}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng kết quả xét nghiệm</td>
                <td className="py-3 px-6 text-center text-2xl text-blue-600 font-bold">{totalTestResults}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
              <tr className="hover:bg-purple-50">
                <td className="py-3 px-6 text-left font-medium text-gray-800">Số lượng thành phần ARV</td>
                <td className="py-3 px-6 text-center text-2xl text-purple-600 font-bold">{totalARVComponents}</td>
                <td className="py-3 px-6 text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ...bỏ biểu đồ tài khoản từng loại... */}
        {/* Danh sách các chỉ số */}
      </div>
    </div>
  );
};

export default StatisticsDashboard;
