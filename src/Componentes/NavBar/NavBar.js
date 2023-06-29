import CartWidget from "../CartWindget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3> Ecommerce Sushi</h3>
            <div>
                <button>Tempuras</button>
                <button>Sushis Fríos</button>
                <button>Gohan</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;