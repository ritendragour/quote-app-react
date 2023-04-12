export const getQR =async() =>{

    const QRAPI = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ritendra.in');
    QRjson = await QRAPI.json();
    return QRjson
}