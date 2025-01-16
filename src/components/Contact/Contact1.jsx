import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    requirements: '',
    budget: '',
    captcha: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.requirements) newErrors.requirements = 'Requirements are required';
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (!formData.captcha) newErrors.captcha = 'Please complete the captcha';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Removed unwanted padding */}
      <div className="bg-black text-white py-20 px-4 md:px-8 border-b border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Contact <span className="text-emerald-400">Us</span>
          </h1>
          <div className="w-32 h-1 bg-emerald-500 mt-6"></div>
        </div>
      </div>

      {/* Form Section - Improved spacing and layout */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gray-300 p-8 md:p-10 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1  py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700">
                Company Name*
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
              {errors.companyName && <p className="text-sm text-red-600">{errors.companyName}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="requirements" className="block text-sm font-semibold text-gray-700">
                Requirements*
              </label>
              <textarea
                name="requirements"
                id="requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                className="mt-1 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
              {errors.requirements && <p className="text-sm text-red-600">{errors.requirements}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700">
                Budget*
              </label>
              <select
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="">-Select-</option>
                <option value="small">Less than $5,000</option>
                <option value="medium">$5,000 - $10,000</option>
                <option value="large">$10,000+</option>
              </select>
              {errors.budget && <p className="text-sm text-red-600">{errors.budget}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="captcha" className="block text-sm font-semibold text-gray-700">
                Captcha*
              </label>
              <div className="mt-1 py-2 flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <span className="font-mono text-lg">WEB2eb</span>
                </div>
                <button
                  type="button"
                  className="text-emerald-500 hover:text-emerald-600 transition-colors"
                  onClick={() => console.log('Reload captcha')}
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
              <input
                type="text"
                name="captcha"
                id="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
              {errors.captcha && <p className="text-sm text-red-600">{errors.captcha}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-16 border-t pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">For business enquiries:</h3>
                <div className="mt-3 space-y-2">
                  <p className="text-gray-600">soumya.sharma@webeesocial.com</p>
                  <p className="text-gray-600">shubhendu.jha@webeesocial.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">For job queries:</h3>
                <p className="mt-3 text-gray-600">hr@webeesocial.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;