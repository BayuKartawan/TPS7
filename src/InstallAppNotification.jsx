import { useState, useEffect } from 'react';

const InstallAppNotification = () => {
  const [showModal, setShowModal] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default browser prompt
      setDeferredPrompt(event); // Store the event for later use
      setShowModal(true); // Show the custom install prompt
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
    <div className={`install-app-notification${showModal ? ' show' : ''}`}>
      <div className="modal-content">
        <p>Install aplikasi ini di perangkat Anda untuk pengalaman terbaik! <button onClick={handleInstall}>Install</button></p>
        <button style={{
          backgroundColor:"red", marginBottom:"10px"
        }} onClick={handleClose}>Close</button> {/* Tombol Close */}
      </div>
    </div>
  );
};

export default InstallAppNotification;
