'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/admin' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-2" />
      <button type="submit" className="bg-blue-600 text-white p-2">Login</button>
    </form>
  );
}