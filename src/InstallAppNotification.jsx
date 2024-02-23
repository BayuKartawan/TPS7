import { useState, useEffect } from 'react';

const InstallAppNotification = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [appInstalled, setAppInstalled] = useState(false);
  const [showModal, setShowModal] = useState(true);

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
          setShowModal(false); // Hide the custom install prompt
        } else {
          console.log('User dismissed the install prompt');
          setShowModal(false); // Hide the custom install prompt
        }
      });
    }
  };

  const handleClose = () => {
    setShowModal(false); // Close the custom install prompt
  };

  return (
    <div style={{ display: showModal && !appInstalled ? 'block' : 'none' }}>
      <div className="install-app-notification">
        <div className="modal-content">
          <p>Install aplikasi ini di perangkat Anda untuk pengalaman terbaik! <button onClick={handleInstall}>Install</button></p>
          <button style={{ backgroundColor: "red", marginBottom: "10px" }} onClick={handleClose}>Close</button> {/* Tombol Close */}
        </div>
      </div>
    </div>
  );
};

export default InstallAppNotification;
