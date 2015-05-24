var total = 0;
for (var i = 1; i < 1000; i++) {
  if ((i % 3) === 0) {
    total += i;
  }
   else if ((i % 5) === 0) {
    total += i;
  }
}
document.write(total);

  var curr = 2;
	var last = 1;
	var temp = 0;
	var sum = 0;
	while(curr < 4000000)
	{
		if (curr % 2 === 0)
		{
			sum += curr;
		}
		temp = curr;
		curr += last;
		last = temp;
	}
document.write(sum);



function isPrime(n) {
  for (var i = 2; i < n; i++) {
  if (n % i === 0)
    return false;
  }
 return true;
     }


function primeFactors(n) {
  var array = [];
  for (var i = 2; i <= n; i++) {
    
    if (n % i === 0 && isPrime(i)) {
      var maxPrimeFactor = i;
    }
  }
   return maxPrimeFactor;
}

document.write(primeFactors(n))