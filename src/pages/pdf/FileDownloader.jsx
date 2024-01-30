import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

class FileDownloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downloading: false,
        };
    }

    // Fungsi untuk menangani pengunduhan file
    downloadFile = () => {
        const { filePath, fileName } = this.props;

        // Menggunakan SweetAlert untuk konfirmasi sebelum pengunduhan
        Swal.fire({
            title: 'Konfirmasi',
            text: 'Apakah Anda yakin ingin mendownload file ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya, Download!',
            cancelButtonText: 'Batal',
        }).then((result) => {
            // Jika pengguna menekan "Ya"
            if (result.isConfirmed) {
                // Set state downloading menjadi true saat memulai unduhan
                this.setState({ downloading: true });

                // Membuat elemen <a> untuk menginisiasi pengunduhan
                const downloadLink = document.createElement('a');
                downloadLink.href = filePath;

                // Menggunakan nama file dari prop jika tersedia, jika tidak mendapatkan nama file dari path
                downloadLink.download = fileName || filePath.split('/').pop();

                // Menambahkan elemen ke dalam DOM dan melakukan klik untuk memulai pengunduhan
                document.body.appendChild(downloadLink);
                downloadLink.click();

                // Menghapus elemen setelah pengunduhan selesai
                document.body.removeChild(downloadLink);

                // Setelah unduhan selesai, tunggu 2 detik sebelum mengubah state downloading menjadi false
                setTimeout(() => {
                    this.setState({ downloading: false });
                }, 2000);
            }
        });
    };

    render() {
        const { buttonText } = this.props;
        const { downloading } = this.state;

        return (
            <button
                id="w-node-_810fe0a4-027b-107d-06b7-0dd7dc8b6f03-c4b99cfa"
                className="item-galeri judul-item"
                style={{
                    backgroundColor: downloading ? 'gray' : '#cfe8a9',
                    cursor: downloading ? 'not-allowed' : 'pointer',
                }}
                onClick={this.downloadFile}
                disabled={downloading}
            >
                <img
                    src="/assets/kpu.png"
                    loading="lazy"
                    width="30"
                    height="30"
                    id="w-node-_810fe0a4-027b-107d-06b7-0dd7dc8b6f04-c4b99cfa"
                    className="icon-galeri"
                    alt="KPU Icon"
                />

                {downloading ? 'Downloading...' : buttonText || 'Download File'}
            </button>
        );
    }
}

FileDownloader.propTypes = {
    filePath: PropTypes.string.isRequired,
    fileName: PropTypes.string,
    buttonText: PropTypes.string,
};

export default FileDownloader;
