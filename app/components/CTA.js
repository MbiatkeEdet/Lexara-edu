
export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the league of ambitious schools leveraging technology to simplify management and achieve academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-500 mt-4">
            Get started in 10 minutes • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}