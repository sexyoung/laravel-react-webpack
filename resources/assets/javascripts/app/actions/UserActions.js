import alt from "../alt";

class UserActions {
	constructor() {
	    this.generateActions(
	      "fetched",
	      "update",
	      "loading",
	      "postUser",
	      "fetchFailed",
	      "create"
	    );
	}
}

export default alt.createActions(UserActions);