/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PersonalInformationTemplate } from './PersonalInformationTemplate';
import type { ProfileTemplate } from './ProfileTemplate';
import type { QuestionTemplate } from './QuestionTemplate';

export type ApplicationFormAttributes = {
    coverImage?: string;
    personalInformation: {
        firstName: PersonalInformationTemplate;
        lastName: PersonalInformationTemplate;
        emailId: PersonalInformationTemplate;
        phoneNumber: PersonalInformationTemplate;
        nationality: PersonalInformationTemplate;
        currentResidence: PersonalInformationTemplate;
        idNumber: PersonalInformationTemplate;
        dateOfBirth: PersonalInformationTemplate;
        gender: PersonalInformationTemplate;
        personalQuestions?: Array<QuestionTemplate>;
    };
    profile?: {
        education: ProfileTemplate;
        experience: ProfileTemplate;
        resume: ProfileTemplate;
        profileQuestions?: Array<QuestionTemplate>;
    };
    customisedQuestions?: Array<QuestionTemplate>;
};

