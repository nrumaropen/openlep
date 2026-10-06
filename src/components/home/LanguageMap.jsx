import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "@vnedyalk0v/react19-simple-maps";

import usStates from "us-atlas/states-10m.json";

import {
  languageData,
  levelLabels,
} from "../../data/languageMapData";


// =========================================================
// COMPONENT
// =========================================================

function LanguageMap() {
  const [activeState, setActiveState] = useState(null);

  const [tooltip, setTooltip] = useState({
    x: 0,
    y: 0,
  });


  const updateTooltipPosition = (event) => {
    const card =
      event.currentTarget.closest(".language-map-card");

    if (!card) return;

    const bounds = card.getBoundingClientRect();

    setTooltip({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };


  const showState = (stateName, event) => {
    const data = languageData[stateName];

    if (!data) return;

    setActiveState({
      name: stateName,
      ...data,
    });

    if (event) {
      updateTooltipPosition(event);
    }
  };


  return (
    <section className="language-map">

      {/* HEADER */}

      <div className="language-map-header">

        <div className="map-heading">

          <p className="map-introduction">
            In the United States, over 27 million individuals are
            limited English proficient (LEP), yet federal oversight
            of language access services remains fragmented,
            inconsistently tracked, and increasingly at risk following
            the 2025 executive order rescinding coordinated federal
            guidance.
            </p>

        </div>


        {/* LEGEND */}

        <div className="map-legend">

          <span className="legend-label">
            Lower
          </span>

          <div className="legend-scale">

            {[1, 2, 3, 4, 5].map((level) => (
              <span
                key={level}
                className={`legend-block level-${level}`}
              />
            ))}

          </div>

          <span className="legend-label">
            Higher
          </span>

        </div>

      </div>


      {/* MAP */}

      <div className="language-map-card">

        <ComposableMap
          projection="geoAlbersUsa"
          className="language-map-svg"
          projectionConfig={{
            scale: 1000,
          }}
        >

          <Geographies geography={usStates}>

            {({ geographies }) =>
              geographies.map((geo) => {

                const stateName =
                  geo.properties.name;

                const data =
                  languageData[stateName];

                const level =
                  data?.level || 1;


                return (
                  <Geography
                    key={geo.rpiKey || geo.id}
                    geography={geo}

                    className={`map-state level-${level}`}

                    onMouseEnter={(event) => {
                      showState(stateName, event);
                    }}

                    onMouseMove={(event) => {
                      if (data) {
                        updateTooltipPosition(event);
                      }
                    }}

                    onMouseLeave={() => {
                      setActiveState(null);
                    }}

                    onFocus={() => {
                      showState(stateName);
                    }}

                    aria-label={
                      data
                        ? `${stateName}. Languages: ${data.languages.join(", ")}`
                        : stateName
                    }

                    style={{
                      default: {
                        fill: data
                          ? undefined
                          : "#e9eeea",

                        outline: "none",
                      },

                      hover: {
                        outline: "none",
                      },

                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }

          </Geographies>

        </ComposableMap>


        {/* TOOLTIP */}

        {activeState && (

          <div
            className="language-tooltip"
            style={{
              left: tooltip.x,
              top: tooltip.y,
            }}
          >

            <div className="tooltip-header">

              <strong>
                {activeState.name}
              </strong>

              <span
                className={`tooltip-level level-${activeState.level}`}
              >
                {levelLabels[activeState.level]}
              </span>

            </div>


            <div className="tooltip-divider" />


            <span className="tooltip-label">
              COMMON LANGUAGES
            </span>


            <div className="tooltip-languages">

              {activeState.languages.map(
                (language) => (
                  <span key={language}>
                    {language}
                  </span>
                )
              )}

            </div>

          </div>

        )}

      </div>


    </section>
  );
}


export default LanguageMap;