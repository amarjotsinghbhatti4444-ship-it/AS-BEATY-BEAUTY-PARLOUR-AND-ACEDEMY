'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { ShieldCheck, Plus, Trash2, Award } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [certificates, setCertificates] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '', phone: '', course: '', date: ''
  });

  useEffect(() => {
    const auth = sessionStorage.getItem('as_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadCertificates();
    }
  }, []);

  const loadCertificates = () => {
    const data = JSON.parse(localStorage.getItem('as_certificates') || '[]');
    setCertificates(data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple local auth for the prototype
      sessionStorage.setItem('as_admin_auth', 'true');
      setIsAuthenticated(true);
      loadCertificates();
      setError('');
    } else {
      setError('Invalid password. Hint: admin123');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('as_admin_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleIssue = (e: React.FormEvent) => {
    e.preventDefault();
    const newCert = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    const updated = [newCert, ...certificates];
    localStorage.setItem('as_certificates', JSON.stringify(updated));
    setCertificates(updated);
    setFormData({ name: '', phone: '', course: '', date: '' });
  };

  const handleDelete = (id: string) => {
    const updated = certificates.filter(c => c.id !== id);
    localStorage.setItem('as_certificates', JSON.stringify(updated));
    setCertificates(updated);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-soft-pink/30 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4 pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 max-w-md w-full shadow-lg border border-pink-100 text-center">
            <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-dark-primary mb-2">Admin Access</h2>
            <p className="text-sm text-gray-500 mb-6">Enter the administrative password to manage certificates.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password (admin123)" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold text-center text-black" />
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button type="submit" className="w-full py-3 bg-dark-primary text-white text-sm tracking-widest uppercase hover:bg-gold transition-colors">Login</button>
            </form>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-dark-primary mb-2">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Certificate Management</p>
          </div>
          <button onClick={handleLogout} className="px-6 py-2 border border-gray-300 text-sm hover:bg-gray-100 text-black transition-colors">Logout</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl mb-4 text-dark-primary flex items-center gap-2">
                <Plus size={20} className="text-gold" /> Issue Certificate
              </h3>
              <form onSubmit={handleIssue} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Student Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold text-black" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Mobile Number (Verification ID)</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold text-black" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Course Enrolled</label>
                  <input required type="text" value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})} placeholder="e.g. Advanced Makeup Course" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold text-black" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Issue Date</label>
                  <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold text-black" />
                </div>
                <button type="submit" className="w-full py-3 mt-4 bg-gold text-white text-sm font-medium tracking-widest uppercase hover:bg-gold-dark transition-colors">
                  Generate Certificate
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-6 shadow-sm border border-gray-100 min-h-[500px]">
              <h3 className="font-serif text-xl mb-6 text-dark-primary flex items-center gap-2">
                <Award size={20} className="text-gold" /> Issued Certificates
              </h3>
              {certificates.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <p>No certificates issued yet.</p>
                  <p className="text-sm mt-2">Use the form to generate the first certificate.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">ID</th>
                        <th className="py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Student</th>
                        <th className="py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Mobile</th>
                        <th className="py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Course</th>
                        <th className="py-3 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates.map(cert => (
                        <tr key={cert.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 text-sm font-mono text-gray-500">{cert.id}</td>
                          <td className="py-4 text-sm text-dark-primary font-medium">{cert.name}</td>
                          <td className="py-4 text-sm text-gray-500">{cert.phone}</td>
                          <td className="py-4 text-sm text-gray-500">{cert.course}</td>
                          <td className="py-4 text-sm text-right">
                            <button onClick={() => handleDelete(cert.id)} className="text-red-400 hover:text-red-600 transition-colors p-1" title="Delete Certificate">
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
