/**
 * 菜单控制对象
 */
import { observable, action } from 'mobx';

class Menu {

    @observable collapsed = false

    @observable initCollapsed = false

    @action.bound
    trigger() {
        this.collapsed = !this.collapsed;
    }
}

export default new Menu();