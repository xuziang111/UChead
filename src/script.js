(function (){
let UCstart=[
"全世界80万人疯传",
"你不可不知的",
"立刻分享，",
"天啊！这居然是",
"我看了3遍都不相信",
"38个",
"21个",
"看完眼眶湿湿的",
"我怎么没早点发现这",
"让你大惊失色",
"15个",
"12个你一定得知道",
"不看后悔",
"超过6万人已经发现",
"你一定没看过的",
"这太神了！",
"史上最",
"整整流传两世纪",
"45个",
"10个影响你一生",
"让专家跌破眼镜",
"17个",
"每个人都忽略这",
"25个你一定会爱上",
"这是我听过最奇怪的",
"14个让人笑翻",
"胆小的人别看",
"3分钟看完这",
"20岁以前必看",
"全中国都在看，",
"杜拉克教我的",
"前所未闻",
"深度揭秘",
"史上最强",
];
let UCmid=[
"不可思议的事实，",
"致富秘诀，",
"劲爆的惊险画面，",
"看到赚到的不传秘方，",
"绝无仅有的超自然现象，",
"值得收藏一辈子的秘密，",
"影响你全家的健康行为，",
"残酷的人生领悟，",
"首次解禁，",
"轰动全球的照片，",
"不可不看的影片，",
"不可告人的秘密",
"改变全人类的超酷行为，",
"家庭必备的神圣之物，",
"骇人听闻的灵异现象，",
"不轻易透露的超强技巧，",
"超搞笑的视频，",
"立刻就必须做的事，",
"从未被揭发的新闻，",
"啧啧称奇的绝妙发明，",
"让人傻眼的画面，",
"可爱到爆的小动物，",
"珍贵的历史宝物，",
"让全球男性陷入疯狂的影片，",
"诡异的视觉陷阱，",
"全人类的存亡关键，",
"操纵人心的秘密，",
"星座小秘密，",
"致癌的日常食品，",
"哈佛大学最受欢迎的课程，",
"全球禁播的MV，",
"医师养生法，",
"最难以置信的骗术，",
];
let UCend=[
"看完后我惊呆了！",
"真的把我吓傻了！",
"全世界都崩溃！",
"我的下巴都掉了！",
"看完对人生对然开悟了！",
"全场的观众都崩溃了！",
"尤其是第7个！",
"特别是最后一个！",
"我不敢相信第3个！",
"你一定要看第5个！",
"完全颠覆你的想象！",
"不敢相信！",
"第4个太夸张了！",
"第6个不是真的吧？",
"第8个太疯狂了！",
"他是怎么做到的？",
"不分享还是人吗？",
"第2个太惊人了！",
"这真的让我看不下去了…",
"你一定要看到最后！",
"我的心融化了…",
"把所有人都吓坏了！",
"第9个真的很神奇！",
"真是太天才了！",
"我从椅子上跳了起来！",
"第5秒我就流泪了…",
"是女人一定要看！",
"我忍不住一直看下去…",
"请看完！",
"其他简直弱爆了！",
"强烈推荐！",
"有图有真相！",
];
function makeUC(){
let output = UCstart[Math.floor(Math.random()*UCstart.length)] + UCmid[Math.floor(Math.random()*UCmid.length)]+UCend[Math.floor(Math.random()*UCend.length)]
        document.getElementById("UChead").innerHTML=output
        console.log(output)
}
        
  document.getElementById("UCheadmake").addEventListener("click",()=>{
      makeUC()
  })
  makeUC()
})()
