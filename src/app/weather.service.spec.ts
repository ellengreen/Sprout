import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { get } from 'http';
import { WeatherService } from './weather.service';

let service = WeatherService;

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it("check Service is running", () => {
    expect(WeatherService);
  });

});
