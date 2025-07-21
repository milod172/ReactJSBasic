import "./Header.css"

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <a href="#">Manga</a>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Truyện tranh</a></li>
                            <li><a href="#">Thể loại</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                        </ul>
                    </nav>
                    <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm truyện..." />
                        <button>Tìm</button>
                    </div>
                </div>
            </header>
        </>
    )
}