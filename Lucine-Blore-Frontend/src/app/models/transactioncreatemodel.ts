import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

export interface TransactionCreate{
    ApplicationUserID?: string;
    VenueID: number;
    VenueName: string;
    DaysRenting: number;
    TransactionCost: number;
}