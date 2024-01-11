import React, { Suspense } from "react";
import { AuthenticaionProvider } from "./pages/Login/Data/AuthenticaionProvider";
import { UserProvider } from "./pages/User/Data/UserProvider";
import Navigation from "./Navigation";

const App = () => {
    return (
        <main id="main">
            <Suspense fallback={<p>Yükleniyor...</p>}>
                <AuthenticaionProvider>
                    <UserProvider>
                        <Navigation />
                    </UserProvider>
                </AuthenticaionProvider>
            </Suspense>
        </main>
    );
};

export default App;
