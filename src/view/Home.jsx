import AppLayout from "../layouts/AppLayout.jsx";
import {Helmet} from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>خدمت از ما</title>
            </Helmet>

            <AppLayout>
                <div className="container mx-auto bg-[#17232b]">
                    <div className="flex flex-row flex-wrap py-4">
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default Home