'use client';

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { KeyRound, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push('/profile');
        router.refresh();
      } else if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/login` },
        });
        if (error) throw error;
        setMessage({
          type: 'success',
          text: 'Account created! Please check your email inbox to confirm your address.',
        });
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setMessage({
          type: 'success',
          text: `Password reset link sent to ${email}. Please check your inbox (including spam folder).`,
        });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-sand shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-terracotta">
            CHUTI CHUTI MEMBER PORTAL
          </span>
          <h1 className="text-3xl font-serif font-bold text-moss-dark">
            {mode === 'login' && 'Welcome Back'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h1>
          <p className="text-xs text-stone-500">
            {mode === 'login' && 'Sign in to access your booked trips and custom itineraries.'}
            {mode === 'signup' && 'Sign up with your email address to save itineraries.'}
            {mode === 'forgot' && 'Enter your registered email ID to receive a password reset link.'}
          </p>
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

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-stone-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-sand/30 border border-sand rounded-xl pl-10 pr-3.5 py-2.5 text-stone-800 focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-bold text-stone-700">Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setMessage(null);
                    }}
                    className="text-[11px] font-bold text-terracotta hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
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
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-4 rounded-xl transition text-xs shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              'Processing...'
            ) : (
              <>
                {mode === 'login' && 'Sign In'}
                {mode === 'signup' && 'Create Account'}
                {mode === 'forgot' && 'Send Reset Link'}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="border-t border-sand pt-4 text-center text-xs text-stone-500">
          {mode === 'login' && (
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => {
                  setMode('signup');
                  setMessage(null);
                }}
                className="font-bold text-moss-dark hover:underline"
              >
                Sign Up
              </button>
            </p>
          )}

          {(mode === 'signup' || mode === 'forgot') && (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => {
                  setMode('login');
                  setMessage(null);
                }}
                className="font-bold text-moss-dark hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
