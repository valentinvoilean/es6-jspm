let funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

export default function(){
  console.log('EX 2.1 - "let" keyword');
  console.log('======================');

  funcs.forEach(function (func) {
    func();
  });
}
