function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer data-name="footer" className="bg-[#0a0a1a] text-gray-300 border-t border-purple-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-name="footer-about">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 mr-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-900 flex items-center justify-center">
                  <i className="fas fa-moon text-lg text-white"></i>
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">神秘命运</h3>
              </div>
              <p className="text-sm mb-4">我们致力于通过古老智慧揭示人生奥秘，提供专业的命理分析、星座解读和塔罗牌预测，帮助您更好地理解自己的命运轨迹。</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fab fa-weixin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fab fa-weibo text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fab fa-qq text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
              </div>
            </div>
            
            <div data-name="footer-links">
              <h3 className="text-lg font-bold mb-4 text-white">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">首页</a></li>
                <li><a href="#fortune-types" className="text-gray-400 hover:text-purple-400 transition-colors">命理服务</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors">客户见证</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">联系我们</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">隐私政策</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">服务条款</a></li>
              </ul>
            </div>
            
            <div data-name="footer-contact" id="contact">
              <h3 className="text-lg font-bold mb-4 text-white">联系我们</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-purple-500"></i>
                  <span>contact@mysticfortune.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-purple-500"></i>
                  <span>+86 123 4567 8910</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-purple-500"></i>
                  <span>北京市朝阳区星光大道88号紫霞大厦</span>
                </li>
                <li className="mt-4">
                  <form className="flex">
                    <input 
                      type="email" 
                      placeholder="订阅我们的命理周报" 
                      className="px-4 py-2 bg-[#1a1a3a] border border-purple-900 rounded-l text-white focus:outline-none focus:ring-1 focus:ring-purple-500 flex-grow"
                    />
                    <button 
                      type="submit"
                      className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-r transition-colors"
                    >
                      订阅
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-900 mt-8 pt-8 text-center text-sm">
            <p>&copy; {currentYear} 神秘命运 | 探索命运的奥秘 | 所有解读仅供参考</p>
            <p className="mt-2 text-gray-500">网站内容仅供娱乐，不构成任何专业建议。命理分析不能替代医疗、法律、财务等专业咨询。</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    reportError(error);
    return null;
  }
}
