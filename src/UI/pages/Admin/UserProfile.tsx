const UserProfile = () => {
    return (
        <>
            <div className="main-content page-profile">
                <div className="page-profile">
                    <div className="profile-board mb-3">
                        <div className="profile-board-main">
                            <div className="profile-board-avatar-wrap">
                                <img src="/Admin/assets/images/profile-img.webp" alt="Kevin Anderson" className="profile-board-avatar" />
                                <span className="profile-board-status" />
                            </div>
                            <div>
                                <div className="profile-board-role">
                                    Product Design Lead
                                </div>
                                <h1 className="profile-board-name">
                                    Kevin Anderson
                                </h1>
                                <p className="profile-board-summary">
                                    Design systems, UX strategy, and product experience across core admin surfaces and internal tooling.
                                </p>
                                <div className="profile-board-tags">
                                    <span>
                                        New York, USA
                                    </span>
                                    <span>
                                        8 years experience
                                    </span>
                                    <span>
                                        Joined January 2024
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="profile-board-actions">
                            <button className="btn btn-primary btn-sm">
                                <i className="bi bi-pencil me-1" />
                                Edit Profile
                            </button>
                            <button className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-share me-1" />
                                Share
                            </button>
                        </div>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-xl-3 col-sm-6">
                            <div className="card profile-stat">
                                <div className="card-body">
                                    <small>
                                        Projects
                                    </small>
                                    <strong>
                                        24
                                    </strong>
                                    <span>
                                        4 active
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card profile-stat">
                                <div className="card-body">
                                    <small>
                                        Tasks Closed
                                    </small>
                                    <strong>
                                        182
                                    </strong>
                                    <span>
                                        +12 this week
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card profile-stat">
                                <div className="card-body">
                                    <small>
                                        Avg. Rating
                                    </small>
                                    <strong>
                                        4.9
                                    </strong>
                                    <span>
                                        Peer reviews
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card profile-stat">
                                <div className="card-body">
                                    <small>
                                        Team Size
                                    </small>
                                    <strong>
                                        12
                                    </strong>
                                    <span>
                                        Cross-functional
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Contact
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="profile-stack">
                                        <div>
                                            <span>
                                                Email
                                            </span>
                                            <strong>
                                                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="157e3b747b717067667a7b55706d74786579703b767a78">
                                                    [email�protected]
                                                </a>
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Phone
                                            </span>
                                            <strong>
                                                (436) 486-3538
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Company
                                            </span>
                                            <strong>
                                                Lueilwitz, Wisoky and Leuschke
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Website
                                            </span>
                                            <strong>
                                                kevinanderson.design
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Skills
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="profile-chip-list">
                                        <span>
                                            Design Systems
                                        </span>
                                        <span>
                                            Figma
                                        </span>
                                        <span>
                                            UX Research
                                        </span>
                                        <span>
                                            Interaction Design
                                        </span>
                                        <span>
                                            Accessibility
                                        </span>
                                        <span>
                                            HTML/CSS
                                        </span>
                                        <span>
                                            Prototyping
                                        </span>
                                        <span>
                                            Mentoring
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Social
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="profile-link-list">
                                        <a href="#">
                                            <i className="bi bi-twitter-x" />
                                            Twitter
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-linkedin" />
                                            LinkedIn
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-dribbble" />
                                            Dribbble
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-github" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Work Overview
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <p className="profile-intro mb-3">
                                        Passionate product designer focused on accessible, high-performance interfaces with scalable design systems. I collaborate deeply with engineering and product teams to translate strategy into shipped experiences.
                                    </p>
                                    <div className="profile-grid-meta">
                                        <div>
                                            <span>
                                                Department
                                            </span>
                                            <strong>
                                                Product Design
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Team
                                            </span>
                                            <strong>
                                                Experience Platform
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Manager
                                            </span>
                                            <strong>
                                                Chris Thompson
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Location
                                            </span>
                                            <strong>
                                                New York HQ
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Employment Type
                                            </span>
                                            <strong>
                                                Full-time
                                            </strong>
                                        </div>
                                        <div>
                                            <span>
                                                Timezone
                                            </span>
                                            <strong>
                                                UTC-5 (EST)
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Current Projects
                                    </h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="profile-project-list">
                                        <div className="profile-project-item">
                                            <div>
                                                <div className="profile-project-name">
                                                    Admin Refresh 2026
                                                </div>
                                                <div className="profile-project-desc">
                                                    Redesign of core admin IA and visual language.
                                                </div>
                                            </div>
                                            <span className="profile-project-status on-track">
                                                On Track
                                            </span>
                                        </div>
                                        <div className="profile-project-item">
                                            <div>
                                                <div className="profile-project-name">
                                                    Design Token Migration
                                                </div>
                                                <div className="profile-project-desc">
                                                    Moving component library to semantic token architecture.
                                                </div>
                                            </div>
                                            <span className="profile-project-status review">
                                                In Review
                                            </span>
                                        </div>
                                        <div className="profile-project-item">
                                            <div>
                                                <div className="profile-project-name">
                                                    Accessibility Initiative
                                                </div>
                                                <div className="profile-project-desc">
                                                    WCAG 2.2 compliance pass across account settings flows.
                                                </div>
                                            </div>
                                            <span className="profile-project-status planning">
                                                Planning
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="#">
                            Docs
                        </a>
                        <a href="#">
                            Privacy
                        </a>
                        <a href="#">
                            Security
                        </a>
                        <a href="#">
                            Support
                        </a>
                    </div>
                    <div className="footer-credits">
                        <div className="footer-copyright">
                            � 2026
                            <a href="#">
                                NiceAdmin
                            </a>
                        </div>
                        <div className="footer-copyright">
                            <div className="credits">
                                {/* All the links in the footer should remain intact. */}
                                {/* You can delete the links only if you purchased the pro version. */}
                                {/* Licensing information: https://bootstrapmade.com/license/ */}
                                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flex-admin-bootstrap-template/ */}
                                Designed by
                                <a href="https://bootstrapmade.com/">
                                    BootstrapMade
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default UserProfile