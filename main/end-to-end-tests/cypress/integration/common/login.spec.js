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
describe('Login', () => {
  it('should login as researcher successfully', () => {
    cy.login('researcher');
  });

  it('should login as an admin successfully', () => {
    cy.login('admin');
  });

  it('should login as a guest successfully', () => {
    cy.login('guest');
  });

  it('should login as an internal-guest successfully', () => {
    cy.login('internalGuest');
  });

});
