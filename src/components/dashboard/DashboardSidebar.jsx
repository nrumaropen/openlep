import { useEffect, useState } from "react";

function DashboardSidebar() {

  const [active, setActive] = useState("summary");

  const sections = [

    {
      id: "summary",
      icon: "📊",
      label: "Executive Summary",
    },

    {
      id: "kpis",
      icon: "📈",
      label: "Key Metrics",
    },

    {
      id: "demand",
      icon: "🌐",
      label: "Language Demand",
    },

    {
      id: "compliance",
      icon: "✓",
      label: "Compliance",
    },

    {
      id: "organizations",
      icon: "🏢",
      label: "Organizations",
    },

    {
      id: "risk",
      icon: "⚠",
      label: "Risk Analysis",
    },

    {
      id: "ai",
      icon: "🤖",
      label: "AI Analysis",
    },

    {
      id: "activity",
      icon: "📝",
      label: "Activity Feed",
    },

  ];

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {

        threshold: 0.35,

      }

    );

    sections.forEach((section) => {

      const element = document.getElementById(section.id);

      if (element) {

        observer.observe(element);

      }

    });

    return () => observer.disconnect();

  }, []);

  const scrollToSection = (id) => {

    document

      .getElementById(id)

      ?.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

  };

  return (

    <aside className="dashboard-sidebar">

      <div className="sidebar-brand">

        <h2>OpenLEP</h2>

        <span>

          Enterprise Dashboard

        </span>

      </div>

      <div className="sidebar-title">

        Navigation

      </div>

      <nav className="sidebar-nav">

        {

          sections.map((section) => (

            <button

              key={section.id}

              onClick={() => scrollToSection(section.id)}

              className={

                active === section.id

                  ? "active"

                  : ""

              }

            >

              <span className="sidebar-icon">

                {section.icon}

              </span>

              {section.label}

            </button>

          ))

        }

      </nav>

    </aside>

  );

}

export default DashboardSidebar;