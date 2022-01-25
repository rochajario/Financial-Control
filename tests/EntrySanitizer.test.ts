import { Request } from 'express'
import { entrySanitizer } from '../src/domain/sanitizers/EntrySanitizer';

const mockRequest = <Request>{
    body: {
        description: 'Some test description',
        value: 10,
        information: true,
        otherInformation: false
    }
};

describe('Entry Sanitizer Test Suite', () => {
    describe('Validates Request Transformation', () => {
        it('Should remove invalid parameters', () => {
            const result = JSON.stringify(entrySanitizer(mockRequest));
            expect(result.includes('information')).toBeFalsy()
            expect(result.includes('otherInformation')).toBeFalsy()
        });
        describe('Validates Value detection and transformation', ()=>{
            const editedMock = mockRequest
            it('Should classify value lesser than 0 as Payment', ()=>{
                editedMock.body.value = -10;
                const res = entrySanitizer(mockRequest);

                expect(res.type).toBe('Payment')
            });
            it('Should classify value equals to 0 as Receiving', ()=>{
                editedMock.body.value = 0;
                const res = entrySanitizer(mockRequest);

                expect(res.type).toBe('Receiving')
            });
            it('Should classify factioned 0 value as Receiving', ()=>{
                editedMock.body.value = 0.10;
                const res = entrySanitizer(mockRequest);

                expect(res.type).toBe('Receiving')
            });
            it('Should classify value greater than 0 as Receiving', ()=>{
                editedMock.body.value = 10;
                const res = entrySanitizer(mockRequest);

                expect(res.type).toBe('Receiving')
            });
        })
    })
})