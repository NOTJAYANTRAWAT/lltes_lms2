import React, { useState } from 'react';

const LoginPage = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Code to verify the OTP here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {!showOtp ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                type="submit"
              >
                Get OTP
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                type="submit"
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
