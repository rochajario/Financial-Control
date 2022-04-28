import { Request } from 'express'
import { getSanitizedSummaryParams } from "../src/entity/Summary";

describe('Summary Validation Test Suite', () => {

    it('Validate Summary Params', () => {
        const req = <Request>
        {
            params: {
                year: '1993',
                month: '05'
            },
            body: {
                userId: 0
            }
        }
        const result = getSanitizedSummaryParams(req);
        expect(result).toBeTruthy()
    });

    describe('Validates Month Param', () => {
        it('Should not allow month that not match regex', () => {
            const invalidValues = ['0', 'asd', '123'];
            const req = <Request>
            {
                params: {
                    year: '1993',
                    month: ''
                },
                body: {
                    userId: 0
                }
            }

            invalidValues.forEach(value => {
                req.params.month = value;
                try {
                    getSanitizedSummaryParams(req)
                }
                catch (exception) {
                    const errCount = exception.errors.filter(e => e.Message.includes("Month must be in between 01-12 range")).length;
                    expect(errCount).toBe(1);
                }
            })
        });

        it('Should not allow month that doesnt have 2 digits', () => {
            const invalidValues = ['0', '123'];
            const req = <Request>
            {
                params: {
                    year: '1993',
                    month: ''
                },
                body: {
                    userId: 0
                }
            }

            invalidValues.forEach(value => {
                req.params.month = value;
                try {
                    getSanitizedSummaryParams(req)
                }
                catch (exception) {
                    const errCount = exception.errors.filter(e => e.Message.includes("Month must have 2 digits (mm)")).length;
                    expect(errCount).toBe(1);
                }
            })
        })

    })

    describe('Validates Year Param', () => {
        it("Should not allow year that not match regex", () => {
            const invalidValues = ['999', '3000', 'abc'];
            const req = <Request>
            {
                params: {
                    year: '',
                    month: '12'
                },
                body: {
                    userId: 0
                }
            }

            invalidValues.forEach(value => {
                req.params.year = value;
                try {
                    getSanitizedSummaryParams(req)
                }
                catch (exception) {
                    const errCount = exception.errors.filter(e => e.Message.includes("Year must be in between 1000-2999 range")).length;
                    expect(errCount).toBe(1);
                }
            })
        })

        it('Should not allow year that doesnt have 4 digits', () => {
            const invalidValues = ['12345', '123'];
            const req = <Request>
            {
                params: {
                    year: '',
                    month: '12'
                },
                body: {
                    userId: 0
                }
            }

            invalidValues.forEach(value => {
                req.params.year = value;
                try {
                    getSanitizedSummaryParams(req)
                }
                catch (exception) {
                    const errCount = exception.errors.filter(e => e.Message.includes("Year should have 4 digits (yyyy)")).length;
                    expect(errCount).toBe(1);
                }
            })
        })
    })
})