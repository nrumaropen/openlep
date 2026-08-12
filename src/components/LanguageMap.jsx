import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "@vnedyalk0v/react19-simple-maps";

import usStates from "us-atlas/states-10m.json";


// =========================================================
// LANGUAGE DATA
// =========================================================

const languageData = {
  Alabama: {
    level: 4,
    languages: ["Spanish", "Chinese", "Korean", "Vietnamese"],
  },

  Alaska: {
    level: 2,
    languages: ["Yup'ik", "Inupiaq", "Tagalog", "Spanish"],
  },

  Arizona: {
    level: 5,
    languages: ["Spanish", "Navajo", "Chinese", "Tagalog", "Vietnamese"],
  },

  Arkansas: {
    level: 4,
    languages: ["Spanish", "Chinese", "Vietnamese"],
  },

  California: {
    level: 5,
    languages: [
      "Spanish",
      "Chinese",
      "Tagalog",
      "Vietnamese",
      "Korean",
      "Armenian",
    ],
  },

  Colorado: {
    level: 4,
    languages: ["Spanish", "Chinese", "Vietnamese", "Korean"],
  },

  Connecticut: {
    level: 4,
    languages: ["Spanish", "Chinese", "Portuguese"],
  },

  Delaware: {
    level: 4,
    languages: ["Spanish", "Chinese", "Haitian Creole"],
  },

  Florida: {
    level: 5,
    languages: [
      "Spanish",
      "Haitian Creole",
      "Portuguese",
      "Chinese",
      "Vietnamese",
    ],
  },

  Georgia: {
    level: 5,
    languages: ["Spanish", "Korean", "Vietnamese", "Chinese", "Arabic"],
  },

  Hawaii: {
    level: 4,
    languages: ["Tagalog", "Japanese", "Ilocano", "Spanish", "Chinese"],
  },

  Idaho: {
    level: 2,
    languages: ["Spanish", "Chinese", "German"],
  },

  Illinois: {
    level: 5,
    languages: ["Spanish", "Polish", "Chinese", "Tagalog", "Arabic"],
  },

  Indiana: {
    level: 4,
    languages: ["Spanish", "Chinese", "German", "Arabic"],
  },

  Iowa: {
    level: 3,
    languages: ["Spanish", "Chinese", "Vietnamese"],
  },

  Kansas: {
    level: 3,
    languages: ["Spanish", "Chinese", "Vietnamese"],
  },

  Kentucky: {
    level: 4,
    languages: ["Spanish", "Chinese", "Arabic", "Vietnamese"],
  },

  Louisiana: {
    level: 4,
    languages: ["Spanish", "French", "Vietnamese", "Chinese"],
  },

  Maine: {
    level: 3,
    languages: ["French", "Spanish", "Chinese"],
  },

  Maryland: {
    level: 5,
    languages: ["Spanish", "Chinese", "Korean", "Vietnamese", "Arabic"],
  },

  Massachusetts: {
    level: 4,
    languages: ["Spanish", "Chinese", "Portuguese", "Haitian Creole"],
  },

  Michigan: {
    level: 4,
    languages: ["Spanish", "Arabic", "Chinese", "Polish"],
  },

  Minnesota: {
    level: 2,
    languages: ["Spanish", "Hmong", "Somali", "Chinese"],
  },

  Mississippi: {
    level: 4,
    languages: ["Spanish", "Vietnamese", "Chinese"],
  },

  Missouri: {
    level: 4,
    languages: ["Spanish", "Chinese", "Vietnamese", "Bosnian"],
  },

  Montana: {
    level: 2,
    languages: ["Spanish", "German", "French"],
  },

  Nebraska: {
    level: 2,
    languages: ["Spanish", "Chinese", "Vietnamese"],
  },

  Nevada: {
    level: 3,
    languages: ["Spanish", "Chinese"],
  },

  "New Hampshire": {
    level: 3,
    languages: ["French", "Spanish", "Chinese"],
  },

  "New Jersey": {
    level: 4,
    languages: ["Spanish", "Chinese", "Portuguese", "Korean"],
  },

  "New Mexico": {
    level: 4,
    languages: ["Spanish", "Navajo", "Vietnamese", "Chinese"],
  },

  "New York": {
    level: 5,
    languages: ["Spanish", "Chinese", "Russian", "Bengali", "Haitian Creole"],
  },

  "North Carolina": {
    level: 5,
    languages: ["Spanish", "Chinese", "Vietnamese", "Arabic", "French"],
  },

  "North Dakota": {
    level: 1,
    languages: ["Spanish", "German", "Norwegian"],
  },

  Ohio: {
    level: 5,
    languages: ["Spanish", "Arabic", "Chinese", "Somali", "Nepali"],
  },

  Oklahoma: {
    level: 4,
    languages: ["Spanish", "Vietnamese", "Chinese"],
  },

  Oregon: {
    level: 3,
    languages: ["Spanish", "Chinese", "Vietnamese"],
  },

  Pennsylvania: {
    level: 5,
    languages: ["Spanish", "Chinese", "Italian", "Russian", "Vietnamese"],
  },

  "Rhode Island": {
    level: 3,
    languages: ["Spanish", "Portuguese", "Chinese"],
  },

  "South Carolina": {
    level: 5,
    languages: ["Spanish", "Chinese", "Vietnamese", "Arabic"],
  },

  "South Dakota": {
    level: 2,
    languages: ["Spanish", "German", "Chinese"],
  },

  Tennessee: {
    level: 4,
    languages: ["Spanish", "Arabic", "Chinese", "Vietnamese"],
  },

  Texas: {
    level: 5,
    languages: ["Spanish", "Vietnamese", "Chinese", "Korean", "Arabic"],
  },

  Utah: {
    level: 3,
    languages: ["Spanish", "Chinese", "Vietnamese"],
  },

  Vermont: {
    level: 3,
    languages: ["French", "Spanish", "Chinese"],
  },

  Virginia: {
    level: 5,
    languages: ["Spanish", "Korean", "Vietnamese", "Chinese", "Arabic"],
  },

  Washington: {
    level: 4,
    languages: ["Spanish", "Chinese", "Vietnamese", "Russian", "Korean"],
  },

  "West Virginia": {
    level: 4,
    languages: ["Spanish", "Chinese", "Arabic"],
  },

  Wisconsin: {
    level: 3,
    languages: ["Spanish", "Hmong", "Chinese", "Polish"],
  },

  Wyoming: {
    level: 3,
    languages: ["Spanish", "Chinese", "German"],
  },
};


// =========================================================
// LEVEL LABELS
// =========================================================

const levelLabels = {
  1: "Lower",
  2: "Low",
  3: "Moderate",
  4: "High",
  5: "Very high",
};


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

          <span className="map-eyebrow">
            LANGUAGE ACCESS LANDSCAPE
          </span>

          <h3>
            Languages spoken across
            the United States beside English
          </h3>

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


      {/* FOOTER */}

      <div className="language-map-footer">

        <span>
          Demonstration visualization
        </span>

        <span>
          Hover over a state to explore languages
        </span>

      </div>

    </section>
  );
}


export default LanguageMap;