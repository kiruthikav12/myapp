import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How do I schedule an online consultation with a doctor?",
    answer: "You can schedule an online consultation with a doctor by signing up for the CareHub website."
  },
  {
    question: "Why choose CareHub for an online doctor consultation?",
    answer: "CareHub offers unlimited online consultations with top doctors across various specialties, ensuring quality healthcare at your convenience."
  },
  {
    question: "How do I pay for an online consultation?",
    answer: "You can pay for an online consultation through the CareHub web using various payment methods including credit/debit cards, UPI apps."
  },
  {
    question: "How long does an online consultation typically last?",
    answer: "An online consultation typically lasts around 15-20 minutes, depending on the nature of the consultation."
  },
  {
    question: "Can I have an online consultation with my regular doctor?",
    answer: "Yes, you can have an online consultation with your regular doctor if they are available on the CareHub platform."
  },
  {
    question: "How do I know if the online doctor I am consulting is qualified?",
    answer: "All doctors on CareHub are verified and qualified medical professionals with the necessary certifications and experience."
  },
  {
    question: "Can I receive a diagnosis through an online doctor consultation?",
    answer: "Yes, you can receive a diagnosis through an online consultation. However, for certain conditions, a physical examination may be required."
  }
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            {item.question}
            <span className={`arrow ${selectedQuestion === index ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`faq-answer ${selectedQuestion === index ? 'show' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;