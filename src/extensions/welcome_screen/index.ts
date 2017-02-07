import { IExtensionContext } from '../../types/IExtensionContext';

import Starter from './Starter';

function init(context: IExtensionContext): boolean {
  context.registerDashlet('Starter', 2, 0, Starter);

  return true;
}

export default init;
