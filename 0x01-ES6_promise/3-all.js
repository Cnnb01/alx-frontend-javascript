import { uploadPhoto } from "./utils";
import { createUser } from "./utils";

function handleProfileSignup(){
    const p1 = uploadPhoto().then((response) => {
        console.log(response.body);
        return response;
    });

    const p2 = createUser().then((response) => {
            console.log(response.firstName, response.lastName);
            return response;
        });

Promise.all([p1,p2]).then(values=>{
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
}).catch(()=>{
    console.log("Signup system offline");
});
}
export default handleProfileSignup;
// uploadPhoto returns a response with the format

// {
//   status: 200,
//   body: 'photo-profile-1',
// }
