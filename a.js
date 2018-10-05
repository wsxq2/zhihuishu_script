function findDot() {
	return new Promise(async function(resolve, reject){
		let interval=3000;
		let count=0;
		//let timerID = setInterval(async function () {
		//	console.log("count: "+ count);
		//	if(count===1) clearInterval(timerID);
		//	count++;
		//}, interval)});
		console.log('Promise');
		await sleep(4000);
	});
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
	while(true){
		console.log('while start');
		await findDot().then();
		console.log('while end');
		await sleep(2000);
	}
}

