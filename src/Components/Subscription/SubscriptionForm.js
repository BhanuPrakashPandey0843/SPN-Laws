import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    // Add code here to submit the form data to the backend
    // Simulating form submission with a setTimeout
    setTimeout(() => {
      console.log('Form submitted with email:', email);
      setSuccess(true);
      setEmail('');
      setError('');
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-2/3 w-full bg-gray-100">
      <div className="relative w-full max-w-3xl rounded-lg bg-indigo-100 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-label="Close"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div className="p-8 md:p-12 lg:px-16">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-indigo-900 md:text-3xl">Subscribe to stay ahead</h2>
            <p className="hidden text-indigo-900 sm:mt-4 sm:block">
              Subscribe to SPN Laws Blog and stay ahead with the latest legal insights and updates!
            </p>
            {success && <p className="text-green-600 mt-2">Thank you for subscribing!</p>}
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-indigo-200 bg-white p-3 text-indigo-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-400"
                />
                {error && <p className="text-red-500 mt-1">{error}</p>}
              </div>
              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-indigo-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium">Sign Up</span>
                <svg
                  className="ml-3 h-5 w-5 transition-all group-hover:translate-x-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
