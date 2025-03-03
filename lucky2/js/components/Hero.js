function Hero() {
  try {
    return React.createElement(
      'section',
      {
        'data-name': "hero",
        id: "home",
        className: "relative py-20 overflow-hidden cosmic-bg bg-[#0c0c1d] bg-blend-overlay"
      },
      [
        React.createElement(
          'div',
          {
            className: "absolute inset-0 star-field"
          }
        ),
        
        React.createElement(
          'div',
          {
            className: "container mx-auto px-4 relative z-10"
          },
          [
            React.createElement(
              'div',
              {
                className: "flex flex-col md:flex-row items-center"
              },
              [
                React.createElement(
                  'div',
                  {
                    'data-name': "hero-content",
                    className: "md:w-1/2 text-center md:text-left mb-10 md:mb-0"
                  },
                  [
                    React.createElement(
                      'h1',
                      {
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                      },
                      [
                        React.createElement(
                          'span',
                          {
                            className: "block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                          },
                          "揭开命运的"
                        ),
                        React.createElement(
                          'span',
                          {
                            className: "block text-white mt-2"
                          },
                          "神秘面纱"
                        )
                      ]
                    ),
                    React.createElement(
                      'p',
                      {
                        className: "text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
                      },
                      "通过古老智慧和现代解析，探索您命运的轨迹，获取对未来的洞察和指引。无论是事业、爱情还是财富，我们都能为您提供专业的命理分析。"
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "flex flex-wrap justify-center md:justify-start gap-4"
                      },
                      [
                        React.createElement(
                          'a',
                          {
                            href: "#fortune-form",
                            className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                          },
                          "立即解读"
                        ),
                        React.createElement(
                          'a',
                          {
                            href: "#fortune-types",
                            className: "px-8 py-3 bg-transparent border border-purple-500 text-purple-400 rounded-full font-medium hover:bg-purple-900 hover:bg-opacity-20 transition-all"
                          },
                          "了解服务"
                        )
                      ]
                    )
                  ]
                ),
                
                React.createElement(
                  'div',
                  {
                    'data-name': "hero-image",
                    className: "md:w-1/2 flex justify-center"
                  },
                  React.createElement(
                    'div',
                    {
                      className: "relative"
                    },
                    [
                      React.createElement(
                        'div',
                        {
                          className: "crystal-ball w-64 h-64 md:w-80 md:h-80 floating"
                        },
                        React.createElement(
                          'div',
                          {
                            className: "absolute inset-0 flex items-center justify-center"
                          },
                          React.createElement(
                            'img',
                            {
                              src: "https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                              alt: "神秘水晶球",
                              className: "w-full h-full object-cover rounded-full opacity-70"
                            }
                          )
                        )
                      ),
                      
                      React.createElement(
                        'div',
                        {
                          className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
                        },
                        [
                          React.createElement(
                            'div',
                            {
                              className: "absolute -top-16 -left-16 w-20 h-20 rotate-slow opacity-80"
                            },
                            React.createElement(
                              'i',
                              {
                                className: "fas fa-star text-yellow-400 text-3xl"
                              }
                            )
                          ),
                          React.createElement(
                            'div',
                            {
                              className: "absolute -bottom-8 -right-8 w-16 h-16 rotate-slow opacity-80"
                            },
                            React.createElement(
                              'i',
                              {
                                className: "fas fa-moon text-blue-400 text-3xl"
                              }
                            )
                          ),
                          React.createElement(
                            'div',
                            {
                              className: "absolute top-10 -right-10 w-14 h-14 rotate-slow opacity-80"
                            },
                            React.createElement(
                              'i',
                              {
                                className: "fas fa-sun text-orange-400 text-2xl"
                              }
                            )
                          )
                        ]
                      )
                    ]
                  )
                )
              ]
            ),
            
            React.createElement(
              'div',
              {
                'data-name': "hero-stats",
                className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
              },
              [
                React.createElement(
                  'div',
                  {
                    className: "p-4 rounded-lg bg-[#1a1a3a] bg-opacity-50 border border-purple-900"
                  },
                  [
                    React.createElement(
                      'div',
                      {
                        className: "text-3xl font-bold text-purple-400 mb-2"
                      },
                      "10,000+"
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "text-sm text-gray-400"
                      },
                      "命盘解析"
                    )
                  ]
                ),
                React.createElement(
                  'div',
                  {
                    className: "p-4 rounded-lg bg-[#1a1a3a] bg-opacity-50 border border-purple-900"
                  },
                  [
                    React.createElement(
                      'div',
                      {
                        className: "text-3xl font-bold text-blue-400 mb-2"
                      },
                      "98%"
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "text-sm text-gray-400"
                      },
                      "客户满意度"
                    )
                  ]
                ),
                React.createElement(
                  'div',
                  {
                    className: "p-4 rounded-lg bg-[#1a1a3a] bg-opacity-50 border border-purple-900"
                  },
                  [
                    React.createElement(
                      'div',
                      {
                        className: "text-3xl font-bold text-purple-400 mb-2"
                      },
                      "15+"
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "text-sm text-gray-400"
                      },
                      "年专业经验"
                    )
                  ]
                ),
                React.createElement(
                  'div',
                  {
                    className: "p-4 rounded-lg bg-[#1a1a3a] bg-opacity-50 border border-purple-900"
                  },
                  [
                    React.createElement(
                      'div',
                      {
                        className: "text-3xl font-bold text-blue-400 mb-2"
                      },
                      "5种"
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "text-sm text-gray-400"
                      },
                      "命理分析"
                    )
                  ]
                )
              ]
            )
          ]
        )
      ]
    );
  } catch (error) {
    console.error("Hero component error:", error);
    reportError(error);
    return null;
  }
}
