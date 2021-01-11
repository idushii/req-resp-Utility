import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {DeviceInfo, ILogger, ResData} from './res_data';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  private dbLoggerDeviceInfoLink = '/logger/info';
  private dbLoggerLink = '/logger/log/';
  loggerDeviceInfoRef: AngularFireList<ILogger> = null;
  loggerLogRef: AngularFireList<ILogger> = null;

  items1: ResData[] = [];
  items1$: BehaviorSubject<ResData[]> = new BehaviorSubject([]);

  activeItem: ResData = null;
  activeItem$: BehaviorSubject<ResData | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.loggerDeviceInfoRef = db.list(this.dbLoggerDeviceInfoLink);

    this.items1$.subscribe(items => this.items1 = items);
    this.activeItem$.subscribe(activeitems => this.activeItem = activeitems);
  }

  devices$: BehaviorSubject<DeviceInfo[]> = new BehaviorSubject([]);
  activeDevice$: BehaviorSubject<DeviceInfo | null> = new BehaviorSubject<DeviceInfo | null>(null);

  getDevices(): void {
    this.loggerDeviceInfoRef.snapshotChanges()
      .pipe(
        map((items) => items.map((item) => item.payload.toJSON()) as DeviceInfo[]),
      ).subscribe(items => {
      this.devices$.next(items);
    });
  }

  selectDevice(uuid: string): void {
    this.devices$.subscribe(items => {
      this.activeDevice$.next(items.find(item => item.identifier === uuid));
    });

    this.dbLoggerLink = `/logger/log/${uuid}/log/`;
    this.loggerLogRef = this.db.list(this.dbLoggerLink);
    this.loggerLogRef.snapshotChanges()
      .pipe(
        map((items) => items.map((item) => item.payload.toJSON())),
        map((items: ResData[]) => {

          const res: { [x: number]: ResData } = {};

          [...items].reverse().forEach(item => {
            if (res[item.id] === undefined || item.status !== 'pending') {
              res[item.id] = item;
            }
          });

          // tslint:disable-next-line:forin
          for (const key in res) {
            const item = res[key];
            // @ts-ignore
            res[key].duration = (((new Date(item.responseAt)).getTime() - (new Date(item.createdAt)).getTime()) / 1000).toFixed(1);
            if (isNaN(res[key].duration)) {
              res[key].duration = null;
            }
          }

          return Object.values(res);
        }),
      )
      .subscribe(items => {
        this.items1$.next(items);
      });
  }

  async clearAll(): Promise<void> {
    await this.loggerLogRef.remove();
  }

  getItem(id: number): ResData {
    this.activeItem = this.items1.find(item => item.id === id);
    return this.activeItem;
  }
}
