import Header from "./Header";
import Footer from "./Footer";
import style from "../css/components/Layout.module.css"

const Layout = ({ children }: any) => {
    return (
        <div className={style.layout}>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;