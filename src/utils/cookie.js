const setCookie=(tokens)=>{
    document.cookie=`accessToken=${tokens.accessToken}; max-age=${1*24*60*60}`
      document.cookie=`refreshToken=${tokens.refreshToken}; max-age=${1*24*60*60}`
}

 function getCookie(name) {
  const value = document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="));
  return value ? value.split("=")[1] : null;
}

export  {setCookie,getCookie}