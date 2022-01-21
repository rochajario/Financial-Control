import { IValidator, ValidationResult } from 'ts.validator.fluent/dist';
import { BaseEntry } from '../../entity/BaseEntry';

export const validateEntryRules = (validator: IValidator<BaseEntry>) : ValidationResult => {
    return validator
        .NotEmpty(entry => entry.description, "Description cannot be empty")
        .NotNull(e => e.description, "Description cannot be null")
        .NotNull(e => e.value, "Value cannot be null")
        .ToResult();
}

