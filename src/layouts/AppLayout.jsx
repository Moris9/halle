import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function AppLayout({children}) {
    return (
        <>
            <>
                <div className="w-full">
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </>

        </>
    )
}

export default AppLayout