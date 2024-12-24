import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout/Layout';
import { MainApp } from './components/MainApp';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ThankYouPage } from './pages/ThankYouPage';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}