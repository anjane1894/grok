function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    return React.createElement(
      'footer',
      {
        'data-name': "footer",
        className: "bg-[#0a0a1a] text-gray-300 border-t border-purple-900"
      },
      React.createElement(
        'div',
        {
          className: "container mx-auto px-4 py-12"
        },
        [
          React.createElement(
            'div',
            {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8"
            },
            [
              React.createElement(
                'div',
                {
                  'data-name': "footer-about"
                },
                [
                  React.createElement(
                    'div',
                    {
                      className: "flex items-center mb-4"
                    },
                    [
                      React.createElement(
                        'div',
                        {
                          className: "h-10 w-10 mr-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-900 flex items-center justify-center"
                        },
                        React.createElement(
                          'i',
                          {
                            className: "fas fa-moon text-lg text-white"
                          }
                        )
                      ),
                      React.createElement(
                        'h3',
                        {
                          className: "text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                        },
                        "神秘命运"
                      )
                    ]
                  ),
                  React.createElement(
                    'p',
                    {
                      className: "text-sm mb-4"
                    },
                    "我们致力于通过古老智慧揭示人生奥秘，提供专业的命理分析、星座解读和塔罗牌预测，帮助您更好地理解自己的命运轨迹。"
                  ),
                  React.createElement(
                    'div',
                    {
                      className: "flex space-x-4"
                    },
                    [
                      React.createElement(
                        'a',
                        {
                          href: "#",
                          className: "text-gray-400 hover:text-purple-400 transition-colors"
                        },
                        React.createElement(
                          'i',
                          {
                            className: "fab fa-weixin text-xl"
                          }
                        )
                      ),
                      React.createElement(
                        'a',
                        {
                          href: "#",
                          className: "text-gray-400 hover:text-purple-400 transition-colors"
                        },
                        React.createElement(
                          'i',
                          {
                            className: "fab fa-weibo text-xl"
                          }
                        )
                      ),
                      React.createElement(
                        'a',
                        {
                          href: "#",
                          className: "text-gray-400 hover:text-purple-400 transition-colors"
                        },
                        React.createElement(
                          'i',
                          {
                            className: "fab fa-qq text-xl"
                          }
                        )
                      ),
                      React.createElement(
                        'a',
                        {
                          href: "#",
                          className: "text-gray-400 hover:text-purple-400 transition-colors"
                        },
                        React.createElement(
                          'i',
                          {
                            className: "fab fa-tiktok text-xl"
                          }
                        )
                      )
                    ]
                  )
                ]
              ),
              
              React.createElement(
                'div',
                {
                  'data-name': "footer-links"
                },
                [
                  React.createElement(
                    'h3',
                    {
                      className: "text-lg font-bold mb-4 text-white"
                    },
                    "快速链接"
                  ),
                  React.createElement(
                    'ul',
                    {
                      className: "space-y-2"
                    },
                    [
                      React.createElement('li', {}, React.createElement('a', { href: "#home", className: "text-gray-400 hover:text-purple-400 transition-colors" }, "首页")),
                      React.createElement('li', {}, React.createElement('a', { href: "#fortune-types", className: "text-gray-400 hover:text-purple-400 transition-colors" }, "命理服务")),
                      React.createElement('li', {}, React.createElement('a', { href: "#testimonials", className: "text-gray-400 hover:text-purple-400 transition-colors" }, "客户见证")),
                      React.createElement('li', {}, React.createElement('a', { href: "#contact", className: "text-gray-400 hover:text-purple-400 transition-colors" }, "联系我们")),
                      React.createElement('li', {}, React.createElement('a', { href: "#", className: "text-gray-400 hover:text-purple-400 transition-colors" }, "隐私政策")),
                      React.createElement('li', {}, React.createElement('a', { href: "#", className: "text-gray-400 hover:text-purple-400 transition-colors" }, "服务条款"))
                    ]
                  )
                ]
              ),
              
              React.createElement(
                'div',
                {
                  'data-name': "footer-contact",
                  id: "contact"
                },
                [
                  React.createElement(
                    'h3',
                    {
                      className: "text-lg font-bold mb-4 text-white"
                    },
                    "联系我们"
                  ),
                  React.createElement(
                    'ul',
                    {
                      className: "space-y-2"
                    },
                    [
                      React.createElement(
                        'li',
                        {
                          className: "flex items-center"
                        },
                        [
                          React.createElement('i', { className: "fas fa-envelope mr-2 text-purple-500" }),
                          React.createElement('span', {}, "contact@mysticfortune.com")
                        ]
                      ),
                      React.createElement(
                        'li',
                        {
                          className: "flex items-center"
                        },
                        [
                          React.createElement('i', { className: "fas fa-phone mr-2 text-purple-500" }),
                          React.createElement('span', {}, "+86 123 4567 8910")
                        ]
                      ),
                      React.createElement(
                        'li',
                        {
                          className: "flex items-center"
                        },
                        [
                          React.createElement('i', { className: "fas fa-map-marker-alt mr-2 text-purple-500" }),
                          React.createElement('span', {}, "北京市朝阳区星光大道88号紫霞大厦")
                        ]
                      ),
                      React.createElement(
                        'li',
                        {
                          className: "mt-4"
                        },
                        React.createElement(
                          'form',
                          {
                            className: "flex"
                          },
                          [
                            React.createElement(
                              'input',
                              {
                                type: "email",
                                placeholder: "订阅我们的命理周报",
                                className: "px-4 py-2 bg-[#1a1a3a] border border-purple-900 rounded-l text-white focus:outline-none focus:ring-1 focus:ring-purple-500 flex-grow"
                              }
                            ),
                            React.createElement(
                              'button',
                              {
                                type: "submit",
                                className: "bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-r transition-colors"
                              },
                              "订阅"
                            )
                          ]
                        )
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          
          React.createElement(
            'div',
            {
              className: "border-t border-purple-900 mt-8 pt-8 text-center text-sm"
            },
            [
              React.createElement(
                'p',
                {},
                `© ${currentYear} 神秘命运 | 探索命运的奥秘 | 所有解读仅供参考`
              ),
              React.createElement(
                'p',
                {
                  className: "mt-2 text-gray-500"
                },
                "网站内容仅供娱乐，不构成任何专业建议。命理分析不能替代医疗、法律、财务等专业咨询。"
              )
            ]
          )
        ]
      )
    );
  } catch (error) {
    console.error("Footer component error:", error);
    reportError(error);
    return null;
  }
}
