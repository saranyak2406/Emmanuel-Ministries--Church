import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col font-sans">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-charcoal-900 pt-32 pb-20 px-4 md:px-8">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ivory-50 mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-ivory-300 max-w-2xl mx-auto">
            Privacy Policy, Terms & Conditions, and Disclaimers for Emmanuel Gospel Ministries.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow container-max py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-ivory-200">
          
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-4 uppercase tracking-wider border-b border-ivory-200 pb-2">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                At Emmanuel Gospel Ministries, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your data.
              </p>
              <p>
                We only collect information that you voluntarily provide to us, such as when you submit a prayer request, contact us, or make a donation. We will never sell, rent, or share your personal information with third parties without your explicit consent, except as required by law.
              </p>
              <p>
                All prayer requests are treated with the utmost confidentiality.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-4 uppercase tracking-wider border-b border-ivory-200 pb-2">
              Terms & Conditions
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Emmanuel Gospel Ministries' relationship with you in relation to this website.
              </p>
              <p>
                The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-4 uppercase tracking-wider border-b border-ivory-200 pb-2">
              Disclaimer
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                The information contained in this website is for general information purposes only. The information is provided by Emmanuel Gospel Ministries and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
