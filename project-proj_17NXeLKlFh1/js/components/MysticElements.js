function MysticElements() {
  try {
    const [stars, setStars] = React.useState([]);
    
    React.useEffect(() => {
      // Generate random stars for the background
      const generateStars = () => {
        const newStars = [];
        const starCount = window.innerWidth < 768 ? 50 : 100;
        
        for (let i = 0; i < starCount; i++) {
          newStars.push({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${0.5 + Math.random() * 2}px`,
            animationDelay: `${Math.random() * 5}s`
          });
        }
        
        setStars(newStars);
      };
      
      generateStars();
      
      // Regenerate stars on window resize
      window.addEventListener('resize', generateStars);
      
      return () => {
        window.removeEventListener('resize', generateStars);
      };
    }, []);
    
    return React.createElement(
      'div',
      {
        'data-name': "mystic-elements",
        className: "star-field fixed inset-0 pointer-events-none z-0"
      },
      [
        // Map stars to div elements
        ...stars.map(star => 
          React.createElement('div', {
            key: star.id,
            className: "absolute bg-white rounded-full star-twinkle",
            style: {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.animationDelay
            }
          })
        ),
        
        // Background effects
        React.createElement('div', {
          className: "absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-[100px] opacity-20"
        }),
        React.createElement('div', {
          className: "absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900 rounded-full filter blur-[120px] opacity-20"
        }),
        React.createElement('div', {
          className: "absolute top-2/3 left-2/3 w-72 h-72 bg-indigo-900 rounded-full filter blur-[110px] opacity-20"
        })
      ]
    );
  } catch (error) {
    console.error("MysticElements component error:", error);
    reportError(error);
    return null;
  }
}
