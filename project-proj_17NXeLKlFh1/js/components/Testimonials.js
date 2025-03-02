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
        age: 24,
        location: '成都',
        testimonial: '易经八卦分析对我的学业规划提供了很好的参考，按照建议调整后，我的学习效率提高了很多。感谢神秘命运！',
        avatar: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 5
      },
      {
        id: 5,
        name: '陈先生',
        age: 38,
        location: '深圳',
        testimonial: '手相解读非常精准，尤其是关于健康方面的建议帮我及时发现了潜在的健康问题。命理师的专业水平令人信服！',
        avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        rating: 5
      }
    ];
    
    const [activeIndex, setActiveIndex] = React.useState(0);
    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
    
    const handlePrev = () => {
      setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };
    
    const handleNext = () => {
      setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };
    
    const displayedTestimonials = React.useMemo(() => {
      const start = activeIndex * testimonialsPerPage;
      const end = start + testimonialsPerPage;
      return testimonials.slice(start, end);
    }, [activeIndex]);
    
    const renderStars = (rating) => {
      return Array.from({ length: 5 }).map((_, index) => (
        <i 
          key={index}
          className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        ></i>
      ));
    };
    
    return (
      <section data-name="testimonials" id="testimonials" className="py-16 bg-[#0c0c1d] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">客户见证</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              听听我们的客户如何评价神秘命运的命理解读服务，每一次解读都是一段开启智慧的旅程
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="testimonial-card p-6 rounded-lg border border-purple-900 shadow-lg fade-in"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.age}岁，{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-gray-300 italic mb-4">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-[#1a1a3a] border border-purple-900 text-purple-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-purple-500' : 'bg-purple-900'}`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full bg-[#1a1a3a] border border-purple-900 text-purple-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#fortune-form" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              我也要解读
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Testimonials component error:", error);
    reportError(error);
    return null;
  }
}
