import Compile from './Compile.js'
import Observer from './Observer'
class Mvvmy{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            // 数据劫持 把对象所有数据改成get和set
            new Observer(this.$data,this);
            // 编译
            new Compile(this.$el, this);
        }
    }
}
export default Mvvmy;
