import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/signup', {
        email,
        password,
        selectedOption,
      });

      console.log('Signup successful:', response.data);

    } catch (error) {
      console.error('Error signing up:', error.message);

    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
              {/* Other form elements remain the same */}

              {/* Dropdown menu */}
              <div className="relative inline-block">
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  onClick={handleDropdownToggle}
                >
                  {selectedOption || 'Select an option'}
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 bg-white border rounded-md shadow-md text-blue-700">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleOptionSelect('School')}
                      >
                        School
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleOptionSelect('University')}
                      >
                        University
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleOptionSelect('Institution')}
                      >
                        Institution
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleOptionSelect('Park')}
                      >
                        Park
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
