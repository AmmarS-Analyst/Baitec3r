import type { FC } from "react";

const PrivacyPolicy: FC = () => {
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
        <h1 className="text-4xl font-bold text-baitech-navy mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            At BaiTech, we take your privacy seriously. This Privacy Policy describes how we collect,
            use, and share information about you when you use our services.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account,
            use our services, or communicate with us. This may include your name, email address,
            phone number, property details, and payment information.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            process transactions, send notifications, and communicate with you about our products.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@baitech.io" className="text-baitech-teal hover:underline">
              support@baitech.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
