/**
 * Created by olive on 2017/3/14.
 */
if (window.location.href.indexOf("login") == -1) {
  if (!sessionStorage.getItem("auth")) {
    window.location = "login.html?v=1.01";
    throw new Error("还没登陆");
  }
}
