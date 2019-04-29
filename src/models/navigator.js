/**
 * 菜单控制对象
 */
import { observable, action } from 'mobx';

class Navigator {

    @observable navigator = null

    @action.bound
    setNav(o) {
        this.navigator = o;
    }
}

export default new Navigator();