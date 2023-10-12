/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuestionTemplate = {
    id?: string;
    type: QuestionTemplate.type;
    question: string;
    choices?: Array<string>;
    maxChoice?: number;
    disqualify?: boolean;
    other?: boolean;
};

export namespace QuestionTemplate {

    export enum type {
        PARAGRAPH = 'Paragraph',
        SHORT_ANSWER = 'ShortAnswer',
        YES_NO = 'YesNo',
        DROPDOWN = 'Dropdown',
        MULTIPLE_CHOICE = 'MultipleChoice',
        DATE = 'Date',
        NUMBER = 'Number',
        FILE_UPLOAD = 'FileUpload',
    }


}

