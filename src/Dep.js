// 发布订阅
export default  class Dep{
    constructor(){
        // 订阅得数组
        this.subs = [];
    }
    // 添加订阅
    addSub(watcher){
        this.subs.push(watcher);
    }
    // 通知
    notify(){
        this.subs.forEach((watcher) => {
            watcher.update();
        });
    }
}