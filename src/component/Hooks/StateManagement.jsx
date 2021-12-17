import React, {useContext} from 'react';
import AppContext from './Helper/AppContext';

// Tanpa provider, Consumer menggunakan default value

const {LangContext, LangProvider, ThemeContext, ThemeProvider} = AppContext;
// const LangContext = createContext();
// const {Provider: LangProvider, Consumer: LangConsumer} = LangContext;

// const ThemeContext = createContext()
// const {Provider: ThemeProvider, Consumer:ThemeConsumer} = ThemeContext;


const StateManagement = () => {
    // const [lang, setLang] = useState("Indonesia");
    // const changeLang = e => setLang(e.target.value);
    // const langState = {lang, changeLang};

    // const [theme, setTheme] = useState("Light");
    // const changeTheme = e => setTheme(e.target.value);
    // const themeState = {theme, changeTheme};
        
    return ( 
        <LangProvider>
            <ThemeProvider>
                <Header />
                <Content />
                <Footer />
            </ThemeProvider>
        </LangProvider>
     );
}

function Header() {
    return (
        <>
            <b>--Header--</b>
            <Menu />
        </>
    )
}

function Content() {
    return (
        <>
            <b>--Content--</b>
            <p>🤙 Halo React Context !</p>
        </>
    )
}

function Menu() {
    const langProps = useContext(LangContext);
    const themeProps = useContext(ThemeContext);
    return (
        // <LangConsumer>
        //     {
        //         props => (
                    <ol>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Language : 
                            <select value={langProps.lang} onChange={langProps.changeLang}>
                                <option value="English"> English</option>
                                <option value="Indonesia"> Indonesia</option>
                            </select>
                        </li>
                        <li>Theme : 
                            <select value={themeProps.theme} onChange={themeProps.changeTheme}>
                                <option value="Light"> Light</option>
                                <option value="Dark"> Dark</option>
                            </select>
                        </li>
                    </ol>

        //         )
        //     }
        // </LangConsumer>
    )
}

function Footer() {
    const langProps = useContext(LangContext);
    const themeProps = useContext(ThemeContext);
    return (
        // <LangConsumer>
        //     {
        //         props => (
        //             <ThemeConsumer>
        //                 {
        //                     themeProps => (
                                <>
                                    <b>--Footer--</b>
                                    <p>Language: {langProps.lang}</p>
                                    <p>Theme: {themeProps.theme}</p>
                                </>
        //                     )
        //                 }
        //             </ThemeConsumer>
        //         )
        //     }
        // </LangConsumer>
    )
}

export default StateManagement;