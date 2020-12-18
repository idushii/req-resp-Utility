import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RequestData} from './request-data';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {ResData} from './res_data';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  private dbPath = '/lists1';
  tutorialsRef: AngularFireList<RequestData> = null;

  items1: ResData[] = [];
  items1$: BehaviorSubject<ResData[]> = new BehaviorSubject([]);

  activeItem: ResData = null;
  activeItem$: BehaviorSubject<ResData | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);

    this.items1$.subscribe(items => this.items1 = items);
    this.activeItem$.subscribe(activeitems => this.activeItem = activeitems);
  }

  getAll1(): Observable<ResData[]> {
    return this.tutorialsRef.snapshotChanges()
      .pipe(
        map((items) => items.map(item => item.payload.toJSON() as ResData)),
        map((items) => {
          const res: ResData[] = [];

          [...items].reverse().forEach(item => {
            const index = res.findIndex((val) => val.id === item.id);
            if (index === -1) {
              res.push(item);
            } else {
              res[index] = {...items[index], ...item};
            }
          });
          return res;
        }),
      );
  }

  clearAll() {
    this.tutorialsRef.remove();
  }

  getItem() {
    //this.activeItem = this.items1.find(item => item.id === id);
    return this.activeItem;
  }
}
