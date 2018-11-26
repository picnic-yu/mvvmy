import Watcher from './Watcher'
const  CompileUtil = {
    // 获取实例上对应得数据
    getVal(vm, expr){
        let exprArr = expr.split('.');//[a,b,c,d]
        return exprArr.reduce((prev,next) => {
            return prev[next];
        },vm.$data)
    },
    // 文本处理
    text(node,vm,expr){
        let updateFn = this.updater['textUpdater'];
        // vm.$date[expr]  //注意对象 message.a
        //message.a  => [message,a] vm$data.message.a
        let value = this.getTextVal(vm, expr);
        let self = this;
        expr.replace(/\{\{([^}]+)\}\}/g,function(){
            // 这里应该加一个监控 数据变化 调用watch得回调
            new Watcher(vm, arguments[1], (newValue) => {
                // 当值变化后  会调用cb 将新得值传递过来
                // 如果数据变化了，文本节点需要重新获取依赖得属性更新文本中内容
                
                updateFn && updateFn(node,self.getTextVal(vm,expr));//这里得this问题需要解决
            });
           
        })
        
        updateFn && updateFn(node,value);
    },
    setVal(vm,expr,value){
        expr = expr.split('.');
        return expr.reduce((prev,next,index) => {
            if(index === expr.length-1){
                return prev[next] = value;
            }
            return prev[next]
        },vm.$data)

    },
    // 输入框处理
    model(node,vm,expr){
        let updateFn = this.updater['modelUpdater'];
        // 这里应该加一个监控 数据变化 调用watch得回调
        new Watcher(vm, expr, (newValue) => {
            // 当值变化后  会调用cb 将新得值传递过来
            updateFn && updateFn(node,this.getVal(vm,expr));
        });
        node.addEventListener('input',(e) => {
            let newValue = e.target.value;
            this.setVal(vm,expr,newValue);
        })
        updateFn && updateFn(node,this.getVal(vm,expr));
    },
    // 获取编译文本后得结果
    getTextVal(vm,expr){
        let self = this;
        return expr.replace(/\{\{([^}]+)\}\}/g,function(){
            console.log('ddd',arguments);
            return self.getVal(vm, arguments[1]);
        })
       
        // return expr.replace(/\{\{([^}]+)\}\}/g,(...arguments) => {
        //     console.log('ddd',arguments);
        //     return this.getVal(vm, arguments[1]);
        // })
    },
    updater:{
        // 文本更新
        textUpdater(node, value){
            node.textContent = value
        },
        // 输入框更新
        modelUpdater(node, value){
            node.value = value
        }
    }

}
export default CompileUtil