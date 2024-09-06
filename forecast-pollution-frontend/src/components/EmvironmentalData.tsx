import { Alert, Card, Container } from '@mui/material';
import { useEnvData } from "../hooks/useEnvData.ts"; 
import { useNavigate } from 'react-router-dom';

export default function EnvironmentData() {
    const { isLoading, isError, envData } = useEnvData();
    const navigate = useNavigate();

    if (isLoading) {
        return <Alert severity="info">Loading...</Alert>;
    }

    if (isError) {
        return <Alert severity="error">Error loading data</Alert>;
    }

    const aalst = envData.filter(data => data.latitude === 51.0018474024446);
    const dendermonde = envData.filter(data => data.latitude === 51.0028206024438);   
    const heist_op_den_berg = envData.filter(data => data.latitude === 51.0028996025198 || data.latitude === 51.0172213025149 || data.latitude === 51.0200067025125);
    const lebbeke = envData.filter(data => data.latitude === 51.0055025024507 || data.latitude === 51.0835129239812 || data.latitude === 51.1611716023994 || data.latitude ===  51.161587902402 || data.latitude === 51.1651345578066 || data.latitude === 51.1663547023979 || data.latitude === 51.1665790023976);
    const mechelen = envData.filter(data => data.latitude === 51.007370933543 || data.latitude === 51.0147723024784);
    const nijlen = envData.filter(data => data.latitude === 51.0080093025237);
    const putte = envData.filter(data => data.latitude === 51.0195647025133);
    const opwijk = envData.filter(data => data.latitude === 51.0202599024522);
    const westerlo = envData.filter(data => data.latitude === 51.028696702532);
    const londerzeel = envData.filter(data => data.latitude === 51.1888899024185 || data.latitude === 51.18729100242 || data.latitude === 51.1867419087281 || data.latitude === 51.1848325485506 || data.latitude === 51.1814652282463 || data.latitude === 51.0292979024548 || data.latitude === 51.0583683024447 || data.latitude === 51.0628294024527 || data.latitude === 51.0851120024467 || data.latitude === 51.0991020024356 || data.latitude === 51.0996064024398 || data.latitude === 51.1041170024377 || data.latitude === 51.1044493024299 || data.latitude === 51.1066746024362 || data.latitude === 51.1076431024395 || data.latitude === 51.1088789024365 || data.latitude === 51.1097475024359 || data.latitude === 51.1097653024373 || data.latitude === 51.1097754024368 || data.latitude === 51.1101800246951 || data.latitude === 51.1116079024368 || data.latitude === 51.1116676024354 || data.latitude === 51.123587102425 || data.latitude === 51.1640294119905 || data.latitude === 51.1642335024271 || data.latitude === 51.1711731024163 || data.latitude === 51.1771159024235);  
    const willebroek = envData.filter(data => data.latitude === 51.2260284024128 || data.latitude === 51.2213757024151 || data.latitude === 51.2205317024161 || data.latitude === 51.2180736024166 || data.latitude === 51.2179563925643 || data.latitude === 51.2170054024173 || data.latitude === 51.2147314024164 || data.latitude === 51.214584002418 || data.latitude === 51.2114388322787 || data.latitude === 51.2097443024195 || data.latitude === 51.2090291024195 || data.latitude === 51.2074731024187 || data.latitude === 51.2072944024163 || data.latitude === 51.206073302426 || data.latitude === 51.2054913024237 || data.latitude === 51.2040042024239 || data.latitude === 51.2037129024222 || data.latitude === 51.2014252024228 || data.latitude === 51.2012715024264 || data.latitude === 51.2004011024264 || data.latitude === 51.1998561458706 || data.latitude === 51.1995167400162 || data.latitude === 51.1994000024258 || data.latitude === 51.1992734024205 || data.latitude === 51.1989014024257 || data.latitude === 51.1985366024279 || data.latitude === 51.1981603024283 || data.latitude === 51.1979848024271 || data.latitude === 51.1971506024287 || data.latitude === 51.196245002428 || data.latitude === 51.1954113349699 || data.latitude === 51.1950235024349 || data.latitude === 51.1943779024332 || data.latitude === 51.1942164024288 || data.latitude === 51.1928371024369 || data.latitude === 51.1927735024237 || data.latitude === 51.1916215024305 || data.latitude === 51.1910756024299 || data.latitude === 51.1910567024388 || data.latitude === 51.1892853024383 || data.latitude === 51.1885833024387 || data.latitude === 51.1882102024393 || data.latitude === 51.1878662024399 || data.latitude === 51.1855713024381 || data.latitude === 51.18518240244 || data.latitude === 51.1848661024384 || data.latitude === 51.1843392024319 || data.latitude === 51.1818878024398 || data.latitude === 51.1813144024357 || data.latitude === 51.0324265024754 || data.latitude ===  51.0336640024759 || data.latitude === 51.0348073024749 || data.latitude === 51.0380903024743 || data.latitude === 51.105078802451 || data.latitude === 51.1666862024382 || data.latitude === 51.1667102431222 || data.latitude === 51.1672759957973 || data.latitude === 51.168029702438 || data.latitude === 51.1682929024375 || data.latitude === 51.1690062024385 || data.latitude === 51.1698520301767 || data.latitude === 51.1705450024331 || data.latitude === 51.1728285024414 || data.latitude === 51.1734112024306 || data.latitude === 51.1748735024386 || data.latitude === 51.1754756024384 || data.latitude === 51.1771142024293 || data.latitude === 51.1774438024381)
    const puurs_sint_amands = envData.filter(data => data.latitude === 51.0436714024754 || data.latitude === 51.061016602469 || data.latitude === 51.1206988024482 || data.latitude === 51.1233845024334 || data.latitude === 51.1291082024463 || data.latitude === 51.1323405024452)
    const buggenhout = envData.filter(data => data.latitude === 51.0575854024366 || data.latitude === 51.0587127024393 || data.latitude === 51.0624407024339 || data.latitude === 51.0933609024298 || data.latitude === 51.095847502429 || data.latitude === 51.0951476024299 || data.latitude === 51.100063202429 || data.latitude === 51.100063202429 || data.latitude === 51.1006862024287 || data.latitude === 51.1059720024218);
    const antwerp = envData.filter(data => data.latitude === 51.4000946023682 || data.latitude === 51.3958797023699 || data.latitude === 51.3951532023699 || data.latitude === 51.3943134023711 || data.latitude === 51.3937360023703 || data.latitude === 51.3931704023711 || data.latitude === 51.3831469023874 || data.latitude === 51.3782294023744 || data.latitude === 51.332433102439 || data.latitude === 51.3322904023764 || data.latitude === 51.3319943024411 || data.latitude === 51.3315269024426 || data.latitude === 51.3288952023778 || data.latitude === 51.3280118024418 || data.latitude === 51.3273040023955 || data.latitude === 51.3270783023963 || data.latitude === 51.3256239024432 || data.latitude === 51.3242076024425 || data.latitude === 51.3239980024429 || data.latitude === 51.323801902442 || data.latitude === 51.3234976024446 || data.latitude === 51.2185004024158 || data.latitude === 51.2136481024184 || data.latitude === 51.1827950024702 || data.latitude === 51.1781955024701 || data.latitude === 51.1769411024911 || data.latitude === 51.1732031024913 || data.latitude === 51.1654585024341 || data.latitude === 51.1653488024401 || data.latitude === 51.1653300024372 || data.latitude === 51.1651115024351 || data.latitude === 51.1649463024381 || data.latitude === 51.163863702476 || data.latitude === 51.1633036024747 || data.latitude === 51.1627606024388 || data.latitude === 51.1620478024515 || data.latitude === 51.1616060024386 || data.latitude === 51.1613297172768 || data.latitude === 51.161329302494 || data.latitude === 51.1610524024424 || data.latitude === 51.0625204024761 || data.latitude === 51.0812623024734 || data.latitude === 51.0853575832337 || data.latitude === 51.0948404024287 || data.latitude === 51.1120688024687 || data.latitude === 51.1181347024617 || data.latitude === 51.1308371024557 || data.latitude === 51.1391397024402 || data.latitude === 51.1433262024407 || data.latitude === 51.1456375928867 || data.latitude === 51.150466502438 || data.latitude === 51.1568522024394 || data.latitude === 51.1573105024396 || data.latitude === 51.1607385024511 || data.latitude === 51.160816002439);
    const temse = envData.filter(data => data.latitude === 51.2630434024329 || data.latitude === 51.2381883024343 || data.latitude === 51.2365931159528 || data.latitude === 51.2267342024433 || data.latitude === 51.2254702682636 || data.latitude === 51.2220303500186 || data.latitude === 51.2208973024044 || data.latitude === 51.2193992024325 || data.latitude === 51.2156668024354 || data.latitude === 51.2149033024424 || data.latitude === 51.2147508024365 || data.latitude === 51.2112244024378 || data.latitude === 51.2112035024364 || data.latitude === 51.2109761024359 || data.latitude === 51.2095601024373 || data.latitude === 51.2002213024439 || data.latitude === 51.1972761024452 || data.latitude === 51.1910567024389 || data.latitude === 51.189279102449 || data.latitude === 51.187645702449 || data.latitude === 51.1870821024492 || data.latitude === 51.1859970024497 || data.latitude === 51.0627222024831 || data.latitude === 51.0641245024174 || data.latitude === 51.0689229024141 || data.latitude === 51.0691564024144 || data.latitude === 51.135600802468 || data.latitude === 51.0707278024153 || data.latitude === 51.0712685024143 || data.latitude === 51.0725471024141 || data.latitude === 51.1393561024666 || data.latitude === 51.1419633722505 || data.latitude === 51.1687904024581 || data.latitude === 51.1709542024573);
    const lokeren = envData.filter(data => data.latitude === 51.306905002391 || data.latitude === 51.0843385024123);
    const bornem = envData.filter(data => data.latitude === 51.1884376852947 || data.latitude === 51.1818723024457 || data.latitude === 51.1804037024446 || data.latitude === 51.1047353024657 || data.latitude === 51.128340820897 || data.latitude === 51.1720266024481 || data.latitude === 51.1725939024479);
    const sint_amands = envData.filter(data => data.latitude === 51.1896392024568 || data.latitude === 51.1906043024489);
    const sint_kruis = envData.filter(data => data.latitude === 51.1918104150833)
    const beveren = envData.filter(data => data.latitude === 51.412523102381 || data.latitude === 51.407975802382 || data.latitude === 51.4030080023819 || data.latitude === 51.3990154023879 || data.latitude === 51.3990106023879 || data.latitude === 51.3967176023893 || data.latitude === 51.3203738024442 || data.latitude === 51.3203215023953 || data.latitude === 51.320308902446 || data.latitude === 51.3202518024428 || data.latitude === 51.3195062024443 || data.latitude === 51.3194329024457 || data.latitude === 51.3137022023891 || data.latitude === 51.3112335023886 || data.latitude === 51.3082529023954 || data.latitude === 51.3079100023873 || data.latitude === 51.2901368024533 || data.latitude === 51.2170880024311)
    const kruibeke = envData.filter(data => data.latitude === 51.3099241024464 || data.latitude === 51.2288196024136 || data.latitude === 51.2281556024136 || data.latitude === 51.2291239024121 || data.latitude === 51.2320066024116 || data.latitude === 51.2329476024117 || data.latitude === 51.2340687024112 || data.latitude === 51.2357182024115)
    const lier = envData.filter(data => data.latitude === 51.2634418023649)
    const zele = envData.filter(data => data.latitude === 51.3051278023972 || data.latitude === 51.3038535023966 || data.latitude === 51.3022492023978 || data.latitude === 51.300534302398 || data.latitude === 51.2977791023982 || data.latitude === 51.2961387023997 || data.latitude === 51.295956002401 || data.latitude === 51.295548502401 || data.latitude === 51.2947551024012 || data.latitude === 51.2937363023968 || data.latitude === 51.2923838024031 || data.latitude === 51.2914519023966 || data.latitude === 51.2846693023956 || data.latitude === 51.2881898024023 || data.latitude === 51.2884205024019 || data.latitude === 51.2894148024029 || data.latitude === 51.2898752023959)
    const waasmunster = envData.filter(data => data.latitude === 51.307882902399 || data.latitude === 51.305409302388 || data.latitude === 51.299979602402 || data.latitude === 51.3004594023919)
    const destelbergen = envData.filter(data => data.latitude === 51.3186067023958 || data.latitude === 51.3180305024429 || data.latitude === 51.3177570024439 || data.latitude === 51.3177033024438 || data.latitude === 51.3174056024449 || data.latitude === 51.3171445023964 || data.latitude === 51.3151982023963)
    const zelzate = envData.filter(data => data.latitude === 51.3191025023865)
    const kieldrecht = envData.filter(data => data.latitude === 51.3219768024431 || data.latitude === 51.3214383024426 || data.latitude === 51.3207079024446 || data.latitude === 51.3203738024442)

    return (
        <> 
            <Container style={{ display: 'flex', flexDirection: 'column'}}>
                <h2>Observed data</h2>
            
                <Container style={{display: 'flex', flexDirection: 'column'}}>
                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Aalst</h3>
                            {aalst.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index} style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))} 
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Dendermonde</h3>
                            {dendermonde.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index} style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}> 
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Heist op den Berg</h3>
                            {heist_op_den_berg.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index} style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Lebbeke</h3>
                            {lebbeke.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index} style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Mechelen</h3>
                            {mechelen.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index} style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Nijlen</h3>
                            {nijlen.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Putte</h3>
                            {putte.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Opwijk</h3>
                            {opwijk.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Westerlo</h3>
                            {westerlo.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{ listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold' }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Londerzeel</h3>
                            {londerzeel.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Willebroek</h3>
                            {willebroek.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Puurs-Sint-Amands</h3>
                            {puurs_sint_amands.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Buggenhout</h3>
                            {buggenhout.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Antwerp</h3>
                            {antwerp.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Temse</h3>
                            {temse.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Lokeren</h3>
                            {lokeren.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Bornem</h3>
                            {bornem.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Sint-Amands</h3>
                            {sint_amands.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Sint-Kruis</h3>
                            {sint_kruis.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Beveren</h3>
                            {beveren.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Kruibeke</h3>
                            {kruibeke.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Lier</h3>
                            {lier.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Zele</h3>
                            {zele.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Waasmunster</h3>
                            {waasmunster.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ display: 'flex', marginTop: '2rem'}}>
                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Destelbergen</h3>
                            {destelbergen.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>

                        <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto' }}>
                            <h3>Zelzate</h3>
                            {zelzate.map(({ temp, pressure, traffic_level }, index) => (
                                <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                    <ol  style={{
                                        listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                    }}>
                                        <li>Temperature: {Math.round(temp)}</li>
                                        <li>Pressure: {pressure}</li>
                                        <li>Traffic: {traffic_level}</li>
                                    </ol>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    <Container style={{ marginLeft: '2rem', width: '15rem', height: '15rem', overflowY: 'auto', marginTop: '2rem'}}>
                        <h3>Kieldrecht</h3>
                        {kieldrecht.map(({ temp, pressure, traffic_level }, index) => (
                            <Card key={index}  style={{ textAlign: 'left', width: '8rem', marginTop: '1rem', backgroundColor: 'lightGrey', fontSize: '0.7rem', height: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => navigate(`/get-fetched-data/${index + 1}`)}>
                                <ol  style={{
                                    listStyle: 'none', textAlign: 'left', padding: '10px', fontWeight: 'bold'
                                }}>
                                    <li>Temperature: {Math.round(temp)}</li>
                                    <li>Pressure: {pressure}</li>
                                    <li>Traffic: {traffic_level}</li>
                                </ol>
                            </Card>
                        ))}
                    </Container>
                </Container>
            </Container>
        </>
    );
}
