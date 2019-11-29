function User(id){
    this.id = id;
}

function generateId(){
    return Math.random() * 9999;
}

/**
 * In this example we create an admin user by passing an existint
 * But if not user is introduced, the function by defaults call te user
 * constructor, with function generateId()
 * @param {User} user 
 */
function createAdminUser(user = new User(generateId())){
    user.admin = true;

    return user;
}

const userPromoted = new User(generateId());
createAdminUser(userPromoted);

const newAdminUser = createAdminUser();

console.log(userPromoted);
console.log(newAdminUser);