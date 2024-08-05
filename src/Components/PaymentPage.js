import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const upiId = 'carehub@okaxis'; 
  const qrCodeUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnnF6LOIc-g4nnFr4sTXZRvKjUVnK0CNhOA&s'; // Replace with your QR code URL

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-info">
        <div className="upi-details">
          <h2>UPI ID</h2>
          <p>{upiId}</p>
        </div>
        <div className="upi-apps">
          <h2>Pay with UPI Apps</h2>
          <ul>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrEJyc4sONe680_ShobD5LmKwKl31QB1opQ&s" alt="PhonePe" />
             
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJoqaD2F_Z0RA7LPr0BXgbYMZ2350gG7Bf4g&s" alt="Google Pay" />
        
            </li>
            <li>
              <img src="https://logos-world.net/wp-content/uploads/2020/11/Paytm-Symbol.png" alt="Paytm" />
            
            </li>
            <li>
              <img src="https://download.logo.wine/logo/Amazon_Pay/Amazon_Pay-Logo.wine.png" alt="Amazon Pay" />
          
            </li>
          </ul>
        </div>
        <div className="qr-code">
          <h2>QR Code</h2>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;