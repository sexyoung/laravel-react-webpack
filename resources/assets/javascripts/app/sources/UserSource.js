import $ from "jquery";
import UserActions from "../actions/UserActions";

var users = [
  {id: 1, name: "Business"},
  {id: 2, name: "Financial"},
  {id: 3, name: "Family/Personal"},
  {id: 4, name: "Real Estate"},
  {id: 5, name: "Will and Estate Planning"},
  {id: 0, name: "others"}
];

export default  {
	fetchUsers() {
		return {
			remote() {
				return new Promise((resolve, reject) => {
					setTimeout(()=> {
						if(true){
							resolve(users);
						}
						else
							reject("broken errors.");
					}, 500);
				})
			},
			success: UserActions.fetched,
			error: UserActions.fetchFailed,
			loading: UserActions.loading
		}
	}
}