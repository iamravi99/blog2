import { useState } from 'react';
import { loginUser } from './Firebase';
import { Link, useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginUser(email, password);
      document.getElementById('login_modal').close();
      navigate('/');
    } catch (error) {
      setError('Failed to log in: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <dialog id="login_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-2xl p-6 bg-white shadow-lg">
          <form method="dialog" className="absolute right-4 top-4">
            <button className="btn btn-sm btn-circle btn-ghost text-xl">✕</button>
          </form>

          <h3 className="text-2xl font-semibold text-center text-primary mb-2">Welcome Back</h3>
          <p className="text-sm text-center text-gray-500 mb-4">Login to your account</p>

          {error && (
            <div className="alert alert-error text-sm mb-4 py-2 px-3 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered input-primary w-full rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-primary w-full rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-2">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-lg text-base"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>

          <div className="mt-5 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoginModal;
