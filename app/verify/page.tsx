'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Search, Award, CheckCircle2 } from 'lucide-react';

export default function VerifyPage() {
  const [phone, setPhone] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('as_certificates') || '[]');
    const found = data.find((c: any) => c.phone.replace(/\D/g,'') === phone.replace(/\D/g,''));
    setResult(found || null);
    setSearched(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white p-8 shadow-lg border border-gray-100 mb-8"
        >
          <div className="text-center mb-8">
            <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-2">Student Portal</h4>
            <h1 className="text-3xl font-serif text-dark-primary">Verify Certificate</h1>
            <p className="text-sm text-gray-500 mt-2">Enter your registered mobile number to verify and view your beauty academy course certificate.</p>
          </div>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input 
                type="tel" 
                value={phone}
                onChange={e => {setPhone(e.target.value); setSearched(false);}}
                placeholder="Enter Mobile Number" 
                required 
                className="w-full border border-gray-300 py-3 px-4 focus:outline-none focus:border-gold pl-12 text-black"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            </div>
            <button type="submit" className="py-3 px-8 bg-dark-primary text-white text-sm tracking-widest uppercase hover:bg-gold transition-colors font-medium">
              Verify
            </button>
          </form>
        </motion.div>

        {searched && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl"
          >
            {result ? (
              <div className="bg-white p-8 sm:p-12 shadow-2xl border-4 border-double border-gold relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gold/30 -translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gold/30 translate-x-4 translate-y-4"></div>
                
                <div className="text-center">
                  <Award className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h2 className="text-4xl md:text-5xl font-serif text-dark-primary mb-2 uppercase tracking-wide">Certificate of Completion</h2>
                  <p className="text-gold tracking-[0.3em] uppercase text-sm mb-12">AS Beauty Salon & Academy</p>
                  
                  <p className="text-gray-500 italic mb-4">This is to certify that</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-medium text-dark-primary mb-4 border-b border-gray-200 inline-block px-10 pb-2">{result.name}</h3>
                  
                  <p className="text-gray-500 italic mt-6 mb-2">has successfully completed the program in</p>
                  <h4 className="text-2xl text-dark-primary font-medium mb-12 uppercase tracking-widest">{result.course}</h4>
                  
                  <div className="grid grid-cols-3 gap-4 items-end mt-16 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="border-b border-gray-400 pb-2 mb-2 font-mono text-sm text-black">{result.date}</div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Date Issued</p>
                    </div>
                    <div className="text-center pb-2">
                       <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-2 opacity-80" />
                       <p className="text-[10px] uppercase font-bold text-dark-primary">Verified Authentic</p>
                       <p className="text-[10px] text-gray-400 font-mono">ID: {result.id}</p>
                    </div>
                    <div className="text-center">
                      <div className="border-b border-gray-400 pb-2 mb-2 font-serif italic text-xl text-dark-primary">AS Director</div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Signature</p>
                    </div>
                  </div>
                </div>
                
                {/* Print button overlay, visible only on screen, hidden in print media */}
                <div className="absolute top-4 right-4 print:hidden">
                  <button onClick={() => window.print()} className="px-4 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors">
                    Print / PDF
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-12 text-center shadow-lg border border-red-100">
                <div className="w-16 h-16 bg-red-50 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-dark-primary mb-2">No Certificate Found</h3>
                <p className="text-gray-500">We couldn't find a certificate registered with the number <strong className="text-black">{phone}</strong>.</p>
                <p className="text-sm mt-4 text-gray-400">Please check the number or contact the academy administration.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
      <Footer />
    </main>
  );
}
