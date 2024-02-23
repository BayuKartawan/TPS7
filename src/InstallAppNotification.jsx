import { useState, useEffect } from 'react';

const InstallAppNotification = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default browser prompt
      setDeferredPrompt(event); // Store the event for later use
      setShowNotification(true); // Show the custom install notification
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []); // Run effect only once on component mount

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the browser install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
    setShowNotification(false); // Hide the custom install notification regardless of user choice
  };

  return (
    <div className={`install-app-notification${showNotification ? ' show' : ''}`}>
      <div className="modal-content">
        <p>Install aplikasi ini di perangkat Anda untuk pengalaman terbaik! <button onClick={handleInstall}>Install</button></p>
      </div>
    </div>
  );
};

export default InstallAppNotification;
