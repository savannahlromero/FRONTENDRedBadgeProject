import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

export interface VenueCreate{
    VenueID: number;
    VenueName: string;
    VenueDescription: string;
    VenueLocation: string;
    VenueCapacity: number;
    VenueCost: number;
}