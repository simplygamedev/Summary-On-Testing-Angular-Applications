import { Injectable } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

const FEED_UPDATES = [
  `Time my favorite, for burritos and beers #BurritoLyfe`,
  `Had my first Soylent today. I\'ve reached peak SF.`,
  `Is it raining for anyone else, or is it just me?`,
  `lmao cats are so funny!`,
  `When I say mizzenmast, what I really mean is larders`,
  `A rolling stone is your oyster`,
  `Taco Bell? More like Taco Cartel, amirite?`,
  `"Um" - 1st horse that got ridden`,
  `The guy at Chipotle couldn\'t close my burrito. He looked up at me. I looked at him. I whispered, "It\'s not your fault." He wept in my
   arms.`
];

/**
 * A fake service that returns an observable of a contact's social media updates.
 */
@Injectable()
export class ContactFeedService {
  constructor() { }

  public getFeed() {
    return interval(500)
      .pipe(map(x => Math.random() * 2 + 2))
      .pipe(concatMap(x => of(x).pipe(delay(x * 1000))))
      .pipe(map(x => FEED_UPDATES[Math.floor(Math.random() * FEED_UPDATES.length)]));
  }
}
