// can't use Uint16Array (a shame...)
export function buffer2str(array) {
    const bytes = new Uint8Array(array);
    let str = "";
    let offset = 0;
    // we need to use chunks if array is too big.
    while (offset < bytes.length) {
        const len = Math.min(bytes.length - offset, 256 * 1024);
        const chunk = bytes.slice(offset, offset + len);
        str += String.fromCharCode(...chunk);
        offset += len;
    }
    return str;
}
export function str2buffer(str) {
    const buffer = new Uint8Array(str.length);
    for (let i = 0; i < str.length; ++i)
        buffer[i] = str.charCodeAt(i);
    return buffer.buffer;
}
//# sourceMappingURL=buffer.js.map