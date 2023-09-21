import React, { useEffect, useState } from 'react';

const ConstellationBackground: React.FC = () => {
  const [constellations, setConstellations] = useState<Array<{ name: string; stars: { x: number; y: number }[] }>>([]);

  useEffect(() => {
    // Define your constellations and their coordinates here
    const constellationData = [
      { name: 'Orion', stars: [{ x: 100, y: 150 }, { x: 120, y: 140 }, /* Add more star coordinates */] },
      // Define more constellations as needed
    ];

    setConstellations(constellationData);
  }, []);

  const handleMouseOverConstellation = (constellationName: string) => {
    // Implement your logic to display information or interactive content
    // when a constellation is hovered over or clicked
    console.log(`Hovered over constellation: ${constellationName}`);
  };

  return (
    <div className="min-h-screen bg-black">
      {constellations.map((constellation, index) => (
        <div
          key={index}
          className="absolute"
          onMouseOver={() => handleMouseOverConstellation(constellation.name)}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {constellation.stars.map((star, starIndex) => (
            <div
              key={starIndex}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ top: star.y, left: star.x }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ConstellationBackground;
