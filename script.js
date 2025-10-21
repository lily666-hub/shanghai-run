window.onload = function() {
  var map = new AMap.Map('map', {
    zoom: 12,
    center: [121.4737, 31.2304] // 上海中心坐标
  });

  document.getElementById("generate-route").addEventListener("click", function() {
    alert("🎽 生成你的专属上海跑路线功能即将上线！");
  });
};
