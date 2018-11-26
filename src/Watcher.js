
import Dep from './Dep'
// 观察者得目的 给需要变化得元素增加一个观察者，
// 当数据变化后执行对应得方法
// vm.$data expr
// cb 回调  vm.$watch  
export default class Watcher{
    constructor(vm, expr, cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        // 先获取一下 老得值 后面做对比
        this.value = this.get();
    }
    
    getVal(vm, expr){
        let exprArr = expr.split('.');//[a,b,c,d]
        return exprArr.reduce((prev,next) => {
            return prev[next];
        },vm.$data)
    }
    // 获取老值
    get(){
        Dep.target = this;
        return this.getVal(this.vm, this.expr);
        Dep.target = null;
    }
    // 对外暴露得方法
    update(){
        let newValue = this.getVal(this.vm, this.expr);
        let oldValue = this.value;
        if(newValue != oldValue){
            this.cb(newValue);//对应watch得callback
        }
    }
}