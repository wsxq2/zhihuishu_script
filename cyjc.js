////////////////////////////////////////////////////////////////////////
//                           智慧树刷视频脚本                         //
////////////////////////////////////////////////////////////////////////

/* cyjc.js （创业基础.js）
 *
 * 此脚本产生缘由：我在期末考试之际还不得不刷网课《创业基础》（不感兴趣的课程），
 * 那简单无脑的操作恶心到了我，于是让我萌生了写脚本代替人力的想法，于是，
 * 耗时一月对前端知识的学习，不断尝试，方成此脚本。
 *
 * 虽然脚本终有过时日，但是此间的收获，应足以让我随机应变。:)
 *
 * 2018-10-05
 * by wsxq2
 */

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

let videoIsEnded = true;
async function main() {
	while(true){
		await sleep(5000);
		//判断当前视频是否结束，结束后才进行下次操作（每5000ms判断一次）
		if (videoIsEnded) {
			videoIsEnded =false;
			await sleep(2000);

			//静音以防止打扰
			document.querySelector('div.volumeIcon').click();
			//选择1.5倍速以加快速度
			document.querySelector('.speedList>.speedTab15').click();
			//选择流畅以节省占用网速
			document.querySelector('b.line1bq').click();

			let interval=3000;
			let count=0;
			let timerID = setInterval(async function () {
				console.log("script is running! count: "+ count);
				//判断视频是否结束
				if(count !=0 && document.querySelector('span.currentTime').innerText === document.querySelector('span.duration').innerText){
					console.log('find current vidoe is ended');
					clearInterval(timerID);
					document.getElementById('nextBtn').click();
					videoIsEnded =true;
				}
				let tmIframe=document.getElementById('tmDialog_iframe');
				//判断是否弹出题目
				if(tmIframe){
					console.log("find a question dot!");
					//获得并勾选正确答案
					let correctAnswer=tmIframe.contentWindow.document.querySelectorAll('[_correctanswer="1"]');
					for (let i = 0, len = correctAnswer.length; i < len; i++) {
						if (correctAnswer[i].checked == false) {
							correctAnswer[i].click();
						}
					}
					//获得并取消勾选错误答案
					let wrongAnswer=tmIframe.contentWindow.document.querySelectorAll('[_correctanswer="0"]');
					for (let i = 0, len = wrongAnswer.length; i < len; i++) {
						if (wrongAnswer[i].checked == true) {
							wrongAnswer[i].click();
						}
					}
					await sleep(1000);
					//点击视频弹题的关闭按钮
					document.querySelector('div.box_popboxes > div.popboxes_btn > a > span').click();
				}
				count++;

			}, interval);
		}
	}
}

