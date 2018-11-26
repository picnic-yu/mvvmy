import Compile from './Compile.js'
class Mvvmy{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            new Compile(this.$el, this);
        }
    }
}
export default Mvvmy;
