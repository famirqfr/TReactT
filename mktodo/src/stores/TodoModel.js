import {observable, action} from 'mobx'

export default class TodoModel {
    Store
    Id
    @observable Title
    @observable Completed

    constructor(Store, Incremental, Title, Completed){
        this.Id = Incremental
        this.Title = Title
        this.Completed = Completed
        this.Store = Store
    }
    @action
    toggle(){
        this.Completed = !this.Completed
    }
}
