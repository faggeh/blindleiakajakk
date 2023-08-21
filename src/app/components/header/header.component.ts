import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  public isAuthenticated: boolean = false;
  public years: Array<number> = [];
  public selectedYear: number = 2023;

  private destroyed$ = new Subject<void>();


  constructor(public authService: AuthService)
    {
      this.authService.userData$.pipe(takeUntil(this.destroyed$)).subscribe(user => {
        console.log('User authenticated: ' + user?.email)
      });
  }

  ngOnInit() {
    this.years = [2022, 2023];
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public compareYears(year1: number, year2: number): boolean{
    if(year1 && year2){
      return year1 === year2;
    }
    return false;
  }

  get currentYears$(): Observable<Array<number>> {
    return of(this.years);
  }

  public onSelectedYear(year: number): void {
    this.selectedYear = year;
  }
}
