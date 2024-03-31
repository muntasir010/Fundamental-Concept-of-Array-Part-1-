// -___----_---_-----___ PUSH ___-----_--_-__-__-
// push holo: kono 1ta array te ek or ekadik element add kra. Ei element last e position nibe.
const students = ['abrar', 'rahim', 'karim', 'fahad'];
console.log(students);
students.push('Omar')
students.push('Humayun', 'Rahi');
console.log(students);


// _-__-_----__________ POP______---__--_----_--
// pop holo: kono 1ta array theke element out kra. tbe ekhane last theke  element out hbe (line - 16, 17). Apnar jodi darkar mne hoy tahle oi kra element gula k 1ti array call kre oi array te rakhte parben (line- 20, 21).

const results = [55, 54, 76, 34, 66, 45, 88, 90, 67];
console.log(results);

results.pop();
results.pop();
console.log(results);

const outResult1 = results.pop();
const outResult2 = results.pop();
console.log(outResult1, outResult2);