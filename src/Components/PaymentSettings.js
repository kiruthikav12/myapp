import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSettings.css';

const PaymentSettings = () => {
  const [cards, setCards] = useState([
    { id: 1, type: 'Mastercard', number: '**** **** **** 3193', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png' },
    { id: 2, type: 'Visa', number: '**** **** **** 4296', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslE3LAjzhifcRXFCbrG_7hhCi541FkLSdQA&s' }
  ]);
  
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  const navigate = useNavigate();

  const navigateToPayment = () => {
    navigate('/payment');
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    
    const newCard = {
      id: cards.length + 1,
      type: 'Unknown',  
      number: cardNumber,
      img: 'https://via.placeholder.com/40x25?text=Card'  
    };

    setCards([...cards, newCard]);
    setCardHolder('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleRemoveCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handlePayNow = () => {
    if (!cardHolder || !cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all card details before proceeding with the payment.');
      return;
    }
    navigate('/thankyou'); 
  };

  return (
    <div className="payment-settings-container">
      <div className="tabs">
        <div className="tab active">Account</div>
        <div className="tab" onClick={navigateToPayment}>Payment</div>
      </div>
      <div className="content">
        <h3>Saved cards:</h3>
        <div className="card-list">
          {cards.map(card => (
            <div key={card.id} className="card-item">
              <img src={card.img} alt={card.type} />
              <span>{card.number}</span>
              <button className="remove-card-btn" onClick={() => handleRemoveCard(card.id)}>Remove card</button>
            </div>
          ))}
        </div>
        <h3>Add new card:</h3>
        <form className="card-form" onSubmit={handleAddCard}>
          <div className="form-group">
            <label htmlFor="cardholder">Card holder name</label>
            <input
              type="text"
              id="cardholder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardnumber">Card number</label>
            <input
              type="text"
              id="cardnumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="5134-5264-..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiry">Exp. date</label>
            <input
              type="text"
              id="expiry"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="*"
            />
          </div>
          <button type="submit" className="add-card-btn">Add card</button>
        </form>
        <div className="pay-now-container">
          <button className="pay-now-btn" onClick={handlePayNow}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;
