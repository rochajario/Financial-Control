import { Request } from 'express'
import { getSanitizedEntry } from '../src/entity/Entry';

describe('Entry Validation Test Suite', () => {
    describe('Validate Field Rules', () => {
        it("Shouldn't allow Entry with empty description", () => {
            const request = <Request>
                {
                    body: {
                        userId: 0,
                        description: '',
                        value: 0
                    }
                };

            try {
                getSanitizedEntry(request)
            }
            catch (exception) {
                const errCount = exception.errors.filter(e => e.Message.includes("Description cannot be empty")).length;
                expect(errCount).toBe(1);
            }
        });
        it("Shouldn't allow empty or null for 'value' parameter", () => {
            const request = <Request>
                {
                    body: {
                        userId: 0,
                        description: 'Lorem Ipsum',
                        value: undefined
                    }
                };

            try {
                getSanitizedEntry(request)
            }
            catch (exception) {
                const errCount = exception.errors.filter(e => e.Message.includes("Value cannot be null")).length;
                expect(errCount).toBe(1);
            }
        });

    });

    describe('Should validate Entry', () => {
        it("Validate Entry With All Parameters Set", () => {
            const request = <Request>
                {
                    body: {
                        userId: 0,
                        description: 'Lorem Ipsum',
                        value: 10
                    }
                };

            const result = getSanitizedEntry(request);
            expect(result).toBeTruthy();
        });
    });
});