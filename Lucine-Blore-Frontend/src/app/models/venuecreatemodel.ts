import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

export interface VenueCreate{
    VenueName: string;
    VenueDescription: string;
    VenueLocation: string;
    VenueCapacity: number;
    VenueCost: number;
}