'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lock, User, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push('/jw-admin');
        router.refresh();
      } else {
        setError('Invalid credentials. Access denied.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/branding/hero/hero_dark_calculated_v7.png"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-nano-pattern opacity-10" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Secure Access
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
            Admin Console
          </h1>
          <p className="text-sm text-white/40 font-mono">jerrywilliams.au</p>
        </div>

        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Username */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-white/50 uppercase tracking-widest">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  placeholder="Enter username"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-white/50 uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Access Console
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-white/20 mt-6 font-mono">
          Restricted area — authorised personnel only
        </p>
      </motion.div>
    </main>
  );
}
