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
        description: '通过神秘的塔罗牌，揭示您的过去、现在和未来',
        icon: 'fa-cards',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'palmistry',
        name: '手相解读',
        description: '分析手掌的线条和特征，揭示您的命运和性格特点',
        icon: 'fa-hand-sparkles',
        color: 'from-red-500 to-purple-500'
      },
      {
        id: 'numerology',
        name: '数字命理',
        description: '计算您的生命数字，解读数字对您人生的影响',
        icon: 'fa-hashtag',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        id: 'iChing',
        name: '易经八卦',
        description: '基于中国古老智慧，通过卦象解读您的命运',
        icon: 'fa-yin-yang',
        color: 'from-green-500 to-teal-500'
      }
    ];
    
    return React.createElement(
      'section',
      {
        'data-name': "fortune-types",
        id: "fortune-types",
        className: "py-16 bg-[#0c0c1d]"
      },
      React.createElement(
        'div',
        {
          className: "container mx-auto px-4"
        },
        [
          React.createElement(
            'div',
            {
              className: "text-center mb-12"
            },
            [
              React.createElement(
                'h2',
                {
                  className: "text-3xl font-bold mb-4 text-white"
                },
                "探索多种命理解读"
              ),
              React.createElement(
                'p',
                {
                  className: "text-gray-300 max-w-2xl mx-auto"
                },
                "我们提供多种命理解读方式，帮助您从不同角度理解自己的命运轨迹，选择最适合您的方式开始探索"
              )
            ]
          ),
          
          React.createElement(
            'div',
            {
              className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
            },
            fortuneTypes.map((type) => 
              React.createElement(
                'div',
                {
                  key: type.id,
                  'data-name': `fortune-type-${type.id}`,
                  className: `fortune-card p-6 rounded-lg border border-purple-900 shadow-lg bg-[#1a1a3a] cursor-pointer ${selectedType === type.id ? 'ring-2 ring-purple-500' : ''}`,
                  onClick: () => onTypeSelect(type.id)
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
                          className: `h-12 w-12 rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center mr-4`
                        },
                        React.createElement(
                          'i',
                          {
                            className: `fas ${type.icon} text-xl text-white`
                          }
                        )
                      ),
                      React.createElement(
                        'h3',
                        {
                          className: "text-xl font-bold text-white"
                        },
                        type.name
                      )
                    ]
                  ),
                  React.createElement(
                    'p',
                    {
                      className: "text-gray-300 text-sm"
                    },
                    type.description
                  ),
                  React.createElement(
                    'div',
                    {
                      className: "mt-4 flex justify-between items-center"
                    },
                    [
                      React.createElement(
                        'span',
                        {
                          className: `text-sm ${selectedType === type.id ? 'text-purple-400' : 'text-gray-400'}`
                        },
                        selectedType === type.id ? "已选择" : "点击选择"
                      ),
                      React.createElement(
                        'i',
                        {
                          className: `fas fa-chevron-right ${selectedType === type.id ? 'text-purple-400' : 'text-gray-600'}`
                        }
                      )
                    ]
                  )
                ]
              )
            )
          ),
          
          React.createElement(
            'div',
            {
              className: "text-center mt-12"
            },
            React.createElement(
              'a',
              {
                href: "#fortune-form",
                className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              },
              "开始解读"
            )
          )
        ]
      )
    );
  } catch (error) {
    console.error("FortuneTypes component error:", error);
    reportError(error);
    return null;
  }
}
