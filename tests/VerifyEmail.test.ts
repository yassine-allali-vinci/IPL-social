import { VerifyEmail } from "../VerifyEmail";

describe('VerifyEmail', () => {

    describe('Verify valid email', () => {
        it("should reject email with spaces", () => {
           let verify = new VerifyEmail();

           let actual = verify.verifyValidEmail("exam @email.com");

            expect(actual).toBe("Invalid email: contains spaces");
        });

        it("should reject email without @", () => {
            let verify = new VerifyEmail;

            let actual = verify.verifyValidEmail("examemail.com");

            expect(actual).toBe("Invalid email: missing @");
        });
    })
})
