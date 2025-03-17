import { useState, useEffect } from "react";

const BoiteDialogue = ({ message, onClose }) => (
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg rounded-xl">
    <p>{message}</p>
    <button onClick={onClose} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">OK</button>
  </div>
);

const EcranVictoire = ({ onRestart }) => (
  <div className="h-screen flex flex-col justify-center items-center bg-green-200 text-2xl">
    <p>🎉 Félicitations ! Tu as complété toutes les tâches !</p>
    <p className="mt-4 text-xl">Score final : ⭐ 5/5</p>
    <button onClick={onRestart} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">Rejouer</button>
  </div>
);

const Chambre = ({ changerScene, afficherMessage, ajouterEtoile, desactiverTache, taches }) => (
  <div id="bedroom" className="relative h-screen flex justify-start items-center">
    <img src="/backgroundSceneBedroom.svg" alt="" className="-z-10 size-full absolute" />
    <img src="/bibliothèque dans la chambre.svg" alt="" className="absolute -z-10"/>
    <img src="/console dans la chambre.svg" alt="" className="absolute -z-10"/>
    <img src="/lit dans la chambre(1).svg" alt="" className="absolute -z-10"/>
    <img src="/placard dans la chambre(1).svg" alt="" className="absolute -z-10"/>
    <button onClick={() => changerScene("salleDeBain")} className="absolute left-2 top-3/4 bg-red-700 text-white px-4 py-2 rounded">Porte</button>
    <button onClick={() => desactiverTache('lit', () => { afficherMessage("Faire son lit, c'est bien !"); ajouterEtoile(); })} disabled={taches.lit} className="m-2 bg-yellow-500 px-4 py-2 rounded">Lit</button>
    <button onClick={() => desactiverTache('bureau', () => { afficherMessage("Faire ses devoirs aide à progresser."); ajouterEtoile(); })} disabled={taches.bureau} className="m-2 bg-green-500 px-4 py-2 rounded">Bureau</button>
    <button onClick={() => desactiverTache('rangement', () => { afficherMessage("Ranger sa chambre permet de mieux s'organiser."); ajouterEtoile(); })} disabled={taches.rangement} className="m-2 bg-blue-500 px-4 py-2 rounded">Ranger</button>
    <button onClick={() => desactiverTache('preparer_affaires', () => { afficherMessage("Préparer ses affaires facilite la journée du lendemain."); ajouterEtoile(); })} disabled={taches.preparer_affaires} className="m-2 bg-purple-500 px-4 py-2 rounded">Préparer ses affaires</button>
  </div>
);

const SalleDeBain = ({ changerScene, afficherMessage, ajouterEtoile, desactiverTache, taches }) => (
  <div id="bathroom" className="relative h-screen flex justify-center items-center">
    <button onClick={() => changerScene("chambre")} className="absolute left-2 top-3/4 bg-red-700 text-white px-4 py-2 rounded">Porte</button>
    <button onClick={() => desactiverTache('lavabo', () => { afficherMessage("Se brosser les dents est important."); ajouterEtoile(); })} disabled={taches.lavabo} className="m-2 bg-amber-500 px-4 py-2 rounded">Lavabo</button>
    <button onClick={() => desactiverTache('toilettes', () => { afficherMessage("Se laver permet de rester propre."); ajouterEtoile(); })} disabled={taches.toilettes} className="m-2 bg-gray-500 px-4 py-2 rounded">Douche</button>
    <button onClick={() => desactiverTache('cheveux', () => { afficherMessage("Se coiffer aide à avoir une bonne présentation."); ajouterEtoile(); })} disabled={taches.cheveux} className="m-2 bg-pink-500 px-4 py-2 rounded">Se coiffer</button>
    <button onClick={() => desactiverTache('mains', () => { afficherMessage("Se laver les mains évite les maladies."); ajouterEtoile(); })} disabled={taches.mains} className="m-2 bg-teal-500 px-4 py-2 rounded">Se laver les mains</button>
  </div>
);

export default function TasksGame() {
  const [scene, setScene] = useState("chambre");
  const [message, setMessage] = useState(null);
  const [etoiles, setEtoiles] = useState(0);
  const [temps, setTemps] = useState(10);
  const [taches, setTaches] = useState({ lit: false, bureau: false, rangement: false, preparer_affaires: false, lavabo: false, toilettes: false, cheveux: false, mains: false });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTemps((prev) => (prev > 0 && etoiles < 5 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, [etoiles]);

  const ajouterEtoile = () => setEtoiles((prev) => Math.min(5, prev + 1));
  const desactiverTache = (tache, action) => {
    if (!taches[tache]) {
      action();
      setTaches({ ...taches, [tache]: true });
    }
  };

  if (etoiles >= 5) {
    return <EcranVictoire onRestart={() => window.location.reload()} />;
  }

  if (temps === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-2xl">
        <p>❌ Défaite, réessayez !</p>
        <p className="mt-4 text-xl">Score final : ⭐ {etoiles}/5</p>
        <button onClick={() => window.location.reload()} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">Rejouer</button>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute z-10 top-5 left-5 text-xl bg-white p-2 rounded shadow-lg">⭐ <span className="font-bold text-yellow-500">{etoiles}</span>/5</div>
      <div className="absolute z-10 top-5 right-5 text-xl bg-white p-2 rounded shadow-lg">⏳ <span className="font-bold text-red-500">{temps}</span>s</div>
          {scene === "chambre" && <Chambre changerScene={setScene} afficherMessage={setMessage} ajouterEtoile={ajouterEtoile} desactiverTache={desactiverTache} taches={taches} />}
          {scene === "salleDeBain" && <SalleDeBain changerScene={setScene} afficherMessage={setMessage} ajouterEtoile={ajouterEtoile} desactiverTache={desactiverTache} taches={taches} />}
      {message && <BoiteDialogue message={message} onClose={() => setMessage(null)} />}
    </div>
  );
}
