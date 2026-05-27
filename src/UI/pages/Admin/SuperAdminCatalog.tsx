const SuperAdminCatalog = () => {
  const showToast = (type: string, message: string) => {
    console.log(`[${type}] ${message}`);
  };

  return (
    <div className="main-content">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">System Catalog & Statistics</h1>
          <div className="page-breadcrumb">
            <a href="super-admin-catalog.html">Dashboard</a>
            <i className="bi bi-chevron-right" />
            <span>System Catalog</span>
          </div>
        </div>
      </div>

      {/* ── Catalog: Industries ── */}
      <div className="section-card" id="catalog-industries">
        <div className="section-card-header">
          <h2 className="section-title">
            <i className="bi bi-gear-wide-connected" />
            Industry Structure Catalog
          </h2>
          <button
            className="btn-sa-primary"
            onClick={() =>
              document.getElementById("add-industry-modal")?.classList.add("show")
            }
          >
            <i className="bi bi-plus-lg" />
            Add Industry
          </button>
        </div>

        <div className="section-body">
          <div className="sa-tabs" role="tablist">
            <button
              className="sa-tab active"
              onClick={() => switchCatTab(this, "cat-all")}
            >
              All Sectors
              <span
                style={{
                  background: "rgba(0,0,0,0.07)",
                  borderRadius: "10px",
                  padding: "1px 7px",
                  fontSize: "11px",
                }}
              >
                18
              </span>
            </button>
            <button
              className="sa-tab"
              onClick={() => switchCatTab(this, "cat-manufacturing")}
            >
              Manufacturing
            </button>
            <button
              className="sa-tab"
              onClick={() => switchCatTab(this, "cat-tech")}
            >
              Technology
            </button>
            <button
              className="sa-tab"
              onClick={() => switchCatTab(this, "cat-logistics")}
            >
              Logistics
            </button>
          </div>

          {/* Tab: All */}
          <div className="tab-panel active" id="cat-all">
            <div className="catalog-grid">
              {/* Electronics */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(59,130,246,0.1)", color: "#2563eb" }}
                >
                  <i className="bi bi-cpu-fill" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Electronics</div>
                  <div className="catalog-item-sub">4 sub-categories · 42 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      color: "#2563eb",
                      marginTop: "4px",
                    }}
                  >
                    Manufacturing
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Electronics sector.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Mechanical Engineering */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(16,185,129,0.1)", color: "#059669" }}
                >
                  <i className="bi bi-gear-wide-connected" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Mechanical Engineering</div>
                  <div className="catalog-item-sub">6 sub-categories · 58 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#059669",
                      marginTop: "4px",
                    }}
                  >
                    Manufacturing
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Mechanical Engineering.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Chemicals */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(245,158,11,0.1)", color: "#d97706" }}
                >
                  <i className="bi bi-droplet-fill" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Chemicals</div>
                  <div className="catalog-item-sub">5 sub-categories · 29 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      color: "#d97706",
                      marginTop: "4px",
                    }}
                  >
                    Manufacturing
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Chemicals.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Consumer Goods */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(239,68,68,0.1)", color: "#dc2626" }}
                >
                  <i className="bi bi-basket-fill" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Consumer Goods</div>
                  <div className="catalog-item-sub">3 sub-categories · 34 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      color: "#dc2626",
                      marginTop: "4px",
                    }}
                  >
                    Manufacturing
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Consumer Goods.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Logistics & Transport */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(79,70,229,0.1)", color: "#4f46e5" }}
                >
                  <i className="bi bi-truck" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Logistics & Transport</div>
                  <div className="catalog-item-sub">4 sub-categories · 22 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(79,70,229,0.1)",
                      color: "#4f46e5",
                      marginTop: "4px",
                    }}
                  >
                    Logistics
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Logistics.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Automation & AI */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}
                >
                  <i className="bi bi-robot" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Automation & AI</div>
                  <div className="catalog-item-sub">2 sub-categories · 11 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      color: "#7c3aed",
                      marginTop: "4px",
                    }}
                  >
                    Technology
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Automation & AI.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Renewable Energy */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(20,184,166,0.1)", color: "#0d9488" }}
                >
                  <i className="bi bi-lightning-charge-fill" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Renewable Energy</div>
                  <div className="catalog-item-sub">3 sub-categories · 9 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(20,184,166,0.1)",
                      color: "#0d9488",
                      marginTop: "4px",
                    }}
                  >
                    Technology
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Renewable Energy.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>

              {/* Construction Materials */}
              <div className="catalog-item">
                <div
                  className="catalog-item-icon"
                  style={{ background: "rgba(249,115,22,0.1)", color: "#ea580c" }}
                >
                  <i className="bi bi-bricks" />
                </div>
                <div className="catalog-item-info">
                  <div className="catalog-item-name">Construction Materials</div>
                  <div className="catalog-item-sub">2 sub-categories · 16 enterprises</div>
                  <span
                    className="ind-tag"
                    style={{
                      background: "rgba(249,115,22,0.1)",
                      color: "#ea580c",
                      marginTop: "4px",
                    }}
                  >
                    Manufacturing
                  </span>
                </div>
                <div className="catalog-item-actions">
                  <button
                    className="catalog-action-btn"
                    title="Edit"
                    onClick={() => showToast("success", "Editing Construction Materials.")}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button className="catalog-action-btn del" title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tab: Manufacturing */}
          <div className="tab-panel" id="cat-manufacturing">
            <div style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)" }}>
              <i className="bi bi-gear-wide-connected" style={{ fontSize: "40px", opacity: 0.3 }} />
              <p style={{ marginTop: "12px" }}>Showing Manufacturing sectors only.</p>
            </div>
          </div>

          {/* Tab: Technology */}
          <div className="tab-panel" id="cat-tech">
            <div style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)" }}>
              <i className="bi bi-robot" style={{ fontSize: "40px", opacity: 0.3 }} />
              <p style={{ marginTop: "12px" }}>Showing Technology sectors only.</p>
            </div>
          </div>

          {/* Tab: Logistics */}
          <div className="tab-panel" id="cat-logistics">
            <div style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)" }}>
              <i className="bi bi-truck" style={{ fontSize: "40px", opacity: 0.3 }} />
              <p style={{ marginTop: "12px" }}>Showing Logistics sectors only.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Catalog: Industrial Park Areas ── */}
      <div className="section-card" id="catalog-parks">
        <div className="section-card-header">
          <h2 className="section-title">
            <i className="bi bi-geo-alt-fill" />
            Industrial Park Areas
          </h2>
          <button
            className="btn-sa-primary"
            onClick={() =>
              document.getElementById("add-park-modal")?.classList.add("show")
            }
          >
            <i className="bi bi-plus-lg" />
            Add Park
          </button>
        </div>

        <div className="section-body" style={{ padding: 0 }}>
          <table className="sa-table">
            <thead>
              <tr>
                <th>Park Name</th>
                <th>Cluster / Group</th>
                <th>Province</th>
                <th>Area (ha)</th>
                <th>Occupancy</th>
                <th>Enterprises</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* VSIP Binh Duong I */}
              <tr>
                <td><strong>VSIP Binh Duong I</strong></td>
                <td>VSIP Group</td>
                <td>Binh Duong</td>
                <td>499</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        flex: 1,
                        height: "5px",
                        background: "var(--border-color)",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "96%",
                          height: "100%",
                          background: "#4f46e5",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--heading-color)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      96%
                    </span>
                  </div>
                </td>
                <td>186</td>
                <td><span className="badge-status active">Active</span></td>
                <td>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className="catalog-action-btn"
                      title="Edit"
                      onClick={() => showToast("success", "Editing VSIP Binh Duong I.")}
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button className="catalog-action-btn" title="View">
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* VSIP Hai Phong */}
              <tr>
                <td><strong>VSIP Hai Phong</strong></td>
                <td>VSIP Group</td>
                <td>Hai Phong</td>
                <td>1,600</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        flex: 1,
                        height: "5px",
                        background: "var(--border-color)",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "72%",
                          height: "100%",
                          background: "#3b82f6",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--heading-color)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      72%
                    </span>
                  </div>
                </td>
                <td>143</td>
                <td><span className="badge-status active">Active</span></td>
                <td>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className="catalog-action-btn"
                      title="Edit"
                      onClick={() => showToast("success", "Editing VSIP Hai Phong.")}
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button className="catalog-action-btn" title="View">
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* My Phuoc 1 */}
              <tr>
                <td><strong>My Phuoc 1</strong></td>
                <td>My Phuoc Group</td>
                <td>Binh Duong</td>
                <td>1,000</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        flex: 1,
                        height: "5px",
                        background: "var(--border-color)",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "88%",
                          height: "100%",
                          background: "#10b981",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--heading-color)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      88%
                    </span>
                  </div>
                </td>
                <td>112</td>
                <td><span className="badge-status active">Active</span></td>
                <td>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className="catalog-action-btn"
                      title="Edit"
                      onClick={() => showToast("success", "Editing My Phuoc 1.")}
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button className="catalog-action-btn" title="View">
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* My Phuoc 2 */}
              <tr>
                <td><strong>My Phuoc 2</strong></td>
                <td>My Phuoc Group</td>
                <td>Binh Duong</td>
                <td>2,400</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        flex: 1,
                        height: "5px",
                        background: "var(--border-color)",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "79%",
                          height: "100%",
                          background: "#10b981",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--heading-color)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      79%
                    </span>
                  </div>
                </td>
                <td>98</td>
                <td><span className="badge-status active">Active</span></td>
                <td>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className="catalog-action-btn"
                      title="Edit"
                      onClick={() => showToast("success", "Editing My Phuoc 2.")}
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button className="catalog-action-btn" title="View">
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Amata City Bien Hoa */}
              <tr>
                <td><strong>Amata City Bien Hoa</strong></td>
                <td>Amata Group</td>
                <td>Dong Nai</td>
                <td>700</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        flex: 1,
                        height: "5px",
                        background: "var(--border-color)",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "84%",
                          height: "100%",
                          background: "#f59e0b",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--heading-color)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      84%
                    </span>
                  </div>
                </td>
                <td>76</td>
                <td><span className="badge-status active">Active</span></td>
                <td>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className="catalog-action-btn"
                      title="Edit"
                      onClick={() => showToast("success", "Editing Amata City.")}
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button className="catalog-action-btn" title="View">
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* VSIP Quang Ngai */}
              <tr>
                <td><strong>VSIP Quang Ngai</strong></td>
                <td>VSIP Group</td>
                <td>Quang Ngai</td>
                <td>1,132</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        flex: 1,
                        height: "5px",
                        background: "var(--border-color)",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "45%",
                          height: "100%",
                          background: "#ef4444",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--heading-color)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      45%
                    </span>
                  </div>
                </td>
                <td>38</td>
                <td><span className="badge-status developing">Developing</span></td>
                <td>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className="catalog-action-btn"
                      title="Edit"
                      onClick={() => showToast("success", "Editing VSIP Quang Ngai.")}
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button className="catalog-action-btn" title="View">
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

declare function switchCatTab(el: unknown, tabId: string): void;

export default SuperAdminCatalog;