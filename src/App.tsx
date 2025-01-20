import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './providers/ThemeProvider';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import RightPanel from './components/layout/RightPanel';
import Dashboard from './pages/Dashboard';
import ContentCreation from './pages/ContentCreation';
import AIAutomation from './pages/AIAutomation';
import BrandVoice from './pages/BrandVoice';
import Library from './pages/Library';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Help from './pages/Help';
import MobileNav from './components/layout/MobileNav';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthenticatedProvider } from './providers/AuthenticatedProvider';

// Query Client
const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation(); // useLocation est utilisé ici

  // Vérifier si l'utilisateur est sur la page de login ou d'enregistrement
  // const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen bg-white dark:bg-dark-primary flex">
      {/* Sidebar et Topbar seulement affichés si ce n'est pas la page de login ou register */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
    

      <main className="flex-1 md:ml-[15vw] pb-16 md:pb-0">
       <Topbar />
        <div className="mt-[8vh] p-4 md:p-6">
          <Routes>
            {/* Routes publiques */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} />  */}

            {/* Routes protégées */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/content" element={<ContentCreation />} />
              <Route path="/automation" element={<AIAutomation />} />
              <Route path="/brand-voice" element={<BrandVoice />} />
              <Route path="/library" element={<Library />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/help" element={<Help />} />
            </Route>
          </Routes>
        </div>
      </main>

      <RightPanel />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <MobileNav />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Layout /> 
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;