/**
 * 测试例子🌰
 */
import { observable, action } from 'mobx';

class test {

    @observable att1 = "属性1"

    @action
    change(val) {
        this.att1 = val;
    }
}

export default new test();