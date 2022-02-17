function fib() {
    let loop = [0, 1];
    let number=document.getElementById('txtloop').value;
    for (let i = 2; i < number; i++)
     loop[i] = loop[i-1]+ loop[i-2];
      document.getElementById('output').innerHTML=loop[number-1];
    }