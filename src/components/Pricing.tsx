
import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Monthly",
      price: "$9.99",
      period: "/month",
      popular: false,
      features: [
        "Unlimited bandwidth",
        "5000+ servers worldwide",
        "5 simultaneous connections",
        "24/7 customer support",
        "30-day money back guarantee"
      ]
    },
    {
      name: "Annual",
      price: "$4.99",
      period: "/month",
      popular: true,
      originalPrice: "$9.99",
      savings: "Save 50%",
      features: [
        "Everything in Monthly plan",
        "Priority server access",
        "Advanced security features",
        "Dedicated customer support",
        "Free additional security tools"
      ]
    },
    {
      name: "2-Year",
      price: "$2.99",
      period: "/month",
      popular: false,
      originalPrice: "$9.99",
      savings: "Save 70%",
      features: [
        "Everything in Annual plan",
        "Static IP address",
        "Port forwarding",
        "Split tunneling",
        "Ad & malware blocker"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features 
            with no hidden fees or surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-slate-800 rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-lg mb-1">
                      {plan.originalPrice}/month
                    </div>
                  )}
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="text-green-400 font-semibold mt-2">
                      {plan.savings}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-slate-700 hover:bg-slate-600 border border-slate-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
