var posts=["2024/06/06/AI era/Chattts/","2024/04/06/AI era/Freegpt35/","2024/07/31/AI era/Hexo/","2024/04/14/AI era/OneAPI/","2024/05/14/AI era/book/","2024/08/23/AI era/cursor/","2024/04/06/AI era/freeAPI/","2024/02/28/AI era/hermchats/","2024/01/13/Github/Open-Interpreter/","2021/12/23/montage/zyhz/","1970/01/01/公告/Malfunction/","2023/03/26/TBug/dingtalk/","2024/02/10/notes/2月10日记/","2024/02/07/notes/2月7日记/","2024/02/09/notes/2月9日记/","2024/02/08/notes/2月8日记/","2024/03/21/notes/3月21日记/","2024/05/01/notes/5月2日记/","2024/08/06/notes/8月6日记/","2024/03/17/AI era/GPTPLUS/GPT4/","2024/08/23/AI era/Midjourney/mjprompt/","2023/10/27/AI era/amaze/Heygen/","2024/02/05/AI era/bing/Vercel/","2024/02/06/AI era/bing/newbing/","2024/02/27/AI era/deploy/One-Code/","2024/03/01/AI era/deploy/Vercel/","2023/10/26/AI era/mirror/LobeChat/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };