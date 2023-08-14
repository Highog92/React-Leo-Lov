import style from './Navbar.module.scss/'

export function NavBar(props) {

    return (
        <section>
            <nav>{props.navigation}
                <ul>
                    <li>Hjem</li>
                    <li>|</li>
                    <li>Koncepter</li>
                    <li>|</li>
                    <li>UTM Loyalty</li >
                    <li>|</li>
                    <li>Om LeoLov</li>
                    <li>|</li>
                    <li>Kontakt</li >
                </ul>
                <p><span>Leo</span>-Lov</p>
            </nav>
        </section>


    )
}