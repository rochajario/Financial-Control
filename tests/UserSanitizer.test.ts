import { Request } from "express";
import { UserSanitizer } from "../src/domain/sanitizers/UserSanitizer";
import { userRules } from "../src/domain/validators/ValidationRules";

const userSanitizer = (request:Request) => new UserSanitizer(userRules).transformRequest(request);
describe('User Sanitizer Test Suite', () => {
    const mockRequest = <Request>{
        body: {
            email: 'test@google.com',
            username: 'string',
            password: 'string',
            information: 'string',
            otherInformation: 'string'
        }
    }

    describe('Validates User Transformation', () => {
        it('Should remove invalid parameters', ()=>{
            const result = JSON.stringify(userSanitizer(mockRequest));
            expect(result.includes('information')).toBeFalsy()
            expect(result.includes('otherInformation')).toBeFalsy()
        })

        it('Should transform password with bcrypt',()=>{
            const result = userSanitizer(mockRequest);
            expect(result.password == mockRequest.password).toBeFalsy();
        })
    })
})