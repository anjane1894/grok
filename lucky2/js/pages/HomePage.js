function HomePage() {
  try {
    const [selectedFortuneType, setSelectedFortuneType] = React.useState('zodiac');
    const [userData, setUserData] = React.useState(null);
    const [fortuneResult, setFortuneResult] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [toasts, setToasts] = React.useState([]);
    
    const handleFortuneTypeSelect = (type) => {
      setSelectedFortuneType(type);
    };
    
    const handleFortuneFormSubmit = (formData) => {
      try {
        setUserData(formData);
        setLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
          const result = generateRandomFortune(selectedFortuneType, formData);
          setFortuneResult(result);
          setLoading(false);
          
          // Show success toast
          addToast("命运解读已完成，祝您好运！", "success");
        }, 2000);
      } catch (error) {
        console.error("Fortune form submission error:", error);
        setLoading(false);
        addToast("命运解读失败，请稍后再试", "error");
        reportError(error);
      }
    };
    
    const addToast = (message, type = 'info') => {
      const newToast = {
        id: Date.now(),
        message,
        type
      };
      
      setToasts(prev => [...prev, newToast]);
    };
    
    const removeToast = (id) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    
    return React.createElement(
      'div',
      { 'data-name': "home-page" },
      [
        // Background Elements
        React.createElement(MysticElements, { key: 'mystic-elements' }),
        
        // Header
        React.createElement(Header, { key: 'header' }),
        
        // Hero Section
        React.createElement(Hero, { key: 'hero' }),
        
        // Fortune Types Section
        React.createElement(FortuneTypes, { 
          key: 'fortune-types',
          onTypeSelect: handleFortuneTypeSelect, 
          selectedType: selectedFortuneType 
        }),
        
        // Fortune Form Section
        React.createElement(FortuneForm, { 
          key: 'fortune-form',
          onSubmit: handleFortuneFormSubmit,
          selectedType: selectedFortuneType
        }),
        
        // Fortune Result Section
        React.createElement(FortuneResult, { 
          key: 'fortune-result',
          result: fortuneResult,
          loading: loading,
          userData: userData,
          selectedType: selectedFortuneType
        }),
        
        // Testimonials Section
        React.createElement(Testimonials, { key: 'testimonials' }),
        
        // Footer
        React.createElement(Footer, { key: 'footer' }),
        
        // Toast Container
        React.createElement(ToastContainer, {
          key: 'toast-container',
          toasts: toasts,
          removeToast: removeToast
        })
      ]
    );
  } catch (error) {
    console.error("HomePage component error:", error);
    reportError(error);
    return React.createElement(
      'div',
      { className: "flex items-center justify-center min-h-screen bg-[#0c0c1d] text-white" },
      React.createElement(
        'div',
        { className: "text-center p-8 bg-[#1a1a3a] rounded-lg border border-purple-900 shadow-lg" },
        [
          React.createElement('i', { key: 'icon', className: "fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4" }),
          React.createElement('h2', { key: 'title', className: "text-2xl font-bold mb-2" }, "页面加载失败"),
          React.createElement('p', { key: 'message', className: "text-gray-300 mb-4" }, "很抱歉，命运之门暂时关闭，请稍后再试..."),
          React.createElement(
            'button',
            {
              key: 'button',
              onClick: () => window.location.reload(),
              className: "px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors"
            },
            "刷新页面"
          )
        ]
      )
    );
  }
}
