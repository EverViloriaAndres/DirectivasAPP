import { TestBed } from '@angular/core/testing';
import { Componente1 } from './Componente1.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [Componente1],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Componente1);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DirectivasAPP'`, () => {
    const fixture = TestBed.createComponent(Componente1);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DirectivasAPP');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Componente1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'DirectivasAPP app is running!'
    );
  });
});
