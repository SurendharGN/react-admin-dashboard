import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Login from "./pages/login/Login"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" >
                        <Route index element={<Home/>}></Route>
                        <Route path="login" element={<Login/>}></Route>
                        <Route path="users">
                                <Route index element={<List/>}></Route>
                                <Route path=":userId" element={<Single/>}></Route>
                                <Route path="new" element={<New/>}>
</Route>
                                </Route> 
                                
                                <Route path="users">
                                <Route index element={<List/>}></Route>
                                <Route path=":productId" element={<Single/>}></Route>
                                <Route path="new" element={<New/>}>
</Route>
                                </Route> 
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
