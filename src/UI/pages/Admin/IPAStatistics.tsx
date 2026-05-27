import { Link } from 'react-router-dom';

const IPAStatistics = () => {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">
                        Statistics & Reports
                    </h1>
                    <div className="page-breadcrumb">
                        <Link to="/ipadmin/dashboard">
                            Dashboard
                        </Link>
                        <i className="bi bi-chevron-right" />
                        <span>
                            Park Trading, Goods Flow & Health
                        </span>
                    </div>
                </div>
                <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'alignItems': 'center' }}>
                    <button className="btn-ia-outline" id="btn-export">
                        <i className="bi bi-download" />
                        Export Report
                    </button>
                </div>
            </div>

            {/* Transaction KPI Summary Cards */}
            <div className="stat-grid" style={{ 'gridTemplateColumns': 'repeat(auto-fit,minmax(180px,1fr))', 'marginBottom': '20px' }}>
                <div className="stat-card teal">
                    <div className="stat-icon teal">
                        <i className="bi bi-cash-stack" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ 'fontSize': '22px' }}>
                            ₫28.4B
                        </div>
                        <div className="stat-label">
                            Total Revenue (Apr)
                        </div>
                        <div style={{ 'fontSize': '11px', 'color': '#10b981', 'fontWeight': '700', 'marginTop': '2px' }}>
                            <i className="bi bi-arrow-up" />
                            +12.6% vs Mar
                        </div>
                    </div>
                </div>
                <div className="stat-card success">
                    <div className="stat-icon success">
                        <i className="bi bi-receipt-cutoff" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ 'fontSize': '22px' }}>
                            1,847
                        </div>
                        <div className="stat-label">
                            Total Transactions
                        </div>
                        <div style={{ 'fontSize': '11px', 'color': '#10b981', 'fontWeight': '700', 'marginTop': '2px' }}>
                            <i className="bi bi-arrow-up" />
                            +8.3%
                        </div>
                    </div>
                </div>
                <div className="stat-card info">
                    <div className="stat-icon info">
                        <i className="bi bi-truck" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ 'fontSize': '22px' }}>
                            2,876
                        </div>
                        <div className="stat-label">
                            Shipments Completed
                        </div>
                        <div style={{ 'fontSize': '11px', 'color': '#10b981', 'fontWeight': '700', 'marginTop': '2px' }}>
                            <i className="bi bi-arrow-up" />
                            +5.1%
                        </div>
                    </div>
                </div>
                <div className="stat-card warning">
                    <div className="stat-icon warning">
                        <i className="bi bi-currency-exchange" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ 'fontSize': '22px' }}>
                            ₫15.4M
                        </div>
                        <div className="stat-label">
                            Avg Transaction Value
                        </div>
                        <div style={{ 'fontSize': '11px', 'color': '#ef4444', 'fontWeight': '700', 'marginTop': '2px' }}>
                            <i className="bi bi-arrow-down" />
                            -2.4%
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction Statistics & Economic Health */}
            <div className="row g-3 mb-3" id="txn-stats">
                <div className="col-lg-8">
                    <div className="section-card">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-bar-chart-line-fill" />
                                Transaction Statistics
                            </h2>
                            <div className="chart-range">
                                <button className="range-btn active" onClick={() => {}}>
                                    Monthly
                                </button>
                                <button className="range-btn" onClick={() => {}}>
                                    Quarterly
                                </button>
                            </div>
                        </div>
                        <div className="section-body">
                            <canvas id="txn-chart" height="300" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" id="economic-health">
                    <div className="health-card" style={{ 'marginBottom': '0' }}>
                        <div className="health-title">
                            <i className="bi bi-heart-pulse-fill" style={{ 'color': 'var(--ia-primary)' }} />
                            Economic Health Index
                        </div>
                        <div style={{ 'textAlign': 'center', 'marginBottom': '16px' }}>
                            <div style={{ 'fontFamily': 'Poppins', 'fontSize': '48px', 'fontWeight': '700', 'color': 'var(--ia-primary)', 'lineHeight': '1' }}>
                                92
                            </div>
                            <div style={{ 'fontSize': '11px', 'color': 'var(--text-muted)', 'fontWeight': '600', 'textTransform': 'uppercase', 'letterSpacing': '0.3px' }}>
                                out of 100
                            </div>
                            <div style={{ 'fontSize': '12px', 'color': '#10b981', 'fontWeight': '700', 'marginTop': '4px' }}>
                                <i className="bi bi-arrow-up" />
                                +3.2 from last month
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Revenue Growth
                                </span>
                                <span className="health-item-val">
                                    94/100
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '94%', 'background': 'linear-gradient(90deg,#0d9488,#06b6d4)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Employment Rate
                                </span>
                                <span className="health-item-val">
                                    91/100
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '91%', 'background': 'linear-gradient(90deg,#10b981,#34d399)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Trade Volume
                                </span>
                                <span className="health-item-val">
                                    89/100
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '89%', 'background': 'linear-gradient(90deg,#3b82f6,#60a5fa)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Occupancy Utilization
                                </span>
                                <span className="health-item-val">
                                    96/100
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '96%', 'background': 'linear-gradient(90deg,#f59e0b,#fbbf24)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Revenue Trend Line + Recent Transactions */}
            <div className="row g-3 mb-3">
                <div className="col-lg-8">
                    <div className="section-card">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-graph-up-arrow" />
                                Revenue Trend
                            </h2>
                            <span style={{ 'fontSize': '12px', 'color': 'var(--text-muted)' }}>
                                Last 12 months
                            </span>
                        </div>
                        <div className="section-body">
                            <div id="revenue-trend-chart" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section-card">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-clock-history" />
                                Recent Transactions
                            </h2>
                            <a href="#" style={{ 'fontSize': '12px', 'color': 'var(--ia-primary)', 'fontWeight': '600', 'textDecoration': 'none' }}>
                                View all
                            </a>
                        </div>
                        <div className="section-body" style={{ 'padding': '0' }}>
                            <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'padding': '14px 20px', 'borderBottom': '1px solid var(--border-color)' }}>
                                    <div style={{ 'width': '36px', 'height': '36px', 'borderRadius': '10px', 'background': 'rgba(16,185,129,0.12)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#10b981', 'fontSize': '14px', 'flexShrink': '0' }}>
                                        <i className="bi bi-arrow-down-left" />
                                    </div>
                                    <div style={{ 'flex': '1' }}>
                                        <div style={{ 'fontSize': '13px', 'fontWeight': '600', 'color': 'var(--heading-color)' }}>
                                            VietChip → Eco Plastics
                                        </div>
                                        <div style={{ 'fontSize': '11px', 'color': 'var(--text-muted)' }}>
                                            Electronics components · 12m ago
                                        </div>
                                    </div>
                                    <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': '#10b981' }}>
                                        +₫142M
                                    </div>
                                </div>
                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'padding': '14px 20px', 'borderBottom': '1px solid var(--border-color)' }}>
                                    <div style={{ 'width': '36px', 'height': '36px', 'borderRadius': '10px', 'background': 'rgba(6,182,212,0.12)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#06b6d4', 'fontSize': '14px', 'flexShrink': '0' }}>
                                        <i className="bi bi-arrow-up-right" />
                                    </div>
                                    <div style={{ 'flex': '1' }}>
                                        <div style={{ 'fontSize': '13px', 'fontWeight': '600', 'color': 'var(--heading-color)' }}>
                                            Saigon Precision → Export
                                        </div>
                                        <div style={{ 'fontSize': '11px', 'color': 'var(--text-muted)' }}>
                                            Mechanical parts · 34m ago
                                        </div>
                                    </div>
                                    <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': '#06b6d4' }}>
                                        +₫89M
                                    </div>
                                </div>
                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'padding': '14px 20px', 'borderBottom': '1px solid var(--border-color)' }}>
                                    <div style={{ 'width': '36px', 'height': '36px', 'borderRadius': '10px', 'background': 'rgba(245,158,11,0.12)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#f59e0b', 'fontSize': '14px', 'flexShrink': '0' }}>
                                        <i className="bi bi-arrow-left-right" />
                                    </div>
                                    <div style={{ 'flex': '1' }}>
                                        <div style={{ 'fontSize': '13px', 'fontWeight': '600', 'color': 'var(--heading-color)' }}>
                                            Sun Well ↔ Hung Thinh
                                        </div>
                                        <div style={{ 'fontSize': '11px', 'color': 'var(--text-muted)' }}>
                                            Raw materials · 1h ago
                                        </div>
                                    </div>
                                    <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': '#f59e0b' }}>
                                        ₫67M
                                    </div>
                                </div>
                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'padding': '14px 20px', 'borderBottom': '1px solid var(--border-color)' }}>
                                    <div style={{ 'width': '36px', 'height': '36px', 'borderRadius': '10px', 'background': 'rgba(16,185,129,0.12)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#10b981', 'fontSize': '14px', 'flexShrink': '0' }}>
                                        <i className="bi bi-arrow-down-left" />
                                    </div>
                                    <div style={{ 'flex': '1' }}>
                                        <div style={{ 'fontSize': '13px', 'fontWeight': '600', 'color': 'var(--heading-color)' }}>
                                            Import → VietChip
                                        </div>
                                        <div style={{ 'fontSize': '11px', 'color': 'var(--text-muted)' }}>
                                            Semiconductor wafers · 2h ago
                                        </div>
                                    </div>
                                    <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': '#10b981' }}>
                                        +₫312M
                                    </div>
                                </div>
                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'padding': '14px 20px' }}>
                                    <div style={{ 'width': '36px', 'height': '36px', 'borderRadius': '10px', 'background': 'rgba(124,58,237,0.12)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#7c3aed', 'fontSize': '14px', 'flexShrink': '0' }}>
                                        <i className="bi bi-arrow-up-right" />
                                    </div>
                                    <div style={{ 'flex': '1' }}>
                                        <div style={{ 'fontSize': '13px', 'fontWeight': '600', 'color': 'var(--heading-color)' }}>
                                            Eco Plastics → Distribution
                                        </div>
                                        <div style={{ 'fontSize': '11px', 'color': 'var(--text-muted)' }}>
                                            Consumer goods · 3h ago
                                        </div>
                                    </div>
                                    <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': '#7c3aed' }}>
                                        +₫54M
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goods Flow + Industry Pie */}
            <div className="row g-3 mb-3" id="goods-flow">
                <div className="col-lg-7">
                    <div className="section-card">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-arrow-left-right" />
                                Goods Flow Overview
                            </h2>
                            <span style={{ 'fontSize': '12px', 'color': 'var(--text-muted)' }}>
                                Last 6 months
                            </span>
                        </div>
                        <div className="section-body">
                            <div className="flow-stage mb-4">
                                <div className="flow-node">
                                    <div className="flow-node-icon">🏭</div>
                                    <div className="flow-node-name">Production</div>
                                    <div className="flow-node-val">3,218 units</div>
                                </div>
                                <div className="flow-arrow">
                                    <i className="bi bi-arrow-right" />
                                </div>
                                <div className="flow-node">
                                    <div className="flow-node-icon">📦</div>
                                    <div className="flow-node-name">Warehousing</div>
                                    <div className="flow-node-val">3,012 units</div>
                                </div>
                                <div className="flow-arrow">
                                    <i className="bi bi-arrow-right" />
                                </div>
                                <div className="flow-node">
                                    <div className="flow-node-icon">🚛</div>
                                    <div className="flow-node-name">Distribution</div>
                                    <div className="flow-node-val">2,948 units</div>
                                </div>
                                <div className="flow-arrow">
                                    <i className="bi bi-arrow-right" />
                                </div>
                                <div className="flow-node">
                                    <div className="flow-node-icon">✅</div>
                                    <div className="flow-node-name">Delivered</div>
                                    <div className="flow-node-val">2,876 units</div>
                                </div>
                            </div>
                            <canvas id="goods-bar" height="180" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="section-card">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-pie-chart-fill" />
                                Industry Revenue Share
                            </h2>
                        </div>
                        <div className="section-body" style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '24px', 'flexWrap': 'wrap' }}>
                            <div style={{ 'position': 'relative', 'flexShrink': '0' }}>
                                <canvas id="industry-pie" width="200" height="200" />
                                <div style={{ 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%,-50%)', 'textAlign': 'center' }}>
                                    <div style={{ 'fontFamily': 'Poppins', 'fontSize': '18px', 'fontWeight': '700', 'color': 'var(--heading-color)' }}>
                                        ₫28.4B
                                    </div>
                                    <div style={{ 'fontSize': '10px', 'fontWeight': '600', 'color': 'var(--text-muted)', 'textTransform': 'uppercase', 'letterSpacing': '0.3px' }}>
                                        Monthly
                                    </div>
                                </div>
                            </div>
                            <div style={{ 'flex': '1', 'minWidth': '160px' }}>
                                <div id="pie-legend" style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '9px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPAStatistics;
