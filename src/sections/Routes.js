import { Routes, Route } from "react-router-dom"
import Main from "./Main";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import ReserveTable from "./ReserveTable";

export default function Routing () {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/reservations" element={<Reservations />}/>
            <Route path="/order-online" element={<OrderOnline />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/reserve-table" element={<ReserveTable />}/>
        </Routes>

    )
}