// [1, 2, 3, 4] => 4
 
function last(list: Array<any>): undefined | unknown{
    if (!Array.isArray(list)) {
        return undefined;
    }
    
    const length = list.length;
    return length ? list[length - 1] : undefined;
}
