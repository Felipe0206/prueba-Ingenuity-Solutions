import React from "react";
import "./EventsSection.css";
import classnames from 'classnames'
import photo_1 from'../../asets/newman-club/50973721_2230244250369964_4223824044664815616_n.jpg'
import photo_2 from'../../asets/newman-club/Captura de pantalla 2022-05-25 151340.jpg'
import photo_3 from'../../asets/newman-club/Captura de pantalla 2022-05-25 152505.jpg'
import photo_4 from'../../asets/newman-club/Captura de pantalla 2022-05-25 152451.jpg'
import icono from'../../asets/newman-club/Grupo 54.svg'
const EventsSection = () => {
    
  const fotos = [
    {
        id: 1,
        event:"EVENT 1",
        ruta: photo_1,
        data:"12 JUNE",
        class:"EVENT-1"
    },
    {
        id: 2,
        event:"EVENT 2",
        ruta: photo_2,
        data:"12 JUNE"
    },
    {
        id: 3,
        event:"EVENT 3",
        ruta: photo_3,
        data:"12 JUNE"
    },{
        id: 4,
        event:"EVENT 4",
        ruta: photo_4,
        data:"12 JUNE",
        class:"EVENT-4"
    },
  ];

  return (
    <div>
        <div className="iconos">
            <img  src={icono}></img>
            <h2>Events</h2>
        </div>
        <div className="galeria">
        {fotos.map((foto) => (
            <div key={foto.event} className={classnames("foto" ,foto.class)}>
            <img src={foto.ruta} alt={foto.event} />
            <div className="box">
            <div className="diplay">
                <span className="texto" >{foto.event}</span>
                <div className="numero">{foto.data}</div>
            </div>
            </div>
            </div>
        ))}
        </div>
        <br></br>
        <div className="box-buttoon">
            <a>MORE EVENTS</a>
            <br></br><br></br>
            <p>Let's have fun, join us in our events. Find out more here.</p>
        </div>
    </div>
  );
};

export default EventsSection;