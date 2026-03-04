import type { FC } from "react";

const TermsAndConditions: FC = () => {
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
        <h1 className="text-4xl font-bold text-baitech-navy mb-8">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Welcome to BaiTech. By accessing and using our services, you agree to be bound by
            these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Use of Services</h2>
          <p>
            BaiTech provides a property management platform designed to help property owners manage
            their units, tenants, and maintenance. You agree to use our services only for lawful
            purposes and in accordance with these terms.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and
            for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Pricing</h2>
          <p>
            BaiTech is priced at 1 BHD per unit per month. We offer a free one-month trial for
            new users. Pricing is subject to change with prior notice.
          </p>

          <h2 className="text-2xl font-bold text-baitech-navy mt-8">Contact</h2>
          <p>
            For questions about these terms, please contact us at{" "}
            <a href="mailto:support@baitech.io" className="text-baitech-teal hover:underline">
              support@baitech.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
