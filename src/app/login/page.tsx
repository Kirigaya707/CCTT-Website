'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setLoadingEmail(true);
    const result = await signIn('email', { email, redirect: false });
    setLoadingEmail(false);
    if (result?.ok) setEmailSent(true);
  };

  return <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 py-12"><div className="max-w-md w-full bg-white rounded-3xl p-8 border border-sand shadow-xl space-y-6"><div className="text-center space-y-2"><span className="text-[10px] font-extrabold uppercase tracking-widest text-terracotta">CHUTI CHUTI MEMBER PORTAL</span><h1 className="text-3xl font-serif font-bold text-moss-dark">Welcome Back</h1><p className="text-xs text-stone-500">Sign in to view your booked trips, custom itineraries, and member perks.</p></div><button type="button" onClick={() => signIn('google', { callbackUrl: '/profile' })} className="w-full flex items-center justify-center gap-3 bg-white border border-stone-300 hover:bg-sand/50 text-stone-700 font-bold py-3 px-4 rounded-2xl transition text-xs shadow-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" /></svg>Continue with Google</button><div className="flex items-center gap-3"><div className="flex-1 h-px bg-sand" /><span className="text-[10px] uppercase font-semibold text-stone-400">or passwordless email</span><div className="flex-1 h-px bg-sand" /></div>{emailSent ? <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-center space-y-1"><p className="font-bold text-xs">Magic Login Link Sent!</p><p className="text-[11px]">Check <strong>{email}</strong> and click the link to sign in instantly.</p></div> : <form onSubmit={handleEmailSignIn} className="space-y-3"><div><label className="block text-xs font-semibold text-stone-600 mb-1" htmlFor="email">Email Address</label><input id="email" type="email" required placeholder="you@domain.com" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full bg-sand/30 border border-sand rounded-xl px-3.5 py-2.5 text-xs text-stone-800 focus:outline-none focus:border-terracotta" /></div><button type="submit" disabled={loadingEmail} className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-4 rounded-xl transition text-xs shadow-sm disabled:opacity-50">{loadingEmail ? 'Sending Link...' : 'Send Magic Sign-In Link'}</button></form>}<p className="text-[10px] text-center text-stone-400">Admin access is automatically assigned for authorized Google accounts.</p></div></div>;
}
