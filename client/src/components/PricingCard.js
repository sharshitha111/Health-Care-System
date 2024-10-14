import React from "react";
import "./PricingCard.css"; 
import { useNavigate } from "react-router-dom";

export default function PricingCard() {
  const navigate = useNavigate();

  const insurancePackages = [
    {
      name: "GOLD Hospital Insurance Package",
      premium: "LKR 15,000.00",
      policyFee: "LKR 1,000.00",
      discount: "LKR 2,000.00",
      benefits: [
        "Comprehensive in-patient and out-patient coverage.",
        "Access to private rooms during hospitalization.",
        "Coverage for diagnostic tests and specialist consultations.",
        "Emergency ambulance services and critical care coverage."
      ],
      amount: "LKR 14,000.00"
    },
    {
      name: "SILVER Hospital Insurance Package",
      premium: "LKR 12,000.00",
      policyFee: "LKR 1,000.00",
      discount: "LKR 1,500.00",
      benefits: [
      "Extensive in-patient and out-patient treatment coverage.",
"Access to private rooms during hospitalization.",
"Coverage for advanced diagnostic tests and expert specialist consultations.",
"Emergency ambulance support and critical care treatment coverage."
      ],
      amount: "LKR 11,500.00"
    },
    {
      name: "PLATINUM Hospital Insurance Package",
      premium: "LKR 18,000.00",
      policyFee: "LKR 1,000.00",
      discount: "LKR 3,000.00",
      benefits: [
        "Premium access to private hospitals and VIP rooms.",
        "Coverage for advanced surgeries and critical care treatments.",
        "Annual health check-ups and wellness programs included.",
        "24/7 telemedicine and personalized healthcare concierge service."
      ],
      amount: "LKR 16,000.00"
    },
    {
      name: "BASIC Hospital Insurance Package",
      premium: "LKR 8,000.00",
      policyFee: "LKR 500.00",
      discount: "LKR 500.00",
      benefits: [
        "Exclusive access to top-tier private hospitals and VIP suites.",
        "Comprehensive coverage for complex surgeries and specialized treatments.",
       "Inclusion of annual preventive health screenings and wellness initiatives.",
        "Round-the-clock telemedicine consultations with priority care assistance."
      ],amount: "LKR 8,000.00"
    },
    {
      name: "FAMILY Hospital Insurance Package",
      premium: "LKR 25,000.00",
      policyFee: "LKR 1,500.00",
      discount: "LKR 5,000.00",
      benefits: [
        "Specialized care for chronic conditions and elderly needs.",
        "Coverage for home nursing and rehabilitation services.",
        "Unlimited telemedicine consultations.",
        "Discounted rates on prescribed medication and lab tests."
      ],
      amount: "LKR 21,500.00"
    },
    {
      name: "SENIOR Hospital Insurance Package",
      premium: "LKR 20,000.00",
      policyFee: "LKR 1,000.00",
      discount: "LKR 3,000.00",
      benefits: [
        "Specialized care for chronic conditions and elderly needs.",
        "Coverage for home nursing and rehabilitation services.",
        "Unlimited telemedicine consultations.",
        "Discounted rates on prescribed medication and lab tests."
      ],
      amount: "LKR 18,000.00"
    }
  ];

  return (
    <div className="insurance-packages">
      <h2 className="insurance-packages-heading">Insurance Packages</h2><br/>
      <div className="package-container">
        {insurancePackages.map((ipackage, index) => (
          <div key={index} className="package-box">
            <h3 className="package-header">{ipackage.name}</h3>
            <p className="packagedetails">Basic premium: {ipackage.premium}</p>
            <p className="packagedetails">Policy Fee: {ipackage.policyFee}</p>
            <p className="packagedetails">Discount: {ipackage.discount}</p>
            <p className="packagedetails">Benefits:</p>
            <ul>
              {ipackage.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <h1 className="amount-button">{ipackage.amount}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
