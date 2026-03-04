import type { FC } from "react";

const ContactUs: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-baitech-navy py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <a href="/" className="transition-transform hover:-translate-y-0.5">
            <img src="/assets/images/logo/Logo.svg" alt="BaiTech" className="h-10 brightness-0 invert" />
          </a>
          <a
            href="/"
            className="text-white/70 text-sm hover:text-baitech-teal transition-colors"
          >
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-baitech-navy mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-12">
          Have questions? We'd love to hear from you. Reach out and we'll respond as soon as we can.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-baitech-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src="/assets/images/logo/whatsapp-business.svg" alt="" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-baitech-navy mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/97336522255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-baitech-teal hover:underline"
                >
                  +973 3652 2255
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-baitech-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-baitech-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-baitech-navy mb-1">Email</h3>
                <a
                  href="mailto:support@baitech.io"
                  className="text-baitech-teal hover:underline"
                >
                  support@baitech.io
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-baitech-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-baitech-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-baitech-navy mb-1">Location</h3>
                <p className="text-gray-600">Bahrain</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-baitech-navy mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-baitech-teal focus:ring-2 focus:ring-baitech-teal/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-baitech-navy mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-baitech-teal focus:ring-2 focus:ring-baitech-teal/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-baitech-navy mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-baitech-teal focus:ring-2 focus:ring-baitech-teal/20 outline-none transition-all resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-baitech-navy text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-baitech-teal"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
