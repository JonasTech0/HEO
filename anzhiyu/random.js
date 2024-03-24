var posts=["2024/03/17/GPTPLUS/GPT4/","2024/02/05/bing/Vercel/","2023/03/26/bing/newbing/","/posts/zyhz"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };