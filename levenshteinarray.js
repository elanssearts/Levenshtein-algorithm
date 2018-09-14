const sentences = ["Hello, Im Piotr" , "How are You?" , "Wanna hang out?", "yeah sure"]
const data = "How old are You?"

const Levenshtein = () =>{
    let result = [];
    sentences.forEach((e) => {
        let tmp;
        let resoultObj = {},a = data;
        let key = e
        if (a.length > e.length) { tmp = a; a = e; e = tmp; }
        let i, res, alen = a.length, elen = e.length, row = Array(alen);
        for (i = 0; i <= alen; i++) { row[i] = i; }
        for (let i = 1; i <= elen; i++) {
            res = i;
            for (let j = 1; j <= alen; j++) {
                tmp = row[j - 1];
                row[j - 1] = res;
                res = e[i - 1] === a[j - 1] ? tmp : Math.min(tmp + 1, Math.min(res + 1, row[j] + 1));
            }
        }
            resoultObj[key]=res
        result.push(resoultObj)
    });
    return result
}

console.log(Levenshtein())