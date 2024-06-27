// preload  
let container=document.querySelector('#progress')
let progressBar=document.querySelector('.progress-bar')
let progressText=document.querySelector('.progress-text')
let imgLoaded=0;
let imgTotal = 1000; // 로드시간이 너무 길 경우 숫자 줄이기
let current = 0;
let progressTimer;
let topValue;

// 매 시간마다마다 할 일
// setInterval(할일, 시간)
// setInterval(function(){},1000) // 매 1초마다 할일

// setInterval를 멈추고 싶을때, (무한 반복 되어 멈춰줘야 한다.)
// 1) 변수 setInterval을 할당한다. let 변수 = setInterval
// 2) clearInterval(변수) : 멈추는 변수를 할당하여 멈추게 한다. clearInterval(변수)


// progressTimer를 변수로 할당한다.
// progressTimer=setInterval(이 곳,1000/60) 
// : 이 곳에 updateProgress 를 쓸 경우 함수 자체를 사용하는거지만,
// : (updateProgress)를 쓸 경우 함수의 결과값을 넣는것이다.
// : 즉, 선풍기로 비유하자면 선풍기가 들어가는것이 아니라, 바람이 들어간다는 뜻.

progressTimer=setInterval(updateProgress,1000/60)
function updateProgress(){
    imgLoaded++;
    // console.log(imgLoaded) : 1000이 넘어도 무한 반복 한다.
    let target=(imgLoaded/imgTotal)*100;
    // %로 바꾸는 과정, imgLoaded(1씩 증가) / imgTotal(1000) *100(%)
    // console.log(target)
    current+= (target - current)*0.01
    // current = current + (target - current)*0.01
    // 로딩이 길어서 조절하기 위함
    progressBar.style.width=current + "%"
    progressText.innerHTML=Math.ceil(current)  + "%" // Math.ceil() : 소수점은 생략한다 
    // %에 비례하여 실행

    if(current>99.9){
        clearInterval(progressTimer)
        container.classList.add('progress-complete') // : class 를 불러오는것이기 때문에 (.)❌
        progressBar.style.width="100%";
        gsap.to(container,{
            duration:0.3,
            yPercent : -100,
            // 99.99%가 되면 y축으로 -100만큼 올라간다.
            ease:"none",
        })
    }
}



gsap.registerPlugin(ScrollTrigger);

let smoothScrolling=function(){
    const lenis = new Lenis({
        lerp:0.08 //lenis 기본 값 바꿀 경우 여기서 바꾸면 된다. 
    })

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update) // lenisjs를 스크롤 할때마다 업데이트 된다.
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)  
}
smoothScrolling()

////////////////////////////////////////////////


