import { useState, useEffect } from 'react';

const InstallAppNotification = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [appInstalled, setAppInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default browser prompt
      setDeferredPrompt(event); // Store the event for later use
      if (!appInstalled) {
        setShowModal(true); // Show the custom install prompt only if app is not installed
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [appInstalled]); // Re-run effect when appInstalled state changes

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the browser install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setAppInstalled(true); // Set appInstalled to true when user accepts installation
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  };

  return (
    <div className={`install-app-notification${appInstalled ? ' hidden' : ''}`}>
      <div className="modal-content">
        <p>Install aplikasi ini di perangkat Anda untuk pengalaman terbaik! <button onClick={handleInstall}>Install</button></p>
      </div>
    </div>
  );
};

export default InstallAppNotification;
