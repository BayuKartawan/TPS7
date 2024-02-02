import { useState } from 'react';
import "./pertanyaan.css"

const Bertanya = (pos) => {
    const [tampilkanKomponen, setTampilkanKomponen] = useState(false);

    const tombolPertanyaan = () => {
        setTampilkanKomponen(!tampilkanKomponen);
    };

    const generateListItems = () => {
        const listItems = [];

        for (let i = 1; i <= 30; i++) {
            const listKey = `list${i}`;
            const gambarKey = `gambar${i}`;
            const altKey = `alt${i}`;

            if (pos[listKey] || pos[gambarKey] || pos[altKey]) {
                listItems.push(
                    <li key={listKey} className='list'>
                        {pos[listKey] && pos[listKey]}
                        <br />
                        {pos[gambarKey] && (
                            <img style={{
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                maxHeight: "400px"
                            }}
                                src={pos[gambarKey]}
                                alt={pos[altKey]}
                            />
                        )}
                    </li>
                );
            }
        }

        return listItems;
    };

    return (
        <>
            {/* pertanyaan */}
            <div className='pertanyaan'>
                <button onClick={tombolPertanyaan} style={{
                    width: "100%",
                    textAlign: "left",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    padding: "5px 20px 5px 20px",
                    backgroundColor: "#F8E4B7",
                    borderBottom: "1px solid red",
                    minHeight: "50px"
                }}>
                    {tampilkanKomponen ? '- ' : '+ '}
                    {/* Judul Pertanyaan */}
                    {pos.pertanyaan}
                </button>

                {/* ISI PERTANYAAN */}
                <div className={`komponen ${tampilkanKomponen ? 'show' : ''}`}>

                    {tampilkanKomponen && (
                        // ISI PERTANYAAN
                        <>
                            <div className='tanya' ><div />
                                <span >{pos.judul}</span><br />
                                <span
                                    className="pasal">{pos.pasal1}</span><br /><br />
                                <span >{pos.despasal}</span><br />
                            </div>

                            <ul style={{
                                backgroundColor: "white",
                                width: "100%",
                                textAlign: "justify",
                                paddingTop: "5px"
                            }}>
                                {generateListItems()}
                            </ul>
                            <div className='tanya'>
                                <span className='pasal'>{pos.pasal2}</span>
                                <ul>
                                    <li className='list'>{pos.despasal2}</li>
                                    <li className='list'>{pos.despasal3}</li>
                                </ul>
                            </div>

                        </>
                    )}

                    {/* Tombol Tutup */}
                    {tampilkanKomponen && (
                        <button onClick={tombolPertanyaan} style={{
                            padding: "5px 15px 5px 15px",
                            width: "100%",
                            backgroundColor: "#E64848",
                            color: "#FFFDE3",
                            textAlign: "right"
                        }}>
                            Tutup pertanyaan
                        </button>
                    )}
                </div>
            </div >
        </>
    );
}

export default Bertanya;
