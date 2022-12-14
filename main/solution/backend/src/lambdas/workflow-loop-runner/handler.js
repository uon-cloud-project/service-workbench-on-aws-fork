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

const { registerServices: registerServicesUtil } = require('@amzn/base-services/lib/utils/services-registration-util');
const handlerFactory = require('@amzn/base-workflow-core/lib/runner/handler');

const pluginRegistry = require('./plugins/plugin-registry');

/**
 * Registers services by calling each service registration plugin in order.
 *
 * @param container An instance of ServicesContainer
 * @returns {Promise<void>}
 */
async function registerServices(container) {
  return registerServicesUtil(container, pluginRegistry);
}

const handler = handlerFactory({ registerServices });

module.exports.handler = handler;
