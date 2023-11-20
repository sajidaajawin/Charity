// Hero.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthSlice';
import Payment from '../Component/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import DonationForm from '../pages/DonationForm';

const stripePromise = loadStripe('your_stripe_publishable_key');

function Hero() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // State for dropdown menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDonation = () => {
    if (!isAuthenticated) {
      dispatch(login());
    } else {
      // Toggle dropdown menu visibility
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className="bg-indigo-50 text-blue-950 py-16 text-center relative">
      <img
        src="https://maranathaministryinc.org/wp-content/uploads/2023/02/donations-colorful-letters-banner-overlapping-squares-background-121155020.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-3 ease-in-out">
          Welcome to
        </h1>
        <p className="text-lg mb-8">Help Us Create A Better World.</p>
        <div className="relative inline-block">
          {/* Button to toggle dropdown menu */}
          <button
            className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-100"
            onClick={handleDonation}
          >
            Get Started!
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md text-blue-700">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/payment">Donate </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/login">Beneficier </Link>
                </li>
                {/* Conditionally render the form after login */}
                {isAuthenticated && (
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <DonationForm />
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
