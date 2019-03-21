import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

export interface ReviewCreate{
    ReviewID?: number;
    VenueID: number;
    VenueRating: number;
    Comments: string;
}