import { Request } from "express";
import { getSanitizedSummaryParams } from "../src/entity/Summary";

describe('Summary Sanitizer Test Suite', () => {
    const mockRequest = <Request>{
        params: {
            year: "1000",
            month: "10",
            information: true,
            otherInformation: false
        },
        body:{
            userId: 0
        }
    };
    describe('Validates Request Transformation', () => {
        it('Should remove invalid parameters', () => {
            const result = JSON.stringify(getSanitizedSummaryParams(mockRequest));
            expect(result.includes('information')).toBeFalsy()
            expect(result.includes('otherInformation')).toBeFalsy()
        });
    });
});