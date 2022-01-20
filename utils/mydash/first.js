// [1, 2, 3, 4] => 1
 
export function last(list) {
    if (!Array.isArray(list)) {
        return undefined;
    }
    
    return list.length ? list[0] : undefined;
}
