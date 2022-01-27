import { entryRules } from "../src/domain/validators/ValidationRules";
import { Validator } from 'ts.validator.fluent/dist';
import { BaseEntry } from "../src/entity/BaseEntry"

describe('Entry Validation Test Suite',()=>{
    describe('Validate Field Rules',()=>{
        it("Shouldn't allow Entry with empty description", ()=>{
            const entry = <BaseEntry> 
            {
                description: '',
                value: 0
            };

            const result = new Validator(entry).Validate(entryRules);
            const errCount = result.Errors.filter(e => e.Message.includes("Description cannot be empty")).length;
            expect(errCount).toBe(1);
        });
        it("Shouldn't allow empty or null for 'value' parameter", ()=>{
            const entry = <BaseEntry> 
            {
                description: 'Lorem Ipsum',
            };

            const result = new Validator(entry).Validate(entryRules);
            const errCount = result.Errors.filter(e => e.Message.includes("Value cannot be null")).length;
            expect(errCount).toBe(1);
        });

    });

    describe('Should validate Entry', ()=>{
        it("Validate Entry With All Parameters Set", ()=>{
            const entry = <BaseEntry> 
            {
                description: 'Lorem Ipsum',
                value: 10
            };

            const result = new Validator(entry).Validate(entryRules);
            expect(result.IsValid).toBeTruthy();
        });
    });
});