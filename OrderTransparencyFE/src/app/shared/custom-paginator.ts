import {MatPaginatorIntl} from '@angular/material';

export class CustomPaginator extends MatPaginatorIntl {
    constructor() {
        super();
        this.itemsPerPageLabel = 'Einträge pro Seite';
        this.nextPageLabel = 'Nächste Seite';
        this.previousPageLabel = 'Vorherige Seite';
        this.firstPageLabel = 'Erste Seite';
        this.lastPageLabel = 'Letzte Seite';
    }

    getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return '0 von ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' von ' + length;
    };
}
