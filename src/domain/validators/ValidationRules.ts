import { IValidator, ValidationResult } from 'ts.validator.fluent/dist';
import { BaseEntry } from '../../entity/BaseEntry';
import { BaseSummary } from '../../entity/BaseSummary';
import { BaseUser } from '../../entity/User';

export const entryRules = (validator: IValidator<BaseEntry>): ValidationResult => {
    return validator
        .NotEmpty(e => e.description, "Description cannot be empty")
        .NotNull(e => e.description, "Description cannot be null")
        .NotNull(e => e.value, "Value cannot be null")
        .ToResult();
}

export const summaryRules = (validator: IValidator<BaseSummary>): ValidationResult => {
    return validator
        .Length(s => s.year, 4, 4, "Year should have 4 digits (yyyy)")
        .Matches(s => s.year, '^[12][0-9]{3}$', "Year must be in between 1000-2999 range")
        .Length(s => s.month, 2, 2, "Month must have 2 digits (mm)")
        .Matches(s => s.month, '^(0[1-9]|1[012])$', "Month must be in between 01-12 range")
        .ToResult();
}

export const userRules = (validator: IValidator<BaseUser>): ValidationResult => {
    return validator
        .Email(u => u.email, "Email should be valid")
        .IsAlpha(u => u.username, "Username must contain only letters")
        .ToResult();
}

