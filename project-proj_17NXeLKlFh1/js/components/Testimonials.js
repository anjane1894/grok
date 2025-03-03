function Testimonials() {
  try {
    const testimonials = [
      {
        id: 1,
        name: '李小姐',
        age: 28,
        location: '上海',
        testimonial: '神秘命运的星座分析非常准确！预测我会在工作上有重大突破，一个月后我真的得到了升职。感谢神秘命运的指引！',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 5
      },
      {
        id: 2,
        name: '王先生',
        age: 35,
        location: '北京',
        testimonial: '塔罗牌解读让我对自己的情感状况有了全新的认识，按照建议调整后，我和伴侣的关系明显改善。非常专业！',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 5
      },
      {
        id: 3,
        name: '张女士',
        age: 42,
        location: '广州',
        testimonial: '数字命理分析帮我找到了最适合的事业方向，按照指引做出的决策让我的生意蒸蒸日上。命理师的解读非常到位！',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 4
      },
      {
        id: 4,
        name: '赵同学',
        age: 23,
        location: '成都',
        testimonial: '易经八卦分析让我对未来的学业有了明确的方向，按照建议调整后，学习效率大大提高，顺利考入理想的大学。',
        avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 5
      },
      {
        id: 5,
        name: '陈先生',
        age: 39,
        location: '深圳',
        testimonial: '手相解读非常精准，尤其是对我事业线的分析，帮我避开了一次重大的职业风险。神秘命运的老师真的很有经验！',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 5
      },
      {
        id: 6,
        name: '林女士',
        age: 31,
        location: '杭州',
        testimonial: '在做重要决定前咨询了神秘命运，得到的建议让我避开了很多潜在问题。现在每逢重要时刻，我都会来这里寻求指引。',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 4
      }
    ];
    
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(true);
    
    React.useEffect(() => {
      let interval;
      if (autoplay) {
        interval = setInterval(() => {
          setCurrentTestimonialIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
      }
      
      return () => {
        if (interval) clearInterval(interval);
      };
    }, [autoplay, testimonials.length]);
    
    const handlePrev = () => {
      setAutoplay(false);
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
    
    const handleNext = () => {
      setAutoplay(false);
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
    
    const handleDotClick = (index) => {
      setAutoplay(false);
      setCurrentTestimonialIndex(index);
    };
    
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          React.createElement('i', {
            key: i,
            className: `fas fa-star ${i <= rating ? 'text-yellow-500' : 'text-gray-600'}`
          })
        );
      }
      return stars;
    };
    
    return React.createElement(
      'section',
      {
        'data-name': "testimonials",
        id: "testimonials",
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
                "客户见证"
              ),
              React.createElement(
                'p',
                {
                  className: "text-gray-300 max-w-2xl mx-auto"
                },
                "听听我们的客户如何评价神秘命运的命理解读服务，每一次解读都是一次生命轨迹的揭示"
              )
            ]
          ),
          
          // Featured testimonial
          React.createElement(
            'div',
            {
              className: "max-w-4xl mx-auto mb-12"
            },
            React.createElement(
              'div',
              {
                className: "testimonial-card p-8 rounded-lg border border-purple-900 relative overflow-hidden"
              },
              [
                // Quote icon
                React.createElement(
                  'div',
                  {
                    className: "absolute top-4 right-4 text-purple-800 opacity-20"
                  },
                  React.createElement('i', { className: "fas fa-quote-right text-6xl" })
                ),
                
                // Testimonial content
                React.createElement(
                  'div',
                  {
                    className: "flex flex-col md:flex-row items-center"
                  },
                  [
                    // Avatar
                    React.createElement(
                      'div',
                      {
                        className: "mb-6 md:mb-0 md:mr-8"
                      },
                      [
                        React.createElement(
                          'div',
                          {
                            className: "w-32 h-32 rounded-full overflow-hidden border-4 border-purple-900 shadow-lg"
                          },
                          React.createElement('img', {
                            src: testimonials[currentTestimonialIndex].avatar,
                            alt: testimonials[currentTestimonialIndex].name,
                            className: "w-full h-full object-cover"
                          })
                        ),
                        React.createElement(
                          'div',
                          {
                            className: "flex justify-center mt-2"
                          },
                          renderStars(testimonials[currentTestimonialIndex].rating)
                        )
                      ]
                    ),
                    
                    // Text content
                    React.createElement(
                      'div',
                      {
                        className: "flex-1"
                      },
                      [
                        React.createElement(
                          'p',
                          {
                            className: "text-gray-200 text-lg italic mb-6"
                          },
                          `"${testimonials[currentTestimonialIndex].testimonial}"`
                        ),
                        React.createElement(
                          'div',
                          {
                            className: "flex justify-between items-center"
                          },
                          [
                            React.createElement(
                              'div',
                              {},
                              [
                                React.createElement(
                                  'h4',
                                  {
                                    className: "text-white text-xl font-bold"
                                  },
                                  testimonials[currentTestimonialIndex].name
                                ),
                                React.createElement(
                                  'p',
                                  {
                                    className: "text-gray-400"
                                  },
                                  `${testimonials[currentTestimonialIndex].age}岁，${testimonials[currentTestimonialIndex].location}`
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                
                // Navigation
                React.createElement(
                  'div',
                  {
                    className: "flex justify-between mt-8"
                  },
                  [
                    React.createElement(
                      'button',
                      {
                        onClick: handlePrev,
                        className: "p-2 bg-[#0c0c1d] rounded-full border border-purple-900 text-white hover:bg-purple-900 transition-colors"
                      },
                      React.createElement('i', { className: "fas fa-arrow-left" })
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "flex space-x-2"
                      },
                      testimonials.map((_, index) => 
                        React.createElement(
                          'button',
                          {
                            key: index,
                            onClick: () => handleDotClick(index),
                            className: `w-3 h-3 rounded-full ${currentTestimonialIndex === index ? 'bg-purple-500' : 'bg-gray-600'}`
                          }
                        )
                      )
                    ),
                    React.createElement(
                      'button',
                      {
                        onClick: handleNext,
                        className: "p-2 bg-[#0c0c1d] rounded-full border border-purple-900 text-white hover:bg-purple-900 transition-colors"
                      },
                      React.createElement('i', { className: "fas fa-arrow-right" })
                    )
                  ]
                )
              ]
            )
          ),
          
          // Testimonial grid
          React.createElement(
            'div',
            {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6"
            },
            testimonials.map((testimonial, index) => {
              // Skip the currently featured testimonial
              if (index === currentTestimonialIndex) return null;
              
              // Only show up to 3 additional testimonials
              if (index > currentTestimonialIndex && index <= currentTestimonialIndex + 3 || 
                  (currentTestimonialIndex > testimonials.length - 3 && index < (currentTestimonialIndex + 3) % testimonials.length)) {
                return React.createElement(
                  'div',
                  {
                    key: testimonial.id,
                    className: "testimonial-card p-6 rounded-lg border border-purple-900"
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
                            className: "w-12 h-12 rounded-full overflow-hidden mr-4"
                          },
                          React.createElement('img', {
                            src: testimonial.avatar,
                            alt: testimonial.name,
                            className: "w-full h-full object-cover"
                          })
                        ),
                        React.createElement(
                          'div',
                          {},
                          [
                            React.createElement('h4', { className: "text-white font-medium" }, testimonial.name),
                            React.createElement('p', { className: "text-sm text-gray-400" }, `${testimonial.age}岁，${testimonial.location}`)
                          ]
                        )
                      ]
                    ),
                    React.createElement(
                      'p',
                      {
                        className: "text-gray-300 text-sm mb-4"
                      },
                      `"${testimonial.testimonial}"`
                    ),
                    React.createElement(
                      'div',
                      {
                        className: "flex"
                      },
                      renderStars(testimonial.rating)
                    )
                  ]
                );
              }
              return null;
            }).filter(Boolean)
          ),
          
          // Call to action
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
              "立即体验命理解读"
            )
          )
        ]
      )
    );
  } catch (error) {
    console.error("Testimonials component error:", error);
    reportError(error);
    return null;
  }
}
