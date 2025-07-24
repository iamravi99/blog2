import React, { useState, useEffect } from "react";
import "./Multiverse.css";


const Multiverse = () => {
  const [activeSection, setActiveSection] = useState("Knowhere");
  const [planetsData, setPlanetsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const response = await fetch(`${API_URL}/planets`);
        const data = await response.json();
        const planetsMap = {};
        data.forEach((planet) => {
          planetsMap[planet.name] = planet;
        });
        setPlanetsData(planetsMap);
      } catch (error) {
        console.error("Error fetching planets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const renderPlanetData = (planetName) => {
    const planet = planetsData[planetName];
    if (!planet) return <p>Loading planet data...</p>;

    return (
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Image Section */}
        {planet.image && (
          <div className="flex justify-center md:justify-start md:w-1/2 lg:h-full">
            <img
              src={planet.image}
              alt={planet.name}
              className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="md:w-1/2 bg-black/20 p-4 md:p-6 rounded-xl text-4xl">
          <h2 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 ">
            {planet.name}
          </h2>
          <p 
          className="mb-2 "><strong className="text-blue-500">Type:</strong>
           {planet.type}</p>
          <p className="mb-4">{planet.description}</p>
          <p className="mb-2"><strong className="text-blue-500" >Location:</strong> {planet.location}</p>

          {planet.purpose && (
            <div className="mb-4">
              <strong className="text-blue-500">Purpose:</strong>
              <ul className="list-disc ml-6 space-y-1">
                {planet.purpose.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
          {planet.governed_by && (
            <div className="mb-4">
              <strong className="text-blue-500">Governed by:</strong>
              <ul className="list-disc ml-6 space-y-1">
                {planet.governed_by.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </div>
          )}
          {planet.mcu_appearances && (
            <div className="mb-4">
              <strong className="text-blue-500">MCU Appearances:</strong>
              {planet.mcu_appearances.map((app, i) => (
                <div key={i} className="ml-4 mb-2">
                  <p className="font-semibold">{app.movie} ({app.year})</p>
                  <ul className="list-disc ml-6 space-y-1">
                    {app.events.map((event, j) => (
                      <li key={j}>{event}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {planet.associated_heroes && (
            <div className="mb-4">
              <strong className="text-blue-500">Associated Heroes:</strong>
              <p>{planet.associated_heroes.join(", ")}</p>
            </div>
          )}
          {planet.interesting_facts && (
            <div className="mb-4">
              <strong className="text-blue-500">Interesting Facts:</strong>
              <ul className="list-disc ml-6 space-y-1">
                {planet.interesting_facts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          )}

          {/* contecnt sec last div  */}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full text-white bg-[url('https://res.cloudinary.com/dxjjnlxl5/image/upload/v1753376783/space_m96irt.jpg')] bg-cover bg-center bg-fixed iceland-regular">
      {/* Navbar Buttons */}
      <div className="flex flex-wrap justify-center gap-3 p-4">
        {[
          "Knowhere",
          "Xandar",
          "Sakaar",
          "Vormir",
          "Contraxia",
          "Hala",
          "Ego",
          "Titan",
          "Zen-Whoberi",
          "Sovereign",
        ].map((planet) => (
          <button
            key={planet}
            onClick={() => handleClick(planet)}
            className={`px-4 py-2 rounded-lg border border-yellow-300 transition duration-300 hover:scale-105 hover:text-yellow-300 ${
              activeSection === planet ? "text-yellow-300 font-bold" : "text-white"
            }`}
          >
            {planet}
          </button>
        ))}
      </div>

      {/* Display Section */}
      <div className="p-6 text-lg mx-4 mt-6">
        {loading ? (
          <p className="text-center text-yellow-300 animate-pulse">
            Loading planets data...
          </p>
        ) : (
          renderPlanetData(activeSection)
        )}
      </div>
    </div>
  );
};

export default Multiverse;
