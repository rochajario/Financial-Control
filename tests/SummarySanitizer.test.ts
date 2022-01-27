import { Request } from "express";
import {SummarySanitizer} from "../src/domain/sanitizers/SummarySanitizer"
import { summaryRules } from "../src/domain/validators/ValidationRules";

const summarySanitizer = (request: Request) => new SummarySanitizer(summaryRules).transformRequest(request);
describe('Summary Sanitizer Test Suite', () => {
    const mockRequest = <Request>{
        params: {
            year: "1000",
            month: "10",
            information: true,
            otherInformation: false
        }
    };
    describe('Validates Request Transformation', () => {
        it('Should remove invalid parameters', () => {
            const result = JSON.stringify(summarySanitizer(mockRequest));
            expect(result.includes('information')).toBeFalsy()
            expect(result.includes('otherInformation')).toBeFalsy()
        });
    });
});