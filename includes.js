// Includes:array te element check krar jonno includes use kra hoy. jodi element pawa jay tahle true hbe ar na paile false hisbe gonno hbe. Includes case sensitive.
const students = ['abrar', 'rahim', 'karim', 'fahad'];

console.log(students.includes('fahad'));
console.log(students.includes('rahad'));

if(students.includes('rahad')){
    console.log('party hbe');
}
else{
    console.log('No food. We are fasting');
}