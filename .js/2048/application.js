//等待浏览器准备好渲染游戏（避免出现故障）

window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});