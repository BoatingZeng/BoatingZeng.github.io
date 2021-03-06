/**
 * 显示标题画面
 * @method showTitle
 */
boatgal.showTitle = function() {

  //重置stage
  boatgal.stage.removeAllChildren();
  boatgal.stage.removeAllEventListeners();

  //判断有没有自定义标题,显示游戏标题画面
  if (boatgal.queue.getResult('customTitle.js')) {
    boatgal.customTitle();
  } else {
    boatgal.defaultTitle();
  }
};