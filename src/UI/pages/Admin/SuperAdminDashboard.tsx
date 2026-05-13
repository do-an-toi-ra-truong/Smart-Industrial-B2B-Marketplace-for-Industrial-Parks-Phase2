const SuperAdminDashboard = () => {
    return (
        <>
            <div className="main-content">
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">
                            Economic Dashboard
                        </h1>
                        <div className="page-breadcrumb">
                            <a href="super-admin-dashboard.html">
                                Dashboard
                            </a>
                            <i className="bi bi-chevron-right" />
                            <span>
                                SIBMIP Economic Overview · Q1 2026
                            </span>
                        </div>
                    </div>
                    <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'alignItems': 'center' }}>
                        <button className="btn-sa-outline">
                            <i className="bi bi-download" />
                            Export PDF
                        </button>
                        <button className="btn-sa-primary">
                            <i className="bi bi-send" />
                            Share Report
                        </button>
                    </div>
                </div>
                {/* KPI Strip */}
                <div className="kpi-strip">
                    <div className="kpi-card c1">
                        <div className="kpi-top">
                            <div className="kpi-icon c1">
                                <i className="bi bi-bar-chart-line-fill" />
                            </div>
                            <span className="kpi-trend up">
                                <i className="bi bi-arrow-up" />
                                +24.3%
                            </span>
                        </div>
                        <div className="kpi-value">
                            ₫48.7T
                        </div>
                        <div className="kpi-label">
                            Total Transaction Volume
                        </div>
                        <div className="kpi-sub">
                            Across all 24 industrial parks · Q1 2026
                        </div>
                    </div>
                    <div className="kpi-card c2">
                        <div className="kpi-top">
                            <div className="kpi-icon c2">
                                <i className="bi bi-buildings-fill" />
                            </div>
                            <span className="kpi-trend up">
                                <i className="bi bi-arrow-up" />
                                +12
                            </span>
                        </div>
                        <div className="kpi-value">
                            348
                        </div>
                        <div className="kpi-label">
                            Active Companies
                        </div>
                        <div className="kpi-sub">
                            87 new registrations this quarter
                        </div>
                    </div>
                    <div className="kpi-card c3">
                        <div className="kpi-top">
                            <div className="kpi-icon c3">
                                <i className="bi bi-file-earmark-text-fill" />
                            </div>
                            <span className="kpi-trend up">
                                <i className="bi bi-arrow-up" />
                                +18.7%
                            </span>
                        </div>
                        <div className="kpi-value">
                            14,820
                        </div>
                        <div className="kpi-label">
                            RFQs Processed
                        </div>
                        <div className="kpi-sub">
                            ₫12.4T matched via marketplace
                        </div>
                    </div>
                    <div className="kpi-card c4">
                        <div className="kpi-top">
                            <div className="kpi-icon c4">
                                <i className="bi bi-box-seam-fill" />
                            </div>
                            <span className="kpi-trend up">
                                <i className="bi bi-arrow-up" />
                                +9.8%
                            </span>
                        </div>
                        <div className="kpi-value">
                            84,200T
                        </div>
                        <div className="kpi-label">
                            Goods Flow (Tons)
                        </div>
                        <div className="kpi-sub">
                            Cross-park logistics volume
                        </div>
                    </div>
                    <div className="kpi-card c5">
                        <div className="kpi-top">
                            <div className="kpi-icon c5">
                                <i className="bi bi-people-fill" />
                            </div>
                            <span className="kpi-trend up">
                                <i className="bi bi-arrow-up" />
                                +2,840
                            </span>
                        </div>
                        <div className="kpi-value">
                            127K
                        </div>
                        <div className="kpi-label">
                            Total Workforce
                        </div>
                        <div className="kpi-sub">
                            Employed across SIBMIP parks
                        </div>
                    </div>
                </div>
                {/* Charts row */}
                <div className="row g-3 mb-3">
                    <div className="col-lg-8">
                        <div className="section-card">
                            <div className="section-card-header">
                                <h2 className="section-title">
                                    <i className="bi bi-graph-up-arrow" />
                                    Transaction Volume Trend ( Trillion)
                                </h2>
                            </div>
                            <div className="section-body">
                                <canvas id="transaction-chart" height="280" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-card" style={{ 'height': '100%' }}>
                            <div className="section-card-header">
                                <h2 className="section-title">
                                    <i className="bi bi-pie-chart-fill" />
                                    Transaction by Industry
                                </h2>
                            </div>
                            <div className="section-body" style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'gap': '14px' }}>
                                <canvas id="industry-pie" width="180" height="180" />
                                <div id="pie-legend" style={{ 'width': '100%', 'display': 'flex', 'flexDirection': 'column', 'gap': '7px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Goods flow + Park health */}
                <div className="row g-3 mb-3" >
                    <div className="section-card">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-heart-pulse-fill" />
                                Park Economic Health Index
                            </h2>
                        </div>
                        <div style={{ 'overflowX': 'auto' }}>
                            <table className="park-table">
                                <thead>
                                    <tr>
                                        <th>
                                            Industrial Park
                                        </th>
                                        <th>
                                            Cluster
                                        </th>
                                        <th>
                                            Txn Volume
                                        </th>
                                        <th>
                                            Companies
                                        </th>
                                        <th>
                                            Health Score
                                        </th>
                                        <th>
                                            Trend
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="park-name">
                                                VSIP Binh Duong
                                            </div>
                                        </td>
                                        <td>
                                            <span className="park-cluster">
                                                Southern Cluster
                                            </span>
                                        </td>
                                        <td className="mono" style={{ 'fontWeight': '700' }}>
                                            ₫12.4T
                                        </td>
                                        <td style={{ 'fontWeight': '600' }}>
                                            142
                                        </td>
                                        <td>
                                            <div className="health-bar-wrap">
                                                <div className="health-bar">
                                                    <div className="health-fill" style={{ 'width': '92%', 'background': 'linear-gradient(90deg,#4f46e5,#7c3aed)' }}>
                                                    </div>
                                                </div>
                                                <span className="health-score" style={{ 'color': '#4f46e5' }}>
                                                    92
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="trend-tag hot">
                                                <i className="bi bi-fire" />
                                                Hot
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="park-name">
                                                My Phuoc 2
                                            </div>
                                        </td>
                                        <td>
                                            <span className="park-cluster">
                                                Southern Cluster
                                            </span>
                                        </td>
                                        <td className="mono" style={{ 'fontWeight': '700' }}>
                                            ₫9.8T
                                        </td>
                                        <td style={{ 'fontWeight': '600' }}>
                                            98
                                        </td>
                                        <td>
                                            <div className="health-bar-wrap">
                                                <div className="health-bar">
                                                    <div className="health-fill" style={{ 'width': '85%', 'background': 'linear-gradient(90deg,#10b981,#34d399)' }}>
                                                    </div>
                                                </div>
                                                <span className="health-score" style={{ 'color': '#10b981' }}>
                                                    85
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="trend-tag rising">
                                                <i className="bi bi-arrow-up-right" />
                                                Rising
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="park-name">
                                                VSIP Hai Phong
                                            </div>
                                        </td>
                                        <td>
                                            <span className="park-cluster">
                                                Northern Cluster
                                            </span>
                                        </td>
                                        <td className="mono" style={{ 'fontWeight': '700' }}>
                                            ₫7.2T
                                        </td>
                                        <td style={{ 'fontWeight': '600' }}>
                                            62
                                        </td>
                                        <td>
                                            <div className="health-bar-wrap">
                                                <div className="health-bar">
                                                    <div className="health-fill" style={{ 'width': '78%', 'background': 'linear-gradient(90deg,#3b82f6,#60a5fa)' }}>
                                                    </div>
                                                </div>
                                                <span className="health-score" style={{ 'color': '#3b82f6' }}>
                                                    78
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="trend-tag stable">
                                                <i className="bi bi-dash" />
                                                Stable
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="park-name">
                                                Amata Bien Hoa
                                            </div>
                                        </td>
                                        <td>
                                            <span className="park-cluster">
                                                Eastern Cluster
                                            </span>
                                        </td>
                                        <td className="mono" style={{ 'fontWeight': '700' }}>
                                            ₫6.1T
                                        </td>
                                        <td style={{ 'fontWeight': '600' }}>
                                            41
                                        </td>
                                        <td>
                                            <div className="health-bar-wrap">
                                                <div className="health-bar">
                                                    <div className="health-fill" style={{ 'width': '71%', 'background': 'linear-gradient(90deg,#f59e0b,#fbbf24)' }}>
                                                    </div>
                                                </div>
                                                <span className="health-score" style={{ 'color': '#d97706' }}>
                                                    71
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="trend-tag rising">
                                                <i className="bi bi-arrow-up-right" />
                                                Rising
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="park-name">
                                                My Phuoc 1
                                            </div>
                                        </td>
                                        <td>
                                            <span className="park-cluster">
                                                Southern Cluster
                                            </span>
                                        </td>
                                        <td className="mono" style={{ 'fontWeight': '700' }}>
                                            ₫5.4T
                                        </td>
                                        <td style={{ 'fontWeight': '600' }}>
                                            38
                                        </td>
                                        <td>
                                            <div className="health-bar-wrap">
                                                <div className="health-bar">
                                                    <div className="health-fill" style={{ 'width': '68%', 'background': 'linear-gradient(90deg,#6b7280,#9ca3af)' }}>
                                                    </div>
                                                </div>
                                                <span className="health-score" style={{ 'color': '#6b7280' }}>
                                                    68
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="trend-tag stable">
                                                <i className="bi bi-dash" />
                                                Stable
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperAdminDashboard  