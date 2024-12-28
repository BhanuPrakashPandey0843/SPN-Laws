import React from 'react';
import iconspn from './images/iconspn.png';

const Container = () => {
  return (
    <div style={headerStyle}>
      <div className="container relative">
       
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ ...iconStyle, ...iconPositionStyle }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        >
        </svg>
        <div className="flex flex-col mb-8">
          <a href="/" className="mb-6">
            
          </a>
          <div className="max-w-md mb-6">
            <h2 style={titleStyle}>
              <span style={highlightStyle}>
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-20 -mt-6 -ml-10 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <rect fill="url(#pattern)" width="52" height="24" />
                </svg>
                <span style={highlightTextStyle}>Contact Us</span>
              </span>{' '}
              for More Information and Assistance
            </h2>
            <p style={paragraphStyle}>
              Need assistance or have questions? At SPN, we're here to help. Contact our support team via form, email, or phone, and we'll respond promptly. Your satisfaction is our priority.
            </p>
          </div>


          <div>
            <button style={{ ...buttonStyle, ...buttonHoverStyle }} className='h-fit'>
              Apply Now
              <svg fill="currentColor" viewBox="0 0 24 24" style={iconStyle}>
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
 {/*Jassi ye part of code image ke liye h  */}
          <svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute top-1/2 right-0 transform -translate-y-1/2"
  style={{ width: '40px', height: '40px', marginRight: '20px' }}
>
 
  <image src={iconspn} height="100%" width="100%" />
</svg>

    {/*Jassi ye part of code image ke liye h nd yaha pr khtm ho ga  */}      
        </div>
      </div>
    </div>
  );
};

const headerStyle = {
  background: 'linear-gradient(135deg, #2F4B79 0%, #1E3A61 100%)',
  borderRadius: '15px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  margin: '20px',
  padding: '20px',
};

const titleStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#fff',
  lineHeight: '1.3',
  position: 'relative',
  marginBottom: '1rem',
};

const highlightStyle = {
  position: 'relative',
  display: 'inline-block',
};

const highlightTextStyle = {
  position: 'relative',
  zIndex: 10,
};

const paragraphStyle = {
  fontSize: '1rem',
  color: '#d1d5db',
  lineHeight: '1.6',
};

const buttonStyle = {
  position: 'relative',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  padding: '0.75rem 1.75rem',
  backgroundColor: '#CCA559',
  borderRadius: '9999px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#fff',
  gap: '10px',
  fontWeight: 'bold',
  border: '3px solid rgba(255, 255, 255, 0.3)',
  outline: 'none',
  overflow: 'hidden',
  fontSize: '1rem',
};

const buttonHoverStyle = {
  transform: 'scale(1.05)',
};

const iconStyle = {
  width: '24px',
  height: '24px',
  transition: 'all 0.3s ease-in-out',
};

const iconPositionStyle = {
  right: '20px',
};

export default Container;