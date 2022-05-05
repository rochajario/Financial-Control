import { Request } from "express";
import { getSanitizedUser } from "../src/entity/User";
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
            const result = JSON.stringify(getSanitizedUser(mockRequest));
            expect(result.includes('information')).toBeFalsy()
            expect(result.includes('otherInformation')).toBeFalsy()
        })

        it('Should transform password with bcrypt',()=>{
            const result = getSanitizedUser(mockRequest);
            expect(result.password == mockRequest.password).toBeFalsy();
        })
    })
})