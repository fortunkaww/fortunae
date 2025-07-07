
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Fortune VPN and how does it work?",
      answer: "Fortune VPN is a virtual private network service that creates a secure, encrypted tunnel between your device and our servers. This protects your online activity from hackers, ISPs, and government surveillance while allowing you to browse the internet anonymously."
    },
    {
      question: "How many devices can I use with one subscription?",
      answer: "Depending on your plan, you can connect 5-10 devices simultaneously with one Fortune VPN subscription. This includes computers, smartphones, tablets, smart TVs, and routers."
    },
    {
      question: "Do you keep logs of my online activity?",
      answer: "No, Fortune VPN has a strict no-logs policy. We do not track, collect, or store any information about your online activities, browsing history, or personal data. Your privacy is our top priority."
    },
    {
      question: "Can I use Fortune VPN for streaming?",
      answer: "Yes! Fortune VPN is optimized for streaming with high-speed servers specifically configured for popular streaming platforms. Enjoy your favorite content without buffering or restrictions."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with Fortune VPN within the first 30 days, contact our support team for a full refund, no questions asked."
    },
    {
      question: "Is Fortune VPN legal to use?",
      answer: "Yes, using a VPN is legal in most countries. However, we encourage users to comply with local laws and terms of service of websites and services they access through our VPN."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Fortune VPN? We've got answers. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
