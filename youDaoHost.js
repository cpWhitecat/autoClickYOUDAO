
//.sp.dictvoice.voice-js.log-js
//overflow
//实现网页有道自动点击，为以后埋坑
Element.prototype._addEventListener = Element.prototype.addEventListener;
Element.prototype.addEventListener = function () {
  let args = [...arguments];
  let temp = args[1];
    args[1] = function () {
    let args2 = [...arguments];
      args2[0] = Object.assign({}, args2[0]);
      args2[0].isTrusted = true;
      return temp(...args2);
    };
  return this._addEventListener(...args);
};
//以上是重写isTrusted
let aALL= document.querySelector(".sp.dictvoice.voice-js.log-js");
setInterval((aALL) => {
     aALL.click();
}, 2000);


    
