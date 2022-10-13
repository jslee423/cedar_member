import Home from './pages/Home';
import Forms from './pages/Forms';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/forms' element={<Forms/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
