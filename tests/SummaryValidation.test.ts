import { Validator } from "ts.validator.fluent/dist";
import { summaryRules } from "../src/domain/validators/ValidationRules";

describe('Summary Validation Test Suite', () => {

    it('Validate Summary Params', () => {
        const req =
        {
            year: '1993',
            month: '05'
        }
        const result = new Validator(req).Validate(summaryRules);
        expect(result.IsValid).toBeTruthy()
    });
    
    describe('Validates Month Param', () => {
        it('Should not allow month that not match regex', () => {
            const invalidValues = ['0', 'asd', '123'];
            const req =
            {
                year: '2000',
                month: ''
            }

            invalidValues.forEach(value => {
                req.month = value;

                const result = new Validator(req).Validate(summaryRules);
                const errCount = result.Errors.filter(e => e.Message.includes("Month must be in between 01-12 range")).length;
                expect(errCount).toBe(1);
            })
        });

        it('Should not allow month that doesnt have 2 digits', () => {
            const invalidValues = ['0', '123'];
            const req =
            {
                year: '2000',
                month: ''
            }

            invalidValues.forEach(value => {
                req.month = value;

                const result = new Validator(req).Validate(summaryRules);
                const errCount = result.Errors.filter(e => e.Message.includes("Month must have 2 digits (mm)")).length;
                expect(errCount).toBe(1);
            })
        })

    })

    describe('Validates Year Param', () => {
        it("Should not allow year that not match regex", () => {
            const invalidValues = ['999', '3000', 'abc'];
            const req =
            {
                month: '05',
                year: ''
            }

            invalidValues.forEach(value => {
                req.year = value;

                const result = new Validator(req).Validate(summaryRules);
                const errCount = result.Errors.filter(e => e.Message.includes("Year must be in between 1000-2999 range")).length;
                expect(errCount).toBe(1);
            })
        })

        it('Should not allow year that doesnt have 4 digits', () => {
            const invalidValues = ['12345', '123'];
            const req =
            {
                month: '05',
                year: ''
            }

            invalidValues.forEach(value => {
                req.year = value;

                const result = new Validator(req).Validate(summaryRules);
                const errCount = result.Errors.filter(e => e.Message.includes("Year should have 4 digits (yyyy)")).length;
                expect(errCount).toBe(1);
            })
        })
    })
})