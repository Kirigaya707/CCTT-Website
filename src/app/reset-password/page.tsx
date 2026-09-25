'use client';

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Password updated successfully! Redirecting to login...' });
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-sand shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-terracotta">
            SECURITY
          </span>
          <h1 className="text-3xl font-serif font-bold text-moss-dark">Set New Password</h1>
          <p className="text-xs text-stone-500">Enter your new password below to update your account.</p>
        </div>

        {message && (
          <div
            className={`p-4 rounded-2xl text-xs flex items-start gap-2 ${
              message.type === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border border-rose-200 text-rose-800'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handlePasswordUpdate} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-stone-700 mb-1">New Password</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-sand/30 border border-sand rounded-xl pl-10 pr-3.5 py-2.5 text-stone-800 focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Confirm New Password</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-sand/30 border border-sand rounded-xl pl-10 pr-3.5 py-2.5 text-stone-800 focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-4 rounded-xl transition text-xs shadow-sm disabled:opacity-50"
          >
            {loading ? 'Updating Password...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
