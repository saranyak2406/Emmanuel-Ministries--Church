import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SIGNUP_BG = '/images/slideshow/image 3.jpg';

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (form.password !== form.confirmPassword) {
      setStatus('error');
      setErrorMsg('Passwords do not match');
      return;
    }

    // Simulate account creation
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus('success');
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50">
      <Navbar />

      <main className="flex-1 relative flex items-center justify-center py-32 px-4">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={SIGNUP_BG} 
            alt="Sign Up Background" 
            className="h-full w-full object-cover object-top" 
          />
          {/* Light overlay for clean aesthetic */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
        </div>

        <div className="relative z-10 w-full max-w-lg">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-charcoal-600 hover:text-brand-700 font-bold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          {status === 'success' ? (
            <div className="text-center py-20 px-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                Account Created<br/>Successfully!
              </h2>
              <p className="text-charcoal-600 mb-10 text-lg">
                Welcome to Emmanuel Gospel Ministries! Your account is now active.
              </p>
              <Link
                to="/prayer"
                className="px-8 py-4 bg-brand-700 backdrop-blur-md text-white font-bold tracking-wider hover:bg-brand-800 transition-all rounded-lg shadow-md inline-block"
              >
                Return to Prayer Requests
              </Link>
            </div>
          ) : (
            <div className="bg-white/50 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-2">
                  Create an Account
                </h1>
                <p className="text-charcoal-600 font-medium">
                  Join our community and stay connected.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-white/90 border border-charcoal-200 rounded-lg px-5 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/90 border border-charcoal-200 rounded-lg px-5 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    placeholder="Create a password"
                    className="w-full bg-white/90 border border-charcoal-200 rounded-lg px-5 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Confirm your password"
                    className="w-full bg-white/90 border border-charcoal-200 rounded-lg px-5 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 font-bold text-center">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-primary bg-brand-700 text-white font-bold text-lg tracking-widest py-4 uppercase shadow-lg hover:bg-brand-800 transition-all disabled:opacity-50 flex items-center justify-center gap-3 rounded-lg border-none"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      'SIGN UP'
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <p className="text-charcoal-600 font-medium text-sm">
                  Already have an account?{' '}
                  <a href="#" className="text-brand-700 font-bold underline hover:text-brand-900 transition-colors">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
