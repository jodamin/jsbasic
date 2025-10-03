console.log("video 29");

for (let i = 0; i < 10; i++) {
    console.log("i =", i);
    if (i === 5) { break; }
}
console.log("--------------------");
for (let i = 0; i < 10; i++) {

    if (i === 5) { continue; }
    if (i === 6) { console.log("the i =", i - 1, "be skipped"); }

    console.log("i =", i);
}
