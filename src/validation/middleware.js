import { toast } from "react-toastify";
const LengthLimit = (str) => {
    if( !(1 <= str && str <= 30) ) {
        toast.error("Input is string between 1 to 30 charactors") ;
        return false ;
    }
    return true ;
}

const PasswordLimit = (password) => {
    if( !(7 <= password && password <= 30) ) {
        toast.error("Password is string between 1 to 30 charactors");
        return false ;
    }
    return true ;
}

export const SignUpValidation = async (form) => {
    const user = await LengthLimit(form.username) ;
    const emails = await LengthLimit(form.email) ;
    const newPass = await PasswordLimit(form.newPassword) ;
    const confirm = await PasswordLimit(form.confirmPassword) ;

    if( user && emails && newPass && confirm ) return true ;
    else return false ;
}