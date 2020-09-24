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

{
  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x);
  // console.log(y);

  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x);
  console.log(y);
}

{
  const str = 'hello';

  // console.log(str.length);

  // console.log(str.substring(2, 4));
  console.log(str[1]);
}

{
  const d = [2019, 11 , 14];

  console.log(d.join('/'));

  const t = '17:08:24';
  // console.log(t.split(':'));

  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}

{
  const scores = [10, 3, 9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;

  console.log(sum);
  console.log(avg);

  // console.log(Math.floor(avg));
  // console.log(Math.ceil(avg));
  // console.log(Math.round(avg));
  // console.log(avg.toFixed(3));

  console.log(Math.floor(Math.random() * 3));

  console.log(Math.floor(Math.random() * 6) + 1);
}

{
  const d = new Date(2020,8);
  d.setHours(10, 20, 30);
  d.setDate(24);
  d.setDate(d.getDate() + 3);

  console.log(d);

  console.log(`${d.getMonth() + 1}月  ${d.getDate()}日`);
}

// {
//   // alert('hello');
//   const answer = confirm('削除しますか？');
//   if(answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }

// {
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }
  
//   const intervalId = setInterval(showTime, 1000);

// }

// {
  
{
  const name = 'taguchi';
  // const name = 5;

  try {
    console.log(name.toUpperCase());

  } catch (e) {
    console.log(e);
  }

  console.log('Finish!');
}



{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
  

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    

  }
  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }
  

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
      console.log(`... sponsored by ${this.sponsor}`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    

  }



  const posts = [
    new Post('JavaScript勉強中'),
    new Post('プログラミング'),
    new SponsoredPost('３分動画でマスターしよう', 'dotinstall'),
    
  ];
 posts[2].like();

}