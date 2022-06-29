
intToByteArray = function (int, byteArray) {
    if (byteArray == null) {
        byteArray = new Uint8Array(4)
    }
    // we want to represent the input as a 8-bytes array
    for (var index = 0; index < byteArray.length; index++) {
        var byte = int & 0xff;
        byteArray[index] = byte;
        int = (int - byte) / 256;
    }
    // const view = new DataView(byteArray.buffer);
    // view.setInt32(0, num, false);
    return byteArray;
};

byteArrayToInt = function (/*Uint8Array*/byteArray) {
    console.log(byteArray)
    var value = 0;
    for (var i = 3; i >= 0; i--) {
        value = (value * 256) + byteArray[i];
    }
    return value;
};

function concatenateArrays(...arrays) {
    let totalLen = 0;
    for (let arr of arrays)
        totalLen += arr.byteLength;
    let res = new Uint8Array(totalLen)
    let offset = 0
    for (let arr of arrays) {
        let uint8Arr = new Uint8Array(arr)
        res.set(uint8Arr, offset)
        offset += arr.byteLength
    }
    return res
}


function buf2hex(buffer) { // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('-');
}

/*
 * RC4 symmetric cipher encryption/decryption
 *
 * @license Public Domain
 * @param string key - secret key for encryption/decryption
 * @param array array - string to be encrypted/decrypted
 * @return string
 */
function rc4(key, array, startindex = 0) {
	var s = [], j = 0, x, res = '';
	for (var i = 0; i < 256; i++) {
		s[i] = i;
	}
	for (i = 0; i < 256; i++) {
        index = i % key.length
		j = (j + s[i] + key[index]) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
	}
	i = 0;
	j = 0;
	for (var y = startindex; y < array.length; y++) {
		i = (i + 1) % 256;
		j = (j + s[i]) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
        array[y] = array[y] ^ s[(s[i] + s[j]) % 256]
		// res += String.fromCharCode(array.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
	}
}