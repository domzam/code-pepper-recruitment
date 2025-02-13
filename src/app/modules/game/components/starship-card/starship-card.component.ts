import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StarshipDetails } from '../../models/starships/starship-details.model';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipCardComponent {

  @Input() isLoading: boolean | null = false;
  @Input() starship: StarshipDetails | null = null;
  @Input() score: number | null = 0;
  @Input() isWinner: boolean = false;
  @Input() isLoser: boolean = false;
  @Input() computerLayout: boolean = false;
  @Input() scoreLimit: number | null = 5;

}
