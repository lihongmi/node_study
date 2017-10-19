var Nightmare =require('nightmare');

const nightmare = Nightmare({ show: false });

nightmare
  .goto('http://www.sina.com.cn/')
  .mouseover("#SI_Top_Login a")
  .type("input[name='loginname']","15720188969")
  .type("input[name='password']","abc123321")
  .click(".btn_wrap a.login_btn")
  .wait(function(){
      if(document.getElementById("SI_Top_Nick_Name").innerHTML!=""){
        return true;
      }else{
          return false;
      }
  })
  .goto("http://weibo.com/messages")
  .evaluate(function(){
     document.querySelector("em.ficon_send").click()
  })
  .wait(".W_layer textarea.W_input")
  .type("textarea.W_input",genMsg())
  .click("a.W_btn_a")
  .wait(2000)
 
  .goto("http://weibo.com/")
  .wait(10000)
  .end()
  .then(function(){
        console.log("发布成功");
  })
   /*
   .click("em.ficon_send")
   .goto("http://weibo.com/u/5963576667/home?wvr=5")
  .click("#SI_Top_Weibo a.tn-tab")
*/
  .catch((error) => {
    console.error('Search failed:', error);
  });


  function genMsg(){
      var now=new Date();
      return "现在北京时刻:"+now.toLocaleString();
  }

