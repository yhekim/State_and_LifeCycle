import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isim, setIsım] = useState(true);

  // useEffect Component yüklendikten sonra çalışır
  //  bu ne demektir yani mesaj göster useEffecti
  //  App in useEffectinden önce çalışır.

  useEffect(() => {
    console.log("useEffect isimden dolayı çalıştı");
  }, [isim]);
  return (
    <div className="App">
      {isim ? <h1>Merhaba,Mehmet</h1> : <h1>Merhaba,Ahmet</h1>}

      <button onClick={() => setIsım(!isim)}>İsmi Değiştir</button>
      {isim === true && <MesajGoster />}
    </div>
  );
}
function MesajGoster() {
  useEffect(() => {
    return () => {
      console.log("useEffect isimden dolayı çalıştı");
    };
  }, []);
  return (
    <div>
      <h3>Hayatta en hakiki mürşit ilimdir</h3>

      <h3>Ben sporcunun zeki çevik ahlaklısını severim</h3>

      {/* <button onClick={() => setMesajDegistir(!mesajDegistir)}>
        Mesajı Değiştir
      </button> */}
      <button>Mesajı Değiştir</button>
    </div>
  );
}
