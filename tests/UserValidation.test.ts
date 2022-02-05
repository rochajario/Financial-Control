import { Request } from 'express'
import { getSanitizedUser } from '../src/entity/User';

describe('User Validation Test Suite', () => {
    describe('Validate Email Rules', () => {
        it('Should not allow invalid email', () => {
            const request = <Request>
                {
                    body: {
                        email: 'abcdef',
                        username: 'User',
                        password: 'Pass'
                    }
                }
            try {
                getSanitizedUser(request);
            }
            catch (exception) {
                const errCount = exception.errors.filter(e => e.Message.includes("Email should be valid")).length;
                expect(errCount).toBe(1);
            }
        });
        it('Should allow valid email', () => {
            const request = <Request>
                {
                    body: {
                        email: 'test@test.com',
                        username: 'uSeRCamelCase',
                        password: 'Pass'
                    }
                }

            const result = getSanitizedUser(request);
            expect(result).toBeTruthy();
        })
    })
    describe('Validate Username Rules', () => {
        it('Should not allow username with numeric characters', () => {
            const request = <Request>
                {
                    body: {
                        email: 'abc23sdef',
                        username: 'User',
                        password: 'Pass'
                    }
                }
            try {
                getSanitizedUser(request);
            }
            catch (exception) {
                const errCount = (e => e.Message.includes("Username must contain only letters")).length;
                expect(errCount).toBe(1);
            }
        })
    })
})