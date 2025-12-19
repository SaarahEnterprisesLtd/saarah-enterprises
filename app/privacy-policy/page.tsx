export default function PrivacyPolicyPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
  
        <section className="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Saarah Enterprises (“we”, “our”, “us”) respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and protect your information in
            accordance with the UK General Data Protection Regulation (UK GDPR)
            and the Data Protection Act 2018.
          </p>
  
          <h2 className="text-xl font-semibold">1. Who we are</h2>
          <p>
            Saarah Enterprises is a software development and IT services provider.
            If you have any questions about this policy, you can contact us at:
          </p>
          <ul className="list-disc pl-6">
            <li>Email: contact@saarahenterprises.com</li>
          </ul>
  
          <h2 className="text-xl font-semibold">2. What personal data we collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Message content submitted through our contact forms</li>
            <li>Technical data such as IP address and browser type (via analytics)</li>
          </ul>
  
          <h2 className="text-xl font-semibold">3. How we collect your data</h2>
          <ul className="list-disc pl-6">
            <li>When you submit a contact or enquiry form</li>
            <li>When you contact us by email</li>
            <li>Automatically through website analytics tools</li>
          </ul>
  
          <h2 className="text-xl font-semibold">4. How we use your data</h2>
          <p>We use your personal data to:</p>
          <ul className="list-disc pl-6">
            <li>Respond to enquiries and provide quotes</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
  
          <h2 className="text-xl font-semibold">5. Lawful basis for processing</h2>
          <p>
            Under UK GDPR, we rely on the following lawful bases:
          </p>
          <ul className="list-disc pl-6">
            <li>Consent – when you submit a form or contact us</li>
            <li>Legitimate interests – to operate and improve our business</li>
            <li>Legal obligation – where required by law</li>
          </ul>
  
          <h2 className="text-xl font-semibold">6. Data sharing</h2>
          <p>
            We do not sell or rent your personal data. We may share your data only
            with trusted third parties such as:
          </p>
          <ul className="list-disc pl-6">
            <li>Email service providers (e.g. SendGrid)</li>
            <li>Analytics providers (e.g. Google Analytics)</li>
          </ul>
          <p>
            These providers process data on our behalf and are required to keep
            your information secure.
          </p>
  
          <h2 className="text-xl font-semibold">7. Data retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes outlined in this policy, or as required by law.
          </p>
  
          <h2 className="text-xl font-semibold">8. Your data protection rights</h2>
          <p>
            Under UK GDPR, you have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise your rights, please contact us using the details above.
          </p>
  
          <h2 className="text-xl font-semibold">9. Cookies</h2>
          <p>
            Our website may use cookies for analytics and performance purposes.
            You can control cookies through your browser settings.
          </p>
  
          <h2 className="text-xl font-semibold">10. Data security</h2>
          <p>
            We take appropriate technical and organisational measures to protect
            your personal data from unauthorised access, loss, or misuse.
          </p>
  
          <h2 className="text-xl font-semibold">11. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page.
          </p>
  
          <h2 className="text-xl font-semibold">12. Complaints</h2>
          <p>
            If you are not satisfied with how we handle your data, you have the
            right to lodge a complaint with the UK Information Commissioner’s
            Office (ICO):
          </p>
          <p>
            Website: https://www.ico.org.uk
          </p>
        </section>
      </main>
    );
  }
  