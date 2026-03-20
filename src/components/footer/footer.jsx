
const footer = () => {
  return (
    <div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ScienceMock
              </h3>
              <p className="text-gray-400">
                Empowering students to excel in science through innovative mock testing and adaptive learning.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold             text-lg mb-4">Platform</h4>
              <ul className="space-y-2    text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mock Tests</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Study Materials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Tracking</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Subjects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white
                 transition-colors">Physics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chemistry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Biology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mathematics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ScienceMock. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer

