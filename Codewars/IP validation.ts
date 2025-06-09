/**
 * 
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
 */
export function isValidIP(str: string): boolean {

    const isIp : string[] = str.split('.')
    for(let i=0;i<isIp.length;i++){
        if((Number(isIp[i])<100 && isIp[i].split('').length>2)||
        (Number(isIp[i])<10 && isIp[i].split('').length>1)||
        (isIp.length!=4)||
        (Number(isIp[i])>255||Number(isIp[i])<0)||
        (isIp[i].trim()=='') || isNaN(Number(isIp[i])) || (isIp[i].length>3)
        ) return false;
    }
  return true;
}
  