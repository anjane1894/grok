function FortuneForm({ onSubmit, selectedType }) {
  try {
    const [formData, setFormData] = React.useState({
      name: "",
      gender: "男",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      question: ""
    });
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    
    // Generate options for year, month, day selects
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }
    };
    
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) {
        newErrors.name = "请输入您的姓名";
      }
      
      if (!formData.birthYear) {
        newErrors.birthYear = "请选择出生年份";
      }
      
      if (!formData.birthMonth) {
        newErrors.birthMonth = "请选择出生月份";
      }
      
      if (!formData.birthDay) {
        newErrors.birthDay = "请选择出生日期";
      }
      
      if (selectedType === "tarot" && !formData.question.trim()) {
        newErrors.question = "请输入您想要解答的问题";
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        
        if (!validateForm()) {
          return;
        }
        
        setLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
          onSubmit(formData);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Form submission error:", error);
        setLoading(false);
      }
    };
    
    const getPromptText = () => {
      return getFortunePrompt(selectedType);
    };
    
    return React.createElement(
      'section', 
      {
        'data-name': "fortune-form",
        id: "fortune-form",
        className: "py-16 bg-[#0c0c1d]"
      },
      React.createElement(
        'div',
        { className: "container mx-auto px-4" },
        React.createElement(
          'div',
          { className: "max-w-2xl mx-auto" },
          [
            React.createElement(
              'div',
              { className: "text-center mb-10" },
              [
                React.createElement('h2', { className: "text-3xl font-bold mb-4 text-white" }, "开启您的命运之旅"),
                React.createElement('p', { className: "text-gray-300" }, getPromptText())
              ]
            ),
            
            React.createElement(
              'div',
              { className: "bg-[#1a1a3a] p-8 rounded-lg border border-purple-900 shadow-lg card-glow" },
              React.createElement(
                'form',
                { onSubmit: handleSubmit },
                [
                  // 姓名字段
                  React.createElement(
                    'div',
                    { className: "mb-6" },
                    [
                      React.createElement('label', { htmlFor: "name", className: "block text-gray-300 mb-2" }, "姓名"),
                      React.createElement('input', {
                        type: "text",
                        id: "name",
                        name: "name",
                        value: formData.name,
                        onChange: handleChange,
                        className: `w-full px-4 py-2 bg-[#0c0c1d] border ${errors.name ? 'border-red-500' : 'border-purple-900'} rounded text-white focus:outline-none focus:ring-1 focus:ring-purple-500`,
                        placeholder: "请输入您的姓名"
                      }),
                      errors.name && React.createElement('p', { className: "text-red-500 text-sm mt-1" }, errors.name)
                    ]
                  ),
                  
                  // 性别字段
                  React.createElement(
                    'div',
                    { className: "mb-6" },
                    [
                      React.createElement('label', { className: "block text-gray-300 mb-2" }, "性别"),
                      React.createElement(
                        'div',
                        { className: "flex space-x-4" },
                        [
                          React.createElement(
                            'label',
                            { className: "flex items-center" },
                            [
                              React.createElement('input', {
                                type: "radio",
                                name: "gender",
                                value: "男",
                                checked: formData.gender === "男",
                                onChange: handleChange,
                                className: "mr-2 text-purple-600 focus:ring-purple-500"
                              }),
                              React.createElement('span', {}, "男")
                            ]
                          ),
                          React.createElement(
                            'label',
                            { className: "flex items-center" },
                            [
                              React.createElement('input', {
                                type: "radio",
                                name: "gender",
                                value: "女",
                                checked: formData.gender === "女",
                                onChange: handleChange,
                                className: "mr-2 text-purple-600 focus:ring-purple-500"
                              }),
                              React.createElement('span', {}, "女")
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  
                  // 出生日期字段
                  React.createElement(
                    'div',
                    { className: "mb-6" },
                    [
                      React.createElement('label', { className: "block text-gray-300 mb-2" }, "出生日期"),
                      React.createElement(
                        'div',
                        { className: "grid grid-cols-3 gap-4" },
                        [
                          // 年份选择
                          React.createElement(
                            'div',
                            {},
                            [
                              React.createElement(
                                'select',
                                {
                                  name: "birthYear",
                                  value: formData.birthYear,
                                  onChange: handleChange,
                                  className: `w-full px-4 py-2 bg-[#0c0c1d] border ${errors.birthYear ? 'border-red-500' : 'border-purple-900'} rounded text-white focus:outline-none focus:ring-1 focus:ring-purple-500`
                                },
                                [
                                  React.createElement('option', { value: "" }, "年"),
                                  ...years.map(year => 
                                    React.createElement('option', { key: year, value: year }, year)
                                  )
                                ]
                              ),
                              errors.birthYear && React.createElement('p', { className: "text-red-500 text-sm mt-1" }, errors.birthYear)
                            ]
                          ),
                          
                          // 月份选择
                          React.createElement(
                            'div',
                            {},
                            [
                              React.createElement(
                                'select',
                                {
                                  name: "birthMonth",
                                  value: formData.birthMonth,
                                  onChange: handleChange,
                                  className: `w-full px-4 py-2 bg-[#0c0c1d] border ${errors.birthMonth ? 'border-red-500' : 'border-purple-900'} rounded text-white focus:outline-none focus:ring-1 focus:ring-purple-500`
                                },
                                [
                                  React.createElement('option', { value: "" }, "月"),
                                  ...months.map(month => 
                                    React.createElement('option', { key: month, value: month }, month)
                                  )
                                ]
                              ),
                              errors.birthMonth && React.createElement('p', { className: "text-red-500 text-sm mt-1" }, errors.birthMonth)
                            ]
                          ),
                          
                          // 日期选择
                          React.createElement(
                            'div',
                            {},
                            [
                              React.createElement(
                                'select',
                                {
                                  name: "birthDay",
                                  value: formData.birthDay,
                                  onChange: handleChange,
                                  className: `w-full px-4 py-2 bg-[#0c0c1d] border ${errors.birthDay ? 'border-red-500' : 'border-purple-900'} rounded text-white focus:outline-none focus:ring-1 focus:ring-purple-500`
                                },
                                [
                                  React.createElement('option', { value: "" }, "日"),
                                  ...days.map(day => 
                                    React.createElement('option', { key: day, value: day }, day)
                                  )
                                ]
                              ),
                              errors.birthDay && React.createElement('p', { className: "text-red-500 text-sm mt-1" }, errors.birthDay)
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  
                  // 问题字段（仅塔罗牌）
                  selectedType === "tarot" && React.createElement(
                    'div',
                    { className: "mb-6" },
                    [
                      React.createElement('label', { htmlFor: "question", className: "block text-gray-300 mb-2" }, "您的问题"),
                      React.createElement('textarea', {
                        id: "question",
                        name: "question",
                        value: formData.question,
                        onChange: handleChange,
                        className: `w-full px-4 py-2 bg-[#0c0c1d] border ${errors.question ? 'border-red-500' : 'border-purple-900'} rounded text-white focus:outline-none focus:ring-1 focus:ring-purple-500 h-32`,
                        placeholder: "请输入您想要解答的问题"
                      }),
                      errors.question && React.createElement('p', { className: "text-red-500 text-sm mt-1" }, errors.question)
                    ]
                  ),
                  
                  // 提交按钮
                  React.createElement(
                    'div',
                    { className: "mt-8" },
                    React.createElement(
                      'button',
                      {
                        type: "submit",
                        disabled: loading,
                        className: "w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                      },
                      loading ? 
                        React.createElement(
                          'span',
                          { className: "flex items-center justify-center" },
                          [
                            React.createElement('i', { className: "fas fa-spinner fa-spin mr-2" }),
                            "解读中..."
                          ]
                        ) : 
                        "开始解读"
                    )
                  )
                ]
              )
            )
          ]
        )
      )
    );
  } catch (error) {
    console.error("FortuneForm component error:", error);
    reportError(error);
    return null;
  }
}
