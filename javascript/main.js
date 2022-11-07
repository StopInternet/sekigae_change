var twofour = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

function arrayShuffle(array) {
 for(var i = (array.length - 1); 0 < i; i--){

   // 0〜(i+1)の範囲で値を取得
   var r = Math.floor(Math.random() * (i + 1));

   // 要素の並び替えを実行
   var tmp = array[i];
   array[i] = array[r];
   array[r] = tmp;
 }
 return array;
}

var count = 1;
for(i=0;i<twofour.length;i++){
 document.getElementById("grid-item"+count).innerHTML = twofour[i] ;
 count++;
}
var myfunc = function () {
 var count2 = 1;
 arrayShuffle(twofour);
 for(ik=0;ik<twofour.length;ik++){
   document.getElementById("grid-item"+count2).innerHTML = twofour[ik] ;
   count2++;
  }
 }


