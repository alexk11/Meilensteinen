import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class NavigationService {


    constructor(private router: Router) {
    }

    navigateBack(activatedRoute: ActivatedRoute) {
        const searchType = activatedRoute.snapshot.paramMap.get('searchType');
        const searchTerm = activatedRoute.snapshot.paramMap.get('searchTerm');
        this.router.navigate(['/ordersearch', {searchType, searchTerm}]);
    }


}
