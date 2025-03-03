// Root component that wraps the application
function App() {
  try {
    return React.createElement(
      React.StrictMode,
      null,
      React.createElement(HomePage, null)
    );
  } catch (error) {
    console.error("Application error:", error);
    reportError(error);
    return React.createElement(
      'div',
      { className: "flex items-center justify-center min-h-screen bg-[#0c0c1d] text-white p-4" },
      React.createElement(
        'div',
        { className: "text-center p-8 bg-[#1a1a3a] rounded-lg border border-purple-900 shadow-lg max-w-lg" },
        [
          React.createElement('i', { key: 'icon', className: "fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4" }),
          React.createElement('h2', { key: 'title', className: "text-2xl font-bold mb-2" }, "应用程序错误"),
          React.createElement('p', { key: 'message', className: "text-gray-300 mb-4" }, "很抱歉，神秘命运遇到了一点小问题，请稍后再试。"),
          React.createElement('p', { key: 'error', className: "text-sm text-gray-400 mb-6" }, `错误信息: ${error?.message || "未知错误"}`),
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

// Global error handler for unexpected errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // You could implement more robust error handling here
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  try {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(React.createElement(App, null));
    } else {
      console.error('Root element not found');
    }
  } catch (error) {
    console.error('Application initialization error:', error);
    document.body.innerHTML = `
      <div class="flex items-center justify-center min-h-screen bg-[#0c0c1d] text-white">
        <div class="text-center p-8 bg-[#1a1a3a] rounded-lg border border-purple-900 shadow-lg">
          <i class="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <h2 class="text-2xl font-bold mb-2">初始化失败</h2>
          <p class="text-gray-300 mb-4">很抱歉，神秘命运无法启动，请稍后再试...</p>
          <button 
            onclick="window.location.reload()" 
            class="px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors"
          >
            刷新页面
          </button>
        </div>
      </div>
    `;
  }
});
