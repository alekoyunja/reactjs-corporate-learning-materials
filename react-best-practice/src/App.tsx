import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AuthenticaionProvider } from "./pages/Login/Data/AuthenticaionProvider";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <main id="main">
            <Suspense fallback={<p>Yükleniyor...</p>}>
                <AuthenticaionProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<p>ana sayfa</p>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<p>sayfa bulunamadı</p>} />
                        </Routes>
                    </Router>
                </AuthenticaionProvider>
            </Suspense>
        </main>
    );
};

export default App;
