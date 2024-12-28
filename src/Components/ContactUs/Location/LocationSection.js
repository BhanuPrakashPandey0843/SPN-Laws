// LocationSection.js
import React from 'react';

const LocationSection = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 animate-fade-in-down">Visit Our Location</h2>
          <p className="mt-4 text-lg text-blue-700 animate-fade-in-up">
            Discover our serene destination
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7219466616723!2d73.77374091437994!3d21.20675468776319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3c3d3068ff%3A0x57b34cbeaad8b9b1!2sGolden%20Bridge%2C%20Anandvalli%2C%20Nashik%2C%20Maharashtra%20422013%2C%20India!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in-right">
              <div className="bg-blue-100 p-6">
                <h3 className="text-lg font-medium text-blue-900">Our Address</h3>
                <p className="mt-2 text-blue-700">
                  Anand Mangal Apartment, Gangapur Rd, Navshya Ganapati Parisar, Ganpati Nagar, Anandvalli, Nashik, Maharashtra 422013
                </p>
              </div>
              <div className="border-t border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-medium text-blue-900">Hours</h3>
                <p className="mt-2 text-blue-700">Monday: 9am - 5pm</p>
                <p className="mt-2 text-blue-700">Tuesday: 9am - 5pm</p>
                <p className="mt-2 text-blue-700">Wednesday: 9am - 5pm</p>
                <p className="mt-2 text-blue-700">Thursday: 9am - 5pm</p>
                <p className="mt-2 text-blue-700">Friday: 9am - 5pm</p>
                <p className="mt-2 text-blue-700">Saturday: 10am - 4pm</p>
                <p className="mt-2 text-blue-700">Sunday: Closed</p>
              </div>
              <div className="border-t border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-medium text-blue-900">Contact</h3>
                <p className="mt-2 text-blue-700">Email: info@example.com</p>
                <p className="mt-2 text-blue-700">Phone: +1 23494 34993</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;