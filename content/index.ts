export type * from './schemas';

import type { FirmContent } from './schemas';
import { demoFirm } from './demo-firm';

/**
 * The firm content currently rendered by the site.
 * Repoint this reference to your own `FirmContent` module to rebrand the site.
 */
export const site: FirmContent = demoFirm;
