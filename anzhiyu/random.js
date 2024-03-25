var posts=["2024/03/17/GPTPLUS/GPT4/","2024/01/13/Github/Open-Interpreter/","2023/03/26/TBug/dingtalk/","2024/02/05/bing/Vercel/","2021/12/23/cut/zyhz/","2024/02/06/bing/newbing/","2024/03/01/deploy/Vercel/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };