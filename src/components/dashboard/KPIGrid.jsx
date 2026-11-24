function KPIGrid({ metrics = [], loading = false }) {
  if (loading) {
    return (
      <section id="kpis" className="dashboard-kpis">
        <p>Loading metrics…</p>
      </section>
    );
  }

  if (metrics.length === 0) {
    return (
      <section id="kpis" className="dashboard-kpis">
        <p>No data available.</p>
      </section>
    );
  }

  return (
    <section id="kpis" className="dashboard-kpis">
      {metrics.map((metric) => (
        <article key={metric.label} className="kpi-card">
          <div className="kpi-header">
            {metric.icon && <div className="kpi-icon">{metric.icon}</div>}
            <span>{metric.label}</span>
          </div>

          <div className="kpi-body">
            <strong>{metric.value}</strong>
          </div>

          <div className="kpi-footer">
            {metric.change && (
              <span className={`kpi-change ${metric.status || "neutral"}`}>
                {metric.change}
              </span>
            )}
            <small>{metric.detail}</small>
          </div>
        </article>
      ))}
    </section>
  );
}

export default KPIGrid;