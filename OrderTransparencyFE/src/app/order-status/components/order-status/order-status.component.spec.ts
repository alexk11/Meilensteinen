import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusComponent} from './order-status.component';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderStatusModule} from '../../order-status.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderStatusComponent', () => {
    let component: OrderStatusComponent;
    let fixture: ComponentFixture<OrderStatusComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // tslint:disable-next-line:max-line-length
            imports: [MatTabsModule,
                MatInputModule,
                MatButtonModule,
                MatFormFieldModule,
                MatSelectModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                OrderStatusModule,
                RouterTestingModule],
            declarations: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
       expect(component).toBeTruthy();
     });
});
