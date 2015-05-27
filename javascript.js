function multiples() {
  var total = 0;
  var inputMax = document.getElementById('problem1').value;
  for (var i = 1; i < inputMax; i++) {
   if ((i % 3 === 0) || (i % 5 === 0)) {
    total += i;
    document.getElementById('paragraph').innerHTML = total;
    }
  }
}
function fibNumbers() {
  var curr = 2;
	var last = 1;
	var temp = 0;
	var sum = 0;
  var inputMax2 = document.getElementById('problem2').value;
	while(curr < inputMax2)
	{
		if (curr % 2 === 0)
		{
			sum += curr;
		}
		temp = curr;
		curr += last;
		last = temp;
	}
    document.getElementById('paragraph2').innerHTML = sum;
}

function sieve(n) 
{
  var a = new Int8Array(n+1);
  var max = Math.floor(Math.sqrt(n));
  var p = 2;
  var prime_factors = [];
  var original_n = n;
  while(p <= max) {
    for(var i = 2*p; i <= n; i +=p)
      a[i] = 1;
    while(a[++p]);
  }
  while(n > 1){
    if(!a[n] && original_n % n === 0) {
      prime_factors.push(n);      
    }    
    n--;
  }
  return prime_factors;
  
}

var prime_factors = function() {
  var input3 = document.getElementById("problem3_input");
  var array_answer = document.getElementById("answer3_array");
  var answer3 = document.getElementById("answer3");
  var result = sieve(parseInt(input3.value));
  array_answer.innerHTML = result;
  var max = 0;
  result.forEach(function(i) {
      if(max < i) {
        max = i;
      }
    });
  answer3.innerHTML = max;
};