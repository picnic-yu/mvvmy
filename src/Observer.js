// 数据劫持
export default class Observer{
    constructor(data){
        this.observer(data);
    }
    // 对data数据将原有得属性改成set和get
    observer(data){
        if(!data || typeof data !== 'object'){
            return
        }
         // 要将数据一一劫持 先获取到data得key和value
        Object.keys(data).forEach((key) => {
            // 劫持
            this.defineReactive(data,key,data[key]);
            this.observer(data[key]);//递归深度劫持
        });
    }
    // 定义响应式
    defineReactive(obj,key,value){
        let self = this;
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get(){
                return value
            },
            set(newValue){
                // 当给data属性中设置值得时候，更改属性值
                if(newValue != value){
                    // 这里this不是实例
                    self.observer(newValue);//如果是对象继续劫持  设置新改变得值为对象时候重新劫持
                    value = newValue;
                }
            }
        });
    }
   
}