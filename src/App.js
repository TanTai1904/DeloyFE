
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/common/HomePage';
import LoginPage from './pages/common/LoginPage';
import RegisterPage from './pages/common/RegisterPage';
import VerifyPage from './pages/common/VerifyPage';
import ProfilePage from './pages/common/ProfilePage';
import AppointmentsPage from './pages/appointment/AppointmentsPage';
import AppointmentListPage from './pages/doctor/AppointmentListPage';
import UpdateAppointmentPage from './pages/appointment/updateAppointmentPage';
import AppointmentManager from './pages/doctor/AppointmentManager';
import TestResultPage from './pages/patient/testResultPage';
import CategoryManager from './pages/manager/categoryManager';
import CreateCategory from './pages/manager/createCategory';
import UpdateCategory from './pages/manager/updateCategory';
import TestsPage from './pages/common/TestsPage';
import ArticleManager from './pages/article/articleManager';
import CreateTreatment from './pages/doctor/createTreatment';
import StandardProtocol from './pages/common/standardProtocol';
import ArticleDetail from './pages/common/articleDetail';
import CreateArticle from './pages/article/createArticle';
import UpdateArticle from './pages/article/updateArticle';
import CreateRegimens from './pages/manager/createRegimens';
import ChooseRegiment from './pages/manager/chooseRegiment';
import ArticlesPage from './pages/common/ArticlesPage';
import CategoryPage from './pages/common/CategoryPage';
import UpdateCertificate from './pages/admin/updateCertificate';
import CertificateManagement from './pages/admin/certificateManagement';
import CreateCertificate from './pages/admin/createCertificate';
import ARVComponentManager from './pages/manager/arvComponentManager';
import UpdateARVComponent from './pages/manager/updateARVComponent';
import CreateComponent from './pages/manager/createComponent';
import TestTypeManager from './pages/test/testTypeManager';
import CreateTestType from './pages/test/createTestType';
import UpdateTestType from './pages/test/updateTestType';
import ManagerPage from './pages/admin/managerPage';
import CreateManager from './pages/admin/createManager';
import UpdateManager from './pages/admin/updateManager';
import StatisticsDashboard from './pages/admin/StatisticsDashboard';
import PatientListAdmin from './pages/admin/PatientListAdmin';
import DoctorStatisticsDashboard from './pages/doctor/StatisticsDashboard';
import StaffStatisticsDashboard from './pages/staff/StatisticsDashboard';
import ManagerStatisticsDashboard from './pages/manager/StatisticsDashboard';
import DoctorManager from './pages/doctor/doctormanager';
import CreateDoctor from './pages/doctor/createDoctor';
import UpdateDoctor from './pages/doctor/updateDoctor';
import StaffManager from './pages/staff/staffManager';
import CreateStaff from './pages/staff/createStaff';
import UpdateStaff from './pages/staff/updateStaff';
import TestResultManager from './pages/test/testResultManager';
import UpdateTestResult from './pages/test/updateTestResult';
import TreatmentForPatient from './pages/doctor/treatmentForPatient';
import TestResultForPatient from './pages/doctor/testResultForPatient';
import ScheduleManager from './pages/doctor/scheduleManager';
import CreateSchedule from './pages/manager/createSchedule';
import UpdateSchedule from './pages/manager/updateSchedule';
import ViewListWorkSchedule from './pages/doctor/viewListWorkSchedule';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ForgetPassword from './pages/password/forgetPassword';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LearnMorePage from './pages/common/LearnMorePage';
import ContactInfo from './pages/common/ContactInfo';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public routes without layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="/contact-info" element={<ContactInfo />} />
            <Route path="/learn-more" element={<LearnMorePage />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />

            {/* Routes with layout */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      {/* Public routes */}
                      <Route index element={<HomePage />} />
                      <Route path="/articles" element={<ArticlesPage />} />
                      <Route path="/category/:id" element={<CategoryPage />} />

                      {/* Protected routes */}
                      <Route
                        path="/profile/*"
                        element={
                          <PrivateRoute>
                            <ProfilePage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/appointments/create"
                        element={
                          <PrivateRoute>
                            <AppointmentsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/appointments/list"
                        element={
                          <PrivateRoute>
                            <AppointmentListPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/appointments/management"
                        element={
                          <PrivateRoute>
                            <AppointmentManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/update-appointment/:id"
                        element={
                          <PrivateRoute>
                            <UpdateAppointmentPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/tests/*"
                        element={
                          <PrivateRoute>
                            <TestsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/treatments/create"
                        element={
                          <PrivateRoute>
                            <CreateTreatment />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/test-result/create"
                        element={
                          <PrivateRoute>
                            <TestResultPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/choose-regiment"
                        element={
                          <PrivateRoute>
                            <ChooseRegiment />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/standard-protocol"
                        element={
                          <PrivateRoute>
                            <StandardProtocol />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/regimens/create"
                        element={
                          <PrivateRoute>
                            <CreateRegimens />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/categories"
                        element={
                          <PrivateRoute>
                            <CategoryManager />
                          </PrivateRoute>
                        }
                      />  
                      <Route  
                        path="/categories/create"
                        element={
                          <PrivateRoute>
                            <CreateCategory />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/categories/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateCategory />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/articles-management"
                        element={
                          <PrivateRoute>
                            <ArticleManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/articles/:id"
                        element={
                          <PrivateRoute>
                            <ArticleDetail />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/articles/create"
                        element={
                          <PrivateRoute>
                            <CreateArticle />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/articles/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateArticle />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/certificate-management"
                        element={
                          <PrivateRoute>
                            <CertificateManagement />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/certificate/create"
                        element={
                          <PrivateRoute>
                            <CreateCertificate />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/certificate/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateCertificate />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/ARVcomponents-management"
                        element={
                          <PrivateRoute>
                            <ARVComponentManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/ARVcomponents"
                        element={
                          <PrivateRoute>
                            <ARVComponentManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/ARVcomponents/create"
                        element={
                          <PrivateRoute>
                            <CreateComponent />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/ARVcomponents/update/:componentId"
                        element={
                          <PrivateRoute>
                            <UpdateARVComponent />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/testType-management"
                        element={
                          <PrivateRoute>
                            <TestTypeManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/test-types/create"
                        element={
                          <PrivateRoute>
                            <CreateTestType />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/test-types/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateTestType />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/manager-management"
                        element={
                          <PrivateRoute>
                            <ManagerPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/managers/create"
                        element={
                          <PrivateRoute>
                            <CreateManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/managers/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/doctors-management"
                        element={
                          <PrivateRoute>
                            <DoctorManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/doctors/create"
                        element={
                          <PrivateRoute>
                            <CreateDoctor />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/doctors/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateDoctor />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/staff-management"
                        element={
                          <PrivateRoute>
                            <StaffManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/staffs/create"
                        element={
                          <PrivateRoute>
                            <CreateStaff />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/staffs/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateStaff />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/testResult-management"
                        element={
                          <PrivateRoute>
                            <TestResultManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/test-results/update/:id"
                        element={
                          <PrivateRoute>
                            <UpdateTestResult />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/treatment-for-patient/:appointmentId"
                        element={
                          <PrivateRoute>
                            <TreatmentForPatient />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/test-result-for-patient/:appointmentId"
                        element={
                          <PrivateRoute>
                            <TestResultForPatient />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/schedule-manager/:doctorId"
                        element={
                          <PrivateRoute>
                            <ScheduleManager />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/update-schedule/:scheduleId"
                        element={
                          <PrivateRoute>
                            <UpdateSchedule />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/schedule/create/:doctorId"
                        element={
                          <PrivateRoute>
                            <CreateSchedule />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/my-schedules"
                        element={
                          <PrivateRoute>
                            <ViewListWorkSchedule />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/statistics"
                        element={
                          <PrivateRoute>
                            <StatisticsDashboard />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/patients"
                        element={
                          <PrivateRoute>
                            <PatientListAdmin />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/doctor/statistics"
                        element={
                          <PrivateRoute>
                            <DoctorStatisticsDashboard />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/staff/statistics"
                        element={
                          <PrivateRoute>
                            <StaffStatisticsDashboard />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/manager/statistics"
                        element={
                          <PrivateRoute>
                            <ManagerStatisticsDashboard />
                          </PrivateRoute>
                        }
                      />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
