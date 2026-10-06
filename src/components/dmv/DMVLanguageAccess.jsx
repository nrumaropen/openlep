function DMVLanguageAccess() {

    return (
      <section className="dmv-panel">
        
                      <div className="dmv-panel-header">
                        <div>
                          <span>LANGUAGE ACCESS</span>
                          <h2>Customer Assistance Demand</h2>
                        </div>
        
                        <span className="dmv-badge">
                          386 requests
                        </span>
                      </div>
        
                      <div className="dmv-language-grid">
        
                        <div className="dmv-language">
                          <div>
                            <span>Spanish</span>
                            <strong>241</strong>
                          </div>
        
                          <div className="dmv-progress">
                            <span style={{ width: "63%" }}></span>
                          </div>
                        </div>
        
                        <div className="dmv-language">
                          <div>
                            <span>Vietnamese</span>
                            <strong>42</strong>
                          </div>
        
                          <div className="dmv-progress">
                            <span style={{ width: "28%" }}></span>
                          </div>
                        </div>
        
                        <div className="dmv-language">
                          <div>
                            <span>Mandarin</span>
                            <strong>31</strong>
                          </div>
        
                          <div className="dmv-progress">
                            <span style={{ width: "22%" }}></span>
                          </div>
                        </div>
        
                        <div className="dmv-language">
                          <div>
                            <span>Arabic</span>
                            <strong>24</strong>
                          </div>
        
                          <div className="dmv-progress">
                            <span style={{ width: "17%" }}></span>
                          </div>
                        </div>
        
                        <div className="dmv-language">
                          <div>
                            <span>Other Languages</span>
                            <strong>48</strong>
                          </div>
        
                          <div className="dmv-progress">
                            <span style={{ width: "31%" }}></span>
                          </div>
                        </div>
        
                      </div>
        
      </section>
    )
}

export default DMVLanguageAccess