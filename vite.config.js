import { useState } from 'react';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import './pwa.css'; 

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'TPS 07 DSB',
    short_name: 'TPS 07 DSB',
    description: 'I am a simple vite app',
    icons: [
      {
        src: '/assets/kpu.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/assets/kpu.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/assets/kpu.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon'
      },
      {
        src: '/assets/kpu.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    theme_color: '#181818',
    background_color: '#e0cc3b',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  }
};

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

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});

