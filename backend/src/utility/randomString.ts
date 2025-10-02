
export function randomstr(len:number){
const str="123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
let hash=""
for(let i=0;i<len;i++){
    const index=Math.floor(Math.random()*str.length)
    hash+=str[index]
}
return hash;
}