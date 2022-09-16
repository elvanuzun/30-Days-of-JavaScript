challenge = '30 Days Of JavaScript';

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log('***************');
sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

txt = ' 30 Days Of JavaScript ';
txt = txt.trim();
console.log(txt);
console.log(txt.startsWith('30 D'));
console.log(txt.endsWith('pt'));

console.log('30 Days of '.concat('JavaScript'));

console.log(txt.repeat(2));

//Level 2

console.log(
	"The quote is 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
	'"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
);

let number = 10;
let myStr = '10';

console.log(typeof number == typeof str);

myStr = Number(myStr);

console.log(typeof number == typeof str);

console.log('---------------------');
console.log('python'.includes('on') && 'jargon'.includes('on'));

console.log('I hope this course is not full of jargon.'.includes('jargon'));

console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.floor(Math.random() * 256));

let language = 'JavaScript'.length;
console.log(Math.floor(Math.random() * language + 1));

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

console.log(sentence.substr(0, 31) + sentence.substr(55));

//Level 3

sent = "'Love is the best thing in this world. Some found their love and some are still looking for their love.'";

let reg = /love+/gi;
console.log(sent.match(reg).length);

console.log(sentence.match(/because+/g));

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let newSentence =
	'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';


var desired = newSentence.replace(/[^\w\s]/gi, '')
console.log(desired);

var result = newSentence.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '');
console.log(result);

//Calculate the total annual income of the person by extracting the numbers from the following text.

let my_sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomes = my_sentence.match(/\d+/g)
let annualIncome = Number(incomes[0]* 12) + Number(incomes[1]) +Number( incomes[2] * 12)
console.log(annualIncome);