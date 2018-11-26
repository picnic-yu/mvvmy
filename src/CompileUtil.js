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
        updateFn && updateFn(node,value);
    },
    // 输入框处理
    model(node,vm,expr){
        let updateFn = this.updater['modelUpdater'];
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