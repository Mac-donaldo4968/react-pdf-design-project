import React, { useContext } from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo from '../assets/img/Logo.png';
import Call from '../assets/img/call.png';
import Mobile from '../assets/img/mobile1.png';
import '../assets/css/custom.css';
import BlackFont from "../assets/fonts/TitilliumWeb-Black.ttf"
import BoldFont from "../assets/fonts/TitilliumWeb-Bold.ttf"
import BoldItalicFont from "../assets/fonts/TitilliumWeb-BoldItalic.ttf"
import ExtraLightFont from "../assets/fonts/TitilliumWeb-ExtraLight.ttf"
import ExtraLightItalicFont from "../assets/fonts/TitilliumWeb-ExtraLightItalic.ttf"
import ItalicFont from "../assets/fonts/TitilliumWeb-Italic.ttf"
import LightItalicFont from "../assets/fonts/TitilliumWeb-LightItalic.ttf"
import RegularFont from "../assets/fonts/TitilliumWeb-Regular.ttf"
import LightFont from "../assets/fonts/TitilliumWeb-Light.ttf"
import SemiBoldFont from "../assets/fonts/TitilliumWeb-SemiBold.ttf"
import SemiBoldItalicFont from "../assets/fonts/TitilliumWeb-SemiBoldItalic.ttf"
import { PDFViewer } from '@react-pdf/renderer';
import MyContext from '../MyContext.js';

Font.register(
    {
        family: "TitilliumWeb-Bold",
        format: "truetype",
        src: BoldFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-Black",
        format: "truetype",
        src: BlackFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-BoldItalic",
        format: "truetype",
        src: BoldItalicFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-ExtraLight",
        format: "truetype",
        src: ExtraLightFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-ExtraLightItalic",
        format: "truetype",
        src: ExtraLightItalicFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-Italic",
        format: "truetype",
        src: ItalicFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-LightItalic",
        format: "truetype",
        src: LightItalicFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-Regular",
        format: "truetype",
        src: RegularFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-Light",
        format: "truetype",
        src: LightFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-SemiBold",
        format: "truetype",
        src: SemiBoldFont 
    },
);
Font.register(
    {
        family: "TitilliumWeb-SemiBoldItalic",
        format: "truetype",
        src: SemiBoldItalicFont 
    }
);

