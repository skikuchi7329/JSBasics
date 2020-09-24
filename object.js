{
  // const otherScores = [10, 20];
  const scores =[80,90,40,70];
  // const modifiedScores = [];
  scores.forEach((score,index)=>{
    // modifiedScores.push(score + 5);
    console.log(`Score ${index}:${score}`);
  });

  // console.log(modifiedScores);

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  // const [a, b,...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);
  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x ];
  // console.log(x);
  // console.log(y);


  // console.log(scores);

  // function sum(a, b) {
  //   console.log(a + b);
  // }
  // sum(...otherScores);
  // scores.push(60,50); 末尾に追加
  // scores.shift();　先頭を削除
  // scores.splice(1,2,30,80);
  

  // for (let i = 0; i < scores.length; i++) {
  // console.log(`Score ${i}: ${scores[i]}`);
  // }
}

{
  const prices = [100, 190, 200];

  const updatedPrices = prices.map((price)=>{
    return price + 20;
  });

  console.log(updatedPrices);
}

{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const evenNumbers = numbers.filter(number => {return number % 2 ===0;});

  console.log(evenNumbers);
}

{
  // const point = [100,100];

  const point = {
    x: 100, 
    y: 100,
    
  };
  
  // const keys = Object.keys(point);
  // keys.forEach(key => {
    //   console.log(`Key : ${key} Value: ${point[key]}`);
    // });
  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ];
  console.log(points[1].y);
}

