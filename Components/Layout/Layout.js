import Header from "./Header"
import Footer from './Footer'

const Layout = ({children}) => (
    <div className="wrapper">
        <Header />
            {children}
        <Footer />
    </div>
    

)

export default Layout