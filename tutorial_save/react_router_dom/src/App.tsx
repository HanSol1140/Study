import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
                브라우저 라우터안
            </BrowserRouter>
            브라우저라우터 밖
        </div>
    );
};

export default App;