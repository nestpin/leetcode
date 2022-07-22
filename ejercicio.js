let myList1 = [1,2,4];
let myList2 = [1,3,4];

function mergeList(list1, list2) {
    let listReady = [];
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; i++) {
            if (list1[i] === list2[i])
                listReady = list2[i], list1[i];
                else ListReady = list1[i], list2[i];
        }
        console.log(listReady);
    }
    return listReady;

}

console.log(mergeList(myList1, myList2))