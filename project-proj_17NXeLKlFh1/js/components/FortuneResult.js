function FortuneResult({ result, loading, userData, selectedType }) {
  try {
    const [showDetailedResult, setShowDetailedResult] = React.useState(false);
    const [detailedFortune, setDetailedFortune] = React.useState(null);
    const [loadingDetailed, setLoadingDetailed] = React.useState(false);
    const resultRef = React.useRef(null);
    
    React.useEffect(() => {
      if (result && resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [result]);
    
    const handleShowDetailed = async () => {
      try {
        setLoadingDetailed(true);
        setShowDetailedResult(true);
        
        // Get detailed fortune
        const detailed = await generateDetailedFortune(userData);
        setDetailedFortune(detailed);
        setLoadingDetailed(false);
      } catch (error) {
        console.error("Error loading detailed fortune:", error);
        setLoadingDetailed(false);
      }
    };
    
    if (!result && !loading) {
      return null;
    }
    
    return React.createElement(
      'section', 
      {
        'data-name': "fortune-result",
        ref: resultRef,
        className: "py-16 bg-[#0c0c1d]"
      },
      React.createElement(
        'div',
        { className: "container mx-auto px-4" },
        React.createElement(
          'div',
          { className: "max-w-3xl mx-auto" },
          loading ? 
            // Loading state
            React.createElement(
              'div',
              { className: "flex flex-col items-center justify-center min-h-[400px]" },
              [
                React.createElement('div', { className: "crystal-ball w-32 h-32 pulse mb-8" }),
                React.createElement('h3', { className: "text-xl font-medium text-purple-400 mb-2" }, "正在解读您的命运..."),
                React.createElement('p', { className: "text-gray-400" }, "请稍候，我们正在连接宇宙能量")
              ]
            ) : 
            // Result state
            React.createElement(
              'div',
              { className: "bg-[#1a1a3a] p-8 rounded-lg border border-purple-900 shadow-lg card-glow fade-in" },
              [
                // Header section
                React.createElement(
                  'div',
                  { className: "text-center mb-8" },
                  [
                    React.createElement(
                      'div',
                      { className: "inline-block p-3 bg-purple-900 bg-opacity-30 rounded-full mb-4" },
                      React.createElement('i', { 
                        className: `fas ${
                          selectedType === 'zodiac' ? 'fa-star' : 
                          selectedType === 'tarot' ? 'fa-cards' : 
                          selectedType === 'palmistry' ? 'fa-hand-sparkles' : 
                          selectedType === 'numerology' ? 'fa-hashtag' : 
                          selectedType === 'iChing' ? 'fa-yin-yang' : 'fa-moon'
                        } text-3xl text-purple-400`
                      })
                    ),
                    React.createElement('h2', { className: "text-2xl font-bold text-white mb-2" }, "命运解读结果"),
                    React.createElement(
                      'p',
                      { className: "text-gray-400" },
                      `${userData?.name ? `${userData.name}，` : ''}以下是您的个人命运解析`
                    )
                  ]
                ),
                
                // Main fortune result
                React.createElement(
                  'div',
                  { className: "mb-8 p-6 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                  [
                    React.createElement('h3', { className: "text-xl font-medium text-purple-400 mb-4" }, "命运预测"),
                    React.createElement('p', { className: "text-gray-200 leading-relaxed reveal-text" }, result.fortune)
                  ]
                ),
                
                // Lucky numbers, colors, directions
                React.createElement(
                  'div',
                  { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" },
                  [
                    // Lucky numbers
                    React.createElement(
                      'div',
                      { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900 text-center" },
                      [
                        React.createElement('h4', { className: "text-sm font-medium text-gray-400 mb-2" }, "幸运数字"),
                        React.createElement(
                          'div',
                          { className: "flex justify-center space-x-3" },
                          result.luckyNumbers.map((num, index) => 
                            React.createElement(
                              'span',
                              { 
                                key: index,
                                className: "inline-block w-8 h-8 rounded-full bg-purple-900 bg-opacity-50 text-white flex items-center justify-center"
                              },
                              num
                            )
                          )
                        )
                      ]
                    ),
                    
                    // Lucky colors
                    React.createElement(
                      'div',
                      { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900 text-center" },
                      [
                        React.createElement('h4', { className: "text-sm font-medium text-gray-400 mb-2" }, "幸运颜色"),
                        React.createElement(
                          'div',
                          { className: "flex justify-center space-x-3" },
                          result.luckyColors.map((color, index) => 
                            React.createElement('span', { key: index, className: "text-white" }, color)
                          )
                        )
                      ]
                    ),
                    
                    // Lucky directions
                    React.createElement(
                      'div',
                      { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900 text-center" },
                      [
                        React.createElement('h4', { className: "text-sm font-medium text-gray-400 mb-2" }, "幸运方位"),
                        React.createElement('span', { className: "text-white" }, result.luckyDirections)
                      ]
                    )
                  ]
                ),
                
                // Zodiac and Chinese zodiac if birth info available
                userData.birthYear && userData.birthMonth && userData.birthDay && React.createElement(
                  'div',
                  { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" },
                  [
                    // Western zodiac
                    React.createElement(
                      'div',
                      { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                      [
                        React.createElement('h4', { className: "text-sm font-medium text-gray-400 mb-2" }, "您的星座"),
                        React.createElement(
                          'div',
                          { className: "flex items-center" },
                          [
                            React.createElement('i', { className: "fas fa-star text-yellow-500 mr-2" }),
                            React.createElement(
                              'span',
                              { className: "text-white" },
                              calculateZodiacSign(parseInt(userData.birthMonth), parseInt(userData.birthDay))
                            )
                          ]
                        )
                      ]
                    ),
                    
                    // Chinese zodiac
                    React.createElement(
                      'div',
                      { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                      [
                        React.createElement('h4', { className: "text-sm font-medium text-gray-400 mb-2" }, "您的生肖"),
                        React.createElement(
                          'div',
                          { className: "flex items-center" },
                          [
                            React.createElement('i', { className: "fas fa-dragon text-red-500 mr-2" }),
                            React.createElement(
                              'span',
                              { className: "text-white" },
                              calculateChineseZodiac(parseInt(userData.birthYear))
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                
                // Detailed result button or section
                !showDetailedResult ? 
                  // Button to show detailed result
                  React.createElement(
                    'div',
                    { className: "text-center mt-8" },
                    React.createElement(
                      'button',
                      {
                        onClick: handleShowDetailed,
                        className: "px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                      },
                      "查看详细解读"
                    )
                  ) : 
                  // Detailed result section
                  React.createElement(
                    'div',
                    { className: "mt-8 fade-in" },
                    [
                      React.createElement('h3', { className: "text-xl font-bold text-white mb-4 text-center" }, "详细命运解析"),
                      
                      loadingDetailed ? 
                        // Loading state for detailed result
                        React.createElement(
                          'div',
                          { className: "flex flex-col items-center justify-center py-12" },
                          [
                            React.createElement(
                              'div',
                              { className: "w-12 h-12 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin mb-4" }
                            ),
                            React.createElement('p', { className: "text-gray-400" }, "正在生成详细解析...")
                          ]
                        ) : 
                        // Detailed result content
                        React.createElement(
                          'div',
                          { className: "space-y-4" },
                          [
                            // Overview
                            React.createElement(
                              'div',
                              { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                              [
                                React.createElement('h4', { className: "text-md font-medium text-purple-400 mb-2" }, "总体概述"),
                                React.createElement('p', { className: "text-gray-200" }, detailedFortune?.overview)
                              ]
                            ),
                            
                            // Career
                            React.createElement(
                              'div',
                              { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                              [
                                React.createElement('h4', { className: "text-md font-medium text-purple-400 mb-2" }, "事业运势"),
                                React.createElement('p', { className: "text-gray-200" }, detailedFortune?.career)
                              ]
                            ),
                            
                            // Love
                            React.createElement(
                              'div',
                              { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                              [
                                React.createElement('h4', { className: "text-md font-medium text-purple-400 mb-2" }, "感情运势"),
                                React.createElement('p', { className: "text-gray-200" }, detailedFortune?.love)
                              ]
                            ),
                            
                            // Health
                            React.createElement(
                              'div',
                              { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                              [
                                React.createElement('h4', { className: "text-md font-medium text-purple-400 mb-2" }, "健康运势"),
                                React.createElement('p', { className: "text-gray-200" }, detailedFortune?.health)
                              ]
                            ),
                            
                            // Wealth
                            React.createElement(
                              'div',
                              { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                              [
                                React.createElement('h4', { className: "text-md font-medium text-purple-400 mb-2" }, "财富运势"),
                                React.createElement('p', { className: "text-gray-200" }, detailedFortune?.wealth)
                              ]
                            ),
                            
                            // Advice
                            React.createElement(
                              'div',
                              { className: "p-4 bg-[#0c0c1d] rounded-lg border border-purple-900" },
                              [
                                React.createElement('h4', { className: "text-md font-medium text-purple-400 mb-2" }, "命运建议"),
                                React.createElement('p', { className: "text-gray-200" }, detailedFortune?.advice)
                              ]
                            )
                          ]
                        ),
                      
                      // Share section
                      React.createElement(
                        'div',
                        { className: "text-center mt-8" },
                        [
                          React.createElement('p', { className: "text-sm text-gray-400 mb-4" }, "对解读结果满意吗？欢迎分享给您的朋友"),
                          React.createElement(
                            'div',
                            { className: "flex justify-center space-x-4" },
                            [
                              React.createElement(
                                'button',
                                { className: "p-2 bg-[#0c0c1d] rounded-full border border-purple-900 text-blue-400 hover:text-blue-300 transition-colors" },
                                React.createElement('i', { className: "fab fa-weixin text-xl" })
                              ),
                              React.createElement(
                                'button',
                                { className: "p-2 bg-[#0c0c1d] rounded-full border border-purple-900 text-red-400 hover:text-red-300 transition-colors" },
                                React.createElement('i', { className: "fab fa-weibo text-xl" })
                              ),
                              React.createElement(
                                'button',
                                { className: "p-2 bg-[#0c0c1d] rounded-full border border-purple-900 text-blue-400 hover:text-blue-300 transition-colors" },
                                React.createElement('i', { className: "fab fa-qq text-xl" })
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                
                // Footer note
                React.createElement(
                  'div',
                  { className: "mt-8 pt-8 border-t border-purple-900 text-center" },
                  React.createElement(
                    'p',
                    { className: "text-sm text-gray-400" },
                    [
                      "命运解读仅供参考，人生的真正主宰是您自己。",
                      React.createElement('br'),
                      "如需更专业的命理咨询，请 ",
                      React.createElement('a', { href: "#contact", className: "text-purple-400 hover:underline" }, "联系我们"),
                      " 预约专业命理师一对一解读。"
                    ]
                  )
                )
              ]
            )
        )
      )
    );
  } catch (error) {
    console.error("FortuneResult component error:", error);
    reportError(error);
    return null;
  }
}
