import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf from './components/Pdf.js';
import InsertInfo from './components/InsertInfo.js';
import './assets/css/custom.css';
import MyContext from './MyContext.js'
function App() {
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postNumber, setPostNumber] = useState();
  const [situation, setSituation] = useState();
  const [vatNumber, setVatNumber] = useState();
  const [cf, setCf] = useState();
  const [sdi, setSdi] = useState();
  const [pec, setPec] = useState();
  const [refer, setRefer] = useState();
  const [callNumber, setCallNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [eemail, setEemail] = useState();
  const [addData, setAddData] = useState();
  const [orefer, setOrefer] = useState();
  const [ocallNumber, setOcallNumber] = useState();
  const [ophoneNumber, setOphoneNumber] = useState();
  const [oemail, setOemail] = useState();
  const [sales, setSales] = useState();
  const [n, setN] = useState();
  const [del, setDel] = useState();
  const [validity, setValidity] = useState();
  const [processTime, setProcessTime] = useState();
  const [installTime, setInstallTime] = useState();
  const [employee, setEmployee] = useState();
  const [destination, setDestination] = useState();
  const [co, setCo] = useState();
  const [via, setVia] = useState();
  const [deCity, setDeCity] = useState();
  const [opostNumber, setOpostNumber] = useState();
  const [telNumber, setTelNumber] = useState();
  const [cell, setCell] = useState();
  const [payment, setPayment] = useState();
  const [warning, setWarning] = useState();
  const [place, setPlace] = useState();
  const [sign, setSign] = useState();
  const [place1, setPlace1] = useState();
  const [sign1, setSign1] = useState();
  return (
    <div className="App">
      <MyContext.Provider value={{city, setCity, address, setAddress,postNumber, setPostNumber,situation, setSituation,vatNumber, setVatNumber,cf, setCf,sdi,
        setSdi,pec, setPec,refer, setRefer,callNumber, setCallNumber,phoneNumber, setPhoneNumber,eemail, setEemail,addData, setAddData,orefer, setOrefer,ocallNumber, setOcallNumber,
        ophoneNumber, setOphoneNumber,oemail, setOemail,sales, setSales,n, setN,del, setDel,validity, setValidity,processTime, setProcessTime,installTime, setInstallTime,
        employee, setEmployee,destination, setDestination,co, setCo,via, setVia,deCity, setDeCity,opostNumber, setOpostNumber,telNumber, setTelNumber,cell, setCell,payment, setPayment,
        warning, setWarning,place, setPlace,sign, setSign,place1, setPlace1,sign1, setSign1 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InsertInfo />} />
            <Route path="/pdf" element={<Pdf />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;