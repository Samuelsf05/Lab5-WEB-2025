import './App.css';
import ScientistCard from './components/ScientistCard';

function App() {
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      image: "/maria.jpg", 
      profession: "física y química",
      awards: 4,
      awardsList: [
        "Premio Nobel de Física",
        "Premio Nobel de Química",
        "Medalla Davy",
        "Medalla Matteucci"
      ],
      discovery: "polonio (elemento químico)",
    },
    {
      name: "Katsuko Saruhashi",
      image: "/katsuko.jpg", 
      profession: "geoquímica",
      awards: 2,
      awardsList: [
        "Premio Miyake de geoquímica",
        "Premio Tanaka"
      ],
      discovery: "un método para medir el dióxido de carbono en el agua de mar",
    }
  ];

  return (
    <>
      <h1>Ejercicio Final – Guía 5</h1>
      <div>
        <h2 style={{marginTop: "2.5rem"}}>Científicos Notables</h2>
        <div>
          {scientists.map(scientist => (
            <ScientistCard key={scientist.name} {...scientist} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;