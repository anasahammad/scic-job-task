export const truncateTxt = ( str : string)=>{
    if(str.length < 20)return str;

    return str.substring(0, 22) + "..."
}