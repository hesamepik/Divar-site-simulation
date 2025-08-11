const setCookie=(tokens)=>{
    document.cookie=`accessToken=${tokens.accessToken}; max-age=${1*24*60*60}`
      document.cookie=`refreshToken=${tokens.refreshToken}; max-age=${1*24*60*60}`
      document.cookie = "delete=expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

 function getCookie(name) {
  const value = document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="));
  return value ? value.split("=")[1] : null;
}


function deleteCookie(name) {
  document.cookie = name + '=; max-age=0; path=/';
}

export  {setCookie,getCookie,deleteCookie}