const styles = StyleSheet.create({
    page: {
        marginTop:7,
        paddingLeft: 20,
        paddingRight: 20,
        boxSizing: "border-box"
    },
    header_title: {
        fontSize: 25,
        marginBottom:'-4',
        fontFamily: 'TitilliumWeb-Bold',
    },
    header_content: {
        fontSize: 9,
        fontFamily: 'TitilliumWeb-Regular',
        marginTop:'-4'
    },
    header_content1: {
        fontSize: 8,
        paddingTop:'-1',
        fontFamily: 'TitilliumWeb-Bold',
    },
    header_content2 : {
        fontSize: 12,
        paddingTop:'-4',
        fontFamily: 'TitilliumWeb-SemiBoldItalic',
    },
    title : {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-BoldItalic',
        paddingTop:'-13',
        marginLeft:40,
        color: 'rgb(160, 0, 0)',
        marginBottom:'-6'
    },
    underBar : {
        marginTop: '-9',
    },
    underLine: {
        border: '1px solid rgb(160, 0, 0)',
        width : '100%',
        height : '2.5px',
        backgroundColor : 'rgba(180, 99, 71, 0.5)',
        marginBottom: '10'
    },
    underLine1: {
        border: '1px solid rgb(160, 0, 0)',
        width : '100%',
        height : '2.5px',
        backgroundColor : 'rgba(180, 99, 71, 0.5)',
    },
    clientInfo:{
        border: '1px solid black',
        backgroundColor: 'rgb(200, 200, 200)',
        fontFamily: 'TitilliumWeb-Bold',
        flexDirection: "row",
        fontColor:"rgb(0, 0, 0)",
        marginTop:'2'
    },
    clientInfo1: {
        border: '1px solid black',
        backgroundColor: 'rgb(200, 200, 200)',
        fontFamily: 'TitilliumWeb-Bold',
        flexDirection: "row",
        fontColor:"rgb(0, 0, 0)",
        marginTop:'2',
    },
    clientInfo2: {
        border: '1px solid black',
        backgroundColor: 'rgb(200, 200, 200)',
        fontFamily: 'TitilliumWeb-Bold',
        flexDirection: "row",
        fontColor:"rgb(0, 0, 0)",
        width:"36.5%",
        position: "absolute",
        right: "0",
        top:"-19.2"
    },
    snCell: {
        paddingLeft: "4px",
        fontSize: 12,
        fontColor:"rgb(0, 0, 0)",
        flexWrap: "wrap",       
    },
    snCell1: {
        paddingLeft: "140px",
        fontSize: 12,
        fontColor:"rgb(0, 0, 0)",
        flexWrap: "wrap",    
        textAlign : "center",
        justifyContent : "center",
        alignItems : "center"
    },
    snCell2: {
        paddingLeft: "4px",
        fontSize: 14,
        flexWrap: "wrap",       
    },
    snCell3: {
        fontSize: 10,
        fontColor:"rgb(0, 0, 0)",
        flexWrap: "wrap",
        fontFamily: 'TitilliumWeb-Bold', 
        paddingTop: "5",
        paddingLeft: "10",
    },
    snCell4 : {
        fontSize: 10,
        fontColor:"rgb(0, 0, 0)",
        flexWrap: "wrap",
        fontFamily: 'TitilliumWeb-Bold', 
        paddingTop: "5",
        paddingLeft: "50",
    },
    clientInfoContent:{
        border: '1px solid black',
        flexDirection: "row",
        borderTop: "none",
    },
    clientInfoContent1:{
        border: '1px solid black',
        flexDirection: "row",
        borderTop: "0.5px solid black",
        marginBottom: "2"
    },
    content: {
        paddingLeft: "2px",
        fontSize: 9,
        fontColor:"rgb(0, 0, 0)",
        flexWrap: "wrap",       
        paddingTop: "1",
        fontFamily: 'TitilliumWeb-Bold',    
    },
    content1: {
        fontSize: 8,
        fontColor:"rgb(0, 0, 0)",
        fontFamily: 'TitilliumWeb-Regular', 
        paddingTop: "2",
        flexWrap: "wrap",       
    },
    content2: {
        fontSize: 8,
        fontColor:"rgb(0, 0, 0)",
        fontFamily: 'TitilliumWeb-Regular', 
        paddingTop: "2",
        paddingLeft:"15",
        flexWrap: "wrap",       
    },
    content3: {
        fontSize: 10,
        fontColor:"rgb(0, 0, 0)",
        fontFamily: 'TitilliumWeb-Regular', 
        flexWrap: "wrap",       
    },
    content4 : {
        fontSize: 10,
        fontColor:"rgb(0, 0, 0)",
        fontFamily: 'TitilliumWeb-Regular', 
        paddingTop: "5",
        flexWrap: "wrap",       
    }
});
function Pdf() {
    const {address, setAddress} = useContext(MyContext);
    const {city, setCity} = useContext(MyContext);
    const {postNumber, setPostNumber} = useContext(MyContext);
    const {situation, setSituation} = useContext(MyContext);
    const {vatNumber, setVatNumber} = useContext(MyContext);
    const {rif, setRif} = useContext(MyContext);
    const {cf, setCf} = useContext(MyContext);
    const {sdi, setSdi} = useContext(MyContext);
    const {pec, setPec} = useContext(MyContext);
    const {refer, setRefer} = useContext(MyContext);
    const {addData, setAddData} = useContext(MyContext);
    const {callNumber, setCallNumber} = useContext(MyContext);
    const {phoneNumber, setPhoneNumber} = useContext(MyContext);
    const {eemail, setEemail} = useContext(MyContext);
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

    return(
        <PDFViewer className='full-content'>
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.header_title}>La.Pi. S.r.l.</Text>
                    <Image src={logo} style={{height:'115',width:'43%',position:'absolute',right:'0',top:'2'}}/>               
                    <Text style={styles.header_content}>Via Modolo, 90 - (Colle del Sole) 00132 Roma (RM)</Text>
                    <Text style={styles.header_content}>Cell. 389 17.87.382 - 328 42.21.612 - 327 32.05.257</Text>
                    <Text style={styles.header_content}>Telefono 06 22.60.519 - 06 22.62.414</Text>
                    <Text style={styles.header_content}>info@lapiombrelloni.com - lapiombrelloni@pec.it</Text>
                    <Text style={styles.header_content1}>P.IVA: IT01669341008 - C.F. 07021460584 C.C.I.A.A. 554900 - Iscr.Trib. Roma 5598/85</Text>
                    <Text style={styles.header_content2}>www.lapiombrelloni.com</Text>
                    <Text style={styles.title}>Fabbrica Artigiana Ombrelloni</Text>
                    <View style={styles.underBar}>
                        <View style={styles.underLine}></View>
                        <View style={styles.underLine1}></View>
                    </View>
                    <View style={[styles.clientInfo]}>
                        <Text style={styles.snCell}>Cliente</Text>
                        <Text style={styles.snCell1}>F.LLI TENERINI SERGIO & ALVARO SRL</Text>
                    </View>
                    <View style={styles.clientInfoContent}>
                        <View style={{border:"1px solid gray", width:"43%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>Indirizzo</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{address} </Text>
                        </View>
                        
                        <View style={{border:"1px solid gray", width:"35%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"15%"}}>Città </Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2",}}>{city}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"5%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"40%"}}>Pr</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2",}}>(PG)</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"13%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"40%"}}>C.A.P.</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2",}}>{postNumber}</Text>
                        </View>
                        <Text style={{fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"5%"}}>Stato</Text>
                        <Text style={{marginRight: "5",fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2",}}>{situation}</Text>
                    </View>
                    <View style={styles.clientInfoContent}>
                        <View style={{border:"1px solid gray", width:"20%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"42%"}}>P.Iva</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{vatNumber}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"21.5%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>C.F.</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{cf}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"18%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"40%"}}>Cod.SDI</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{sdi}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"21.5%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>Pec</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{pec}</Text>
                        </View>
                    </View>
                    <View style={styles.clientInfoContent}>
                        <View style={{border:"1px solid gray", width:"35%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"28%"}}>Riferimento</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{refer}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"15%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>
                                <Image src={Call} style={{height:'12',width:'12'}}/>  
                            </Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{callNumber}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"17%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>
                                <Image src={Mobile} style={{height:'15',width:'15'}}/>
                            </Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{phoneNumber}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"20%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"25%"}}>Email</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{eemail}</Text>
                        </View>
                    </View>
                    <View style={styles.clientInfoContent}>
                        <View style={{border:"1px solid gray", width:"35%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"28%"}}>Riferimento</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{orefer}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"15%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>
                                <Image src={Call} style={{height:'12',width:'12'}}/> 
                            </Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{ocallNumber}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"17%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"20%"}}>
                                <Image src={Mobile} style={{height:'15',width:'15'}}/>
                            </Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{ophoneNumber}</Text>
                        </View>
                        <View style={{border:"1px solid gray", width:"20%",height:"18",border:"none",display:"inline-flex",flexWrap:"wrap"}}>
                            <Text style={{paddingLeft: "2px", fontSize: 9, fontColor:"rgb(0, 0, 0)", paddingTop: "1", fontFamily: 'TitilliumWeb-Bold',width:"25%"}}>Email</Text>
                            <Text style={{fontSize: 8, fontColor:"rgb(0, 0, 0)", fontFamily: 'TitilliumWeb-Regular', paddingTop: "2"}}>{oemail}</Text>
                        </View>
                    </View>
                    <View style={styles.clientInfoContent1}>
                        <Text style={styles.content}>Dati aggiuntivi </Text>
                        <Text style={styles.content2}>{addData}</Text>
                    </View>
                    <View style={{position:"relative"}}>
                        <View style={{border:"1px solid black", width:"100%",height:"22",display:"inline-flex",flexWrap:"wrap",marginTop:"2",backgroundColor:"rgb(200, 200, 200)",borderBottom:"none"}}>
                            <Text style={{border:"1px solid gray", width:"25%",height:"100%",fontSize:"13",fontFamily:"TitilliumWeb-Bold",border:"none"}}>PREVENTIVO DI SPESA</Text>
                            <View style={{border:"1px solid gray", width:"20%",height:"100%",fontSize:"13",fontFamily:"TitilliumWeb-Bold",border:"none", paddingTop:"5",display:"inline-flex",flexWrap:"wrap"}}>
                                <Text style={{border:"1px solid gray", width:" 30%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Bold",border:"none"}}>N° </Text>
                                <Text style={{border:"1px solid gray", width:" 70%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Regular",border:"none"}}>{n}</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"20%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Bold",border:"none",display:"inline-flex",flexWrap:"wrap",paddingTop:"5"}}>
                                <Text style={{border:"1px solid gray", width:" 30%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Bold",border:"none"}}>Del </Text>
                                <Text style={{border:"1px solid gray", width:" 70%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Regular",border:"none"}}>{del}</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"17%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Bold",border:"none",display:"inline-flex",flexWrap:"wrap", paddingTop:"5"}}>
                                <Text style={{border:"1px solid gray", width:" 40%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Bold",border:"none"}}>Validità  </Text>
                                <Text style={{border:"1px solid gray", width:" 60%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Regular",border:"none"}}>{validity}</Text>
                            </View>
                                <Text style={styles.snCell4}>Pag. 1 di 2</Text>
                        </View>
                        <View style={{border:"1px solid black",fontSize:"9", width:"36%",height:"21",display:"inline-flex",flexWrap:"wrap",backgroundColor:"rgb(200, 200, 200)",paddingLeft:"4",paddingTop:"6",borderBottom:"none",position:"absolute",top:"-19",right:"0"}}>
                            <Text style={{border:"1px solid gray", width:"28%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Bold",border:"none"}}>Venditore  </Text>
                            <Text style={{border:"1px solid gray", width:"50%",height:"100%",fontSize:"9",fontFamily:"TitilliumWeb-Regular",border:"none"}}>{sales}</Text>
                        </View>
                    </View>
                    <View style={{width:"100%",height:"190px",border:"1px solid black",marginTop: "-2"}}>
                        <View style={{width: "100%", height: "15px", border: "1px solid black", borderTop: "none", borderLeft: "none", borderRight: "none",display:"flex",flexWrap:"wrap"}}>
                            <View style={{border:"1px solid gray", width:"5%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"9",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}}>U.M.</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"65%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"9",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}}>Descrizione</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"5%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"9",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}}>Q.tà</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"10%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"9",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}}>Prezzo</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"15%",height:"100%", border:"none"}}>
                                <Text style={{fontSize:"9",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}}>Importo</Text>
                            </View>
                        </View>
                        <View style={{width: "100%", height: "175px", border: "1px solid black", borderTop: "none", borderLeft: "none", borderRight: "none",display:"flex",flexWrap:"wrap"}}>
                            <View style={{border:"1px solid gray", width:"5%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"center",marginTop:"3"}}>PZ</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"center",marginTop:"3"}}>PZ</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"center",marginTop:"3"}}>PZ</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"65%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",marginTop:"3"}}>
                                    OMBRELLONE ALLUMINIO Ø40 MIS.300X200 RESINATO 8013 COL.112 BLU
                                </Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",marginTop:"3"}}>
                                    OMBRELLONE ALLUMINIO Ø40 MIS.300X200 RESINATO 8013 COL.112 BLU
                                </Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",marginTop:"3"}}>
                                    IMBALLO E TRASPORTO MEZZO CORRIERE ESPRESSO BARTOLINI
                                </Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"5%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"center",marginTop:"3"}}>1,00</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"center",marginTop:"3"}}>1,00</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"center",marginTop:"3"}}>1,00</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"10%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"right",marginTop:"3"}}>350,00</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"right",marginTop:"3"}}>350,00</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"right",marginTop:"3"}}>100,00</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"15%",height:"100%",border:"none"}}>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"right",marginTop:"3",marginRight:"2"}}>350,00</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"right",marginTop:"3",marginRight:"2"}}>350,00</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",textAlign:"right",marginTop:"3",marginRight:"2"}}>100,00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{position:"relative"}}>
                        <View style={{border:"1px solid black", width:"70%", height:"30px",marginTop:"2", display:'inline-flex',flexWrap:"wrap"}}>
                            <View style={{border:"1px solid gray", width:"13%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={[styles.content]}>Tempi di</Text>
                                <Text style={[styles.content]}>avorazione </Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"51%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"10",fontFamily:"TitilliumWeb-SemiBold",paddingTop:"5"}}>{processTime}</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"18%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <View style={{border:"1px solid gray",width:"100%",height:"50%",borderLeft:"none",borderTop:"none",borderRight:"none"}}>
                                    <Text style={{fontSize:"7",fontFamily:"TitilliumWeb-SemiBold",padding:"1"}}>Tempo Installazione</Text>
                                </View>
                                <View style={{border:"1px solid gray",width:"100%",height:"50%",border:"none"}}>
                                    {installTime}
                                </View>
                            </View>
                            <View style={{border:"1px solid gray", width:"18%",height:"100%",border:"none"}}>
                                <View style={{border:"1px solid gray",width:"100%",height:"50%",borderLeft:"none",borderTop:"none",borderRight:"none"}}>
                                    <Text style={{fontSize:"7",fontFamily:"TitilliumWeb-SemiBold",textAlign:"center"}}>Numero Addetti</Text>
                                </View>
                                <View style={{border:"1px solid gray",width:"100%",height:"50%",border:"none"}}>
                                    {employee}
                                </View>
                            </View>
                        </View>
                        <View style={{border:"1px solid black", width:"70%", height:"56px", marginTop:"2"}}>
                            <View style={{border:"1px solid gray",width:"100%", height:"14px",borderLeft:"none",borderTop:"none",borderRight:"none",display:"flex",flexWrap:"wrap"}}>
                                <Text style={{fontSize:"8",width:"20%",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >Destinazione merce</Text>
                                <Text style={{fontSize:"8",width:"30%",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >{destination}</Text>
                            </View>
                            <View style={{border:"1px solid gray",width:"100%", height:"14px",borderLeft:"none",borderTop:"none",borderRight:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                <View style={{border:"1px solid gray",width:"13%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >C/O </Text>
                                </View>
                                <View style={{border:"1px solid gray",width:"53%",fontSize:"8" ,height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                                    {co}
                                </View>
                                <View style={{border:"1px solid gray",width:"34%", height:"14px",border:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >Rif.to</Text>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >{rif}</Text>
                                </View>
                            </View>
                            <View style={{border:"1px solid gray",width:"100%", height:"14px",borderLeft:"none",borderTop:"none",borderRight:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                <View style={{border:"1px solid gray",width:"13%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >Via</Text>
                                </View>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >{via}</Text>
                            </View>
                            <View style={{border:"1px solid gray",width:"100%", height:"14px",border:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                <View style={{border:"1px solid gray",width:"13%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >Città</Text>
                                </View>
                                <View style={{border:"1px solid gray",width:"30%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                                    {deCity}
                                </View>
                                <View style={{border:"1px solid gray",width:"13%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                    <View style={{width:"50%"}}><Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",}} >C.A.P.</Text></View>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",}} >{opostNumber}</Text>
                                </View>
                                <View style={{border:"1px solid gray",width:"20%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                    <View style={{width:"25%"}}><Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",}} >Tel.-</Text></View>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",}} >{telNumber}</Text>
                                </View>
                                <View style={{display:'inline-flex',flexWrap:"wrap",width:"24%"}}>
                                    <View style={{width:"30%"}}><Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",}} >Cell.-</Text></View>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",}} >{cell}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{border:"1px solid black", width:"70%", height:"56px", marginTop:"2"}}>
                            <View style={{border:"1px solid gray", width:"100%",height:"18px",borderLeft:"none",borderRight:"none",borderTop:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                <Text style={{fontSize:"10",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >IBAN IT 80T0622003200000001200033</Text>
                                <Text style={{fontSize:"10",fontFamily:"TitilliumWeb-BoldItalic",textAlign:"right",marginRight:"10"}} >SWIFT: BPBAITR1XXX</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"38px",borderLeft:"none",borderRight:"none",borderTop:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                <View style={{border:"1px solid gray",width:"13%", height:"100%",borderLeft:"none",borderTop:"none",borderBottom:"none"}}>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >Modalità di</Text>
                                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",marginLeft:"2"}} >pagamento</Text>
                                </View>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",marginLeft:"2",marginTop:"1"}} >{payment}</Text>
                            </View>
                        </View>
                        <View style={{border:"1px solid black", width:"70%", height:"45px", marginTop:"2",display:'inline-flex',flexWrap:"wrap"}}>
                            <View style={{border:"1px solid gray", width:"13%",height:"100%",borderLeft:"none",borderBottom:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}} >Note e</Text>
                                <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}} >avvertenze</Text>
                            </View>
                            <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Light",marginLeft:"2",marginTop:"1"}} >{warning}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:"9", fontFamily: "TitilliumWeb-Bold", textAlign: "left", marginTop: "5"}} >PER ACCETTAZIONE ORDINE</Text>
                            <Text style={{fontSize:"7", fontFamily: "TitilliumWeb-Bold", textAlign: "left", marginLeft: "3",marginBottom:"8"}} >(Condizioni di vendita riportate a tergo)</Text>
                            <View style={{marginTop:"0"}}>
                                <View style={{width:"100%", height:"14px",borderLeft:"none",borderTop:"none",borderRight:"none",display:'inline-flex',flexWrap:"wrap"}}>
                                    <View style={{border:"1px solid gray",width:"40%",height:"100%",borderLeft:"none",borderTop:"none", borderRight:"none"}}></View>
                                    <View style={{width:"20%", height:"100%",border:"none"}}></View>
                                    <View style={{border:"1px solid gray",width:"40%", height:"100%",borderLeft:"none",borderTop:"none", borderRight:"none"}}></View>
                                </View>
                                <View style={{display: 'inline-flex', flexWrap: "wrap", width: "100%", height: "50", marginTop:"10"}}>
                                    <View style={{width:"50%",height:"100%"}}>
                                        <Text style={{fontSize:"8", width: "100%", fontFamily:"TitilliumWeb-Bold",textAlign:"left"}} >Luogo e data</Text>
                                    </View>
                                    <View style={{width:"50%", height:"100%"}}>
                                        <Text style={{fontSize:"8", width: "100%", fontFamily:"TitilliumWeb-Bold",textAlign:"right"}} >Timbro e firma del cliente</Text>
                                    </View>
                                </View>
                                <Text style={{fontSize:"6", fontFamily: "TitilliumWeb-Bold", textAlign: "center",marginTop:"-10"}} >
                                    Ai sensi e per gli effetti dell'art. 1469 bis e segg. c.c.,1341 e 1342 c.c. dichiaro di approvare espressamente i seguenti articoli delle CONDIZIONI GENERALI DI VENDITA riportati sul retro,
                                </Text>
                                <Text style={{fontSize:"6", fontFamily: "TitilliumWeb-Bold", textAlign: "center",}} >
                                    riconoscendo che gli stessi sono tutti oggetto di singola trattativa: art.1(Ordini); art.2(Pagamenti); art.3(Consegna e trasporto); art.4(Resi); art. 5(avvertenze tecniche); art.7(legge applicabile e foro competente).
                                </Text>
                                <View style={{width:"100%", height:"14px",borderLeft:"none",borderTop:"none",borderRight:"none",display:'inline-flex',flexWrap:"wrap",marginTop:"20"}}>
                                    <View style={{border:"1px solid gray",width:"40%",height:"100%",borderLeft:"none",borderTop:"none", borderRight:"none"}}></View>
                                    <View style={{width:"20%", height:"100%",border:"none"}}></View>
                                    <View style={{border:"1px solid gray",width:"40%", height:"100%",borderLeft:"none",borderTop:"none", borderRight:"none"}}></View>
                                </View>
                                <View style={{display: 'inline-flex', flexWrap: "wrap", width: "100%", height: "50", marginTop:"10"}}>
                                    <View style={{width:"33%",height:"100%"}}>
                                        <Text style={{fontSize:"8", width: "100%", fontFamily:"TitilliumWeb-Bold",textAlign:"left"}} >Luogo e data</Text>
                                    </View>
                                    <Text style={{fontSize:"8", width: "34%", fontFamily:"TitilliumWeb-Bold",textAlign:"center"}} >1/2</Text>
                                    <View style={{width:"33%", height:"100%"}}>
                                        <Text style={{fontSize:"8", width: "100%", fontFamily:"TitilliumWeb-Bold",textAlign:"right"}} >Timbro e firma del cliente</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{border:"1px solid black",width:"15%",height:"85px",position:"absolute", right:"84px",border:"none"}}>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",border:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-BoldItalic",marginRight:"3",marginTop:"1"}} >Totale Imponibile</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",border:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} ></Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",border:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Bold",marginRight:"3"}} >IVA 22 %</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",border:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Bold",marginRight:"3"}} >Totale €.</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",border:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} ></Text>
                            </View>
                            <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold",textAlign:"right",marginRight:"3"}} >Totale Fornitura €.</Text>
                        </View>
                        <View style={{border:"1px solid black",width:"15.3%",height:"85px",position:"absolute", right:"0",borderTop:"none"}}>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",borderLeft:"none",borderRight:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} >800,00</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",borderLeft:"none",borderRight:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} ></Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",borderLeft:"none",borderRight:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} >170,00</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",borderLeft:"none",borderRight:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} >976,00</Text>
                            </View>
                            <View style={{border:"1px solid gray", width:"100%",height:"14px",borderLeft:"none",borderRight:"none",borderTop:"none"}}>
                                <Text style={{fontSize:"8",textAlign:"right",fontFamily:"TitilliumWeb-Regular",marginRight:"3"}} ></Text>
                            </View>
                            <Text style={{fontSize:"10",fontFamily:"TitilliumWeb-Bold",textAlign:"right",marginRight:"3"}} >976,00</Text>
                        </View>
                    </View>
                </View>
                <View style={{border:"2px solid black",borderRadius:"8",width:"100%",height:"95%"}}>
                    <Text style={{fontSize:"13",fontFamily:"TitilliumWeb-Bold",textAlign:"center", marginTop:"20px"}} >Condizioni Generali di Vendita </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"15px",marginLeft:"20"}} >1.     Ordini:</Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        verranno accettati solo ordini debitamente sottoscritti e trasmessi tramite via fax, mail o PEC e tramite servizi di messaggistica istantanea. Non verranno presi in considerazione ordini
                        telefonici o verbali.
                        Possono intendersi accettati tacitamente gli ordini per il quale venga corrisposto il relativo pagamento come da specifica sul contratto di vendita. La.Pi. srl si riserva comunque il diritto di
                        richiedere l’accettazione specifica delle condizioni di vendita anche tramite mezzi digitali di autenticazione della firma, quali la sottoscrizione con sistema c.d. “One Time Password” (“OTP”).
                        La merce ordinata deve essere ritirata entro 10 giorni dall’avvenuta comunicazione di fine lavorazione, in caso contrario si applicherà a partire dall’11° fino al 71° giorno a titolo di penale ex
                        art. 1382 c.c. e fatto salvo il diritto al risarcimento del maggior danno subito un importo giornaliero di €.5,00 per ogni elemento lasciato in giacenza. Trascorso tale periodo i materiali verranno
                        senza preavviso smaltiti e/o rimessi in vendita, fatto salvo il diritto alla rivendicazione del compenso relativo al periodo di giacenza e la ripetizione di eventuali costi di smaltimento.
                        Per le merci affidate alla La.Pi. srl per riparazione o manutenzione il preventivo di spesa verrà elaborato esclusivamente presso la sede aziendale dopo aver visionato la merce, e sarà
                        comunicato a mezzo mail o PEC o tramite servizi di messaggistica istantanea entro 7 giorni lavorativi. In caso di mancata accettazione del preventivo di spesa la merce sarà restituita al
                        legittimo proprietario. Verranno comunque addebitati i costi di trasporto concordati. La merce deve essere ritirata entro 10 giorni dall’avvenuta comunicazione di fine lavorazione o dalla data
                        di comunicazione della mancata accettazione del preventivo di spesa, In caso di mancato ritiro della merce entro il predetto termine, a partire dall’11° giorno e fino al 71° giorno, la La.Pi. S.r.l.
                        applicherà a titolo di penale ex art. 1382 c.c. e fatto salvo il diritto al risarcimento del maggior danno subito, un importo giornaliero di €.5,00 per ogni elemento lasciato in giacenza. Trascorso
                        tale periodo la merce sarà considerata abbandonata da parte del Cliente, con diritto della La.Pi. s.r.l. di procedere al suo smaltimento, fatto salvo il diritto alla ripetizione dei relativi costi.
                        Qualora il Cliente ordini a La.Pi. srl dei componenti o un allestimento da installare su aree urbanistiche sia pubbliche che private soggette a normative e/o limitazioni circa la tipologia e la
                        dimensione, lo stesso è tenuto a compiere tutte le verifiche del caso circa le dimensioni reali dell’area di intervento, nonché delle verifiche tecniche circa le caratteristiche tecnologiche di
                        ciascun componente.
                        Il Cliente prende altresì atto che l’eventuale presentazione di domande e/o istanza di rilascio di autorizzazioni nei confronti di Enti Pubblici e/o diverse Autorità saranno di sua esclusiva
                        competenza e che la La.Pi. S.r.l. non offre tale tipo di servizio e/o assistenza. Il Cliente riconosce, pertanto, che in caso di difformità dalle dimensioni e dalle tipologie dei complementi d’arredo
                        commissionati e/o realizzati rispetto a quanto autorizzato da parte di Enti Pubblici e/o diverse Pubbliche Autorità nulla potrà essere imputato a La.Pi. S.r.l.
                        Il Cliente si obbliga a manlevare La.Pi. S.r.l. da ogni e qualsiasi conseguenza derivante dalla violazi
                    </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"10px",marginLeft:"20"}} >2.     Pagamenti:</Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        le lavorazioni dei materiali saranno avviate il primo giorno lavorativo successivo alla data del pagamento.
                        Nel caso di bonifici bancari, è condizione fondamentale trasmettere a mezzo mail o a mezzo messaggistica istantanea la distinta contabile di avvenuto pagamento completa di timbro della
                        banca o se eseguita online completa di numero di CRO, diversamente le lavorazioni verranno avviate all’effettivo accredito sul conto corrente della La.Pi. srl
                        I pagamenti potranno essere accettati solamente nella modalità specificamente indicata nella proposta d’ordine, pertanto La.Pi. S.r.l. si riserva il diritto di non prendere in carico gli ordini e/o
                        consegnare le merci qualora il pagamento non sia stato eseguito in conformità a quanto indicato, così come si riserva, ai sensi dell’art. 1460 c.c., di perfezionare le nuove forniture solo quando
                        siano stati effettuati pagamenti dovuti in sospeso, qualora ve ne fossero. In caso di ritardato o mancato pagamento della merce ordinata il committente sarà tenuto a corrispondere gli
                        interessi moratori ex D.lgs. 231/2022 nella misura del tasso di riferimento maggiorato di tre punti.
                        Con la sottoscrizione del contratto, le parti convengono il patto di riservato dominio, ai sensi dell’art. 1523 ss c.c., in favore di La.Pi. S.r.l. sino all’integrale pagamento del prezzo concordato. 
                    </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"10px",marginLeft:"20"}} >3.     Consegna e Trasporto:</Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        il Cliente riconosce espressamente che, salvo specifica menzione riportata nella proposta d’ordine il termine di lavorazione degli ordini non ha carattere essenziale ma meramente indicativo,
                        essendo l’effettiva consegna della merce connessa con le tempistiche di lavorazione e consegna di terzi fornitori della La.Pi. srl. Il committente pertanto non ha diritto di richiedere qualsivoglia
                        indennizzo, riduzione di prezzo e/o applicazioni di penali per eventuali ritardi di consegna e/o montaggio e/o spedizione. La.Pi. srl si impegna comunque a rispettare i tempi di consegna
                        concordati, nonché a comunicare al Cliente eventuali ritardi.
                        La merce deve essere controllata al momento della consegna o del ritiro presso la sede.
                        Eventuali contestazioni sui vizi della merce devono essere segnalate al trasportatore o all’incaricato della consegna e/o del montaggio, con riserva sulla bolla di accompagno, oppure con
                        lettera raccomandata o PEC a La.Pi. srl e all’eventuale corriere entro 8 giorni lavorativi dal ricevimento della merce stessa.
                        Trascorsi gli 8 giorni lavorativi non saranno ammessi reclami e la merce si intenderà come definitivamente accettata dal committente. Si intende ugualmente accettata la merce che il
                        committente abbia utilizzato in tutto o in parte o che presenti evidenti segni di usura.
                        In caso di merce ritirata in azienda non si accettano reclami in quanto la merce in uscita viene fatta visionare precauzionalmente all’incaricato del ritiro.
                        Laddove il reclamo da parte del committente risulti fondato, lo stesso avrà il diritto di ottenere la sostituzione de
                    </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"10px",marginLeft:"20"}} >4.     Resi:</Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        la resa della merce è da intendersi franco nostra sede, con addebito del trasporto al committente.
                        Non saranno accettati resi di merce se non espressamente autorizzati dall’amministrazione della La.Pi. srl o dal personale preposto e privi dei documenti di accompagnamento e relative
                        descrizioni.
                        Qualora il committente receda dal contratto per motivi non imputabili alla La.Pi. srl, gli importi versati saranno trattenuti dalla stessa La.Pi. srl a titolo di caparra. In casi particolari ed a pura
                        discrezionalità della La.Pi. srl tali importi potranno essere convertiti in buoni per l’acquisto di altre merci di esclusiva produzione La.Pi. srl.
                        La possibilità di ottenere la conversione degli importi in buoni d’acquisto rimane espressamente esclusa in caso di merci personalizzate (a puro titolo esemplificativo e non limitativo:
                        MANUFATTI E ARTICOLI SU MISURA O CON STAMPE, ALLESTIMENTI ESTERNI CON COLORI, FORME E MISURE PERSONALIZZATE. 
                    </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"10px",marginLeft:"20"}} >5.     Avvertenze Tecniche:</Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        gli ombrelloni, anche se confezionati con tessuti impermeabili o PVC sono progettati e strutturati come protezione dai raggi solari. Nel caso di condizioni climatiche ed ambientali avverse (a
                        puro titolo esemplificativo e non limitativo: VENTO, PIOGGIA, GRANDINE, NEVE) l’uso della merce fornita non comporta alcuna responsabilità riconducibile all’azienda venditrice, qualora si
                        provochino danni a cose o persone o si verifichino sulle merci stesse danneggiamenti o ne venga limitata o impedita la possibilità di utilizzo.
                        Sui tessuti anche se impermeabili può evidenziarsi la comparsa di muffe; ciò è causato da agenti atmosferici o da condizioni ambientali particolari e pertanto non può essere considerato un
                        difetto. Il legno impiegato per le lavorazioni può col variare delle condizioni climatiche, e dopo una lunga esposizione agli agenti atmosferici, presentare fessure e/o rigonfiamenti. Il cliente
                        prende atto che tali caratteristiche sono intrinseche alla particolare tipologia del prodotto e dei suoi materiali e non sono in alcun modo imputabili ad eventuali difetti di produzione posti in
                        essere dalla La.Pi srl. Si precisa che colori, combinazioni e parametri tecnici possono essere variati a scopo di miglioramento senza nessun obbligo di preavviso.
                    </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"10px",marginLeft:"20"}} >6.     Privacy: </Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        gli ombrelloni, anche se confezionati con tessuti impermeabili o PVC sono progettati e strutturati come protezione dai raggi solari. Nel caso di condizioni climatiche ed ambientali avverse (a
                        puro titolo esemplificativo e non limitativo: VENTO, PIOGGIA, GRANDINE, NEVE) l’uso della merce fornita non comporta alcuna responsabilità riconducibile all’azienda venditrice, qualora si
                        provochino danni a cose o persone o si verifichino sulle merci stesse danneggiamenti o ne venga limitata o impedita la possibilità di utilizzo.
                        Sui tessuti anche se impermeabili può evidenziarsi la comparsa di muffe; ciò è causato da agenti atmosferici o da condizioni ambientali particolari e pertanto non può essere considerato un
                        difetto. Il legno impiegato per le lavorazioni può col variare delle condizioni climatiche, e dopo una lunga esposizione agli agenti atmosferici, presentare fessure e/o rigonfiamenti. Il cliente
                        prende atto che tali caratteristiche sono intrinseche alla particolare tipologia del prodotto e dei suoi materiali e non sono in alcun modo imputabili ad eventuali difetti di produzione posti in
                        essere dalla La.Pi srl. Si precisa che colori, combinazioni e parametri tecnici possono essere variati a scopo di miglioramento senza nessun obbligo di preavviso.
                    </Text>
                    <Text style={{fontSize:"8",fontFamily:"TitilliumWeb-Bold", marginTop:"5px",marginLeft:"20"}} >7.     Legge applicabile e foro competente:</Text>
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Regular",marginLeft:"4",marginRight:"4"}} >
                        Per tutto quanto non disciplinato dal presente Contratto, si rimanda alle disposizioni di legge applicabili in materia di compravendita di beni.
                        A tal proposito il Cliente dichiara e prende atto che il presente contratto non può, in alcun modo, essere ricondotto e/o interpretato come contratto d’appalto.
                        Per qualsiasi controversia derivante dall’interpretazione e/o dall’esecuzione del presente Contratto le Parti riconoscono ed accettano la competenza esclusiva del Foro di Roma.
                    </Text> 
                    <Text style={{fontSize:"6",fontFamily:"TitilliumWeb-Italic",marginLeft:"4",marginRight:"4"}} >
                        LA.PI. SRL SI RISERVA IL DIRITTO DI MODIFICARE IN QUALSIASI MOMENTO E SENZA PREAVVISO QUANTO SOPRA ESPRESSO DANDONE COMUNICAZIONE AL CLIENTE.
                        TUTTE LE COMUNICAZIONI AL CLIENTE SI INTENDONO VALIDAMENTE EFFETTUATE NEL DOMICILIO ELETTIVO INDICATO NELL’ORDINE D’ACQUISTO.
                    </Text>
                    <Text style={{fontSize:"10",fontFamily:"TitilliumWeb-Bold",textAlign:"center", marginTop:"20px"}} >
                        Gentile Cliente, le chiediamo di controllare la correttezza dei dati riportati (quantità, dimensioni, colori,
                    </Text>
                    <Text style={{fontSize:"10",fontFamily:"TitilliumWeb-Bold",textAlign:"center"}} > 
                        prezzi, note, etc.) poiché in seguito all’accettazione del presente ordine, l’azienda è esentata da ogni
                    </Text>
                    <Text style= {{fontSize: "10",fontFamily: "TitilliumWeb-Bold", textAlign: "center"}} >
                        responsabilità per eventuali errori di inserimento.
                    </Text>
                    <Text style= {{fontSize: "10",fontFamily: "TitilliumWeb-Bold", textAlign: "center", marginTop:""}} >
                        Nel caso di irregolarità è pregato di comunicarcelo prima della sottoscrizione del contratto.
                    </Text>
                    <Text style={{fontSize:"8", width: "100%", fontFamily:"TitilliumWeb-Bold",textAlign:"center",marginTop:"50"}} >2/2</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
)};
export default Pdf;