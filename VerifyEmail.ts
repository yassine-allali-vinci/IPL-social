export class VerifyEmail {

verifyValidEmail(email: string): string {
    if(email.includes(" ")) return "Invalid email: contains spaces";

    return "Correct email";

}


}