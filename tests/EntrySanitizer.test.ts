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

        describe('Validates Category alocation', ()=>{
            describe("Should set 'Income' to Receiving type entries",()=>{
                it("In case of null or undefined category",()=>{
                    const req = <Request> {
                        body: {
                            description: 'Lorem Ipsum',
                            value: 5000
                        }
                    }
    
                    const res = entrySanitizer(req);
                    expect(res.category).toBe('Earnings')
                });
                it("In case of category filled with other any category",()=>{
                    const req = <Request> {
                        body: {
                            description: 'Lorem Ipsum',
                            value: 5000,
                            category: 'Other'
                        }
                    }
    
                    const res = entrySanitizer(req);
                    expect(res.category).toBe('Earnings')
                })
            })

            describe("Should set correct category to Payment type entries",()=>{
                describe("Should set 'Other' category",()=>{
                    it('To not entries with not specified values',()=>{
                        const req = mockRequest;
                        req.body.value = -10;

                        const res = entrySanitizer(req);
                        expect(res.category).toBe('Other');
                    })
                    it('To invalid category names',()=>{
                        const req = mockRequest;
                        req.body.value = -10;
                        req.body.category = "Lorem Ipsum";

                        const res = entrySanitizer(req);
                        expect(res.category).toBe('Other');
                    })
                })

                describe("Should set a Valid category",()=>{
                    it('For cases where is passed a valid category as parameter', ()=>{
                        const validCategories = ['Food', 'Health', 'Home', 'Transport', 'Education', 'Leisure', 'Unforseen'];
                        
                        validCategories.forEach( category => {
                            const req = mockRequest;
                            req.body.value = -10;
                            req.body.category = category;

                            const res = entrySanitizer(req);
                            expect(res.category).toBe(category);
                        })
                    })
                })
            })
            
        })

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