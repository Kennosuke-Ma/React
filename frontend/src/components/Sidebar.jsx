import "./CSS/Sidebar.css";

function Sidebar({ onSelect }) {
    return (
        <aside class="side-main">
            <nav>
            <h2>メニュー</h2>
            <ul class="side-ul">
                <li class="side-link" onClick={() => onSelect("users")}>
                    ユーザー
                    
                </li>
                <li class="side-link" onClick={() => onSelect("departments")}>
                    部署
                </li>
            </ul>
            <hr />
            </nav>
        </aside>
    );
}

export default Sidebar;