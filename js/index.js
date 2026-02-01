// Entry point for AV Tools Website
import AVToolsWebsite from './AVToolsWebsite.js';

console.log('[AV Tools] index.js loaded, AVToolsWebsite:', typeof AVToolsWebsite);

// Make AVToolsWebsite available globally for the mounting logic
window.AVToolsWebsite = AVToolsWebsite;

// Mounting logic
const checkAndMount = () => {
  console.log('[AV Tools] checkAndMount running...');
  console.log('[AV Tools] AVToolsWebsite:', typeof AVToolsWebsite);
  console.log('[AV Tools] React:', typeof React);
  console.log('[AV Tools] ReactDOM:', typeof ReactDOM);
  
  if (typeof AVToolsWebsite !== 'undefined' && typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
    const staticContent = document.getElementById('static-content');
    const root = document.getElementById('root');
    
    console.log('[AV Tools] root element:', root);
    
    if (root) {
      console.log('[AV Tools] Mounting React app...');
      // Mount React
      const reactRoot = ReactDOM.createRoot(root);
      reactRoot.render(React.createElement(AVToolsWebsite));
      console.log('[AV Tools] React app mounted!');
      
      // Smooth transition: fade out static, show React
      if (staticContent) {
        staticContent.style.opacity = '0';
        setTimeout(() => {
          staticContent.style.display = 'none';
          root.style.display = 'block';
        }, 300);
      } else {
        root.style.display = 'block';
      }
    }
  } else {
    console.log('[AV Tools] Dependencies not ready, retrying in 100ms...');
    setTimeout(checkAndMount, 100);
  }
};

// Start mounting when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkAndMount);
} else {
  checkAndMount();
}
