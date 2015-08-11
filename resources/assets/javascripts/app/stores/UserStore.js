import alt from "../alt";
import UserActions from "../actions/UserActions";

import UserSource from "../sources/UserSource";

class UserStore {
	constructor() {
		this.bindActions(UserActions);
		this.users = [];
		this.registerAsync(UserSource);
	}

	onFetched(users){
		this.users = users;
	}

	onLoading(){
		this.users = [];
	}

	onCreate(newName){
		console.warn(newName);
	}
}

export default alt.createStore(UserStore, "UserStore");
