import "./Header.css"

export default function Header() {
    return (

        <header className="game-header">
            <div className="header-container">
                <div className="logo-section">
                    <div className="logo-icon"></div>
                    <div>
                        <div className="logo-text">CardMaster</div>
                        <div className="logo-subtitle">Game</div>
                    </div>
                </div>


                <nav className="nav-menu" id="navMenu">
                    <a href="#" className="nav-item">
                        <span className="nav-icon">🏠</span>
                        <span>Trang chủ</span>
                    </a>
                    <a href="#" className="nav-item">
                        <span className="nav-icon">🎲</span>
                        <span>Quay thẻ</span>
                    </a>
                    <a href="#" className="nav-item">
                        <span className="nav-icon">📚</span>
                        <span>Bộ sưu tập</span>
                    </a>
                    <a href="#" className="nav-item">
                        <span className="nav-icon">⚔️</span>
                        <span>Đấu trường</span>
                    </a>
                    <a href="#" className="nav-item active">
                        <span className="nav-icon">🏪</span>
                        <span>Cửa hàng</span>
                    </a>
                </nav>


                <div className="user-section">
                    <div className="currency-display">
                        <div className="currency-icon">💎</div>
                        <span className="currency-amount">1,250</span>
                    </div>

                    <button className="login-btn" id="loginBtn">
                        <span>👤</span>
                        <span>Đăng nhập</span>
                    </button>

                    {/* <div className="user-avatar">U</div> */}
                </div>

            </div>
        </header>

    )
}