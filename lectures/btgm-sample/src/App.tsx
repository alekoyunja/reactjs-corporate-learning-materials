import React, { Suspense } from "react";
import { AuthenticaionProvider } from "./pages/Login/Data/AuthenticaionProvider";
import Navigation from "./Navigation";

const App = () => {
    return (
        <main id="main">
            <Suspense fallback={<p>Yükleniyor...</p>}>
                <AuthenticaionProvider>
                    <Navigation />
                </AuthenticaionProvider>
            </Suspense>
        </main>
    );
};

export default App;
