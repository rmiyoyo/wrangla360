'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/admin' });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="form-section">
          
          <h1>Welcome back</h1>
          <p>Sign in to your Wrangla 360 account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="m@example.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required 
              />
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Sign in</button>
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="oauth-buttons">
            <button onClick={() => signIn('apple')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
                <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
            </button>
            <button onClick={() => signIn('github')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
            <button onClick={() => signIn('google')}>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
          </div>

          <p className="signup-text">
            Don&apos;t have an account? <a href="#">Sign up</a>
          </p>
        </div>

        <div className="image-section">
          <Image 
            src="/login.jpg" 
            alt="Login visual"
            width={400}
            height={600}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: #f7fafc;
        }

        .login-card {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 800px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }

        .form-section {
          padding: 2.5rem;
        }

        .login-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
          border: 3px solid #1a365d;
          border-radius: 50%;
          border-bottom-color: transparent;
          border-left-color: transparent;
          transform: rotate(45deg);
        }

        .login-logo span {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a365d;
        }

        h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a365d;
          text-align: center;
          margin-bottom: 0.5rem;
        }

        p {
          color: #4a5568;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        label {
          display: block;
          margin-bottom: 0.25rem;
          color: #1a365d;
          font-weight: 600;
          font-size: 0.875rem;
        }

        input {
          width: 100%;
          padding: 0.625rem;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.9rem;
        }

        input:focus {
          outline: none;
          border-color: #1a365d;
        }

        .forgot-link {
          display: block;
          text-align: right;
          margin-top: 0.25rem;
          color: #1a365d;
          text-decoration: none;
          font-size: 0.8rem;
        }

        .login-btn {
          width: 100%;
          padding: 0.75rem;
          background: #1a365d;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 1.5rem;
          margin-top: 0.5rem;
        }

        .divider {
          text-align: center;
          margin-bottom: 1rem;
          position: relative;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          background: white;
          padding: 0 1rem;
          color: #a0aec0;
          font-size: 0.8rem;
        }

        .oauth-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .oauth-buttons button {
          padding: 0.625rem;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          color: #4a5568;
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .oauth-buttons button:focus {
          outline: none;
          border-color: #1a365d;
        }

        .signup-text {
          text-align: center;
          font-size: 0.8rem;
          margin: 0;
        }

        .signup-text a {
          color: #1a365d;
          text-decoration: none;
          font-weight: 600;
        }

        .image-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .login-card {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          
          .image-section {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}