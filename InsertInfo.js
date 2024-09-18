import React from 'react';
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pdf from './Pdf.js';
import MyContext from '../MyContext.js';
import '../assets/css/custom.css';

function InsertInfo() {
    const {address, setAddress} = useContext(MyContext);
    const {city, setCity} = useContext(MyContext);
    const {postNumber, setPostNumber} = useContext(MyContext);
    const {situation, setSituation} = useContext(MyContext);
    const {vatNumber, setVatNumber} = useContext(MyContext);
    const {cf, setCf} = useContext(MyContext);
    const {sdi, setSdi} = useContext(MyContext);
    const {pec, setPec} = useContext(MyContext);
    const {refer, setRefer} = useContext(MyContext);
    const {callNumber, setCallNumber} = useContext(MyContext);
    const {phoneNumber, setPhoneNumber} = useContext(MyContext);
    const {eemail, setEemail} = useContext(MyContext);
    const {addData, setAddData} = useContext(MyContext);
    const {orefer, setOrefer} = useContext(MyContext);
    const {ocallNumber, setOcallNumber} = useContext(MyContext);
    const {ophoneNumber, setOphoneNumber} = useContext(MyContext);
    const {oemail, setOemail} = useContext(MyContext);
    const {sales, setSales} = useContext(MyContext);
    const {n, setN} = useContext(MyContext);
    const {del, setDel} = useContext(MyContext);
    const {validity, setValidity} = useContext(MyContext);
    const {processTime, setProcessTime} = useContext(MyContext);
    const {installTime, setInstallTime} = useContext(MyContext);
    const {employee, setEmployee} = useContext(MyContext);
    const {destination, setDestination} = useContext(MyContext);
    const {co, setCo} = useContext(MyContext);
    const {via, setVia} = useContext(MyContext);
    const {deCity, setDeCity} = useContext(MyContext);
    const {opostNumber, setOpostNumber} = useContext(MyContext);
    const {telNumber, setTelNumber} = useContext(MyContext);
    const {cell, setCell} = useContext(MyContext);
    const {payment, setPayment} = useContext(MyContext);
    const {warning, setWarning} = useContext(MyContext);
    const {place, setPlace} = useContext(MyContext);
    const {sign, setSign} = useContext(MyContext);
    const {place1, setPlace1} = useContext(MyContext);
    const {sign1, setSign1} = useContext(MyContext);
    
    const handleClick = () => {
    };
    const handleChange = () => {

    }

    return (
        <div className="container">
            <h2>! My email address is volodyaa2221@gmail.com !</h2>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="address">Address</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" placeholder="Your address.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="city">City</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} name="city" placeholder="Your City.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="postNumber">PostNumber</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="postNumber" value={postNumber} onChange={(e) => setPostNumber(e.target.value)} name="postNumber" placeholder="Your PostNumber.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="situation">Situation</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="situation" value={situation} onChange={(e) => setSituation(e.target.value)} name="situation" placeholder="Your situation.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="vatNumber">vatNumber</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="vatNumber" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} name="vatNumber" placeholder="Your vatNumber.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="CF">C.F</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="cf" value={cf} onChange={(e) => setCf(e.target.value)} name="cf" placeholder="Your CF.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="sdi">SDI</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="sdi" value={sdi} onChange={(e) => setSdi(e.target.value)} name="sdi" placeholder="Your SDI.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="pec">PEC</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="fname" value={pec} onChange={(e) => setPec(e.target.value)} name="pec" placeholder="Your PEC.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="refer">Reference</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="refer" value={refer} onChange={(e) => setRefer(e.target.value)} name="refer" placeholder="Your reference.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="callNumber">CallNumber</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="callNumber" value={callNumber} onChange={(e) => setCallNumber(e.target.value)} name="callNumber" placeholder="Your callNumber.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="phoneNumber">PhoneNumber</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder="Your phoneNumber.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="eemail">Email</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="eemail" value={eemail} onChange={(e) => setEemail(e.target.value)} name="eemail" placeholder="Your Email.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="orefer">Reference1</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="orefer" value={orefer} onChange={(e) => setOrefer(e.target.value)} name="orefer" placeholder="Your other reference.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="ocallNumber">CallNumber1</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="ocallNumber" value={ocallNumber} onChange={(e) => setOcallNumber(e.target.value)} name="ocallNumber" placeholder="Your other callNumber.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="ophoneNumber">PhoneNumber1</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="ophoneNumber" value={ophoneNumber} onChange={(e) => setOphoneNumber(e.target.value)} name="ophoneNumber" placeholder="Your other phonemumber.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="oemail">Email1</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="oemail" value={oemail} onChange={(e) => setOemail(e.target.value)} name="oemail" placeholder="Your other email.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="sales">Sales Person</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="sales" value={sales} onChange={(e) => setSales(e.target.value)} name="sales" placeholder="Your Sales Person.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="n">N°</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="n" value={n} onChange={(e) => setN(e.target.value)} name="n" placeholder="Your N°.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="del">Del</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="del" value={del} onChange={(e) => setDel(e.target.value)} name="del" placeholder="Your Del.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="validity">Validity</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="validity" value={validity} onChange={(e) => setValidity(e.target.value)} name="validity" placeholder="Your validity.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="processTime">ProcessingTime</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="processTime" value={processTime} onChange={(e) => setProcessTime(e.target.value)} name="processTime" placeholder="Your processTime.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="installTime">Installing Time</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="installTime" value={installTime} onChange={(e) => setInstallTime(e.target.value)} name="installTime" placeholder="Your installTime.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="employee">Employee</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="employee" value={employee} onChange={(e) => setEmployee(e.target.value)} name="employee" placeholder="Your employee.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="destination">Destination </label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} name="destination" placeholder="Your destination.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="co">C/O</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="co" value={co} onChange={(e) => setCo(e.target.value)} name="co" placeholder="Your c/o.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="via">Via</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="via" value={via} onChange={(e) => setVia(e.target.value)} name="via" placeholder="Your via.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="deCity">DestinationCity</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="deCity" value={deCity} onChange={(e) => setDeCity(e.target.value)} name="deCity" placeholder="DestinationCity.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="opostNumber">Other PostNumber</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="opostNumber" value={opostNumber} onChange={(e) => setOpostNumber(e.target.value)} name="opostNumber" placeholder=" postNumber.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="telNumber">Tel Number</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="telNumber" value={telNumber} onChange={(e) => setTelNumber(e.target.value)} name="telNumber" placeholder="Your telNumber.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="cell">Cell</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="cell" value={cell} onChange={(e) => setCell(e.target.value)} name="cell" placeholder="Your cell.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="payment">Payment Method</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="payment" value={payment} onChange={(e) => setPayment(e.target.value)} name="payment" placeholder="Your payment method.."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="warning">Warning</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="warning" value={warning} onChange={(e) => setWarning(e.target.value)} name="warning" placeholder="Your warning.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="place">Place and Date</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="place" value={place} onChange={(e) => setPlace(e.target.value)} name="place" placeholder="place is..."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="sign">Sign</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="sign" value={sign} onChange={(e) => setSign(e.target.value)} name="sign" placeholder="Your sign.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="place1">Place1</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="place1" value={place1} onChange={(e) => setPlace1(e.target.value)} name="place1" placeholder="place1 is..."/>
                        </div>
                    </div>
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="sign1">Sign1</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="sign1" value={sign1} onChange={(e) => setSign1(e.target.value)} name="sign1" placeholder="Your sign1.."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-50'>
                        <div className="col-15">
                            <label for="place">Place and Date</label>
                        </div>
                        <div className="col-50">
                            <input type="text" id="addData" value={addData} onChange={(e) => setAddData(e.target.value)} name="place" placeholder="place is..."/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Link to={"/pdf"}><button onClick={handleClick}>Generate</button></Link>
                </div>
        </div>
    );
}
export default InsertInfo;