function canvas() {
    let canvas = document.querySelector("#myCanvas")
    let context = canvas.getContext("2d"); // 🚀🚀 canvas 사용시 무조건 context를 사용해야한다.

    // window.innerWidth : window 화면의 너비
    canvas.width = window.innerWidth; // viewport의 넓이를 canvas의 너비값으로
    canvas.height = window.innerHeight; // viewport의 높이를 canvas의 높이값으로

    window.addEventListener("resize", function () { // 사이즈가 달라질때마다 아래 명령문을 시킨다.
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render(); // : render를 호출한다.

    })

    function files(index) { // javascripte의 경로는 html 입장에서 보아야 한다.
        var data=`https://cyberfiction.io/sequence/0001.png
        https://cyberfiction.io/sequence/0002.png
        https://cyberfiction.io/sequence/0003.png
        https://cyberfiction.io/sequence/0004.png
        https://cyberfiction.io/sequence/0005.png
        https://cyberfiction.io/sequence/0006.png
        https://cyberfiction.io/sequence/0007.png
        https://cyberfiction.io/sequence/0008.png
        https://cyberfiction.io/sequence/0009.png
        https://cyberfiction.io/sequence/0010.png
        https://cyberfiction.io/sequence/0011.png
        https://cyberfiction.io/sequence/0012.png
        https://cyberfiction.io/sequence/0013.png
        https://cyberfiction.io/sequence/0014.png
        https://cyberfiction.io/sequence/0015.png
        https://cyberfiction.io/sequence/0016.png
        https://cyberfiction.io/sequence/0017.png
        https://cyberfiction.io/sequence/0018.png
        https://cyberfiction.io/sequence/0019.png
        https://cyberfiction.io/sequence/0020.png
        https://cyberfiction.io/sequence/0021.png
        https://cyberfiction.io/sequence/0022.png
        https://cyberfiction.io/sequence/0023.png
        https://cyberfiction.io/sequence/0024.png
        https://cyberfiction.io/sequence/0025.png
        https://cyberfiction.io/sequence/0026.png
        https://cyberfiction.io/sequence/0027.png
        https://cyberfiction.io/sequence/0028.png
        https://cyberfiction.io/sequence/0029.png
        https://cyberfiction.io/sequence/0030.png
        https://cyberfiction.io/sequence/0031.png
        https://cyberfiction.io/sequence/0032.png
        https://cyberfiction.io/sequence/0033.png
        https://cyberfiction.io/sequence/0034.png
        https://cyberfiction.io/sequence/0035.png
        https://cyberfiction.io/sequence/0036.png
        https://cyberfiction.io/sequence/0037.png
        https://cyberfiction.io/sequence/0038.png
        https://cyberfiction.io/sequence/0039.png
        https://cyberfiction.io/sequence/0040.png
        https://cyberfiction.io/sequence/0041.png
        https://cyberfiction.io/sequence/0042.png
        https://cyberfiction.io/sequence/0043.png
        https://cyberfiction.io/sequence/0044.png
        https://cyberfiction.io/sequence/0045.png
        https://cyberfiction.io/sequence/0046.png
        https://cyberfiction.io/sequence/0047.png
        https://cyberfiction.io/sequence/0048.png
        https://cyberfiction.io/sequence/0049.png
        https://cyberfiction.io/sequence/0050.png
        https://cyberfiction.io/sequence/0051.png
        https://cyberfiction.io/sequence/0052.png
        https://cyberfiction.io/sequence/0053.png
        https://cyberfiction.io/sequence/0054.png
        https://cyberfiction.io/sequence/0055.png
        https://cyberfiction.io/sequence/0056.png
        https://cyberfiction.io/sequence/0057.png
        https://cyberfiction.io/sequence/0058.png
        https://cyberfiction.io/sequence/0059.png
        https://cyberfiction.io/sequence/0060.png
        https://cyberfiction.io/sequence/0061.png
        https://cyberfiction.io/sequence/0062.png
        https://cyberfiction.io/sequence/0063.png
        https://cyberfiction.io/sequence/0064.png
        https://cyberfiction.io/sequence/0065.png
        https://cyberfiction.io/sequence/0066.png
        https://cyberfiction.io/sequence/0067.png
        https://cyberfiction.io/sequence/0068.png
        https://cyberfiction.io/sequence/0069.png
        https://cyberfiction.io/sequence/0070.png
        https://cyberfiction.io/sequence/0071.png
        https://cyberfiction.io/sequence/0072.png
        https://cyberfiction.io/sequence/0073.png
        https://cyberfiction.io/sequence/0074.png
        https://cyberfiction.io/sequence/0075.png
        https://cyberfiction.io/sequence/0076.png
        https://cyberfiction.io/sequence/0077.png
        https://cyberfiction.io/sequence/0078.png
        https://cyberfiction.io/sequence/0079.png
        https://cyberfiction.io/sequence/0080.png
        https://cyberfiction.io/sequence/0081.png
        https://cyberfiction.io/sequence/0082.png
        https://cyberfiction.io/sequence/0083.png
        https://cyberfiction.io/sequence/0084.png
        https://cyberfiction.io/sequence/0085.png
        https://cyberfiction.io/sequence/0086.png
        https://cyberfiction.io/sequence/0087.png
        https://cyberfiction.io/sequence/0088.png
        https://cyberfiction.io/sequence/0089.png
        https://cyberfiction.io/sequence/0090.png
        https://cyberfiction.io/sequence/0091.png
        https://cyberfiction.io/sequence/0092.png
        https://cyberfiction.io/sequence/0093.png
        https://cyberfiction.io/sequence/0094.png
        https://cyberfiction.io/sequence/0095.png
        https://cyberfiction.io/sequence/0096.png
        https://cyberfiction.io/sequence/0097.png
        https://cyberfiction.io/sequence/0098.png
        https://cyberfiction.io/sequence/0099.png
        https://cyberfiction.io/sequence/0100.png
        https://cyberfiction.io/sequence/0101.png
        https://cyberfiction.io/sequence/0102.png
        https://cyberfiction.io/sequence/0103.png
        https://cyberfiction.io/sequence/0104.png
        https://cyberfiction.io/sequence/0105.png
        https://cyberfiction.io/sequence/0106.png
        https://cyberfiction.io/sequence/0107.png
        https://cyberfiction.io/sequence/0108.png
        https://cyberfiction.io/sequence/0109.png
        https://cyberfiction.io/sequence/0110.png
        https://cyberfiction.io/sequence/0111.png
        https://cyberfiction.io/sequence/0112.png
        https://cyberfiction.io/sequence/0113.png
        https://cyberfiction.io/sequence/0114.png
        https://cyberfiction.io/sequence/0115.png
        https://cyberfiction.io/sequence/0116.png
        https://cyberfiction.io/sequence/0117.png
        https://cyberfiction.io/sequence/0118.png
        https://cyberfiction.io/sequence/0119.png
        https://cyberfiction.io/sequence/0120.png
        https://cyberfiction.io/sequence/0121.png
        https://cyberfiction.io/sequence/0122.png
        https://cyberfiction.io/sequence/0123.png
        https://cyberfiction.io/sequence/0124.png
        https://cyberfiction.io/sequence/0125.png
        https://cyberfiction.io/sequence/0126.png
        https://cyberfiction.io/sequence/0127.png
        https://cyberfiction.io/sequence/0128.png
        https://cyberfiction.io/sequence/0129.png
        https://cyberfiction.io/sequence/0130.png
        https://cyberfiction.io/sequence/0131.png
        https://cyberfiction.io/sequence/0132.png
        https://cyberfiction.io/sequence/0133.png
        https://cyberfiction.io/sequence/0134.png
        https://cyberfiction.io/sequence/0135.png
        https://cyberfiction.io/sequence/0136.png
        https://cyberfiction.io/sequence/0137.png
        https://cyberfiction.io/sequence/0138.png
        https://cyberfiction.io/sequence/0139.png
        https://cyberfiction.io/sequence/0140.png
        https://cyberfiction.io/sequence/0141.png
        https://cyberfiction.io/sequence/0142.png
        https://cyberfiction.io/sequence/0143.png
        https://cyberfiction.io/sequence/0144.png
        https://cyberfiction.io/sequence/0145.png
        https://cyberfiction.io/sequence/0146.png
        https://cyberfiction.io/sequence/0147.png
        https://cyberfiction.io/sequence/0148.png
        https://cyberfiction.io/sequence/0149.png
        https://cyberfiction.io/sequence/0150.png
        https://cyberfiction.io/sequence/0151.png
        https://cyberfiction.io/sequence/0152.png
        https://cyberfiction.io/sequence/0153.png
        https://cyberfiction.io/sequence/0154.png
        https://cyberfiction.io/sequence/0155.png
        https://cyberfiction.io/sequence/0156.png
        https://cyberfiction.io/sequence/0157.png
        https://cyberfiction.io/sequence/0158.png
        https://cyberfiction.io/sequence/0159.png
        https://cyberfiction.io/sequence/0160.png
        https://cyberfiction.io/sequence/0161.png
        https://cyberfiction.io/sequence/0162.png
        https://cyberfiction.io/sequence/0163.png
        https://cyberfiction.io/sequence/0164.png
        https://cyberfiction.io/sequence/0165.png
        https://cyberfiction.io/sequence/0166.png
        https://cyberfiction.io/sequence/0167.png
        https://cyberfiction.io/sequence/0168.png
        https://cyberfiction.io/sequence/0169.png
        https://cyberfiction.io/sequence/0170.png
        https://cyberfiction.io/sequence/0171.png
        https://cyberfiction.io/sequence/0172.png
        https://cyberfiction.io/sequence/0173.png
        https://cyberfiction.io/sequence/0174.png
        https://cyberfiction.io/sequence/0175.png
        https://cyberfiction.io/sequence/0176.png
        https://cyberfiction.io/sequence/0177.png
        https://cyberfiction.io/sequence/0178.png
        https://cyberfiction.io/sequence/0179.png
        https://cyberfiction.io/sequence/0180.png
        https://cyberfiction.io/sequence/0181.png
        https://cyberfiction.io/sequence/0182.png
        https://cyberfiction.io/sequence/0183.png
        https://cyberfiction.io/sequence/0184.png
        https://cyberfiction.io/sequence/0185.png
        https://cyberfiction.io/sequence/0186.png
        https://cyberfiction.io/sequence/0187.png
        https://cyberfiction.io/sequence/0188.png
        https://cyberfiction.io/sequence/0189.png
        https://cyberfiction.io/sequence/0190.png
        https://cyberfiction.io/sequence/0191.png
        https://cyberfiction.io/sequence/0192.png
        https://cyberfiction.io/sequence/0193.png
        https://cyberfiction.io/sequence/0194.png
        https://cyberfiction.io/sequence/0195.png
        https://cyberfiction.io/sequence/0196.png
        https://cyberfiction.io/sequence/0197.png
        https://cyberfiction.io/sequence/0198.png
        https://cyberfiction.io/sequence/0199.png
        https://cyberfiction.io/sequence/0200.png
        https://cyberfiction.io/sequence/0201.png
        https://cyberfiction.io/sequence/0202.png
        https://cyberfiction.io/sequence/0203.png
        https://cyberfiction.io/sequence/0204.png
        https://cyberfiction.io/sequence/0205.png
        https://cyberfiction.io/sequence/0206.png
        https://cyberfiction.io/sequence/0207.png
        https://cyberfiction.io/sequence/0208.png
        https://cyberfiction.io/sequence/0209.png
        https://cyberfiction.io/sequence/0210.png
        https://cyberfiction.io/sequence/0211.png
        https://cyberfiction.io/sequence/0212.png
        https://cyberfiction.io/sequence/0213.png
        https://cyberfiction.io/sequence/0214.png
        https://cyberfiction.io/sequence/0215.png
        https://cyberfiction.io/sequence/0216.png
        https://cyberfiction.io/sequence/0217.png
        https://cyberfiction.io/sequence/0218.png
        https://cyberfiction.io/sequence/0219.png
        https://cyberfiction.io/sequence/0220.png
        https://cyberfiction.io/sequence/0221.png
        https://cyberfiction.io/sequence/0222.png
        https://cyberfiction.io/sequence/0223.png
        https://cyberfiction.io/sequence/0224.png
        https://cyberfiction.io/sequence/0225.png
        https://cyberfiction.io/sequence/0226.png
        https://cyberfiction.io/sequence/0227.png
        https://cyberfiction.io/sequence/0228.png
        https://cyberfiction.io/sequence/0229.png
        https://cyberfiction.io/sequence/0230.png
        https://cyberfiction.io/sequence/0231.png
        https://cyberfiction.io/sequence/0232.png
        https://cyberfiction.io/sequence/0233.png
        https://cyberfiction.io/sequence/0234.png
        https://cyberfiction.io/sequence/0235.png
        https://cyberfiction.io/sequence/0236.png
        https://cyberfiction.io/sequence/0237.png
        https://cyberfiction.io/sequence/0238.png
        https://cyberfiction.io/sequence/0239.png
        https://cyberfiction.io/sequence/0240.png
        https://cyberfiction.io/sequence/0241.png
        https://cyberfiction.io/sequence/0242.png
        https://cyberfiction.io/sequence/0243.png
        https://cyberfiction.io/sequence/0244.png
        https://cyberfiction.io/sequence/0245.png
        https://cyberfiction.io/sequence/0246.png
        https://cyberfiction.io/sequence/0247.png
        https://cyberfiction.io/sequence/0248.png
        https://cyberfiction.io/sequence/0249.png
        https://cyberfiction.io/sequence/0250.png
        https://cyberfiction.io/sequence/0251.png
        https://cyberfiction.io/sequence/0252.png
        https://cyberfiction.io/sequence/0253.png
        https://cyberfiction.io/sequence/0254.png
        https://cyberfiction.io/sequence/0255.png
        https://cyberfiction.io/sequence/0256.png
        https://cyberfiction.io/sequence/0257.png
        https://cyberfiction.io/sequence/0258.png
        https://cyberfiction.io/sequence/0259.png
        https://cyberfiction.io/sequence/0260.png
        https://cyberfiction.io/sequence/0261.png
        https://cyberfiction.io/sequence/0262.png
        https://cyberfiction.io/sequence/0263.png
        https://cyberfiction.io/sequence/0264.png
        https://cyberfiction.io/sequence/0265.png
        https://cyberfiction.io/sequence/0266.png
        https://cyberfiction.io/sequence/0267.png
        https://cyberfiction.io/sequence/0268.png
        https://cyberfiction.io/sequence/0269.png
        https://cyberfiction.io/sequence/0270.png
        https://cyberfiction.io/sequence/0271.png
        https://cyberfiction.io/sequence/0272.png
        https://cyberfiction.io/sequence/0273.png
        https://cyberfiction.io/sequence/0274.png
        https://cyberfiction.io/sequence/0275.png
        https://cyberfiction.io/sequence/0276.png
        https://cyberfiction.io/sequence/0277.png
        https://cyberfiction.io/sequence/0278.png
        https://cyberfiction.io/sequence/0279.png
        https://cyberfiction.io/sequence/0280.png
        https://cyberfiction.io/sequence/0281.png
        https://cyberfiction.io/sequence/0282.png
        https://cyberfiction.io/sequence/0283.png
        https://cyberfiction.io/sequence/0284.png
        https://cyberfiction.io/sequence/0285.png
        https://cyberfiction.io/sequence/0286.png
        https://cyberfiction.io/sequence/0287.png
        https://cyberfiction.io/sequence/0288.png
        https://cyberfiction.io/sequence/0289.png
        https://cyberfiction.io/sequence/0290.png
        https://cyberfiction.io/sequence/0291.png
        https://cyberfiction.io/sequence/0292.png
        https://cyberfiction.io/sequence/0293.png
        https://cyberfiction.io/sequence/0294.png
        https://cyberfiction.io/sequence/0295.png
        https://cyberfiction.io/sequence/0296.png
        https://cyberfiction.io/sequence/0297.png
        https://cyberfiction.io/sequence/0298.png
        https://cyberfiction.io/sequence/0299.png
        https://cyberfiction.io/sequence/0300.png
        https://cyberfiction.io/sequence/0301.png
        https://cyberfiction.io/sequence/0302.png
        https://cyberfiction.io/sequence/0303.png
        https://cyberfiction.io/sequence/0304.png
        https://cyberfiction.io/sequence/0305.png
        https://cyberfiction.io/sequence/0306.png
        https://cyberfiction.io/sequence/0307.png
        https://cyberfiction.io/sequence/0308.png
        https://cyberfiction.io/sequence/0309.png
        https://cyberfiction.io/sequence/0310.png
        https://cyberfiction.io/sequence/0311.png
        https://cyberfiction.io/sequence/0312.png
        https://cyberfiction.io/sequence/0313.png
        https://cyberfiction.io/sequence/0314.png
        https://cyberfiction.io/sequence/0315.png
        https://cyberfiction.io/sequence/0316.png
        https://cyberfiction.io/sequence/0317.png
        https://cyberfiction.io/sequence/0318.png
        https://cyberfiction.io/sequence/0319.png
        https://cyberfiction.io/sequence/0320.png
        https://cyberfiction.io/sequence/0321.png
        https://cyberfiction.io/sequence/0322.png
        https://cyberfiction.io/sequence/0323.png
        https://cyberfiction.io/sequence/0324.png
        https://cyberfiction.io/sequence/0325.png
        https://cyberfiction.io/sequence/0326.png
        https://cyberfiction.io/sequence/0327.png
        https://cyberfiction.io/sequence/0328.png
        https://cyberfiction.io/sequence/0329.png
        https://cyberfiction.io/sequence/0330.png
        https://cyberfiction.io/sequence/0331.png
        https://cyberfiction.io/sequence/0332.png
        https://cyberfiction.io/sequence/0333.png
        https://cyberfiction.io/sequence/0334.png
        https://cyberfiction.io/sequence/0335.png
        https://cyberfiction.io/sequence/0336.png
        https://cyberfiction.io/sequence/0337.png
        https://cyberfiction.io/sequence/0338.png
        https://cyberfiction.io/sequence/0339.png
        https://cyberfiction.io/sequence/0340.png
        https://cyberfiction.io/sequence/0341.png
        https://cyberfiction.io/sequence/0342.png
        https://cyberfiction.io/sequence/0343.png
        https://cyberfiction.io/sequence/0344.png
        https://cyberfiction.io/sequence/0345.png
        https://cyberfiction.io/sequence/0346.png
        https://cyberfiction.io/sequence/0347.png
        https://cyberfiction.io/sequence/0348.png
        https://cyberfiction.io/sequence/0349.png
        https://cyberfiction.io/sequence/0350.png
        https://cyberfiction.io/sequence/0351.png
        https://cyberfiction.io/sequence/0352.png
        https://cyberfiction.io/sequence/0353.png
        https://cyberfiction.io/sequence/0354.png
        https://cyberfiction.io/sequence/0355.png
        https://cyberfiction.io/sequence/0356.png
        https://cyberfiction.io/sequence/0357.png
        https://cyberfiction.io/sequence/0358.png
        https://cyberfiction.io/sequence/0359.png
        https://cyberfiction.io/sequence/0360.png
        https://cyberfiction.io/sequence/0361.png
        https://cyberfiction.io/sequence/0362.png
        https://cyberfiction.io/sequence/0363.png
        https://cyberfiction.io/sequence/0364.png
        https://cyberfiction.io/sequence/0365.png
        https://cyberfiction.io/sequence/0366.png
        https://cyberfiction.io/sequence/0367.png
        https://cyberfiction.io/sequence/0368.png
        https://cyberfiction.io/sequence/0369.png
        https://cyberfiction.io/sequence/0370.png
        https://cyberfiction.io/sequence/0371.png
        https://cyberfiction.io/sequence/0372.png
        https://cyberfiction.io/sequence/0373.png
        https://cyberfiction.io/sequence/0374.png
        https://cyberfiction.io/sequence/0375.png
        https://cyberfiction.io/sequence/0376.png
        https://cyberfiction.io/sequence/0377.png
        https://cyberfiction.io/sequence/0378.png
        https://cyberfiction.io/sequence/0379.png
        https://cyberfiction.io/sequence/0380.png
        https://cyberfiction.io/sequence/0381.png
        https://cyberfiction.io/sequence/0382.png
        https://cyberfiction.io/sequence/0383.png
        https://cyberfiction.io/sequence/0384.png
        https://cyberfiction.io/sequence/0385.png
        https://cyberfiction.io/sequence/0386.png
        https://cyberfiction.io/sequence/0387.png
        https://cyberfiction.io/sequence/0388.png
        https://cyberfiction.io/sequence/0389.png
        https://cyberfiction.io/sequence/0390.png
        https://cyberfiction.io/sequence/0391.png
        https://cyberfiction.io/sequence/0392.png
        https://cyberfiction.io/sequence/0393.png
        https://cyberfiction.io/sequence/0394.png
        https://cyberfiction.io/sequence/0395.png
        https://cyberfiction.io/sequence/0396.png
        https://cyberfiction.io/sequence/0397.png
        https://cyberfiction.io/sequence/0398.png
        https://cyberfiction.io/sequence/0399.png
        https://cyberfiction.io/sequence/0400.png
        https://cyberfiction.io/sequence/0401.png
        https://cyberfiction.io/sequence/0402.png
        https://cyberfiction.io/sequence/0403.png
        https://cyberfiction.io/sequence/0404.png
        https://cyberfiction.io/sequence/0405.png
        https://cyberfiction.io/sequence/0406.png
        https://cyberfiction.io/sequence/0407.png
        https://cyberfiction.io/sequence/0408.png
        https://cyberfiction.io/sequence/0409.png
        https://cyberfiction.io/sequence/0410.png
        https://cyberfiction.io/sequence/0411.png
        https://cyberfiction.io/sequence/0412.png
        https://cyberfiction.io/sequence/0413.png
        https://cyberfiction.io/sequence/0414.png
        https://cyberfiction.io/sequence/0415.png
        https://cyberfiction.io/sequence/0416.png
        https://cyberfiction.io/sequence/0417.png
        https://cyberfiction.io/sequence/0418.png
        https://cyberfiction.io/sequence/0419.png
        https://cyberfiction.io/sequence/0420.png
        https://cyberfiction.io/sequence/0421.png
        https://cyberfiction.io/sequence/0422.png
        https://cyberfiction.io/sequence/0423.png
        https://cyberfiction.io/sequence/0424.png
        https://cyberfiction.io/sequence/0425.png
        https://cyberfiction.io/sequence/0426.png
        https://cyberfiction.io/sequence/0427.png
        https://cyberfiction.io/sequence/0428.png
        https://cyberfiction.io/sequence/0429.png
        https://cyberfiction.io/sequence/0430.png
        https://cyberfiction.io/sequence/0431.png
        https://cyberfiction.io/sequence/0432.png
        https://cyberfiction.io/sequence/0433.png
        https://cyberfiction.io/sequence/0434.png
        https://cyberfiction.io/sequence/0435.png
        https://cyberfiction.io/sequence/0436.png
        https://cyberfiction.io/sequence/0437.png
        https://cyberfiction.io/sequence/0438.png
        https://cyberfiction.io/sequence/0439.png
        https://cyberfiction.io/sequence/0440.png
        https://cyberfiction.io/sequence/0441.png
        https://cyberfiction.io/sequence/0442.png
        https://cyberfiction.io/sequence/0443.png
        https://cyberfiction.io/sequence/0444.png
        https://cyberfiction.io/sequence/0445.png
        https://cyberfiction.io/sequence/0446.png
        https://cyberfiction.io/sequence/0447.png
        https://cyberfiction.io/sequence/0448.png
        https://cyberfiction.io/sequence/0449.png
        https://cyberfiction.io/sequence/0450.png
        https://cyberfiction.io/sequence/0451.png
        https://cyberfiction.io/sequence/0452.png
        https://cyberfiction.io/sequence/0453.png
        https://cyberfiction.io/sequence/0454.png
        https://cyberfiction.io/sequence/0455.png
        https://cyberfiction.io/sequence/0456.png
        https://cyberfiction.io/sequence/0457.png
        https://cyberfiction.io/sequence/0458.png
        https://cyberfiction.io/sequence/0459.png
        https://cyberfiction.io/sequence/0460.png
        https://cyberfiction.io/sequence/0461.png
        https://cyberfiction.io/sequence/0462.png
        https://cyberfiction.io/sequence/0463.png
        https://cyberfiction.io/sequence/0464.png
        https://cyberfiction.io/sequence/0465.png
        https://cyberfiction.io/sequence/0466.png
        https://cyberfiction.io/sequence/0467.png
        https://cyberfiction.io/sequence/0468.png
        https://cyberfiction.io/sequence/0469.png`;

        return data.split("\n")[index]
    }

    let frameCount = 469; // 이미지 갯수 469개
    let images = [];
    let imageSeq = {
        // 키 : value
        frame: 0
    }

//<img src="">
for (let i = 0; i < (frameCount + 150); i++) {
    let img = new Image(); // 이미지 태그 만들기
    if(i>=(frameCount - 1)){
        img.src = files(frameCount - 1);
    }else{
        img.src = files(i);
    }
    images.push(img)
}
//console.log(images)
gsap.to(imageSeq, {
    frame:images.length - 1, // 마지막 프레임의 index 번호
    snap: "frame", // "frame"은 프레임 단위로 값을 맞추겠다는 의미
    ease: "none",
    scrollTrigger: {
        scrub: 0.15,
        trigger: "#page canvas",
        start: "top top",
        end: "700% top", // 화면의 높이의 10배만큼 높아지고 화면에 머리에 닿을때까지
    },
    // render : function 이라는 함수가 있는것과 같다.
    onUpdate: render // gsap.to가 변할때마다, 업데이트 될 때마다 작동된다.
})


images[0].onload=render;

function render() {
    // image 를 호출한다 > img 안에 있는 배열의 이미지 인덱스 번호 호출 > 1초에 몇번씩 계속 호출
    scaleImage(images[imageSeq.frame], context)
}

// 위의 매개 변수를 받는다 (img=images[imageSeq.frame], ctx=context)
function scaleImage(img, ctx) {
    let canvas = ctx.canvas; // canvas에 'canvas:canvas#myCanvas'가 들어감.

    // ❗ 캔버스 너비에 비례하여 이미지 크기 바꾸기 (반응형)

    // ratio=캔버스너비 /(나누기) 이미지 너비
    let hRatio=canvas.width/img.width; // 수평 비율을 이미지 너비로 잡고
    let vRatio=canvas.height/img.height; // 수직 비율을 이미지 높이로 잡아라.

    // (이미지가 깨질 수 있기 때문에 사용)수평 비율과 수직 비율중 큰 값을 골라서 사용하라.
    // 예로 들어 디바이스를 사용할때 세로 비율이 더 길기 때문에 세로에 맞춰서,
    // 가로로 화면을 기울였을때(render)는 가로 비율이 더 길기 때문에 가로에 맞춘다.
    let ratio=math.max(hRatio,vRatio)
    // min(값1,값2) : 값1과 값2중 작은 값을 사용한다.

    // ❗ 캔버스 가운데에 이미지 정렬하기 

    let centershift_X=(canvas.width - img.width*ratio)/2 
    // 캔버스 너비 - 이미지 너비 * ratio(비율) / 2 를 계산하여 X의 가운데에 정렬할 수 있다.
    let centershift_Y=(canvas.height - img.height*ratio)
    // 캔버스 높이 - 이미지 높이 * ratio(비율) / 2 를 계산하여 Y의 가운데에 정렬할 수 있다.

    ctx.drawImage(
        img,
        0, // 이미지내에서 X 위치
        0, // 이미지내에서 Y 위치
        img.width, // 이미지내 X위치로부터 너비 값
        img.height, // 이미지내 Y위치로부터 높이 값
        centershift_X, // 캔버스 시작 위치 X
        centershift_Y, // 캔버스 시작 위치 Y
        img.width*ratio, // 캔버스 시작 위치 X로부터의 너비 값
        img.height*ratio, // 캔버스 시작 위치 Y로부터의 높이 값
    )
}

// let render=function(){return 10}
// render ()

// console.log(render()) // 10 : 값을 받아낸 것.
// console.log(render) // function(){return 10} : 함수를 불러내는 것.

function scaleImage(img,ctx){
    let canvas = ctx.canvas;
    let hRatio=canvas.width / img.width;
    let vRatio=canvas.height / img.height;

    let ratio = Math.max(hRatio,vRatio)
    let centershift_X=(canvas.width - img.width*ratio)/2;
    let centershift_Y=(canvas.height - img.height*ratio)/2;

    // 이미지 지우기
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    // 이미지 그리기
    ctx.drawImage(
        img, 
        0, 
        0, 
        img.width, 
        img.height, 
        centershift_X, 
        centershift_Y, 
        img.width*ratio,  
        img.height*ratio
    )

}

ScrollTrigger.create({
    trigger:'#page canvas', // 애니메이션이 시작될 요소
    pin:true, // 스크롤 하는 동안 트리거 요소 고정
    start:"top top", // 애니메이션 시작
    end:"700% top" // 화면의 높이를 6번 스크롤 내릴만큼 움직이면 종료된다.
})

}
canvas();

////////////////////////////////////////////////



gsap.to('#page1',{
    scrollTrigger:{
        trigger:'#page1',
        pin:true,
        start:'top top',
        end:'bottom top'
    }
})
gsap.to('#page2',{
    scrollTrigger:{
        trigger:'#page2',
        pin:true,
        start:'top top',
        end:'bottom top',
    }
})
gsap.to('#page3',{
    scrollTrigger:{
        trigger:'#page3',
        pin:true,
        start:'top top',
        end:'bottom top',
    }
})