import { AbstractFormGroupDirective } from '@angular/forms';

export interface ReviewCreate{
    ReviewID?: number;
    VenueID: number;
    ApplicationUserID?: string;
    VenueRating: number;
    Comments: String;
}