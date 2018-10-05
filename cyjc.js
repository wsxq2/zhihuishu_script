function findDot() {
	return new Promise(function(resolve, reject){
		//处理视频弹题
		//await sleep(1000);
		//let wholeTime=2.0/3.0*(new Date('1970-01-01T'+document.querySelector('span.duration').innerText+'Z').getTime());
		//console.log("wholeTime: "+wholeTime);
		let interval=3000;
		let count=0;
		let timerID = setInterval(async function () {
			console.log("count: "+ count);
			if(document.querySelector('span.currentTime').innerText === document.querySelector('span.duration').innerText){
				clearInterval(timerID);
				document.getElementById('nextBtn').click();
			}
			let tmIframe=document.getElementById('tmDialog_iframe');
			if(tmIframe){
				console.log("find a dot!");
				let correctAnswer=tmIframe.contentWindow.document.querySelectorAll('[_correctanswer="1"]');
				for (let i = 0, len = correctAnswer.length; i < len; i++) {
					if (correctAnswer[i].checked == false) {
						correctAnswer[i].click();
					}
				}
				let wrongAnswer=tmIframe.contentWindow.document.querySelectorAll('[_correctanswer="0"]');
				for (let i = 0, len = wrongAnswer.length; i < len; i++) {
					if (wrongAnswer[i].checked == true) {
						wrongAnswer[i].click();
					}
				}
				//点击视频弹题的关闭按钮
				await sleep(1000);
				document.querySelector('div.box_popboxes > div.popboxes_btn > a > span').click();
			}
			count++;
		}, interval)});

}
//let timerID = undefined;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function mySetInterval(func, delay) {
	return new Promise(function(resolve, reject) {
		timerID = setInterval(func, delay);
	});
}
//document.body.onload = function () {
		//document.getElementById('mediaplayer_parent').onload = 
async function main() {
	while(true){
		await sleep(2000);
		//静音以防止打扰
		document.querySelector('#vjs_mediaplayer > div.controlsBar > div.volumeBox > div.volumeIcon').click();
		//选择1.5倍速以加快速度
		document.querySelector('.speedList>.speedTab15').click();
		//选择流畅以节省占用网速
		document.querySelector('#vjs_mediaplayer > div.controlsBar > div.definiBox > div > b.line1bq').click();

		await findDot().then();
		//let interval=3000;
		//let count=0;
		//await mySetInterval(async function () {
		//	console.log("count*interval: "+ count*interval);
		//	if(document.querySelector('span.currentTime').innerText === document.querySelector('span.duration').innerText){
		//		clearInterval(timerID);
		//		document.getElementById('nextBtn').click();
		//	}
		//	let tmIframe=document.getElementById('tmDialog_iframe');
		//	if(tmIframe){
		//		console.log("find a dot!");
		//		let correctAnswer=tmIframe.contentWindow.document.querySelectorAll('[_correctanswer="1"]');
		//		for (let i = 0, len = correctAnswer.length; i < len; i++) {
		//			if (correctAnswer[i].checked == false) {
		//				correctAnswer[i].click();
		//			}
		//		}
		//		let wrongAnswer=tmIframe.contentWindow.document.querySelectorAll('[_correctanswer="0"]');
		//		for (let i = 0, len = wrongAnswer.length; i < len; i++) {
		//			if (wrongAnswer[i].checked == true) {
		//				wrongAnswer[i].click();
		//			}
		//		}
		//		//点击视频弹题的关闭按钮
		//		await sleep(1000);
		//		document.querySelector('div.box_popboxes > div.popboxes_btn > a > span').click();
		//	}
		//	count++;
		//	
		//}, interval);
	}
}

//}
