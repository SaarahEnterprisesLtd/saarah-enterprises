export default function TermsAndConditionsPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
  
        <section className="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            These Terms and Conditions govern your use of this website and the
            services provided by Saarah Enterprises (“we”, “our”, “us”). By
            accessing this website or engaging our services, you agree to these
            terms. If you do not agree, please do not use our website or services.
          </p>
  
          <h2 className="text-xl font-semibold">1. About us</h2>
          <p>
            Saarah Enterprises provides software development, web development,
            mobile application development, and related IT services.
          </p>
  
          <h2 className="text-xl font-semibold">2. Use of our website</h2>
          <ul className="list-disc pl-6">
            <li>You must not misuse this website or attempt to gain unauthorised access.</li>
            <li>You must not use this website for unlawful or harmful purposes.</li>
            <li>Content on this website is for general information only.</li>
          </ul>
  
          <h2 className="text-xl font-semibold">3. Services and quotations</h2>
          <p>
            Any quotations, proposals, or estimates provided by us are indicative
            unless otherwise stated in writing. Final pricing and timelines will
            be confirmed in a written agreement before work begins.
          </p>
  
          <h2 className="text-xl font-semibold">4. Client responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>Provide accurate and complete information required for the project.</li>
            <li>Respond in a timely manner to requests for feedback or approvals.</li>
            <li>Ensure you have rights to any content you provide to us.</li>
          </ul>
  
          <h2 className="text-xl font-semibold">5. Payments</h2>
          <p>
            Payment terms will be agreed in writing before work starts. Late
            payments may result in delays or suspension of services until payment
            is received.
          </p>
  
          <h2 className="text-xl font-semibold">6. Intellectual property</h2>
          <p>
            Unless otherwise agreed, intellectual property rights in work created
            by us remain with Saarah Enterprises until full payment has been
            received. Upon full payment, ownership or usage rights will be
            transferred as agreed in writing.
          </p>
  
          <h2 className="text-xl font-semibold">7. Third-party services</h2>
          <p>
            Our services may involve third-party platforms or tools (such as
            hosting providers, analytics, or email services). We are not
            responsible for the availability, performance, or terms of these
            third-party services.
          </p>
  
          <h2 className="text-xl font-semibold">8. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Saarah Enterprises shall not
            be liable for any indirect, incidental, or consequential losses
            arising from the use of our website or services.
          </p>
  
          <h2 className="text-xl font-semibold">9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend services if these Terms
            are breached or if required by law.
          </p>
  
          <h2 className="text-xl font-semibold">10. Privacy</h2>
          <p>
            Your use of our website and services is also governed by our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
  
          <h2 className="text-xl font-semibold">11. Changes to these terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. Any changes
            will be posted on this page.
          </p>
  
          <h2 className="text-xl font-semibold">12. Governing law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance
            with the laws of England and Wales. Any disputes shall be subject to
            the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>
      </main>
    );
  }
  