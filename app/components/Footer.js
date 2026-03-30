
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-4 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LE</span>
              </div>
              <span className="text-xl font-bold">Lexara Edu</span>
            </div>
            <p className="text-gray-400 mt-4 mb-5">
              Making your school world-class with the right digital technology.
            </p>
            <div className="text-gray-400">
              <div>© 2025 Lemtech Hub Nigeria Ltd.</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div>+234 803 626 5605</div>
              <div>Live Chat Available</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">Home</a>
              <a href="#features" className="block hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="block hover:text-white transition-colors">Benefits</a>
              <a href="#pricing" className="block hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block hover:text-white transition-colors">Login</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">About Us</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
              <a href="#" className="block hover:text-white transition-colors">Affiliate</a>
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}