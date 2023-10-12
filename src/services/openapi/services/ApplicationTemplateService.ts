/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationFOrm } from '../models/ApplicationFOrm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApplicationTemplateService {

    /**
     * Retrieve application form
     * Get application-form.
     * @param programId
     * @param version
     * @returns ApplicationFOrm OK
     * @throws ApiError
     */
    public static getApplicationForm(
        programId: string,
        version: number,
    ): CancelablePromise<ApplicationFOrm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{version}/programs/{programId}/application-form',
            path: {
                'programId': programId,
                'version': version,
            },
        });
    }

    /**
     * Upsert application form
     * Update application-form.
     * @param programId
     * @param version
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateApplicationForm(
        programId: string,
        version: number,
        requestBody?: ApplicationFOrm,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/{version}/programs/{programId}/application-form',
            path: {
                'programId': programId,
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
