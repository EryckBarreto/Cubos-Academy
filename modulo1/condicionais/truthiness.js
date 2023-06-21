const x = 18;

if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// o javascript tem o conceito de truthy e falsy. O número
// 0, ou string vazia, por exemplo, dá falsy.
// falsy -> (false) (null) (undefined) (0) (NaN) ('') (document.all)