import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

export interface TransactionCreate{
    TransactionID?: number;
    ApplicationUserID?: string;
    UserID: number;
    VenueID: number;
    VenueCost: number;
}