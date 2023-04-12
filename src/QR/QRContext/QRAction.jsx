export const getQR =async(url) =>{

    console.log(url)
    const QRAPI = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`);
    return QRAPI.url
}