import User from '../models/User.js';

export const Register = async (req, res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        console.log('Successfully saved! ',user);
        res.json(user);
    }catch(err){
        console.log("User creation failed! ", err);
        res.json(err);
    }
}
