import { Validator } from "ts.validator.fluent/dist"
import { userRules } from "../src/domain/validators/ValidationRules"
import { BaseUser } from "../src/entity/User"

describe('User Validation Test Suite', () => {
    describe('Validate Email Rules', () => {
        it('Should not allow invalid email', () => {
            const user = <BaseUser>
                {
                    email: 'abcdef',
                    username: 'User',
                    password: 'Pass'
                }

            const result = new Validator(user).Validate(userRules);
            const errCount = result.Errors.filter(e => e.Message.includes("Email should be valid")).length;
            expect(errCount).toBe(1);
        });
        it('Should allow valid email', () => {
            const user = <BaseUser>
                {
                    email: 'sometest@gmail.com',
                    username: 'User',
                    password: 'Pass'
                }

            const result = new Validator(user).Validate(userRules);
            expect(result.IsValid).toBeTruthy();
        })
    })
    describe('Validate Username Rules', () => {
        it('Should not allow username with numeric characters', () => {
            const user = <BaseUser>
                {
                    email: 'sometest@gmail.com',
                    username: '123',
                    password: 'Pass'
                }

            const result = new Validator(user).Validate(userRules);
            const errCount = result.Errors.filter(e => e.Message.includes("Username must contain only letters")).length;
            expect(errCount).toBe(1);
        }),
        it('Should allow username with only alpha characters', () => {
            const user = <BaseUser>
                {
                    email: 'sometest@gmail.com',
                    username: 'AbCdE',
                    password: 'Pass'
                }

            const result = new Validator(user).Validate(userRules);
            expect(result.IsValid).toBeTruthy();
        })
    })
})