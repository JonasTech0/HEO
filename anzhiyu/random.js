var posts=["2024/01/13/Github/Open-Interpreter/","2021/12/23/montage/zyhz/","2023/03/26/TBug/dingtalk/","2024/03/17/AI era/GPTPLUS/GPT4/","2023/10/27/AI era/amaze/Heygen/","2024/02/27/AI era/deploy/One-Code/","2024/03/01/AI era/deploy/Vercel/","2024/02/06/AI era/bing/newbing/","2024/02/05/AI era/bing/Vercel/","2023/10/26/AI era/mirror/LobeChat/","2021/04/28/AI era/mirror/hermchats/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };