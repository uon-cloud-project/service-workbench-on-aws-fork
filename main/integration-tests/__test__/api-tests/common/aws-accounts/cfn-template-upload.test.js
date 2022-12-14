/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

const { runSetup } = require('../../../../support/setup');
const errorCode = require('../../../../support/utils/error-code');

describe('AWS Account Permissions scenarios', () => {
  let setup;
  let adminSession;

  beforeAll(async () => {
    setup = await runSetup();
    adminSession = await setup.defaultAdminSession();
  });

  afterAll(async () => {
    await setup.cleanup();
  });

  describe('Template Check and Upload for AWS Account Check', () => {
    it('should fail if user is inactive', async () => {
      const admin2Session = await setup.createAdminSession();
      await adminSession.resources.users.deactivateUser(admin2Session.user);

      await expect(
        admin2Session.resources.awsAccounts.getAndUploadTemplateForAccount(setup.defaults.awsAccount.id),
      ).rejects.toMatchObject({
        code: errorCode.http.code.unauthorized,
      });
    });

    it('should fail if non-admin attempts to get CFN template for AWS Account', async () => {
      const researcherSession = await setup.createResearcherSession();
      await expect(
        researcherSession.resources.awsAccounts.getAndUploadTemplateForAccount(setup.defaults.awsAccount.id),
      ).rejects.toMatchObject({
        code: errorCode.http.code.forbidden,
      });
    });

    it('should fail for anonymous user', async () => {
      const anonymousSession = await setup.createAnonymousSession();
      await expect(
        anonymousSession.resources.awsAccounts.getAndUploadTemplateForAccount(setup.defaults.awsAccount.id),
      ).rejects.toMatchObject({
        code: errorCode.http.code.badImplementation,
      });
    });

    it('should succeed for active admin', async () => {
      const admin2Session = await setup.createAdminSession();

      await expect(
        admin2Session.resources.awsAccounts.getAndUploadTemplateForAccount(setup.defaults.awsAccount.id),
      ).resolves.toHaveProperty('cfnConsoleUrl');
    });
  });
});
