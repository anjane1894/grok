function Toast({ message, type = 'info', onClose }) {
  try {
    const [isVisible, setIsVisible] = React.useState(true);
    
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }, 5000);
      
      return () => {
        clearTimeout(timer);
      };
    }, [onClose]);
    
    const getToastStyles = () => {
      switch (type) {
        case 'success':
          return {
            bgColor: 'bg-green-900 bg-opacity-90',
            borderColor: 'border-green-500',
            textColor: 'text-green-200',
            icon: 'fa-check-circle'
          };
        case 'error':
          return {
            bgColor: 'bg-red-900 bg-opacity-90',
            borderColor: 'border-red-500',
            textColor: 'text-red-200',
            icon: 'fa-exclamation-circle'
          };
        case 'warning':
          return {
            bgColor: 'bg-yellow-900 bg-opacity-90',
            borderColor: 'border-yellow-500',
            textColor: 'text-yellow-200',
            icon: 'fa-exclamation-triangle'
          };
        default:
          return {
            bgColor: 'bg-purple-900 bg-opacity-90',
            borderColor: 'border-purple-500',
            textColor: 'text-purple-200',
            icon: 'fa-info-circle'
          };
      }
    };
    
    const styles = getToastStyles();
    
    return React.createElement(
      'div',
      {
        'data-name': "toast",
        className: `toast-notification ${styles.bgColor} border ${styles.borderColor} rounded-lg shadow-lg p-4 flex items-center max-w-md ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`
      },
      [
        React.createElement(
          'div',
          { key: 'icon-container', className: "flex-shrink-0 mr-3" },
          React.createElement('i', { className: `fas ${styles.icon} text-xl ${styles.textColor}` })
        ),
        React.createElement(
          'div',
          { key: 'content', className: "flex-grow" },
          React.createElement('p', { className: `${styles.textColor} text-sm` }, message)
        ),
        React.createElement(
          'div',
          { key: 'close-button', className: "flex-shrink-0 ml-3" },
          React.createElement(
            'button',
            {
              onClick: () => {
                setIsVisible(false);
                setTimeout(() => {
                  onClose();
                }, 300);
              },
              className: "text-gray-400 hover:text-white transition-colors"
            },
            React.createElement('i', { className: "fas fa-times" })
          )
        )
      ]
    );
  } catch (error) {
    console.error("Toast component error:", error);
    reportError(error);
    return null;
  }
}

function ToastContainer({ toasts, removeToast }) {
  try {
    return React.createElement(
      'div',
      {
        'data-name': "toast-container",
        className: "fixed top-4 right-4 z-50 flex flex-col space-y-4"
      },
      toasts.map((toast) => 
        React.createElement(Toast, {
          key: toast.id,
          message: toast.message,
          type: toast.type,
          onClose: () => removeToast(toast.id)
        })
      )
    );
  } catch (error) {
    console.error("ToastContainer component error:", error);
    reportError(error);
    return null;
  }
}
