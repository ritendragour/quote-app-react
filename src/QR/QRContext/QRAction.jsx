export const getQR =async(url) =>{

    
    const QRAPI = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`);
    // localStorage.setItem("url",url)
    // console.log(url)
    return QRAPI.url
}