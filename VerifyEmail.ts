export class VerifyEmail {

verifyValidEmail(email: string): string {
    if(email.includes(" ")) return "Invalid email: contains spaces";
    if(!email.includes("@")) return "Invalid email: missing @";

    return "Correct email";

}


}