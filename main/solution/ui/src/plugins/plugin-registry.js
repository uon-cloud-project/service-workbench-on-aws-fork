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

import baseAppContextItemsPlugin from '@amzn/base-ui/dist/plugins/app-context-items-plugin';
import baseInitializationPlugin from '@amzn/base-ui/dist/plugins/initialization-plugin';
import baseAuthenticationPlugin from '@amzn/base-ui/dist/plugins/authentication-plugin';
import baseAppComponentPlugin from '@amzn/base-ui/dist/plugins/app-component-plugin';
import baseMenuItemsPlugin from '@amzn/base-ui/dist/plugins/menu-items-plugin';
import baseRoutesPlugin from '@amzn/base-ui/dist/plugins/routes-plugin';
import workflowAppContextItemsPlugin from '@amzn/base-workflow-ui/dist/plugins/app-context-items-plugin';
import workflowMenuItemsPlugin from '@amzn/base-workflow-ui/dist/plugins/menu-items-plugin';
import workflowRoutesPlugin from '@amzn/base-workflow-ui/dist/plugins/routes-plugin';
import raasAppContextItemsPlugin from '@amzn/base-raas-ui/dist/plugins/app-context-items-plugin';
import raasInitializationPlugin from '@amzn/base-raas-ui/dist/plugins/initialization-plugin';
import raasAppComponentPlugin from '@amzn/base-raas-ui/dist/plugins/app-component-plugin';
import raasMenuItemsPlugin from '@amzn/base-raas-ui/dist/plugins/menu-items-plugin';
import raasRoutesPlugin from '@amzn/base-raas-ui/dist/plugins/routes-plugin';
import raasEnvTypeMgmtPlugin from '@amzn/base-raas-ui/dist/plugins/env-type-mgmt-plugin';

import envMgmtMenuItemsPlugin from '@amzn/environment-type-mgmt-ui/dist/plugins/menu-items-plugin';
import envMgmtRoutesPlugin from '@amzn/environment-type-mgmt-ui/dist/plugins/routes-plugin';
import envMgmtAppContextItemsPlugin from '@amzn/environment-type-mgmt-ui/dist/plugins/app-context-items-plugin';

import keyPairAppContextItemsPlugin from '@amzn/key-pair-mgmt-ui/dist/plugins/app-context-items-plugin';
import keyPairMenuItemsPlugin from '@amzn/key-pair-mgmt-ui/dist/plugins/menu-items-plugin';
import keyPairRoutesPlugin from '@amzn/key-pair-mgmt-ui/dist/plugins/routes-plugin';

import appContextItemsPlugin from './app-context-items-plugin';
import initializationPlugin from './initialization-plugin';
import menuItemsPlugin from './menu-items-plugin';
import routesPlugin from './routes-plugin';

// baseAppContextItemsPlugin registers app context items (such as base MobX stores etc) provided by the base addon
// baseInitializationPlugin registers the base initialization logic provided by the base ui addon
// baseMenuItemsPlugin registers menu items provided by the base addon
// baseRoutesPlugin registers base routes provided by the base addon
const extensionPoints = {
  'app-context-items': [
    baseAppContextItemsPlugin,
    workflowAppContextItemsPlugin,
    envMgmtAppContextItemsPlugin,
    keyPairAppContextItemsPlugin,
    raasAppContextItemsPlugin,
    appContextItemsPlugin,
  ],
  'initialization': [baseInitializationPlugin, raasInitializationPlugin, initializationPlugin],
  'authentication': [baseAuthenticationPlugin],
  'app-component': [baseAppComponentPlugin, raasAppComponentPlugin],
  'menu-items': [
    baseMenuItemsPlugin,
    workflowMenuItemsPlugin,
    envMgmtMenuItemsPlugin,
    keyPairMenuItemsPlugin,
    raasMenuItemsPlugin,
    menuItemsPlugin,
  ],
  'routes': [
    baseRoutesPlugin,
    workflowRoutesPlugin,
    envMgmtRoutesPlugin,
    keyPairRoutesPlugin,
    raasRoutesPlugin,
    routesPlugin,
  ],
  'env-type-management': [raasEnvTypeMgmtPlugin],
};

function getPlugins(extensionPoint) {
  return extensionPoints[extensionPoint];
}

const registry = {
  getPlugins,
};

export default registry;
