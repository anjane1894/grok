function FortuneTypes({ onTypeSelect, selectedType }) {
  try {
    const fortuneTypes = [
      {
        id: 'zodiac',
        name: '星座运势',
        description: '基于西方占星学，解读星座对您性格和命运的影响',
        icon: 'fa-star',
        color: 'from-purple-500 to-blue-500'
      },
      {
        id: 'tarot',
        name: '塔罗牌',
        description: '通过神秘的塔罗牌，揭示您当前的处境和未来的可能性',
        icon: 'fa-gem',
        color: 'from-red-500 to-purple-500'
      },
      {
        id: 'palmistry',
        name: '手相解读',
        description: '分析手掌纹路，预测健康、事业、爱情和财富',
        icon: 'fa-hand-sparkles',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'numerology',
        name: '数字命理',
        description: '通过您的生日和姓名，计算对应的命运数字及其含义',
        icon: 'fa-hashtag',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        id: 'iChing',
        name: '易经八卦',
        description: '基于中国古老智慧，预测事业、健康、感情等方面的运势',
        icon: 'fa-yin-yang',
        color: 'from-green-500 to-teal-500'
      }
    ];
    
    return (
      <section data-name="fortune-types" id="fortune-types" className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">探索命理服务</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              我们提供多种命理解读方式，每种都基于古老的智慧和现代的解析方法，选择最适合您的方式开始探索命运奥秘
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fortuneTypes.map((type) => (
              <div 
                key={type.id}
                data-name={`fortune-type-${type.id}`}
                className={`bg-[#1a1a3a] p-6 rounded-lg border border-purple-900 shadow-lg fortune-card cursor-pointer ${selectedType === type.id ? 'ring-2 ring-purple-500' : ''}`}
                onClick={() => onTypeSelect(type.id)}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mb-4`}>
                  <i className={`fas ${type.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-400">
                    {selectedType === type.id ? '已选择' : '点击选择'}
                  </span>
                  <i className={`fas fa-arrow-right text-purple-400 ${selectedType === type.id ? 'opacity-100' : 'opacity-50'}`}></i>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#fortune-form" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              开始解读
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("FortuneTypes component error:", error);
    reportError(error);
    return null;
  }
}
