// InstallAppNotification.jsx

import { useState } from 'react';

const InstallAppNotification = () => {
  const [showModal, setShowModal] = useState(true);

  const handleInstall = () => {
    // Logic untuk memicu prompt instalasi aplikasi
    setShowModal(false); // Sembunyikan modal setelah pengguna mengklik tombol install
  };

  return (
    <div className={`install-app-notification${showModal ? ' show' : ''}`}>
      <div className="modal-content">
        <p>Install aplikasi ini di perangkat Anda untuk pengalaman terbaik!</p>
        <button onClick={handleInstall}>Install</button>
      </div>
    </div>
  );
};

export default InstallAppNotification;
