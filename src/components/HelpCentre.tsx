"use client";
import { useState } from "react";

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by entering your order ID in the Order Tracking page. If you don&apos;t have an order ID, please contact our support team.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, PayPal, and other popular payment methods. Please check our checkout page for the full list of supported methods.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Unfortunately, once an order is placed, it cannot be modified. However, you can contact our support team, and we will assist you with cancellations or exchanges.",
    },
    {
      question: "How do I return a product?",
      answer:
        "To return a product, please visit our Return &amp; Exchange page, where you can fill out a return request form. We will process your return as quickly as possible.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-xl font-medium p-4 border-b hover:bg-gray-100"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50 border-b">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Help Center Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
        <p className="mb-4">
          If you couldn&apos;t find the answer to your question, feel free to contact our support team.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="/contact"
            className="block text-lg bg-violet-600 text-white py-2 px-4 rounded-lg text-center hover:bg-violet-700"
          >
            Contact Support
          </a>
          <a
            href="/return-exchange"
            className="block text-lg bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700"
          >
            Return &amp; Exchange Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
