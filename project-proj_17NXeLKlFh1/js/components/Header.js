function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    return React.createElement(
      'header',
      {
        'data-name': "header",
        className: "bg-[#0c0c1d] text-white shadow-lg border-b border-purple-900"
      },
      [
        React.createElement(
          'div',
          {
            className: "container mx-auto px-4 py-4 flex justify-between items-center"
          },
          [
            React.createElement(
              'div',
              {
                'data-name': "logo",
                className: "flex items-center"
              },
              [
                React.createElement(
                  'div',
                  {
                    className: "h-12 w-12 mr-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-900 flex items-center justify-center"
                  },
                  React.createElement(
                    'i',
                    {
                      className: "fas fa-moon text-2xl text-white"
                    }
                  )
                ),
                React.createElement(
                  'div',
                  {},
                  [
                    React.createElement(
                      'h1',
                      {
                        className: "text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                      },
                      "神秘命运"
                    ),
                    React.createElement(
                      'p',
                      {
                        className: "text-xs text-purple-300"
                      },
                      "探索命运的奥秘"
                    )
                  ]
                )
              ]
            ),
            
            // Desktop Navigation
            React.createElement(
              'nav',
              {
                'data-name': "desktop-nav",
                className: "hidden md:flex space-x-8"
              },
              [
                React.createElement(
                  'a',
                  {
                    href: "#home",
                    className: "text-white hover:text-purple-400 transition-colors"
                  },
                  "首页"
                ),
                React.createElement(
                  'a',
                  {
                    href: "#fortune-types",
                    className: "text-white hover:text-purple-400 transition-colors"
                  },
                  "命理服务"
                ),
                React.createElement(
                  'a',
                  {
                    href: "#testimonials",
                    className: "text-white hover:text-purple-400 transition-colors"
                  },
                  "客户见证"
                ),
                React.createElement(
                  'a',
                  {
                    href: "#contact",
                    className: "text-white hover:text-purple-400 transition-colors"
                  },
                  "联系我们"
                )
              ]
            ),
            
            // Mobile Menu Button
            React.createElement(
              'button',
              {
                'data-name': "mobile-menu-button",
                className: "md:hidden text-white focus:outline-none",
                onClick: () => setIsMenuOpen(!isMenuOpen)
              },
              React.createElement(
                'i',
                {
                  className: `fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`
                }
              )
            )
          ]
        ),
        
        // Mobile Navigation
        isMenuOpen && React.createElement(
          'nav',
          {
            'data-name': "mobile-nav",
            className: "md:hidden bg-[#1a1a3a] border-t border-purple-900"
          },
          React.createElement(
            'div',
            {
              className: "container mx-auto px-4 py-2 flex flex-col space-y-3"
            },
            [
              React.createElement(
                'a',
                {
                  href: "#home",
                  className: "text-white hover:text-purple-400 py-2 transition-colors",
                  onClick: () => setIsMenuOpen(false)
                },
                "首页"
              ),
              React.createElement(
                'a',
                {
                  href: "#fortune-types",
                  className: "text-white hover:text-purple-400 py-2 transition-colors",
                  onClick: () => setIsMenuOpen(false)
                },
                "命理服务"
              ),
              React.createElement(
                'a',
                {
                  href: "#testimonials",
                  className: "text-white hover:text-purple-400 py-2 transition-colors",
                  onClick: () => setIsMenuOpen(false)
                },
                "客户见证"
              ),
              React.createElement(
                'a',
                {
                  href: "#contact",
                  className: "text-white hover:text-purple-400 py-2 transition-colors",
                  onClick: () => setIsMenuOpen(false)
                },
                "联系我们"
              )
            ]
          )
        )
      ]
    );
  } catch (error) {
    console.error("Header component error:", error);
    reportError(error);
    return null;
  }
}
