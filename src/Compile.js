import CompileUtil from './CompileUtil';
export default class Compile{
    constructor(el, vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el);//
        this.vm = vm;//实例
        if(this.el){
            // 元素存在  才会编译
            // 1.先把真实dom移入到内存 fragment
            let fragment = this.node2fragment(this.el);
            // 2.编译
            this.compile(fragment);
            // 3.插入
            this.el.appendChild(fragment);
        }
    }
    // 编译
    compile(fragment){
        // 需要递归算法
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach((node) => {
            if(this.isElementNode(node)){
                // 元素节点
                // 编译元素
                this.complieElement(node);
                //递归深入检查
                this.compile(node);
            }else{
                // 文本节点
                // 编译文本{{}}
                this.complieText(node);
            }
        })
        
        
    }
    // 编译元素 v-model v-text
    complieElement(node){
        let attrs = node.attributes;//娶到节点得属性
        Array.from(attrs).forEach((attr) => {
            // 判断属性名字是不是包含v-
            let attrName = attr.name;
            if(this.isDirective(attrName)){
                //取到对应得值放到节点中
                let expr = attr.value;
                // v-model v-text v-html
                let type = attrName.slice(2);//去掉v-
                // let [,type] = attrname.split('-');//结构拿到v-后面东西
                CompileUtil[type](node,this.vm,expr);
            }
        })
    }
    // 编译文本{{}}
    complieText(node){
        let expr = node.textContent;//取文本中得内容
        // 正则
        let reg = /\{\{([^}]+)\}\}/g;
        if(reg.test(expr)){
            console.log(expr)
            //node this.vm.$data  expr
            CompileUtil['text'](node,this.vm,expr);
        }
        
    }
    // 是不是指令
    isDirective(name){
        return name.includes('v-');
    }
    isElementNode(node){
        return node.nodeType == 1;//1为元素节点
    }
    node2fragment(el){
        // 文档碎片
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = el.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
}


