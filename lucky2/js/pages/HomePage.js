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
    
    return (
      <div data-name="home-page">
        {/* Background Elements */}
        <MysticElements />
        
        {/* Header */}
        <Header />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Fortune Types Section */}
        <FortuneTypes 
          onTypeSelect={handleFortuneTypeSelect} 
          selectedType={selectedFortuneType} 
        />
        
        {/* Fortune Form Section */}
        <FortuneForm 
          onSubmit={handleFortuneFormSubmit}
          selectedType={selectedFortuneType}
        />
        
        {/* Fortune Result Section */}
        <FortuneResult 
          result={fortuneResult}
          loading={loading}
          userData={userData}
          selectedType={selectedFortuneType}
        />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Footer */}
        <Footer />
        
        {/* Toast Container */}
        <ToastContainer
          toasts={toasts}
          removeToast={removeToast}
        />
      </div>
    );
  } catch (error) {
    console.error("HomePage component error:", error);
    reportError(error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0c0c1d] text-white">
        <div className="text-center p-8 bg-[#1a1a3a] rounded-lg border border-purple-900 shadow-lg">
          <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">页面加载失败</h2>
          <p className="text-gray-300 mb-4">很抱歉，命运之门暂时关闭，请稍后再试...</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors"
          >
            刷新页面
          </button>
        </div>
      </div>
    );
  }
}
